"use client";

import styles from "./Alert.module.css";

/* ── Types ── */

export type AlertType = "success" | "information" | "warning";
export type AlertSize = "large" | "medium";

/* ── Icon SVGs ── */

function CheckCircleIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.33337C4.32 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8 1.33337ZM6.66667 11.3334L3.33334 8.00004L4.27334 7.06004L6.66667 9.44671L11.7267 4.38671L12.6667 5.33337L6.66667 11.3334Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InfoIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.33337C4.32 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8 1.33337ZM8.66667 11.3334H7.33334V7.33337H8.66667V11.3334ZM8.66667 6.00004H7.33334V4.66671H8.66667V6.00004Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ErrorIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.33337C4.32 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8 1.33337ZM8.66667 11.3334H7.33334V10H8.66667V11.3334ZM8.66667 8.66671H7.33334V4.66671H8.66667V8.66671Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Class Maps ── */

const SIZE_CLASS: Record<AlertSize, string> = {
  large: styles.large,
  medium: styles.medium,
};

const TYPE_CLASS: Record<AlertType, string> = {
  success: styles.success,
  information: styles.information,
  warning: styles.warning,
};

const ICON_SIZE: Record<AlertSize, number> = {
  large: 18,
  medium: 16,
};

const ICON_MAP: Record<AlertType, typeof CheckCircleIcon> = {
  success: CheckCircleIcon,
  information: InfoIcon,
  warning: ErrorIcon,
};

/* ── Alert Component ── */

interface AlertProps {
  type?: AlertType;
  size?: AlertSize;
  container?: boolean;
  icon?: boolean;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Alert({
  type = "success",
  size = "medium",
  container = true,
  icon = true,
  description,
  children,
  className,
}: AlertProps) {
  const classes = [
    styles.alert,
    SIZE_CLASS[size],
    TYPE_CLASS[type],
    container ? styles.container : styles.text,
    description ? styles.withDescription : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const IconComponent = ICON_MAP[type];
  const iconSize = ICON_SIZE[size];

  return (
    <div className={classes} role="alert">
      <div className={styles.titleRow}>
        {icon && (
          <span className={styles.iconWrapper}>
            <IconComponent size={iconSize} />
          </span>
        )}
        <span className={styles.title}>{children}</span>
      </div>
      {description && (
        <div
          className={[styles.descriptionRow, icon ? styles.descriptionIndented : ""]
            .filter(Boolean)
            .join(" ")}
        >
          <span className={styles.description}>{description}</span>
        </div>
      )}
    </div>
  );
}
