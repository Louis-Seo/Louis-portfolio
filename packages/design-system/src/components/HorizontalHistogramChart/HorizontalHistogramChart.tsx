"use client";

import styles from "./HorizontalHistogramChart.module.css";

/* ── Default colour palette (Figma histogram spec) ── */

const DEFAULT_COLORS = [
  "var(--blue-500)",   // #067DFD
  "var(--orange-500)", // #FFA726
  "var(--yellow-500)", // #FFEE58
  "var(--gray-400)",   // #BDBDBD
  "var(--green-500)",  // #34C885
  "var(--red-500)",    // #FF5A1F
];

/* ── Types ── */

export type HorizontalHistogramSize = "small" | "medium" | "large";

export interface HorizontalHistogramSeries {
  /** Display name for the series (used in legend) */
  name: string;
  /** One value per bin/category */
  data: number[];
  /** Override colour for this series */
  color?: string;
}

export interface HorizontalHistogramChartProps {
  /** Bin / category labels (one per row) */
  categories: string[];
  /** Data series — each series adds one stacked segment per row (max 6) */
  series: HorizontalHistogramSeries[];
  /** Percentage mode: all bars fill 100% width, segments show proportion (default false) */
  percentage?: boolean;
  /** Show percentage labels (default false) */
  showPercent?: boolean;
  /** Show value labels — displays category total (default false) */
  showValue?: boolean;
  /** Format function for value labels */
  formatValue?: (value: number) => string;
  /** Format function for percent labels */
  formatPercent?: (percent: number) => string;
  /** Show legend (default true) */
  showLegend?: boolean;
  /** Bar height size variant (default "medium") */
  size?: HorizontalHistogramSize;
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

export default function HorizontalHistogramChart({
  categories,
  series,
  percentage = false,
  showPercent = false,
  showValue = false,
  formatValue = defaultFormatValue,
  formatPercent = defaultFormatPercent,
  showLegend = true,
  size = "medium",
  labelWidth = 120,
  colors = DEFAULT_COLORS,
  noMoreText = null,
  className,
}: HorizontalHistogramChartProps) {
  if (series.length === 0 || categories.length === 0) return null;

  /* Per-category totals */
  const categoryTotals = categories.map((_, catIdx) =>
    series.reduce((sum, s) => sum + (s.data[catIdx] ?? 0), 0),
  );

  const globalMax = Math.max(...categoryTotals, 0);

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
      {showLegend && series.length > 1 && (
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

      {/* Rows — adjacent (no gap) for histogram appearance */}
      <div className={styles.rows}>
        {categories.map((cat, catIdx) => {
          const total = categoryTotals[catIdx];
          /* Track width relative to global max (or 100% in percentage mode) */
          const trackWidthPct = percentage
            ? 100
            : globalMax > 0
              ? (total / globalMax) * 100
              : 0;

          return (
            <div key={catIdx} className={styles.row}>
              {/* Category Label */}
              <span
                className={styles.categoryLabel}
                style={{ width: labelWidth }}
                title={cat}
              >
                {cat}
              </span>

              {/* Stacked Bar Track */}
              <div
                className={styles.stackedTrack}
                style={{ width: `${trackWidthPct}%`, flex: percentage ? 1 : undefined }}
              >
                {series.map((s, sIdx) => {
                  const value = s.data[catIdx] ?? 0;
                  const segmentPct =
                    total > 0 ? (value / total) * 100 : 0;
                  const color =
                    s.color ?? colors[sIdx % colors.length];

                  return (
                    <div
                      key={sIdx}
                      className={styles.segment}
                      style={{
                        width: `${segmentPct}%`,
                        backgroundColor: color,
                      }}
                    />
                  );
                })}
              </div>

              {/* Value Labels */}
              {(showPercent || showValue) && (
                <div className={styles.valueLabels}>
                  {showPercent && (
                    <span className={styles.percentLabel}>
                      {formatPercent(
                        globalMax > 0
                          ? (total / globalMax) * 100
                          : 0,
                      )}
                    </span>
                  )}
                  {showValue && (
                    <span className={styles.valueLabel}>
                      {formatValue(total)}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* No more text */}
      {noMoreText && <div className={styles.noMore}>{noMoreText}</div>}
    </div>
  );
}
