"use client";

import styles from "./RadioButton.module.css";

type RadioSize = "medium" | "small";

interface RadioButtonProps {
  size?: RadioSize;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function RadioButton({
  size = "medium",
  checked = false,
  disabled = false,
  label,
  onChange,
  className,
}: RadioButtonProps) {
  const containerClasses = [
    styles.radio,
    size === "medium" ? styles.gapMedium : styles.gapSmall,
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const circleClasses = [
    styles.circle,
    size === "medium" ? styles.circleMedium : styles.circleSmall,
    checked ? styles.circleChecked : "",
  ]
    .filter(Boolean)
    .join(" ");

  const dotClasses = [
    styles.dot,
    size === "medium" ? styles.dotMedium : styles.dotSmall,
  ].join(" ");

  return (
    <div
      className={containerClasses}
      role="radio"
      aria-checked={checked}
      onClick={!disabled ? () => onChange?.(!checked) : undefined}
    >
      <div className={circleClasses}>
        {checked && <div className={dotClasses} />}
      </div>
      {label && (
        <span
          className={`${styles.label} ${size === "medium" ? styles.labelMedium : styles.labelSmall}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
