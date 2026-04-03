"use client";

import styles from "./ProgressRing.module.css";

/* ── Types ── */

export interface ProgressRingProps {
  /** Progress value (0–100) */
  value: number;
  /** Ring colour. Default var(--green-500). */
  color?: string;
  /** Track (background ring) colour. Default var(--gray-200). */
  trackColor?: string;
  /** Center label (defaults to "{value}%") */
  label?: string;
  /** Subtitle below the ring */
  subLabel?: string;
  /** Ring thickness as fraction of radius (0–1). Default 0.15 */
  thickness?: number;
  /** Diameter in px. Default 80. */
  size?: number;
  /** Use rounded stroke line caps. Default true. */
  rounded?: boolean;
  /** Enable dark mode. Default false. */
  darkMode?: boolean;
  /** Custom class name */
  className?: string;
}

/* ── Component ── */

export default function ProgressRing({
  value,
  color = "var(--green-500)",
  trackColor = "var(--gray-200)",
  label,
  subLabel,
  thickness = 0.15,
  size = 80,
  rounded = true,
  darkMode = false,
  className,
}: ProgressRingProps) {
  const SVG_SIZE = 200;
  const center = SVG_SIZE / 2;
  const strokeW = SVG_SIZE * thickness;
  const r = (SVG_SIZE - strokeW) / 2;
  const circumference = 2 * Math.PI * r;
  const clampedValue = Math.max(0, Math.min(100, value));
  const arcLength = (clampedValue / 100) * circumference;

  const displayLabel = label ?? `${Math.round(clampedValue)}%`;
  const themeClass = darkMode ? styles.dark : styles.light;
  const wrapperClasses = [styles.container, themeClass, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      <div className={styles.ringWrapper} style={{ width: size, height: size }}>
        <svg
          className={styles.svg}
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          width={size}
          height={size}
        >
          {/* Background track */}
          <circle
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeW}
          />
          {/* Progress arc */}
          {clampedValue > 0 && (
            <circle
              cx={center}
              cy={center}
              r={r}
              fill="none"
              stroke={color}
              strokeWidth={strokeW}
              strokeLinecap={rounded ? "round" : "butt"}
              strokeDasharray={`${arcLength} ${circumference}`}
              transform={`rotate(-90 ${center} ${center})`}
            />
          )}
        </svg>

        {/* Center label */}
        <div className={styles.centerLabel}>
          <span className={styles.centerValue}>{displayLabel}</span>
        </div>
      </div>

      {/* Subtitle below ring */}
      {subLabel && <div className={styles.subLabel}>{subLabel}</div>}
    </div>
  );
}
