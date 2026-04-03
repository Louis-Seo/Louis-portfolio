"use client";

import { ReactNode } from "react";
import styles from "./ChartGrid.module.css";

/* ── Types ── */

export type VerticalLineCount = 4 | 6 | 8 | 10 | 12 | 15 | 30;

export type XAxisType =
  | "time-interval"
  | "continuous"
  | "percentage"
  | "categorical";

export interface ChartGridProps {
  /** Show horizontal grid lines (default true) */
  horizontalLines?: boolean;
  /** Show vertical grid lines (default false) */
  verticalLines?: boolean;
  /** Number of vertical lines when enabled (default 8) */
  verticalLineCount?: VerticalLineCount;
  /** Show Y-axis value labels on the left (default true) */
  showYValues?: boolean;
  /** Show a second Y-axis on the right (default false) */
  showSecondYAxis?: boolean;
  /** Show Y-axis title above the grid (default false) */
  showYAxisTitle?: boolean;
  /** Y-axis title text */
  yAxisTitle?: string;
  /** Second Y-axis title text (right side) */
  secondYAxisTitle?: string;
  /** Show X-axis title below the grid (default false) */
  showXAxisTitle?: boolean;
  /** X-axis title text */
  xAxisTitle?: string;
  /** Y-axis value labels (top to bottom) */
  yLabels?: string[];
  /** Second Y-axis value labels (top to bottom) */
  secondYLabels?: string[];
  /** X-axis labels (left to right) */
  xLabels?: string[];
  /** Enable dark mode (default false) */
  darkMode?: boolean;
  /** Grid area height in px (default 160) */
  height?: number;
  /** Optional content overlay for chart data */
  children?: ReactNode;
  /** Custom class name */
  className?: string;
}

/* ── Layout Constants ── */

/** Half the text line-height (16px / 2 = 8px).
 *  Lines are inset by this amount so text labels don't overflow the grid area. */
const LINE_INSET = 8;

/** Calculate the absolute top position (px) for a horizontal line row. */
function getLineTop(index: number, total: number, gridHeight: number): number {
  if (total <= 1) return LINE_INSET;
  const usable = gridHeight - LINE_INSET * 2;
  return LINE_INSET + (index / (total - 1)) * usable;
}

/* ── Sub-Components ── */

interface HorizontalLineRowProps {
  label?: string;
  secondLabel?: string;
  showYValues: boolean;
  showSecondYAxis: boolean;
  isBaseline: boolean;
  showLine: boolean;
  top: number;
}

function HorizontalLineRow({
  label,
  secondLabel,
  showYValues,
  showSecondYAxis,
  isBaseline,
  showLine,
  top,
}: HorizontalLineRowProps) {
  const lineClass = !showLine
    ? styles.hLineHidden
    : isBaseline
      ? styles.hLineBaseline
      : styles.hLine;

  return (
    <div className={styles.hLineRow} style={{ top }}>
      {showYValues && (
        <>
          <span className={styles.yValue}>{label ?? ""}</span>
          <span className={styles.yValueGap} />
        </>
      )}
      <div className={lineClass} />
      {showSecondYAxis && (
        <>
          <span className={styles.yValueGap} />
          <span className={styles.yValue}>{secondLabel ?? ""}</span>
        </>
      )}
    </div>
  );
}

interface VerticalLinesLayerProps {
  /** Number of vertical lines (matches xLabels) */
  lineCount: number;
  /** Width of each slot — must match xLabel width for alignment */
  slotWidth: number | undefined;
  top: number;
  bottom: number;
  leftOffset: number;
  rightOffset: number;
}

function VerticalLinesLayer({
  lineCount,
  slotWidth,
  top,
  bottom,
  leftOffset,
  rightOffset,
}: VerticalLinesLayerProps) {
  return (
    <div
      className={styles.verticalLinesLayer}
      style={{ top, bottom, left: leftOffset, right: rightOffset }}
    >
      {Array.from({ length: lineCount }).map((_, i) => (
        <div
          key={i}
          className={styles.verticalLineSlot}
          style={slotWidth ? { width: slotWidth } : { flex: 1 }}
        >
          <div className={styles.verticalLine} />
        </div>
      ))}
    </div>
  );
}

/* ── Main Component ── */

export default function ChartGrid({
  horizontalLines = true,
  verticalLines = false,
  showYValues = true,
  showSecondYAxis = false,
  showYAxisTitle = false,
  yAxisTitle = "Y label",
  secondYAxisTitle = "Y label",
  showXAxisTitle = false,
  xAxisTitle = "X label",
  yLabels = ["75M", "50M", "25M", "0"],
  secondYLabels,
  xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  darkMode = false,
  height = 160,
  children,
  className,
}: ChartGridProps) {
  const themeClass = darkMode ? styles.dark : styles.light;

  const wrapperClasses = [styles.wrapper, themeClass, className ?? ""]
    .filter(Boolean)
    .join(" ");

  /* Y-axis area offset for aligning X labels and vertical lines */
  const yValueOffset = showYValues ? 48 : 0; /* 32px label + 16px gap */
  const secondYOffset = showSecondYAxis ? 48 : 0;

  const lineCount = yLabels.length;

  /* X label width — always flex:1 so slots align uniformly with
     chart content layers (BarChart, LineChart, etc.) that also use flex:1 */
  const xLabelWidth: number | undefined = undefined;

  return (
    <div className={wrapperClasses}>
      {/* Y Axis Title Row */}
      {showYAxisTitle && (
        <div className={styles.yAxisTitleRow}>
          <span className={styles.yAxisTitle}>{yAxisTitle}</span>
          {showSecondYAxis && (
            <span className={styles.yAxisTitleRight}>
              {secondYAxisTitle}
            </span>
          )}
        </div>
      )}

      {/* Grid Area */}
      <div className={styles.gridArea} style={{ height }}>
        {/* Vertical Lines Layer — matches LINE_INSET so it spans first line → baseline */}
        {verticalLines && (
          <VerticalLinesLayer
            lineCount={xLabels.length}
            slotWidth={xLabelWidth}
            top={LINE_INSET}
            bottom={LINE_INSET}
            leftOffset={yValueOffset}
            rightOffset={secondYOffset}
          />
        )}

        {/* Horizontal Lines + Y Values (absolute positioned rows) */}
        <div className={styles.horizontalLinesContainer}>
          {yLabels.map((label, i) => (
            <HorizontalLineRow
              key={i}
              label={label}
              secondLabel={secondYLabels?.[i]}
              showYValues={showYValues}
              showSecondYAxis={showSecondYAxis}
              isBaseline={i === lineCount - 1}
              showLine={horizontalLines}
              top={getLineTop(i, lineCount, height)}
            />
          ))}
        </div>

        {/* Content Overlay */}
        {children && (
          <div
            className={styles.contentOverlay}
            style={{
              top: LINE_INSET,
              bottom: LINE_INSET,
              left: yValueOffset,
              right: secondYOffset,
            }}
          >
            {children}
          </div>
        )}
      </div>

      {/* X Axis Labels Row */}
      {xLabels.length > 0 && (
        <div
          className={styles.xAxisRow}
          style={{
            paddingLeft: yValueOffset,
            paddingRight: secondYOffset,
          }}
        >
          {xLabels.map((label, i) => (
            <span
              key={i}
              className={styles.xLabel}
              style={xLabelWidth ? { width: xLabelWidth } : { flex: 1 }}
            >
              {label}
            </span>
          ))}
        </div>
      )}

      {/* X Axis Title */}
      {showXAxisTitle && (
        <div
          className={styles.xAxisTitleRow}
          style={{
            paddingLeft: yValueOffset,
            paddingRight: secondYOffset,
          }}
        >
          <span className={styles.xAxisTitle}>{xAxisTitle}</span>
        </div>
      )}
    </div>
  );
}
