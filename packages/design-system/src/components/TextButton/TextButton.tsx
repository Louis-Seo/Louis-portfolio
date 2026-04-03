"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./TextButton.module.css";

export type TextButtonVariant = "text" | "textWithUnderline";
export type TextButtonSize = "large" | "medium" | "small" | "xSmall";
export type TextButtonState = "default" | "pressed" | "disabled";

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TextButtonVariant;
  size?: TextButtonSize;
  state?: TextButtonState;
  showChevron?: boolean;
  children: ReactNode;
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TextButton({
  variant = "text",
  size = "medium",
  state = "default",
  showChevron = false,
  children,
  className,
  ...rest
}: TextButtonProps) {
  const classes = [
    styles.textButton,
    styles[size],
    variant === "textWithUnderline" ? styles.textWithUnderline : "",
    state !== "default" ? styles[state] : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={state === "disabled"} {...rest}>
      {children}
      {showChevron && (
        <span className={styles.chevron}>
          <ChevronIcon />
        </span>
      )}
    </button>
  );
}
