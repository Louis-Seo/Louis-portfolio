"use client";

import { useState, useEffect } from "react";
import DocsSearch from "@/components/DocsSearch/DocsSearch";
import styles from "./DocsHeader.module.css";

interface DocsHeaderProps {
  onMenuToggle?: () => void;
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
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
          <a href="/portfolio" className={styles.brandParent}>
            Louis Seo
          </a>
          <span className={styles.brandSep}>/</span>
          <a href="/design-system" className={styles.brandCurrent}>
            Design System
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <DocsSearch />
      </div>
    </header>
  );
}
