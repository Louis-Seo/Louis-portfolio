import styles from "./ProjectHero.module.css";

interface ProjectHeroProps {
  label: string;
  title: string;
  description: string;
  meta: { label: string; value: string }[];
}

export default function ProjectHero({
  label,
  title,
  description,
  meta,
}: ProjectHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.label}>{label}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          {meta.map((item) => (
            <div key={item.label} className={styles.metaItem}>
              <span className={styles.metaLabel}>{item.label}</span>
              <span className={styles.metaValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
