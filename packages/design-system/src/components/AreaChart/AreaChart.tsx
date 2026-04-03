"use client";

import { useRef, useState, useCallback } from "react";
import styles from "./AreaChart.module.css";

/* ── Default colour palette (Figma area chart spec) ── */

const DEFAULT_COLORS = [
  "var(--blue-500)",   // #067DFD
  "var(--orange-500)", // #FFA726
  "var(--green-500)",  // #34C885
  "var(--red-500)",    // #FF5A1F
  "var(--yellow-500)", // #FFEE58
  "var(--gray-500)",   // #9E9E9E
];

/* ── Default fill opacity per area (front → back) ── */

const DEFAULT_FILL_OPACITY = 0.15;
const OVERLAP_FILL_OPACITIES = [0.25, 0.2];

/* ── Types ── */

export interface AreaChartSeries {
  /** Display name for the series (used in tooltip & legend) */
  name: string;
  /** One value per x-axis point — null creates a gap */
  data: (number | null)[];
  /** Override colour for this series */
  color?: string;
  /** Render as dashed line — no fill (default false) */
  dashed?: boolean;
  /** Render as smooth curve (default false) */
  smooth?: boolean;
  /** Override fill opacity for this series (0–1) */
  fillOpacity?: number;
}

export interface AreaChartProps {
  /** Data series — each non-dashed series renders a filled area (max 6) */
  series: AreaChartSeries[];
  /** X-axis point labels — shown in hover tooltip header */
  labels?: string[];
  /** Y-axis maximum value — areas scale relative to this (default: auto from data) */
  maxValue?: number;
  /** Format function for tooltip values */
  formatValue?: (value: number) => string;
  /** Override the default colour palette */
  colors?: string[];
  /** Line stroke width in px (default 2) */
  strokeWidth?: number;
  /** Custom class name */
  className?: string;
}

/* ── SVG Path Helpers ── */

const VB = 1000; // viewBox precision

function straightPath(pts: { x: number; y: number }[]): string {
  return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
}

function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 3) return straightPath(pts);

  let d = `M${pts[0].x},${pts[0].y}`;
  const t = 1 / 6; // catmull-rom tension

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];

    d += ` C${p1.x + (p2.x - p0.x) * t},${p1.y + (p2.y - p0.y) * t} ${p2.x - (p3.x - p1.x) * t},${p2.y - (p3.y - p1.y) * t} ${p2.x},${p2.y}`;
  }

  return d;
}

/** Build segments of points, splitting at null gaps. */
function buildSegments(
  data: (number | null)[],
  toX: (i: number) => number,
  toY: (v: number) => number,
): { x: number; y: number; idx: number }[][] {
  const segments: { x: number; y: number; idx: number }[][] = [];
  let seg: { x: number; y: number; idx: number }[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === null) {
      if (seg.length >= 2) segments.push(seg);
      seg = [];
    } else {
      seg.push({ x: toX(i), y: toY(data[i]!), idx: i });
    }
  }
  if (seg.length >= 2) segments.push(seg);

  return segments;
}

/** Build an SVG stroke path string. */
function buildLinePath(
  segments: { x: number; y: number }[][],
  smooth: boolean,
): string {
  return segments
    .map((s) => (smooth ? smoothPath(s) : straightPath(s)))
    .join(" ");
}

/** Build a closed area path (line path + vertical drop to baseline + close). */
function buildAreaPath(
  segments: { x: number; y: number }[][],
  smooth: boolean,
  baseline: number,
): string {
  return segments
    .map((seg) => {
      const linePart = smooth ? smoothPath(seg) : straightPath(seg);
      const last = seg[seg.length - 1];
      const first = seg[0];
      return `${linePart} L${last.x},${baseline} L${first.x},${baseline} Z`;
    })
    .join(" ");
}

/* ── Default Formatter ── */

function defaultFormatValue(v: number): string {
  if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (Math.abs(v) >= 1_000) return v.toLocaleString();
  return String(v);
}

/* ── Component ── */

export default function AreaChart({
  series,
  labels,
  maxValue,
  formatValue = defaultFormatValue,
  colors = DEFAULT_COLORS,
  strokeWidth = 2,
  className,
}: AreaChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (series.length === 0) return null;

  const dataLength = series[0].data.length;
  if (dataLength === 0) return null;

  /* Scale: compute ceiling from data or explicit maxValue */
  const allValues = series
    .flatMap((s) => s.data)
    .filter((v): v is number => v !== null);
  const dataMax = Math.max(...allValues, 0);
  const ceiling = maxValue ?? dataMax;
  const safeCeiling = ceiling > 0 ? ceiling : 1;

  /* Coordinate mappers — slot-centered to align with ChartGrid's
     vertical lines and x-axis labels (each occupies 1/n of the width) */
  function toX(i: number): number {
    return ((i + 0.5) / dataLength) * VB;
  }
  function toY(v: number): number {
    return VB - (v / safeCeiling) * VB;
  }
  function xPct(i: number): number {
    return ((i + 0.5) / dataLength) * 100;
  }
  function yBottomPct(v: number): number {
    return (v / safeCeiling) * 100;
  }

  /* Count non-dashed (filled) series for opacity assignment */
  const filledSeriesCount = series.filter((s) => !s.dashed).length;
  let filledIdx = 0;

  /* Pre-compute segments and paths for each series */
  const seriesData = series.map((s, sIdx) => {
    const color = s.color ?? colors[sIdx % colors.length];
    const segments = buildSegments(s.data, toX, toY);
    const linePath = buildLinePath(segments, s.smooth ?? false);
    const isDashed = s.dashed ?? false;
    const areaPath = isDashed
      ? ""
      : buildAreaPath(segments, s.smooth ?? false, VB);

    let fillOpacity = 0;
    if (!isDashed) {
      fillOpacity =
        s.fillOpacity ??
        (filledSeriesCount > 1
          ? OVERLAP_FILL_OPACITIES[filledIdx] ?? DEFAULT_FILL_OPACITY
          : DEFAULT_FILL_OPACITY);
      filledIdx++;
    }

    return { color, linePath, areaPath, isDashed, fillOpacity };
  });

  /* Mouse handlers — snap to nearest slot center */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const rel = (e.clientX - rect.left) / rect.width;
      const idx = Math.floor(rel * dataLength);
      setHoveredIndex(Math.max(0, Math.min(idx, dataLength - 1)));
    },
    [dataLength],
  );

  const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);

  /* Tooltip rows sorted by value descending */
  const tooltipRows =
    hoveredIndex !== null
      ? series
          .map((s, sIdx) => ({
            name: s.name,
            value: s.data[hoveredIndex],
            color: s.color ?? colors[sIdx % colors.length],
            dashed: s.dashed ?? false,
          }))
          .sort(
            (a, b) => (b.value ?? -Infinity) - (a.value ?? -Infinity),
          )
      : [];

  const tooltipOnLeft =
    hoveredIndex !== null && hoveredIndex > (dataLength - 1) / 2;

  const wrapperClasses = [styles.container, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      className={wrapperClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* SVG Areas & Lines */}
      <svg
        className={styles.svg}
        viewBox={`0 0 ${VB} ${VB}`}
        preserveAspectRatio="none"
      >
        {/* Render filled areas first (back to front) so last series is on top */}
        {seriesData.map((sd, sIdx) => {
          if (sd.isDashed || !sd.areaPath) return null;
          return (
            <path
              key={`area-${sIdx}`}
              d={sd.areaPath}
              fill={sd.color}
              fillOpacity={sd.fillOpacity}
              stroke="none"
            />
          );
        })}

        {/* Render stroke lines on top */}
        {seriesData.map((sd, sIdx) => {
          if (!sd.linePath) return null;
          return (
            <path
              key={`line-${sIdx}`}
              d={sd.linePath}
              fill="none"
              stroke={sd.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              strokeDasharray={sd.isDashed ? "6 4" : undefined}
            />
          );
        })}
      </svg>

      {/* Hover Overlay */}
      {hoveredIndex !== null && (
        <>
          {/* Vertical highlight line */}
          <div
            className={styles.hoverLine}
            style={{ left: `${xPct(hoveredIndex)}%` }}
          />

          {/* Dots on each series */}
          {series.map((s, sIdx) => {
            const v = s.data[hoveredIndex];
            if (v === null) return null;
            const color = s.color ?? colors[sIdx % colors.length];
            return (
              <div
                key={sIdx}
                className={styles.hoverDot}
                style={{
                  left: `${xPct(hoveredIndex)}%`,
                  bottom: `${yBottomPct(v)}%`,
                  borderColor: color,
                }}
              />
            );
          })}

          {/* Tooltip */}
          <div
            className={`${styles.tooltip} ${tooltipOnLeft ? styles.tooltipLeft : styles.tooltipRight}`}
            style={{ left: `${xPct(hoveredIndex)}%` }}
          >
            {labels?.[hoveredIndex] && (
              <div className={styles.tooltipHeader}>
                {labels[hoveredIndex]}
              </div>
            )}
            {tooltipRows.map((row, i) => (
              <div key={i} className={styles.tooltipRow}>
                <span
                  className={`${styles.tooltipSwatch} ${row.dashed ? styles.tooltipSwatchDashed : ""}`}
                  style={{ borderColor: row.color }}
                />
                <span className={styles.tooltipName}>{row.name}</span>
                <span className={styles.tooltipValue}>
                  {row.value !== null ? formatValue(row.value) : "n/a"}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
