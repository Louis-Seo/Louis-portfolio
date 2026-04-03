"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import styles from "./DocsToc.module.css";

/* ── Types ── */
interface TocChild {
  id: string;
  text: string;
}

interface TocGroup {
  id: string;
  text: string;
  children: TocChild[];
}

/* ── Helpers ── */
function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 80) || "section"
  );
}

function assignId(el: HTMLElement, usedIds: Set<string>) {
  if (el.id) {
    usedIds.add(el.id);
    return;
  }
  const base = slugify(el.textContent?.trim() || "");
  let id = base;
  let n = 1;
  while (usedIds.has(id) || document.getElementById(id)) {
    id = `${base}-${n++}`;
  }
  el.id = id;
  usedIds.add(id);
}

/* ── Component ── */
export default function DocsToc() {
  const pathname = usePathname();
  const [groups, setGroups] = useState<TocGroup[]>([]);
  const [activeItemId, setActiveItemId] = useState("");
  const [expandedGroupId, setExpandedGroupId] = useState("");
  const headingEls = useRef<HTMLElement[]>([]);
  const groupsRef = useRef<TocGroup[]>([]);
  const clickLock = useRef(false);

  /* ════════════════════════════════════════
     1. Scan headings → build tree
     ════════════════════════════════════════ */
  useEffect(() => {
    // Reset on route change
    setActiveItemId("");
    setExpandedGroupId("");

    const timer = setTimeout(() => {
      const container = document.querySelector("[data-docs-content]");
      if (!container) return;

      const headings = Array.from(
        container.querySelectorAll("h2, h3")
      ) as HTMLElement[];

      const usedIds = new Set<string>();
      headings.forEach((el) => assignId(el, usedIds));

      // Build tree: h2 = group, h3 = child under nearest preceding h2
      const tree: TocGroup[] = [];
      let currentGroup: TocGroup | null = null;

      headings.forEach((el) => {
        const text = el.textContent?.trim() || "";
        if (!text) return;

        if (el.tagName === "H2") {
          currentGroup = { id: el.id, text, children: [] };
          tree.push(currentGroup);
        } else if (el.tagName === "H3" && currentGroup) {
          currentGroup.children.push({ id: el.id, text });
        }
      });

      headingEls.current = headings.filter((h) => h.id);
      groupsRef.current = tree;
      setGroups(tree);

      // Handle initial URL hash
      const hash = window.location.hash.slice(1);
      if (hash) {
        const target = document.getElementById(hash);
        if (target) {
          requestAnimationFrame(() => {
            window.scrollTo({
              top:
                target.getBoundingClientRect().top + window.scrollY - 88,
            });
          });
        }
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  /* ════════════════════════════════════════
     2. Scroll spy (single source of truth)
     ════════════════════════════════════════ */
  useEffect(() => {
    if (groups.length === 0) return;

    let raf = 0;

    const findParentGroup = (id: string): TocGroup | undefined =>
      groupsRef.current.find(
        (g) => g.id === id || g.children.some((c) => c.id === id)
      );

    const update = () => {
      if (clickLock.current) return;

      const els = headingEls.current;
      if (els.length === 0) return;

      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const OFFSET = 110;

      // At page bottom → activate last heading
      if (scrollY + vh >= docH - 30) {
        const last = els[els.length - 1];
        setActiveItemId(last.id);
        const g = findParentGroup(last.id);
        if (g) setExpandedGroupId(g.id);
        return;
      }

      // Last heading whose top passed the offset line
      let currentId = "";
      for (const el of els) {
        if (el.getBoundingClientRect().top <= OFFSET) {
          currentId = el.id;
        } else {
          break;
        }
      }

      // If nothing passed, check first heading in upper half
      if (!currentId && els.length > 0) {
        if (els[0].getBoundingClientRect().top <= vh * 0.5) {
          currentId = els[0].id;
        }
      }

      if (currentId) {
        setActiveItemId(currentId);
        const g = findParentGroup(currentId);
        if (g) setExpandedGroupId(g.id);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial run after a tick (DOM needs to be ready)
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [groups]); // ← NO activeItemId dependency

  /* ════════════════════════════════════════
     3. Click handler
     ════════════════════════════════════════ */
  const handleClick = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;

      // Lock scroll spy during animation
      clickLock.current = true;
      setActiveItemId(id);

      const g = groupsRef.current.find(
        (g) => g.id === id || g.children.some((c) => c.id === id)
      );
      if (g) setExpandedGroupId(g.id);

      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });

      setTimeout(() => {
        clickLock.current = false;
      }, 800);

      window.history.replaceState(null, "", `${pathname}#${id}`);
    },
    [pathname]
  );

  /* ════════════════════════════════════════
     4. Render
     ════════════════════════════════════════ */
  // Hide TOC on landing/hub pages
  const isLanding =
    pathname === "/" ||
    pathname === "/components" ||
    pathname === "/foundation" ||
    pathname === "/portfolio";
  if (isLanding || groups.length === 0) return null;

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      <p className={styles.title}>On this page</p>
      <ul className={styles.list}>
        {groups.map((group) => {
          const isExpanded = expandedGroupId === group.id;
          const isGroupItemActive =
            activeItemId === group.id ||
            group.children.some((c) => c.id === activeItemId);

          return (
            <li key={group.id} className={styles.group}>
              <a
                href={`#${group.id}`}
                onClick={(e) => handleClick(e, group.id)}
                className={`${styles.groupLink} ${
                  isGroupItemActive ? styles.groupLinkActive : ""
                }`}
              >
                {group.text}
              </a>

              {group.children.length > 0 && (
                <div
                  className={`${styles.children} ${
                    isExpanded ? styles.childrenOpen : ""
                  }`}
                >
                  <ul className={styles.childList}>
                    {group.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          onClick={(e) => handleClick(e, child.id)}
                          className={`${styles.childLink} ${
                            activeItemId === child.id
                              ? styles.childLinkActive
                              : ""
                          }`}
                        >
                          {child.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
