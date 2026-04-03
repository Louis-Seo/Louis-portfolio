"use client";

import styles from "./Toggle.module.css";

type ToggleSize = "medium" | "small";

interface ToggleProps {
  size?: ToggleSize;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function Toggle({
  size = "medium",
  checked = false,
  disabled = false,
  onChange,
  className,
}: ToggleProps) {
  const trackClasses = [
    styles.track,
    size === "medium" ? styles.sizeMedium : styles.sizeSmall,
    checked ? styles.checked : styles.unchecked,
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const knobClasses = [
    styles.knob,
    size === "medium" ? styles.knobMedium : styles.knobSmall,
  ].join(" ");

  return (
    <div
      className={trackClasses}
      role="switch"
      aria-checked={checked}
      onClick={!disabled ? () => onChange?.(!checked) : undefined}
    >
      <div className={knobClasses} />
    </div>
  );
}
