"use client";

import { useState } from "react";
import DocsHeader from "@/components/DocsHeader/DocsHeader";
import DocsSidebar from "@/components/DocsSidebar/DocsSidebar";
import DocsToc from "@/components/DocsToc/DocsToc";
import styles from "./layout.module.css";

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <DocsHeader onMenuToggle={() => setSidebarOpen((prev) => !prev)} />
      <DocsSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.contentMain} data-docs-content>
            {children}
          </div>
          <aside className={styles.tocSidebar}>
            <DocsToc />
          </aside>
        </div>
      </main>
    </>
  );
}
