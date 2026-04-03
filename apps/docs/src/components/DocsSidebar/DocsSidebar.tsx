"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";
import styles from "./DocsSidebar.module.css";

interface DocsSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function DocsSidebar({ isOpen, onClose }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.nav}>
          {SIDEBAR_SECTIONS.map((section) => (
            <div key={section.id} className={styles.section}>
              <div className={styles.sectionTitle}>{section.title}</div>
              <ul className={styles.sectionItems}>
                {section.items.map((item) => {
                  const href = `${section.basePath}/${item.id}`;
                  const isActive = pathname === href;
                  return (
                    <li key={item.id}>
                      <Link
                        href={href}
                        className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                        onClick={onClose}
                      >
                        {item.label}
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
