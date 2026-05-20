import { getTranslations } from "next-intl/server";
import styles from "./PortfolioFooter.module.css";

export default async function PortfolioFooter() {
  const t = await getTranslations("common.footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>{t("copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
