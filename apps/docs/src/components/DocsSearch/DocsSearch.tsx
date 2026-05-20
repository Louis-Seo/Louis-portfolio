"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { SIDEBAR_SECTIONS, type SidebarSectionKey } from "@/data/sidebarData";
import styles from "./DocsSearch.module.css";

/* ═══════════════════════════════════════════
   Search Index
   ═══════════════════════════════════════════ */

interface SearchEntry {
  title: string;
  path: string;
  category: string;
  href: string;
  snippet?: string;
  keywords: string;
  priority: number; // 1 = page, 2 = section
}

/** Section anchors stay in English — they're DS-standard headings. */
const SECTION_ANCHORS: Record<string, string[]> = {
  typography: [
    "Type Usage",
    "Type Scale Logic",
    "Type Weight",
    "Type Scale",
    "Weight Usage",
    "Usage Notes",
  ],
  color: [
    "Color Usage Guidelines",
    "Brand Colors",
    "Main Green Colour Variation",
    "Text Colour",
    "Background Depth",
    "Selected Color",
    "Border Colour",
    "Secondary & Extra Colours",
  ],
  icon: ["Icon Size", "Layout", "Keyline Shapes", "Stroke", "Radius", "Styles", "Colors"],
  "object-style": ["Radius", "Elevation", "Border"],
  button: [
    "Components",
    "Anatomy",
    "Variants",
    "Table of Figma Properties",
    "Spec",
    "Usage & Placement",
    "Loading Status",
  ],
  dropdown: [
    "Anatomy",
    "Components",
    "Variants",
    "Color",
    "Spacing",
    "Contents",
    "Usage & Placement",
    "Loading Status",
    "Menu Placement",
    "Menu Items",
  ],
  navigation: ["Wind GNB", "Anatomy", "Variants", "GNB Dropdown", "Spec", "Usage Guidelines"],
  breadcrumb: ["Anatomy", "Spec", "Item Status"],
  pagination: ["Anatomy", "Pagination Item", "Use Case", "Spec"],
  input: ["Anatomy", "Components", "Variants", "Sizing", "Search", "Usage & Placement"],
  "toggle-radio-checkbox": [
    "Components",
    "Selection Control Group",
    "Checkbox",
    "Radio Button",
    "Toggle Switch",
  ],
  chip: ["Anatomy", "Components", "Filter Chip", "Severity Chip"],
  "date-picker": ["Anatomy", "Components", "Sizing", "Alignment", "Picker", "Use Case"],
  toolbar: ["Anatomy", "Usage", "Positioning", "Components", "Variants"],
  slider: ["Anatomy", "Usage", "Components", "State"],
  filter: ["Components", "Exposed Filter", "Hidden Filter"],
  "expansion-panel": ["Anatomy", "Usage", "Variants"],
  "table-list": [
    "Anatomy",
    "Usage",
    "Table Style",
    "Content Data Alignment",
    "Interaction",
    "State",
    "Sizing",
  ],
  "badge-tag": ["Anatomy", "Usage", "Semantic Variants", "Contents", "Sizing", "Variants"],
  avatar: ["Anatomy", "Usage", "Design Spec", "Size", "Color"],
  "empty-state": ["Anatomy", "Usage", "Type of Empty State", "Illustration Types"],
  "image-gallery": ["Anatomy", "Usage", "Status", "Spacing", "Contents"],
  "tree-view": ["Anatomy", "Usage", "Spacing", "Variants"],
  "feedback-message": ["Components", "Alert", "Toast"],
  tooltip: [
    "Anatomy",
    "Usage",
    "Spec",
    "Contents",
    "Interaction",
    "Components",
    "Usage Guidelines",
  ],
  modal: [
    "Anatomy",
    "Buttons",
    "Modality Criteria & Checklist",
    "Scrim Area",
    "Spacing",
    "Content & Action Area",
  ],
  indicator: ["Components", "Spinner", "Progress Bar"],
};

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

/* ═══════════════════════════════════════════
   Component
   ═══════════════════════════════════════════ */

export default function DocsSearch() {
  const router = useRouter();
  const tSections = useTranslations("ds.common.sidebar.sections");
  const tItems = useTranslations("ds.common.sidebar.items");
  const tSearch = useTranslations("ds.common.search");
  const tSnippets = useTranslations("ds.common.search.snippets");

  const index = useMemo<SearchEntry[]>(() => {
    const entries: SearchEntry[] = [];
    SIDEBAR_SECTIONS.forEach((section) => {
      const categoryLabel = tSections(section.key);
      section.items.forEach((item) => {
        const href = `${section.basePath}/${item.id}`;
        const itemLabel = tItems(item.id);
        const snippet = (() => {
          try {
            return tSnippets(item.id);
          } catch {
            return undefined;
          }
        })();

        entries.push({
          title: itemLabel,
          path: itemLabel,
          category: categoryLabel,
          href,
          snippet,
          keywords: `${itemLabel} ${categoryLabel} ${item.id} ${snippet ?? ""}`.toLowerCase(),
          priority: 1,
        });

        SECTION_ANCHORS[item.id]?.forEach((sec) => {
          entries.push({
            title: sec,
            path: `${itemLabel} / ${sec}`,
            category: categoryLabel,
            href: `${href}#${slugify(sec)}`,
            keywords: `${sec} ${itemLabel} ${categoryLabel}`.toLowerCase(),
            priority: 2,
          });
        });
      });
    });
    return entries;
  }, [tSections, tItems, tSnippets]);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return index
      .filter((e) => e.keywords.includes(q))
      .sort((a, b) => {
        const aStart = a.title.toLowerCase().startsWith(q) ? 0 : 1;
        const bStart = b.title.toLowerCase().startsWith(q) ? 0 : 1;
        if (aStart !== bStart) return aStart - bStart;
        return a.priority - b.priority;
      })
      .slice(0, 10);
  }, [query, index]);

  useEffect(() => setSelectedIdx(0), [results]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.children[selectedIdx] as HTMLElement;
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIdx]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
  }, []);

  const navigate = useCallback(
    (href: string) => {
      close();
      router.push(href as `/${string}`);
    },
    [close, router],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIdx((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[selectedIdx]) {
        e.preventDefault();
        navigate(results[selectedIdx].href);
      } else if (e.key === "Escape") {
        close();
      }
    },
    [results, selectedIdx, navigate, close],
  );

  const highlight = (text: string, q: string) => {
    if (!q.trim()) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark className={styles.hl}>{text.slice(idx, idx + q.length)}</mark>
        {text.slice(idx + q.length)}
      </>
    );
  };

  const showPanel = open && query.trim().length > 0;

  useEffect(() => {
    if (!showPanel) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 828px)").matches) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [showPanel]);

  return (
    <div className={styles.wrap} ref={wrapRef} role="search">
      <div
        className={`${styles.inputBox} ${showPanel ? styles.inputBoxOpen : ""}`}
        onClick={() => inputRef.current?.focus()}
      >
        <SearchIcon />
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder={tSearch("placeholder")}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
          aria-label={tSearch("ariaLabel")}
        />
        {query ? (
          <button
            className={styles.clearBtn}
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            type="button"
          >
            ✕
          </button>
        ) : (
          <kbd className={styles.kbd}>{tSearch("shortcut")}</kbd>
        )}
      </div>

      {showPanel && (
        <div className={styles.panel}>
          {results.length > 0 ? (
            <div className={styles.list} ref={listRef}>
              {results.map((entry, i) => (
                <button
                  key={`${entry.href}-${i}`}
                  className={`${styles.item} ${i === selectedIdx ? styles.itemActive : ""}`}
                  onClick={() => navigate(entry.href)}
                  onMouseEnter={() => setSelectedIdx(i)}
                  type="button"
                >
                  <div className={styles.itemMain}>
                    <span className={styles.itemPath}>{highlight(entry.path, query)}</span>
                    {entry.snippet && entry.priority === 1 && (
                      <span className={styles.itemSnippet}>{entry.snippet}</span>
                    )}
                  </div>
                  <span className={styles.itemCategory}>{entry.category}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>{tSearch("empty")}</div>
          )}
        </div>
      )}
    </div>
  );
}

// Reference to the unused type to avoid lint warning when type isn't exported
export type { SidebarSectionKey };

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className={styles.icon}>
      <path
        d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10ZM14 14l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
