"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "../Spinner/Spinner";
import styles from "./Button.module.css";

export type ButtonType = "primary" | "secondary";
export type ButtonSize = "large" | "medium" | "small" | "xSmall" | "2xSmall";
export type ButtonState =
  | "default"
  | "pressed"
  | "clicked"
  | "disabled"
  | "progressing";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  state?: ButtonState;
  icon?: ReactNode;
  children: ReactNode;
}

const sizeMap: Record<ButtonSize, string> = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
  xSmall: styles.xSmall,
  "2xSmall": styles.xxSmall,
};

const spinnerSizeMap: Record<ButtonSize, "large" | "medium" | "small"> = {
  large: "large",
  medium: "medium",
  small: "small",
  xSmall: "small",
  "2xSmall": "small",
};

export default function Button({
  variant = "primary",
  size = "medium",
  state = "default",
  icon,
  children,
  className,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    sizeMap[size],
    state !== "default" ? styles[state] : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = state === "disabled" || state === "progressing";
  const spinnerColor =
    variant === "primary" ? "var(--gray-50)" : "var(--blue-500)";

  return (
    <button className={classes} disabled={isDisabled} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
      {state === "progressing" && (
        <span className={styles.spinnerOverlay}>
          <Spinner size={spinnerSizeMap[size]} color={spinnerColor} />
        </span>
      )}
    </button>
  );
}
