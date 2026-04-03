"use client";

import { useRef, useState, useCallback } from "react";
import styles from "./StackedBarChart.module.css";

/* ── Default colour palette (Figma stacked chart spec) ── */

const DEFAULT_COLORS = [
  "var(--blue-500)",   // #067DFD
  "var(--orange-500)", // #FFA726
  "var(--yellow-500)", // #FFEE58
  "var(--gray-400)",   // #BDBDBD
  "var(--green-500)",  // #34C885
  "var(--red-500)",    // #FF5A1F
];

/* ── SVG Path Helpers ── */

const VB = 1000;

function straightPath(pts: { x: number; y: number }[]): string {
  return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
}

function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 3) return straightPath(pts);

  let d = `M${pts[0].x},${pts[0].y}`;
  const t = 1 / 6;

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];

    d += ` C${p1.x + (p2.x - p0.x) * t},${p1.y + (p2.y - p0.y) * t} ${p2.x - (p3.x - p1.x) * t},${p2.y - (p3.y - p1.y) * t} ${p2.x},${p2.y}`;
  }

  return d;
}

function buildPath(
  data: number[],
  toX: (i: number) => number,
  toY: (v: number) => number,
  smooth: boolean,
): string {
  const pts = data.map((v, i) => ({ x: toX(i), y: toY(v) }));
  if (pts.length < 2) return "";
  return smooth ? smoothPath(pts) : straightPath(pts);
}

/* ── Default Formatter ── */

function defaultFormatValue(v: number): string {
  if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (Math.abs(v) >= 1_000) return v.toLocaleString();
  return String(v);
}

/* ── Types ── */

export interface StackedBarSeries {
  /** Display name for the series (used in legends) */
  name: string;
  /** One value per x-axis category */
  data: number[];
  /** Override colour for this series */
  color?: string;
}

export interface TrendLine {
  /** One value per category (must match series data length) */
  data: number[];
  /** Display name in tooltip (default: "Trend") */
  name?: string;
  /** Override color (default: "var(--gray-600)") */
  color?: string;
  /** Render as dashed line (default: true) */
  dashed?: boolean;
  /** Use Catmull-Rom smoothing (default: false) */
  smooth?: boolean;
}

export interface StackedBarChartProps {
  /** Data series — each series adds one stacked segment (max 6) */
  series: StackedBarSeries[];
  /** Percentage mode: all columns fill 100%, segments show proportion (default false) */
  percentage?: boolean;
  /** Trend line overlay (typically represents category totals) */
  trendLine?: TrendLine;
  /** X-axis point labels — shown in hover tooltip header */
  labels?: string[];
  /** Format function for tooltip values */
  formatValue?: (value: number) => string;
  /** Override the default colour palette */
  colors?: string[];
  /** Custom class name */
  className?: string;
}

/* ── Component ── */

export default function StackedBarChart({
  series,
  percentage = false,
  trendLine,
  labels,
  formatValue = defaultFormatValue,
  colors = DEFAULT_COLORS,
  className,
}: StackedBarChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (series.length === 0) return null;

  const categoryCount = series[0].data.length;
  const enableHover = !!(trendLine || labels);

  /* Ignore trend line in percentage mode (no meaningful scale) */
  const effectiveTrendLine = percentage ? undefined : trendLine;

  /* Per-category totals (for percentage mode & overall max) */
  const categoryTotals = Array.from({ length: categoryCount }, (_, catIdx) =>
    series.reduce((sum, s) => sum + (s.data[catIdx] ?? 0), 0),
  );

  const globalMax = Math.max(
    ...categoryTotals,
    ...(effectiveTrendLine?.data ?? []),
    0,
  );
  const safeCeiling = globalMax > 0 ? globalMax : 1;

  /* Coordinate mappers — slot-centered to align with ChartGrid x-labels */
  const toX = (i: number) => ((i + 0.5) / categoryCount) * VB;
  const toY = (v: number) => VB - (v / safeCeiling) * VB;
  const xPct = (i: number) => ((i + 0.5) / categoryCount) * 100;
  const yBottomPct = (v: number) => (v / safeCeiling) * 100;

  /* Mouse handlers — snap to nearest slot */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const rel = (e.clientX - rect.left) / rect.width;
      const idx = Math.floor(rel * categoryCount);
      setHoveredIndex(Math.max(0, Math.min(idx, categoryCount - 1)));
    },
    [categoryCount],
  );

  const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);

  /* Tooltip rows */
  type TooltipRow = {
    type: "bar" | "line";
    name: string;
    value: number;
    color: string;
    dashed: boolean;
  };

  const tooltipRows: TooltipRow[] =
    hoveredIndex !== null
      ? [
          ...series.map((s, sIdx) => ({
            type: "bar" as const,
            name: s.name,
            value: s.data[hoveredIndex] ?? 0,
            color: s.color ?? colors[sIdx % colors.length],
            dashed: false,
          })),
          ...(effectiveTrendLine
            ? [
                {
                  type: "line" as const,
                  name: effectiveTrendLine.name ?? "Trend",
                  value: effectiveTrendLine.data[hoveredIndex] ?? 0,
                  color: effectiveTrendLine.color ?? "var(--gray-600)",
                  dashed: effectiveTrendLine.dashed ?? true,
                },
              ]
            : []),
        ]
      : [];

  const tooltipOnLeft =
    hoveredIndex !== null && hoveredIndex > (categoryCount - 1) / 2;

  const wrapperClasses = [styles.container, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={enableHover ? containerRef : undefined}
      className={wrapperClasses}
      onMouseMove={enableHover ? handleMouseMove : undefined}
      onMouseLeave={enableHover ? handleMouseLeave : undefined}
    >
      {/* Stacked Columns */}
      {Array.from({ length: categoryCount }).map((_, catIdx) => {
        const total = categoryTotals[catIdx];
        /* Column height relative to global max (or 100% in percentage mode) */
        const columnHeightPct = percentage
          ? 100
          : globalMax > 0
            ? (total / globalMax) * 100
            : 0;

        return (
          <div
            key={catIdx}
            className={styles.stackedColumn}
            style={{ height: `${columnHeightPct}%` }}
          >
            {series.map((s, sIdx) => {
              const value = s.data[catIdx] ?? 0;
              /* Segment height relative to column total */
              const segmentPct =
                total > 0 ? (value / total) * 100 : 0;
              const color = s.color ?? colors[sIdx % colors.length];

              /* The topmost visible segment gets rounded corners.
                 In column-reverse layout, the last series with value > 0 is visually on top. */
              const isTop =
                sIdx ===
                series.reduce(
                  (last, cur, i) =>
                    (cur.data[catIdx] ?? 0) > 0 ? i : last,
                  0,
                );

              const segmentClass = isTop
                ? `${styles.segment} ${styles.segmentTop}`
                : styles.segment;

              return (
                <div
                  key={sIdx}
                  className={segmentClass}
                  style={{
                    height: `${segmentPct}%`,
                    backgroundColor: color,
                  }}
                />
              );
            })}
          </div>
        );
      })}

      {/* SVG Trend Line Overlay */}
      {effectiveTrendLine && (
        <svg
          className={styles.svg}
          viewBox={`0 0 ${VB} ${VB}`}
          preserveAspectRatio="none"
        >
          <path
            d={buildPath(
              effectiveTrendLine.data,
              toX,
              toY,
              effectiveTrendLine.smooth ?? false,
            )}
            fill="none"
            stroke={effectiveTrendLine.color ?? "var(--gray-600)"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            strokeDasharray={
              (effectiveTrendLine.dashed ?? true) ? "6 4" : undefined
            }
          />
        </svg>
      )}

      {/* Hover Overlay */}
      {enableHover && hoveredIndex !== null && (
        <>
          {/* Vertical highlight line */}
          <div
            className={styles.hoverLine}
            style={{ left: `${xPct(hoveredIndex)}%` }}
          />

          {/* Dot on trend line */}
          {effectiveTrendLine && (
            <div
              className={styles.hoverDot}
              style={{
                left: `${xPct(hoveredIndex)}%`,
                bottom: `${yBottomPct(effectiveTrendLine.data[hoveredIndex] ?? 0)}%`,
                borderColor: effectiveTrendLine.color ?? "var(--gray-600)",
              }}
            />
          )}

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
                  className={
                    row.type === "line"
                      ? `${styles.tooltipSwatchLine} ${row.dashed ? styles.tooltipSwatchDashed : ""}`
                      : styles.tooltipSwatchBar
                  }
                  style={
                    row.type === "line"
                      ? { borderColor: row.color }
                      : { backgroundColor: row.color }
                  }
                />
                <span className={styles.tooltipName}>{row.name}</span>
                <span className={styles.tooltipValue}>
                  {formatValue(row.value)}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
