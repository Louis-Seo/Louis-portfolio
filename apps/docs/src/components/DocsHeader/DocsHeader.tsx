"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import DocsSearch from "@/components/DocsSearch/DocsSearch";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import styles from "./DocsHeader.module.css";

interface DocsHeaderProps {
  onMenuToggle?: () => void;
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 6H21M3 12H21M3 18H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function DocsHeader({ onMenuToggle }: DocsHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.left}>
        <button
          className={styles.menuButton}
          onClick={onMenuToggle}
          type="button"
          aria-label="Toggle menu"
        >
          <MenuIcon />
        </button>
        <div className={styles.brand}>
          <Link href="/portfolio" className={styles.brandParent}>
            Louis Seo
          </Link>
          <span className={styles.brandSep}>/</span>
          <Link href="/design-system" className={styles.brandCurrent}>
            Design System
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <DocsSearch />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
