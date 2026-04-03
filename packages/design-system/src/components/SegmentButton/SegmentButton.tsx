"use client";

import styles from "./SegmentButton.module.css";

export type SegmentButtonVariant = "flat" | "floating";
export type SegmentButtonSize = "medium" | "large";

interface SegmentButtonProps {
  variant?: SegmentButtonVariant;
  size?: SegmentButtonSize;
  items: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

export default function SegmentButton({
  variant = "flat",
  size = "medium",
  items,
  selectedIndex,
  onChange,
  className,
}: SegmentButtonProps) {
  const sizeClass = size === "large" ? styles.sizeLarge : styles.sizeMedium;

  return (
    <div
      className={`${styles.container} ${styles[variant]} ${sizeClass} ${className ?? ""}`}
      role="group"
    >
      {items.map((item, index) => (
        <button
          key={index}
          className={`${styles.item} ${index === selectedIndex ? styles.selected : ""}`}
          onClick={() => onChange(index)}
          aria-pressed={index === selectedIndex}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
