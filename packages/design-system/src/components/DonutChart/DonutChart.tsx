"use client";

import { useState, useCallback, useRef } from "react";
import styles from "./DonutChart.module.css";

/* ── Default colour palette (Figma donut chart spec) ── */

const DEFAULT_COLORS = [
  "var(--green-400)",  // #66D9A3
  "var(--orange-500)", // #FFA726
  "var(--blue-300)",   // #8DC4FF
  "var(--red-500)",    // #FF5A1F
  "var(--blue-200)",   // #CBE8FF
  "var(--yellow-500)", // #FFEE58
  "var(--gray-400)",   // #BDBDBD
  "var(--green-500)",  // #34C885
  "var(--blue-500)",   // #067DFD
  "var(--red-400)",    // #FF8A65
];

/* ── Types ── */

export interface DonutChartSegment {
  /** Display name (shown in legend and tooltip) */
  name: string;
  /** Numeric value for this segment */
  value: number;
  /** Override colour for this segment */
  color?: string;
}

export interface DonutChartProps {
  /** Data segments (one per slice) */
  data: DonutChartSegment[];
  /** Render as semi-donut (180°, top half). Default false. */
  semi?: boolean;
  /** Concentric inner ring data for multi-level donut */
  innerData?: DonutChartSegment[];
  /** Ring thickness as fraction of radius (0–1). Default 0.22 */
  thickness?: number;
  /** Center label: large text (e.g. total value) */
  centerLabel?: string;
  /** Center sublabel: smaller text below centerLabel */
  centerSubLabel?: string;
  /** Show legend to the right. Default true. */
  showLegend?: boolean;
  /** Show percent column in legend. Default true. */
  showPercent?: boolean;
  /** Show value column in legend. Default true. */
  showValue?: boolean;
  /** Format function for values */
  formatValue?: (value: number) => string;
  /** Format function for percentages */
  formatPercent?: (percent: number) => string;
  /** Override the default colour palette */
  colors?: string[];
  /** Chart diameter in px (default 160) */
  size?: number;
  /** Enable dark mode. Default false. */
  darkMode?: boolean;
  /** Tooltip header label (e.g. "Jan 2023, SGD") */
  tooltipLabel?: string;
  /** Custom class name */
  className?: string;
}

/* ── SVG Arc Helpers ── */

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angle: number,
): { x: number; y: number } {
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  };
}

/**
 * Build an SVG path for an annular sector (donut wedge).
 * Draws outer arc clockwise, then inner arc counter-clockwise, then closes.
 */
function describeArc(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number,
): string {
  const sweep = endAngle - startAngle;

  // For full circle (or very close), draw two semicircular arcs to avoid degenerate path
  if (Math.abs(sweep) >= Math.PI * 2 - 0.001) {
    const mid = startAngle + Math.PI;
    const os = polarToCartesian(cx, cy, outerR, startAngle);
    const om = polarToCartesian(cx, cy, outerR, mid);
    const is_ = polarToCartesian(cx, cy, innerR, startAngle);
    const im = polarToCartesian(cx, cy, innerR, mid);
    return [
      `M ${os.x} ${os.y}`,
      `A ${outerR} ${outerR} 0 1 1 ${om.x} ${om.y}`,
      `A ${outerR} ${outerR} 0 1 1 ${os.x} ${os.y}`,
      `L ${is_.x} ${is_.y}`,
      `A ${innerR} ${innerR} 0 1 0 ${im.x} ${im.y}`,
      `A ${innerR} ${innerR} 0 1 0 ${is_.x} ${is_.y}`,
      `Z`,
    ].join(" ");
  }

  const outerStart = polarToCartesian(cx, cy, outerR, startAngle);
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle);
  const innerStart = polarToCartesian(cx, cy, innerR, startAngle);
  const innerEnd = polarToCartesian(cx, cy, innerR, endAngle);
  const largeArc = sweep > Math.PI ? 1 : 0;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    `Z`,
  ].join(" ");
}

/** Compute angle ranges for each segment. */
function computeAngles(
  values: number[],
  startAngle: number,
  totalSweep: number,
): { start: number; end: number; mid: number }[] {
  const total = values.reduce((s, v) => s + v, 0);
  if (total <= 0) return values.map(() => ({ start: startAngle, end: startAngle, mid: startAngle }));

  const GAP = 0.02; // small gap between segments in radians
  const hasGap = values.length > 1;
  const gapTotal = hasGap ? GAP * values.length : 0;
  const usableSweep = totalSweep - gapTotal;

  let cursor = startAngle;
  return values.map((v) => {
    const segStart = cursor + (hasGap ? GAP / 2 : 0);
    const segSweep = (v / total) * usableSweep;
    const segEnd = segStart + segSweep;
    cursor = segEnd + (hasGap ? GAP / 2 : 0);
    return { start: segStart, end: segEnd, mid: (segStart + segEnd) / 2 };
  });
}

/* ── Default Formatters ── */

function defaultFormatValue(v: number): string {
  if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (Math.abs(v) >= 1_000) {
    if (v >= 10_000) return `${(v / 1_000).toFixed(1)}K`;
    return v.toLocaleString();
  }
  return String(v);
}

function defaultFormatPercent(v: number): string {
  return `${Math.round(v)}%`;
}

/* ── Component ── */

export default function DonutChart({
  data,
  semi = false,
  innerData,
  thickness = 0.22,
  centerLabel,
  centerSubLabel,
  showLegend = true,
  showPercent = true,
  showValue = true,
  formatValue = defaultFormatValue,
  formatPercent = defaultFormatPercent,
  colors = DEFAULT_COLORS,
  size = 160,
  darkMode = false,
  tooltipLabel,
  className,
}: DonutChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  if (data.length === 0) return null;

  const total = data.reduce((s, d) => s + d.value, 0);
  if (total <= 0) return null;

  /* SVG coordinate system */
  const SVG_SIZE = 200;
  const cx = SVG_SIZE / 2;
  const cy = SVG_SIZE / 2;
  const outerR = SVG_SIZE / 2 - 6; // leave room for hover border
  const innerR = outerR * (1 - thickness);

  /* Angles */
  const startAngle = semi ? Math.PI : -Math.PI / 2;
  const totalSweep = semi ? Math.PI : Math.PI * 2;
  const angles = computeAngles(
    data.map((d) => d.value),
    startAngle,
    totalSweep,
  );

  /* Inner ring (multi-level) */
  const innerTotal = innerData ? innerData.reduce((s, d) => s + d.value, 0) : 0;
  const innerOuterR = innerR - 4; // 4px gap between rings
  const innerInnerR = innerOuterR * (1 - thickness);
  const innerAngles = innerData
    ? computeAngles(
        innerData.map((d) => d.value),
        startAngle,
        totalSweep,
      )
    : [];

  /* viewBox for semi */
  const viewBox = semi
    ? `0 0 ${SVG_SIZE} ${SVG_SIZE / 2 + 10}`
    : `0 0 ${SVG_SIZE} ${SVG_SIZE}`;
  const svgHeight = semi ? size * 0.55 + 10 : size;

  /* Hover handlers */
  const handleSegmentEnter = useCallback(
    (index: number, e: React.MouseEvent) => {
      setHoveredIndex(index);
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setTooltipPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    },
    [],
  );

  const handleSegmentMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setTooltipPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    },
    [],
  );

  const handleLeave = useCallback(() => {
    setHoveredIndex(null);
    setTooltipPos(null);
  }, []);

  /* Tooltip data */
  const hoveredSegment =
    hoveredIndex !== null ? data[hoveredIndex] : null;
  const hoveredColor =
    hoveredIndex !== null
      ? data[hoveredIndex].color ?? colors[hoveredIndex % colors.length]
      : "";
  const hoveredPercent =
    hoveredSegment ? (hoveredSegment.value / total) * 100 : 0;

  const themeClass = darkMode ? styles.dark : styles.light;
  const wrapperClasses = [styles.container, themeClass, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={containerRef} className={wrapperClasses}>
      {/* Chart SVG */}
      <div
        className={styles.chartWrapper}
        style={{ width: size, height: svgHeight }}
      >
        <svg
          className={styles.svg}
          viewBox={viewBox}
          width={size}
          height={svgHeight}
        >
          {/* Hover border (behind segments) */}
          {hoveredIndex !== null && (
            <path
              d={describeArc(
                cx,
                cy,
                outerR + 3,
                outerR - 1,
                angles[hoveredIndex].start,
                angles[hoveredIndex].end,
              )}
              fill={hoveredColor}
              opacity={0.3}
            />
          )}

          {/* Main segments */}
          {data.map((seg, i) => {
            const color = seg.color ?? colors[i % colors.length];
            const d = describeArc(
              cx,
              cy,
              outerR,
              innerR,
              angles[i].start,
              angles[i].end,
            );
            const isDimmed = hoveredIndex !== null && hoveredIndex !== i;
            return (
              <path
                key={i}
                d={d}
                fill={color}
                className={isDimmed ? styles.segmentDimmed : styles.segment}
                onMouseEnter={(e) => handleSegmentEnter(i, e)}
                onMouseMove={handleSegmentMove}
                onMouseLeave={handleLeave}
              />
            );
          })}

          {/* Inner ring (multi-level) */}
          {innerData &&
            innerData.map((seg, i) => {
              const color = seg.color ?? colors[i % colors.length];
              const d = describeArc(
                cx,
                cy,
                innerOuterR,
                innerInnerR,
                innerAngles[i].start,
                innerAngles[i].end,
              );
              return (
                <path key={`inner-${i}`} d={d} fill={color} opacity={0.6} />
              );
            })}
        </svg>

        {/* Center label */}
        {(centerLabel || centerSubLabel) && (
          <div
            className={`${styles.centerLabel} ${semi ? styles.semiCenterLabel : ""}`}
          >
            {centerLabel && (
              <div className={styles.centerValue}>{centerLabel}</div>
            )}
            {centerSubLabel && (
              <div className={styles.centerSub}>{centerSubLabel}</div>
            )}
          </div>
        )}

        {/* Tooltip */}
        {hoveredIndex !== null && tooltipPos && (
          <div
            className={styles.tooltip}
            style={{
              left: tooltipPos.x,
              top: tooltipPos.y,
              transform: "translate(-50%, calc(-100% - 12px))",
            }}
          >
            {tooltipLabel && (
              <div className={styles.tooltipHeader}>{tooltipLabel}</div>
            )}
            <div className={styles.tooltipRow}>
              <span
                className={styles.tooltipSwatch}
                style={{ backgroundColor: hoveredColor }}
              />
              <span className={styles.tooltipName}>
                {hoveredSegment!.name}
              </span>
              <span className={styles.tooltipPercent}>
                {formatPercent(hoveredPercent)}
              </span>
              <span className={styles.tooltipValue}>
                {formatValue(hoveredSegment!.value)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      {showLegend && (
        <div className={styles.legend}>
          {data.map((seg, i) => {
            const color = seg.color ?? colors[i % colors.length];
            const percent = (seg.value / total) * 100;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== i;
            return (
              <div
                key={i}
                className={`${styles.legendRow} ${isDimmed ? styles.legendRowDimmed : ""}`}
                onMouseEnter={(e) => handleSegmentEnter(i, e)}
                onMouseLeave={handleLeave}
              >
                <span
                  className={styles.legendSwatch}
                  style={{ backgroundColor: color }}
                />
                <span className={styles.legendName}>{seg.name}</span>
                {showPercent && (
                  <span className={styles.legendPercent}>
                    {formatPercent(percent)}
                  </span>
                )}
                {showValue && (
                  <span className={styles.legendValue}>
                    {formatValue(seg.value)}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
