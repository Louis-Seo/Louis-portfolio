"use client";

import styles from "./HorizontalBarChart.module.css";

/* ── Default colour palette (Figma spec) ── */

const DEFAULT_COLORS = [
  "var(--blue-500)", // #067DFD
  "var(--blue-300)", // #68BBFF
  "var(--blue-200)", // #CBE8FF
  "var(--red-500)",  // #FF5A1F
  "var(--red-300)",  // #FFAB91
  "var(--green-500)", // #34C885
];

/* ── Types ── */

export type HorizontalBarSize = "small" | "medium" | "large";

export interface HorizontalBarSeries {
  /** Display name for the series (used in legend) */
  name: string;
  /** One value per category */
  data: number[];
  /** Override colour for this series */
  color?: string;
}

export interface HorizontalBarChartProps {
  /** Category labels (one per row) */
  categories: string[];
  /** Data series — each series adds one bar per row */
  series: HorizontalBarSeries[];
  /** Show percentage labels (default false) */
  showPercent?: boolean;
  /** Show value labels (default true) */
  showValue?: boolean;
  /** Format function for value labels */
  formatValue?: (value: number) => string;
  /** Format function for percent labels */
  formatPercent?: (percent: number) => string;
  /** Show legend (default: true when series > 1) */
  showLegend?: boolean;
  /** Bar height size variant (default "medium") */
  size?: HorizontalBarSize;
  /** Category label width in px (default 120) */
  labelWidth?: number;
  /** Override the default colour palette */
  colors?: string[];
  /** "No more categories" message (null to hide) */
  noMoreText?: string | null;
  /** Custom class name */
  className?: string;
}

/* ── Helpers ── */

function defaultFormatValue(v: number): string {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return v.toLocaleString();
  return String(v);
}

function defaultFormatPercent(p: number): string {
  return `${Math.round(p)}%`;
}

/* ── Component ── */

export default function HorizontalBarChart({
  categories,
  series,
  showPercent = false,
  showValue = true,
  formatValue = defaultFormatValue,
  formatPercent = defaultFormatPercent,
  showLegend,
  size = "medium",
  labelWidth = 120,
  colors = DEFAULT_COLORS,
  noMoreText = null,
  className,
}: HorizontalBarChartProps) {
  if (series.length === 0 || categories.length === 0) return null;

  const shouldShowLegend = showLegend ?? series.length > 1;

  /* Global max across all series for proportional bar widths */
  const globalMax = series.reduce(
    (max, s) => Math.max(max, ...s.data),
    0,
  );

  const sizeClass =
    size === "small"
      ? styles.sizeSmall
      : size === "large"
        ? styles.sizeLarge
        : "";

  const wrapperClasses = [styles.wrapper, sizeClass, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {/* Legend */}
      {shouldShowLegend && (
        <div className={styles.legend}>
          {series.map((s, sIdx) => (
            <div key={sIdx} className={styles.legendItem}>
              <span
                className={styles.legendSwatch}
                style={{
                  backgroundColor:
                    s.color ?? colors[sIdx % colors.length],
                }}
              />
              <span className={styles.legendLabel}>{s.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Rows */}
      {categories.map((cat, catIdx) => (
        <div key={catIdx} className={styles.row}>
          {/* Category Label */}
          <span
            className={styles.categoryLabel}
            style={{ width: labelWidth }}
            title={cat}
          >
            {cat}
          </span>

          {/* Bar Lines — each series bar + its labels on the same row */}
          <div className={styles.barLines}>
            {series.map((s, sIdx) => {
              const value = s.data[catIdx] ?? 0;
              const widthPct =
                globalMax > 0 ? (value / globalMax) * 100 : 0;
              const color =
                s.color ?? colors[sIdx % colors.length];

              return (
                <div key={sIdx} className={styles.barLine}>
                  <div
                    className={styles.bar}
                    style={{
                      width: `${widthPct}%`,
                      backgroundColor: color,
                    }}
                  />
                  {showPercent && (
                    <span className={styles.percentLabel}>
                      {formatPercent(
                        globalMax > 0
                          ? (value / globalMax) * 100
                          : 0,
                      )}
                    </span>
                  )}
                  {showValue && (
                    <span className={styles.valueLabel}>
                      {formatValue(value)}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* No more text */}
      {noMoreText && <div className={styles.noMore}>{noMoreText}</div>}
    </div>
  );
}
