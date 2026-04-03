import styles from "./Spinner.module.css";

export type SpinnerSize = "large" | "medium" | "small";

interface SpinnerProps {
  size?: SpinnerSize;
  color?: string;
  className?: string;
}

export default function Spinner({
  size = "medium",
  color,
  className,
}: SpinnerProps) {
  return (
    <span
      className={`${styles.spinner} ${styles[size]} ${className ?? ""}`}
      style={color ? { borderColor: color, borderTopColor: "transparent" } : undefined}
      role="status"
      aria-label="Loading"
    />
  );
}
