import styles from "./StatGrid.module.css";

interface StatGridProps {
  items: { value: string; label: string }[];
}

export default function StatGrid({ items }: StatGridProps) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.label} className={styles.card}>
          <div className={styles.value}>{item.value}</div>
          <div className={styles.label}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}
