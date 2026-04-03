"use client";

import { useRef, useState, useCallback } from "react";
import styles from "./StackedAreaChart.module.css";

/* ── Default colour palette (Figma stacked area chart spec) ── */

const DEFAULT_COLORS = [
  "var(--blue-500)",   // #067DFD
  "var(--orange-500)", // #FFA726
  "var(--green-500)",  // #34C885
  "var(--red-500)",    // #FF5A1F
  "var(--yellow-500)", // #FFEE58
  "var(--gray-500)",   // #9E9E9E
];

const DEFAULT_FILL_OPACITY = 0.2;

/* ── Types ── */

export interface StackedAreaSeries {
  /** Display name for the series (used in tooltip & legend) */
  name: string;
  /** One value per x-axis point */
  data: number[];
  /** Override colour for this series */
  color?: string;
  /** Render as smooth curve (default false) */
  smooth?: boolean;
}

export interface StackedAreaOverlaySeries {
  /** Display name for the overlay line */
  name: string;
  /** One value per x-axis point — null creates a gap */
  data: (number | null)[];
  /** Override colour for this overlay line */
  color?: string;
  /** Render as dashed line (default true) */
  dashed?: boolean;
  /** Render as smooth curve (default false) */
  smooth?: boolean;
}

export interface StackedAreaChartProps {
  /** Data series — each series is stacked on top of the previous (max 6) */
  series: StackedAreaSeries[];
  /** Optional overlay lines (e.g. budget / target) rendered on top of the stacked areas */
  overlays?: StackedAreaOverlaySeries[];
  /** X-axis point labels — shown in hover tooltip header */
  labels?: string[];
  /** Percentage mode: stacks normalised to 100% (default false) */
  percentage?: boolean;
  /** Y-axis maximum value — stacked areas scale relative to this (default: auto from data) */
  maxValue?: number;
  /** Format function for tooltip values */
  formatValue?: (value: number) => string;
  /** Override the default colour palette */
  colors?: string[];
  /** Line stroke width in px (default 2) */
  strokeWidth?: number;
  /** Fill opacity for stacked areas (default 0.2) */
  fillOpacity?: number;
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

function buildPathString(
  pts: { x: number; y: number }[],
  smooth: boolean,
): string {
  return smooth ? smoothPath(pts) : straightPath(pts);
}

/** Build a closed area path between an upper line and a lower line. */
function buildStackedAreaPath(
  upper: { x: number; y: number }[],
  lower: { x: number; y: number }[],
  smooth: boolean,
): string {
  if (upper.length < 2) return "";

  const upperPart = buildPathString(upper, smooth);
  // Reverse lower to close the shape (upper left→right, then lower right→left)
  const lowerReversed = [...lower].reverse();
  const lowerPart = lowerReversed
    .map((p, i) => `${i === 0 ? "L" : "L"}${p.x},${p.y}`)
    .join(" ");

  return `${upperPart} ${lowerPart} Z`;
}

/** Build segments of points, splitting at null gaps (for overlay lines). */
function buildOverlaySegments(
  data: (number | null)[],
  toX: (i: number) => number,
  toY: (v: number) => number,
): { x: number; y: number }[][] {
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

  return segments;
}

/* ── Default Formatter ── */

function defaultFormatValue(v: number): string {
  if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (Math.abs(v) >= 1_000) return v.toLocaleString();
  return String(v);
}

function defaultFormatPercent(v: number): string {
  return `${Math.round(v)}%`;
}

/* ── Component ── */

export default function StackedAreaChart({
  series,
  overlays = [],
  labels,
  percentage = false,
  maxValue,
  formatValue = defaultFormatValue,
  colors = DEFAULT_COLORS,
  strokeWidth = 2,
  fillOpacity = DEFAULT_FILL_OPACITY,
  className,
}: StackedAreaChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (series.length === 0) return null;

  const dataLength = series[0].data.length;
  if (dataLength === 0) return null;

  /* ── Compute stacked values ── */

  // Per-point totals (for percentage mode)
  const pointTotals = Array.from({ length: dataLength }, (_, i) =>
    series.reduce((sum, s) => sum + (s.data[i] ?? 0), 0),
  );

  // Cumulative stacked values in raw form first
  const rawStacked: number[][] = [];
  for (let sIdx = 0; sIdx < series.length; sIdx++) {
    const prev = sIdx > 0 ? rawStacked[sIdx - 1] : null;
    rawStacked.push(
      Array.from({ length: dataLength }, (_, i) =>
        (prev?.[i] ?? 0) + (series[sIdx].data[i] ?? 0),
      ),
    );
  }

  // Convert to percentage after stacking if needed
  const stackedValues: number[][] = percentage
    ? rawStacked.map((row) =>
        row.map((v, i) => {
          const total = pointTotals[i];
          return total > 0 ? (v / total) * 100 : 0;
        }),
      )
    : rawStacked;

  /* Scale ceiling */
  const topValues = stackedValues[stackedValues.length - 1];
  const dataMax = percentage ? 100 : Math.max(...topValues, 0);
  const ceiling = percentage ? 100 : (maxValue ?? dataMax);
  const safeCeiling = ceiling > 0 ? ceiling : 1;

  /* Also consider overlay values for ceiling when not in percentage mode */
  const overlayCeiling = percentage
    ? safeCeiling
    : Math.max(
        safeCeiling,
        ...overlays.flatMap((o) =>
          o.data.filter((v): v is number => v !== null),
        ),
        0,
      );
  const finalCeiling = overlayCeiling > 0 ? overlayCeiling : 1;

  /* Coordinate mappers */
  function toX(i: number): number {
    return ((i + 0.5) / dataLength) * VB;
  }
  function toY(v: number): number {
    return VB - (v / finalCeiling) * VB;
  }
  function xPct(i: number): number {
    return ((i + 0.5) / dataLength) * 100;
  }
  function yBottomPct(v: number): number {
    return (v / finalCeiling) * 100;
  }

  /* ── Build stacked layer geometry ── */

  const layers = series.map((s, sIdx) => {
    const color = s.color ?? colors[sIdx % colors.length];
    const isSmooth = s.smooth ?? false;

    // Upper boundary = cumulative stacked values for this series
    const upper = Array.from({ length: dataLength }, (_, i) => ({
      x: toX(i),
      y: toY(stackedValues[sIdx][i]),
    }));

    // Lower boundary = cumulative stacked values for the previous series (or baseline)
    const lower =
      sIdx > 0
        ? Array.from({ length: dataLength }, (_, i) => ({
            x: toX(i),
            y: toY(stackedValues[sIdx - 1][i]),
          }))
        : Array.from({ length: dataLength }, (_, i) => ({
            x: toX(i),
            y: toY(0),
          }));

    const areaPath = buildStackedAreaPath(upper, lower, isSmooth);
    const linePath = buildPathString(upper, isSmooth);

    return { color, areaPath, linePath, upper };
  });

  /* ── Build overlay line geometry ── */

  const overlayData = overlays.map((o, oIdx) => {
    const color = o.color ?? "var(--gray-500)";
    const isDashed = o.dashed ?? true;
    const isSmooth = o.smooth ?? false;
    const segments = buildOverlaySegments(o.data, toX, toY);
    const linePath = segments.map((seg) => buildPathString(seg, isSmooth)).join(" ");
    return { color, isDashed, linePath, name: o.name };
  });

  /* Mouse handlers */
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

  /* Tooltip rows: stacked series (bottom to top, reversed for display) + overlays */
  const formatFn = percentage
    ? (v: number) => defaultFormatPercent(v)
    : formatValue;

  const tooltipRows =
    hoveredIndex !== null
      ? [
          // Stacked series — show individual (non-cumulative) values, sorted top→bottom
          ...[...series]
            .map((s, sIdx) => {
              const rawValue = s.data[hoveredIndex] ?? 0;
              const displayValue = percentage
                ? pointTotals[hoveredIndex] > 0
                  ? (rawValue / pointTotals[hoveredIndex]) * 100
                  : 0
                : rawValue;
              return {
                name: s.name,
                value: displayValue,
                color: s.color ?? colors[sIdx % colors.length],
                dashed: false,
                order: sIdx,
              };
            })
            .reverse(),
          // Overlay lines
          ...overlays.map((o) => ({
            name: o.name,
            value: o.data[hoveredIndex],
            color: o.color ?? "var(--gray-500)",
            dashed: o.dashed ?? true,
            order: series.length,
          })),
        ]
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
      {/* SVG Stacked Areas & Lines */}
      <svg
        className={styles.svg}
        viewBox={`0 0 ${VB} ${VB}`}
        preserveAspectRatio="none"
      >
        {/* Render filled areas (bottom layer first) */}
        {layers.map((layer, sIdx) => {
          if (!layer.areaPath) return null;
          return (
            <path
              key={`area-${sIdx}`}
              d={layer.areaPath}
              fill={layer.color}
              fillOpacity={fillOpacity}
              stroke="none"
            />
          );
        })}

        {/* Render stacked stroke lines on top */}
        {layers.map((layer, sIdx) => {
          if (!layer.linePath) return null;
          return (
            <path
              key={`line-${sIdx}`}
              d={layer.linePath}
              fill="none"
              stroke={layer.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}

        {/* Render overlay lines (e.g. budget) on top of everything */}
        {overlayData.map((od, oIdx) => {
          if (!od.linePath) return null;
          return (
            <path
              key={`overlay-${oIdx}`}
              d={od.linePath}
              fill="none"
              stroke={od.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              strokeDasharray={od.isDashed ? "6 4" : undefined}
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

          {/* Dots on each stacked series (at cumulative y position) */}
          {series.map((s, sIdx) => {
            const cumY = stackedValues[sIdx][hoveredIndex];
            const color = s.color ?? colors[sIdx % colors.length];
            return (
              <div
                key={`dot-${sIdx}`}
                className={styles.hoverDot}
                style={{
                  left: `${xPct(hoveredIndex)}%`,
                  bottom: `${yBottomPct(cumY)}%`,
                  borderColor: color,
                }}
              />
            );
          })}

          {/* Dots on overlay lines */}
          {overlays.map((o, oIdx) => {
            const v = o.data[hoveredIndex];
            if (v === null) return null;
            const color = o.color ?? "var(--gray-500)";
            return (
              <div
                key={`overlay-dot-${oIdx}`}
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
                  {row.value !== null && row.value !== undefined
                    ? formatFn(row.value)
                    : "n/a"}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
