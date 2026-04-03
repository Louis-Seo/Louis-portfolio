"use client";

import styles from "./Badge.module.css";

/* ── Types ── */

type BadgeSize = "large" | "medium";
type BadgeColor = "gray" | "green" | "blue" | "yellow" | "red";

/* ── Close Icon SVG ── */

function CloseIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4L10 10M10 4L4 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Badge (Textual Badge) ── */

interface BadgeProps {
  size?: BadgeSize;
  color?: BadgeColor;
  outline?: boolean;
  closable?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

const BG_CLASS: Record<BadgeColor, string> = {
  gray: styles.bgGray,
  green: styles.bgGreen,
  blue: styles.bgBlue,
  yellow: styles.bgYellow,
  red: styles.bgRed,
};

const TEXT_CLASS: Record<BadgeColor, string> = {
  gray: styles.textGray,
  green: styles.textGreen,
  blue: styles.textBlue,
  yellow: styles.textYellow,
  red: styles.textRed,
};

const OUTLINE_CLASS: Record<BadgeColor, string> = {
  gray: styles.outlineGray,
  green: styles.outlineGreen,
  blue: styles.outlineBlue,
  yellow: styles.outlineYellow,
  red: styles.outlineRed,
};

const CLOSE_ICON_SIZE: Record<BadgeSize, number> = {
  large: 14,
  medium: 12,
};

export default function Badge({
  size = "large",
  color = "gray",
  outline = false,
  closable = false,
  onClose,
  children,
  className,
}: BadgeProps) {
  const containerClasses = [
    styles.badge,
    size === "large" ? styles.sizeLarge : styles.sizeMedium,
    BG_CLASS[color],
    TEXT_CLASS[color],
    outline ? OUTLINE_CLASS[color] : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={containerClasses}>
      <span className={styles.content}>
        <span className={styles.label}>{children}</span>
        {closable && (
          <button
            className={styles.closeButton}
            onClick={onClose}
            type="button"
            aria-label="Close"
          >
            <CloseIcon size={CLOSE_ICON_SIZE[size]} />
          </button>
        )}
      </span>
    </span>
  );
}

/* ── Count Badge ── */

interface CountBadgeProps {
  count: number;
  className?: string;
}

export function CountBadge({ count, className }: CountBadgeProps) {
  const classes = [styles.countBadge, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {count}
    </span>
  );
}
