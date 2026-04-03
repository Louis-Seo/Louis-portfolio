import styles from "./Breadcrumb.module.css";

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <nav className={`${styles.breadcrumb} ${className ?? ""}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className={styles.breadcrumb} style={{ display: "contents" }}>
            {index > 0 && <span className={styles.separator}>/</span>}
            <span
              className={isLast ? styles.itemActive : styles.item}
              onClick={!isLast ? item.onClick : undefined}
              role={!isLast ? "link" : undefined}
            >
              {item.label}
            </span>
          </span>
        );
      })}
    </nav>
  );
}
