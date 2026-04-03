"use client";

import styles from "./WaterfallChart.module.css";

/* ── Default Colours (Figma waterfall spec) ── */

const DEFAULT_BALANCE_COLOR = "var(--blue-500)";   // #067DFD
const DEFAULT_INCREASE_COLOR = "var(--green-400)";  // #66D9A3
const DEFAULT_DECREASE_COLOR = "var(--red-400)";    // #FF8A65

/* ── Types ── */

export type WaterfallBarType = "balance" | "increase" | "decrease";

export interface WaterfallDataPoint {
  /** The absolute or delta value */
  value: number;
  /** Bar type: balance (start/end total), increase (+), decrease (−) */
  type: WaterfallBarType;
}

export interface WaterfallChartProps {
  /** Data points — one per x-axis slot */
  data: WaterfallDataPoint[];
  /** Y-axis maximum value — bars scale relative to this (default: auto from data) */
  maxValue?: number;
  /** Show value labels on each bar (default false) */
  showLabels?: boolean;
  /** Format function for value labels */
  formatLabel?: (value: number, type: WaterfallBarType) => string;
  /** Override colour for balance bars */
  balanceColor?: string;
  /** Override colour for increase bars */
  increaseColor?: string;
  /** Override colour for decrease bars */
  decreaseColor?: string;
  /** Custom class name */
  className?: string;
}

/* ── Helpers ── */

function defaultFormatLabel(value: number, type: WaterfallBarType): string {
  const formatted =
    Math.abs(value) >= 1_000
      ? Math.abs(value).toLocaleString()
      : String(Math.abs(value));
  if (type === "increase") return `+${formatted}`;
  if (type === "decrease") return `-${formatted}`;
  return formatted;
}

interface ComputedBar {
  bottom: number;
  height: number;
  runningTotal: number;
}

function computeBars(data: WaterfallDataPoint[]): ComputedBar[] {
  const bars: ComputedBar[] = [];
  let running = 0;

  for (const d of data) {
    if (d.type === "balance") {
      bars.push({ bottom: 0, height: d.value, runningTotal: d.value });
      running = d.value;
    } else if (d.type === "increase") {
      bars.push({ bottom: running, height: d.value, runningTotal: running + d.value });
      running += d.value;
    } else {
      const newRunning = running - d.value;
      bars.push({ bottom: newRunning, height: d.value, runningTotal: newRunning });
      running = newRunning;
    }
  }

  return bars;
}

/* ── Component ── */

export default function WaterfallChart({
  data,
  maxValue,
  showLabels = false,
  formatLabel = defaultFormatLabel,
  balanceColor = DEFAULT_BALANCE_COLOR,
  increaseColor = DEFAULT_INCREASE_COLOR,
  decreaseColor = DEFAULT_DECREASE_COLOR,
  className,
}: WaterfallChartProps) {
  if (data.length === 0) return null;

  const bars = computeBars(data);

  /* Determine the ceiling for scaling:
     Use explicit maxValue (matching Y-axis), or auto-compute with 15% headroom.
     When labels are visible, add 12% extra headroom so labels don't overflow. */
  const dataMax = bars.reduce((m, b) => Math.max(m, b.bottom + b.height), 0);
  const labelHeadroom = showLabels ? 1.12 : 1;
  const ceiling = (maxValue ?? dataMax * 1.15) * labelHeadroom;
  const safeCeiling = ceiling > 0 ? ceiling : 1;

  function valueToPct(v: number): number {
    return Math.min((v / safeCeiling) * 100, 100);
  }

  function getColor(type: WaterfallBarType): string {
    if (type === "balance") return balanceColor;
    if (type === "increase") return increaseColor;
    return decreaseColor;
  }

  const wrapperClasses = [styles.container, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {data.map((d, i) => {
        const bar = bars[i];
        const bottomPct = valueToPct(bar.bottom);
        const heightPct = valueToPct(bar.height);
        const color = getColor(d.type);
        const labelAbove = d.type !== "decrease";

        return (
          <div key={i} className={styles.slot}>
            {/* Bar */}
            <div
              className={styles.barWrapper}
              style={{ bottom: `${bottomPct}%`, height: `${heightPct}%` }}
            >
              <div
                className={styles.bar}
                style={{ height: "100%", backgroundColor: color }}
              />
              {showLabels && (
                <span
                  className={`${styles.label} ${labelAbove ? styles.labelAbove : styles.labelBelow}`}
                >
                  {formatLabel(d.value, d.type)}
                </span>
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
}
