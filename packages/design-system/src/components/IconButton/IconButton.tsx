"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "../Spinner/Spinner";
import styles from "./IconButton.module.css";

export type IconButtonType = "primary" | "secondary" | "tertiary";
export type IconButtonSize =
  | "large"
  | "medium"
  | "small"
  | "xSmall"
  | "2xSmall"
  | "3xSmall"
  | "4xSmall";
export type IconButtonState =
  | "default"
  | "pressed"
  | "clicked"
  | "disabled"
  | "progressing";
export type Elevation = "dp0" | "dp1";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonType;
  size?: IconButtonSize;
  state?: IconButtonState;
  elevation?: Elevation;
  icon: ReactNode;
}

const sizeMap: Record<IconButtonSize, string> = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
  xSmall: styles.xSmall,
  "2xSmall": styles.xxSmall,
  "3xSmall": styles.xxxSmall,
  "4xSmall": styles.xxxxSmall,
};

const spinnerSizeMap: Record<IconButtonSize, "large" | "medium" | "small"> = {
  large: "medium",
  medium: "small",
  small: "small",
  xSmall: "small",
  "2xSmall": "small",
  "3xSmall": "small",
  "4xSmall": "small",
};

export default function IconButton({
  variant = "primary",
  size = "medium",
  state = "default",
  elevation = "dp0",
  icon,
  className,
  ...rest
}: IconButtonProps) {
  const classes = [
    styles.iconButton,
    styles[variant],
    sizeMap[size],
    state !== "default" ? styles[state] : "",
    variant === "tertiary" && elevation === "dp1" ? styles.dp1 : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = state === "disabled" || state === "progressing";

  const spinnerColor =
    variant === "primary"
      ? "var(--gray-50)"
      : variant === "secondary"
        ? "var(--gray-500)"
        : "var(--gray-700)";

  return (
    <button
      className={classes}
      disabled={isDisabled}
      aria-label="icon button"
      {...rest}
    >
      {state === "progressing" ? (
        <span className={styles.spinnerOverlay}>
          <Spinner size={spinnerSizeMap[size]} color={spinnerColor} />
        </span>
      ) : (
        icon
      )}
    </button>
  );
}
