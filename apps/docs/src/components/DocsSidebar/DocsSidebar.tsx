"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";
import styles from "./DocsSidebar.module.css";

interface DocsSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function DocsSidebar({ isOpen, onClose }: DocsSidebarProps) {
  const pathname = usePathname();
  const tSections = useTranslations("ds.common.sidebar.sections");
  const tItems = useTranslations("ds.common.sidebar.items");

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.nav}>
          {SIDEBAR_SECTIONS.map((section) => (
            <div key={section.key} className={styles.section}>
              <div className={styles.sectionTitle}>{tSections(section.key)}</div>
              <ul className={styles.sectionItems}>
                {section.items.map((item) => {
                  const href = `${section.basePath}/${item.id}` as
                    | `/foundation/${string}`
                    | `/components/${string}`;
                  const isActive = pathname === href;
                  return (
                    <li key={item.id}>
                      <Link
                        href={href}
                        className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                        onClick={onClose}
                      >
                        {tItems(item.id)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
