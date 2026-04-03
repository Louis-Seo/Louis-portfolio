"use client";

import { useRef, useState, useCallback } from "react";
import styles from "./LineChart.module.css";

/* ── Default colour palette (Figma line chart spec) ── */

const DEFAULT_COLORS = [
  "var(--blue-500)",   // #067DFD
  "var(--orange-500)", // #FFA726
  "var(--green-500)",  // #34C885
  "var(--red-500)",    // #FF5A1F
  "var(--yellow-500)", // #FFEE58
  "var(--gray-500)",   // #9E9E9E
];

/* ── Types ── */

export interface LineChartSeries {
  /** Display name for the series (used in tooltip & legend) */
  name: string;
  /** One value per x-axis point — null creates a gap */
  data: (number | null)[];
  /** Override colour for this series */
  color?: string;
  /** Render as dashed line (default false) */
  dashed?: boolean;
  /** Render as smooth curve (default false) */
  smooth?: boolean;
}

export interface LineChartProps {
  /** Data series — each series renders one line (max 6) */
  series: LineChartSeries[];
  /** X-axis point labels — shown in hover tooltip header */
  labels?: string[];
  /** Y-axis maximum value — lines scale relative to this (default: auto from data) */
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

/** Build an SVG path string, splitting at null gaps. */
function buildSeriesPath(
  data: (number | null)[],
  toX: (i: number) => number,
  toY: (v: number) => number,
  smooth: boolean,
): string {
  const segments: { x: number; y: number }[][] = [];
  let seg: { x: number; y: number }[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === null) {
      if (seg.length >= 2) segments.push(seg);
      seg = [];
    } else {
      seg.push({ x: toX(i), y: toY(data[i]!) });
    }
  }
  if (seg.length >= 2) segments.push(seg);

  return segments
    .map((s) => (smooth ? smoothPath(s) : straightPath(s)))
    .join(" ");
}

/* ── Default Formatter ── */

function defaultFormatValue(v: number): string {
  if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (Math.abs(v) >= 1_000) return v.toLocaleString();
  return String(v);
}

/* ── Component ── */

export default function LineChart({
  series,
  labels,
  maxValue,
  formatValue = defaultFormatValue,
  colors = DEFAULT_COLORS,
  strokeWidth = 2,
  className,
}: LineChartProps) {
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
      {/* SVG Lines (stretched to fill, strokes kept uniform) */}
      <svg
        className={styles.svg}
        viewBox={`0 0 ${VB} ${VB}`}
        preserveAspectRatio="none"
      >
        {series.map((s, sIdx) => {
          const color = s.color ?? colors[sIdx % colors.length];
          const d = buildSeriesPath(
            s.data,
            toX,
            toY,
            s.smooth ?? false,
          );
          if (!d) return null;

          return (
            <path
              key={sIdx}
              d={d}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              strokeDasharray={s.dashed ? "6 4" : undefined}
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
