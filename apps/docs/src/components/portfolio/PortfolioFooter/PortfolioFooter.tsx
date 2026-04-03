import styles from "./PortfolioFooter.module.css";

export default function PortfolioFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Louis Seo &middot; Product Designer
        </p>
      </div>
    </footer>
  );
}
