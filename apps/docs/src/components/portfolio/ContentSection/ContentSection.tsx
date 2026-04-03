import styles from "./ContentSection.module.css";

interface ContentSectionProps {
  children: React.ReactNode;
  alternate?: boolean;
  id?: string;
}

export default function ContentSection({
  children,
  alternate = false,
  id,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${alternate ? styles.alternate : ""}`}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
}
