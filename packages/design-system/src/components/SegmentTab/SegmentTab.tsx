"use client";

import styles from "./SegmentTab.module.css";

interface SegmentTabProps {
  items: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

export default function SegmentTab({
  items,
  selectedIndex,
  onChange,
  className,
}: SegmentTabProps) {
  return (
    <div className={`${styles.container} ${className ?? ""}`} role="tablist">
      {items.map((item, index) => (
        <button
          key={index}
          className={`${styles.tab} ${index === selectedIndex ? styles.active : ""}`}
          onClick={() => onChange(index)}
          role="tab"
          aria-selected={index === selectedIndex}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
