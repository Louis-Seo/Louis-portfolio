"use client";

import { useRef, useState, useCallback } from "react";
import styles from "./BarChart.module.css";

/* ── Default colour palette (Figma spec) ── */

const DEFAULT_COLORS = [
  "var(--blue-500)",  // #067DFD
  "var(--blue-300)",  // #68BBFF – mapped to #8DC4FF in tokens, Figma uses #68BBFF
  "var(--blue-200)",  // #CBE8FF
  "var(--green-500)", // #34C885
  "var(--green-300)", // #99E6C0
  "var(--green-200)", // #CCF2DF
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

export interface BarChartSeries {
  /** Display name for the series (used in legends) */
  name: string;
  /** One value per x-axis category (0–1 normalised, or raw values) */
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

export interface BarChartProps {
  /** Data series — each series adds one bar per group (max 6) */
  series: BarChartSeries[];
  /** Trend line overlay connecting values across categories */
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

export default function BarChart({
  series,
  trendLine,
  labels,
  formatValue = defaultFormatValue,
  colors = DEFAULT_COLORS,
  className,
}: BarChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (series.length === 0) return null;

  const barCount = series.length;
  const categoryCount = series[0].data.length;
  const enableHover = !!(trendLine || labels);

  /* Compute the global max across all series + trend line so scaling is consistent */
  const globalMax = Math.max(
    series.reduce((max, s) => Math.max(max, ...s.data), 0),
    ...(trendLine?.data ?? []),
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
          ...(trendLine
            ? [
                {
                  type: "line" as const,
                  name: trendLine.name ?? "Trend",
                  value: trendLine.data[hoveredIndex] ?? 0,
                  color: trendLine.color ?? "var(--gray-600)",
                  dashed: trendLine.dashed ?? true,
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
      {/* Bar Groups */}
      {Array.from({ length: categoryCount }).map((_, catIdx) => (
        <div
          key={catIdx}
          className={styles.barGroup}
          data-bar-count={barCount}
        >
          {series.map((s, sIdx) => {
            const value = s.data[catIdx] ?? 0;
            const heightPct =
              globalMax > 0 ? (value / globalMax) * 100 : 0;
            const color = s.color ?? colors[sIdx % colors.length];

            return (
              <div
                key={sIdx}
                className={styles.bar}
                style={{
                  height: `${heightPct}%`,
                  backgroundColor: color,
                }}
              />
            );
          })}
        </div>
      ))}

      {/* SVG Trend Line Overlay */}
      {trendLine && (
        <svg
          className={styles.svg}
          viewBox={`0 0 ${VB} ${VB}`}
          preserveAspectRatio="none"
        >
          <path
            d={buildPath(
              trendLine.data,
              toX,
              toY,
              trendLine.smooth ?? false,
            )}
            fill="none"
            stroke={trendLine.color ?? "var(--gray-600)"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            strokeDasharray={
              (trendLine.dashed ?? true) ? "6 4" : undefined
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
          {trendLine && (
            <div
              className={styles.hoverDot}
              style={{
                left: `${xPct(hoveredIndex)}%`,
                bottom: `${yBottomPct(trendLine.data[hoveredIndex] ?? 0)}%`,
                borderColor: trendLine.color ?? "var(--gray-600)",
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
