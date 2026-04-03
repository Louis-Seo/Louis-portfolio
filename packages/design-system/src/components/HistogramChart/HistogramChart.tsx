"use client";

import styles from "./HistogramChart.module.css";

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

export interface HistogramSeries {
  /** Display name for the series (used in legends) */
  name: string;
  /** One value per bin */
  data: number[];
  /** Override colour for this series */
  color?: string;
}

export interface HistogramChartProps {
  /** Data series — each series adds one stacked segment per bin (max 6) */
  series: HistogramSeries[];
  /** Percentage mode: all bins fill 100%, segments show proportion (default false) */
  percentage?: boolean;
  /** Override the default colour palette */
  colors?: string[];
  /** Custom class name */
  className?: string;
}

/* ── Component ── */

export default function HistogramChart({
  series,
  percentage = false,
  colors = DEFAULT_COLORS,
  className,
}: HistogramChartProps) {
  if (series.length === 0) return null;

  const binCount = series[0].data.length;

  /* Per-bin totals (for percentage mode & overall max) */
  const binTotals = Array.from({ length: binCount }, (_, binIdx) =>
    series.reduce((sum, s) => sum + (s.data[binIdx] ?? 0), 0),
  );

  const globalMax = Math.max(...binTotals, 0);

  const wrapperClasses = [styles.container, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {Array.from({ length: binCount }).map((_, binIdx) => {
        const total = binTotals[binIdx];
        /* Bin height relative to global max (or 100% in percentage mode) */
        const binHeightPct = percentage
          ? 100
          : globalMax > 0
            ? (total / globalMax) * 100
            : 0;

        return (
          <div
            key={binIdx}
            className={styles.bin}
            style={{ height: `${binHeightPct}%` }}
          >
            {series.map((s, sIdx) => {
              const value = s.data[binIdx] ?? 0;
              /* Segment height relative to bin total */
              const segmentPct =
                total > 0 ? (value / total) * 100 : 0;
              const color = s.color ?? colors[sIdx % colors.length];

              /* The topmost visible segment gets rounded corners.
                 In column-reverse layout, the last series with value > 0 is visually on top. */
              const isTop =
                sIdx ===
                series.reduce(
                  (last, cur, i) =>
                    (cur.data[binIdx] ?? 0) > 0 ? i : last,
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
    </div>
  );
}
