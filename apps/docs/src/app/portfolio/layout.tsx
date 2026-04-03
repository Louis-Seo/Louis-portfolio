import PortfolioHeader from "@/components/portfolio/PortfolioHeader/PortfolioHeader";
import PortfolioFooter from "@/components/portfolio/PortfolioFooter/PortfolioFooter";
import styles from "./layout.module.css";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.portfolio}>
      <PortfolioHeader />
      <main className={styles.main}>{children}</main>
      <PortfolioFooter />
    </div>
  );
}
