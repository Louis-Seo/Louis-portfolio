"use client";

import styles from "./Checkbox.module.css";

type CheckboxSize = "large" | "medium" | "sMedium" | "small";

interface CheckboxProps {
  size?: CheckboxSize;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

/* Inline checkmark SVG */
function CheckIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 3.25L4.75 8.75L2.25 6.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Inline minus SVG for indeterminate state */
function MinusIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 6H9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const GAP_CLASS: Record<CheckboxSize, string> = {
  large: styles.gapLarge,
  medium: styles.gapMedium,
  sMedium: styles.gapSMedium,
  small: styles.gapSmall,
};

const BOX_CLASS: Record<CheckboxSize, string> = {
  large: styles.boxLarge,
  medium: styles.boxMedium,
  sMedium: styles.boxSMedium,
  small: styles.boxSmall,
};

const LABEL_CLASS: Record<CheckboxSize, string> = {
  large: styles.labelLarge,
  medium: styles.labelMedium,
  sMedium: styles.labelSMedium,
  small: styles.labelSmall,
};

const CHECK_ICON_SIZE: Record<CheckboxSize, number> = {
  large: 14,
  medium: 12,
  sMedium: 10,
  small: 8,
};

export default function Checkbox({
  size = "medium",
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  onChange,
  className,
}: CheckboxProps) {
  const isFilled = checked || indeterminate;

  const containerClasses = [
    styles.checkbox,
    GAP_CLASS[size],
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const boxClasses = [
    styles.box,
    BOX_CLASS[size],
    isFilled ? styles.boxChecked : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={containerClasses}
      role="checkbox"
      aria-checked={indeterminate ? "mixed" : checked}
      onClick={!disabled ? () => onChange?.(!checked) : undefined}
    >
      <div className={boxClasses}>
        {indeterminate ? (
          <span className={styles.checkIcon}>
            <MinusIcon size={CHECK_ICON_SIZE[size]} />
          </span>
        ) : checked ? (
          <span className={styles.checkIcon}>
            <CheckIcon size={CHECK_ICON_SIZE[size]} />
          </span>
        ) : null}
      </div>
      {label && (
        <span className={`${styles.label} ${LABEL_CLASS[size]}`}>{label}</span>
      )}
    </div>
  );
}
