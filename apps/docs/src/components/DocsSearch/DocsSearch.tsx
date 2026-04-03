"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";
import styles from "./DocsSearch.module.css";

/* ═══════════════════════════════════════════
   Search Index
   ═══════════════════════════════════════════ */

interface SearchEntry {
  title: string;
  path: string; // e.g. "Button / Anatomy"
  category: string;
  href: string;
  snippet?: string;
  keywords: string;
  priority: number; // 1 = page, 2 = section, 3 = subsection
}

const SECTION_DATA: Record<
  string,
  { sections: string[]; snippet?: string }
> = {
  // Foundation
  typography: {
    snippet: "타입 스케일과 컬러를 고려한 타이포그래피 가이드",
    sections: ["Type Usage", "Type Scale Logic", "Type Weight", "Type Scale", "Weight Usage", "Usage Notes"],
  },
  color: {
    snippet: "브랜드 컬러, 텍스트, 배경, 보더 등 컬러 시스템",
    sections: ["Color Usage Guidelines", "Brand Colors", "Main Green Colour Variation", "Text Colour", "Background Depth", "Selected Color", "Border Colour", "Secondary & Extra Colours"],
  },
  icon: {
    snippet: "아이콘 사이즈, 레이아웃, 키라인, 스타일 가이드",
    sections: ["Icon Size", "Layout", "Keyline Shapes", "Stroke", "Radius", "Styles", "Colors"],
  },
  "object-style": {
    snippet: "Radius, Elevation, Border 등 오브젝트 스타일",
    sections: ["Radius", "Elevation", "Border"],
  },
  // Components
  button: {
    snippet: "Primary, Secondary, Tertiary, Extra 버튼 컴포넌트",
    sections: ["Components", "Anatomy", "Varients", "Table of Figma Properties", "Spec", "Usage & Placement", "Loading Status"],
  },
  dropdown: {
    snippet: "옵션 선택, 필터링, 정렬에 사용되는 드롭다운",
    sections: ["Anatomy", "Components", "Varients", "Color", "Spacing", "Contents", "Usage & Placement", "Loading Status", "Menu Placement", "Menu Items"],
  },
  navigation: {
    snippet: "GNB, 탭, 메뉴 등 네비게이션 컴포넌트",
    sections: ["Wind GNB", "Anatomy", "Variants", "GNB Dropdown", "Spec", "Usage Guidelines"],
  },
  breadcrumb: {
    snippet: "현재 위치를 보여주고 상위 페이지로 이동",
    sections: ["Anatomy", "Spec", "Item Status"],
  },
  pagination: {
    snippet: "페이지 이동을 위한 페이지네이션 컴포넌트",
    sections: ["Anatomy", "Pagenation Item", "Use Case", "Spec"],
  },
  input: {
    snippet: "텍스트 입력, 검색, 숫자 입력 등 인풋 컴포넌트",
    sections: ["Anatomy", "Components", "Varients", "Sizing", "Search", "Usage & Placement"],
  },
  "toggle-radio-checkbox": {
    snippet: "체크박스, 라디오 버튼, 토글 스위치",
    sections: ["Components", "Selection Control Group", "Checkbox", "Radio Button", "Toggle-Switch"],
  },
  chip: {
    snippet: "필터링과 선택을 위한 칩 컴포넌트",
    sections: ["Anatomy", "Components", "Filter Chip", "Severity Chip"],
  },
  "date-picker": {
    snippet: "날짜, 년도, 시간 선택을 위한 피커",
    sections: ["Anatomy", "Components", "Sizing", "Alignment", "Picker", "Usecase"],
  },
  toolbar: {
    snippet: "도구 모음 컴포넌트",
    sections: ["Anatomy", "Usage", "Positioning", "Components", "Varients"],
  },
  slider: {
    snippet: "값을 조정하는 슬라이더 컴포넌트",
    sections: ["Anatomy", "Usage", "Components", "State"],
  },
  filter: {
    snippet: "데이터 필터링을 위한 필터 컴포넌트",
    sections: ["Components", "Exposed Filter", "Hidden Filter"],
  },
  "expansion-panel": {
    snippet: "확장/축소 패널 컴포넌트",
    sections: ["Anatomy", "Usage", "Variants"],
  },
  "table-list": {
    snippet: "데이터를 정리해 보여주는 테이블 컴포넌트",
    sections: ["Anatomy", "Usage", "Table Style", "Content Data Alignment", "Interaction", "State", "Sizing"],
  },
  "badge-tag": {
    snippet: "알림, 상태, 라벨을 표시하는 배지/태그",
    sections: ["Anatomy", "Usage", "Semantic Variants", "Contents", "Sizing", "Variants"],
  },
  avatar: {
    snippet: "사용자를 나타내는 아바타 컴포넌트",
    sections: ["Anatomy", "Usage", "Design Spec", "Size", "Color"],
  },
  "empty-state": {
    snippet: "데이터가 없을 때 보여주는 빈 상태 화면",
    sections: ["Anatomy", "Usage", "Type of Empty State", "Illustration Types"],
  },
  "image-gallery": {
    snippet: "이미지를 갤러리 형태로 보여주는 컴포넌트",
    sections: ["Anatomy", "Usage", "Status", "Spacing", "Contents"],
  },
  "tree-view": {
    snippet: "중첩 구조를 탐색하는 트리 뷰 컴포넌트",
    sections: ["Anatomy", "Usage", "Spacing", "Variants"],
  },
  "feedback-message": {
    snippet: "토스트, 알럿 등 피드백 메시지 컴포넌트",
    sections: ["Components", "Alert", "Toast"],
  },
  tooltip: {
    snippet: "UI 요소에 대한 부가 설명 툴팁",
    sections: ["Anatomy", "Usage", "Spec", "Contents", "Interaction", "Components", "Usage Guidelines"],
  },
  modal: {
    snippet: "확인, 입력을 받기 위한 오버레이 모달",
    sections: ["Anatomy", "Buttons", "Modality Criteria & Checklist", "Scrim Area", "Spacing", "Content & Action Area"],
  },
  indicator: {
    snippet: "스피너, 프로그레스바 등 로딩 인디케이터",
    sections: ["Components", "Spinner", "Progress Bar"],
  },
};

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  SIDEBAR_SECTIONS.forEach((section) => {
    section.items.forEach((item) => {
      const href = `${section.basePath}/${item.id}`;
      const data = SECTION_DATA[item.id];

      // Page-level entry
      entries.push({
        title: item.label,
        path: item.label,
        category: section.title,
        href,
        snippet: data?.snippet,
        keywords: `${item.label} ${section.title} ${item.id} ${data?.snippet || ""}`.toLowerCase(),
        priority: 1,
      });

      // Section-level entries
      if (data?.sections) {
        data.sections.forEach((sec) => {
          entries.push({
            title: sec,
            path: `${item.label} / ${sec}`,
            category: section.title,
            href: `${href}#${slugify(sec)}`,
            keywords: `${sec} ${item.label} ${section.title}`.toLowerCase(),
            priority: 2,
          });
        });
      }
    });
  });

  return entries;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || "section";
}

/* ═══════════════════════════════════════════
   Component
   ═══════════════════════════════════════════ */

export default function DocsSearch() {
  const router = useRouter();
  const index = useMemo(() => buildIndex(), []);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter + sort results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return index
      .filter((e) => e.keywords.includes(q))
      .sort((a, b) => {
        // Title exact start match → highest
        const aStart = a.title.toLowerCase().startsWith(q) ? 0 : 1;
        const bStart = b.title.toLowerCase().startsWith(q) ? 0 : 1;
        if (aStart !== bStart) return aStart - bStart;
        // Priority: page > section
        return a.priority - b.priority;
      })
      .slice(0, 10);
  }, [query, index]);

  useEffect(() => setSelectedIdx(0), [results]);

  // ⌘K shortcut
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

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Scroll selected into view
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
      router.push(href);
    },
    [close, router]
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
    [results, selectedIdx, navigate, close]
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

  return (
    <div className={styles.wrap} ref={wrapRef}>
      {/* ── Input ── */}
      <div className={styles.inputBox}>
        <SearchIcon />
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search docs..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
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
          <kbd className={styles.kbd}>⌘K</kbd>
        )}
      </div>

      {/* ── Dropdown Panel ── */}
      {showPanel && (
        <div className={styles.panel}>
          {results.length > 0 ? (
            <div className={styles.list} ref={listRef}>
              {results.map((entry, i) => (
                <button
                  key={`${entry.href}-${i}`}
                  className={`${styles.item} ${
                    i === selectedIdx ? styles.itemActive : ""
                  }`}
                  onClick={() => navigate(entry.href)}
                  onMouseEnter={() => setSelectedIdx(i)}
                  type="button"
                >
                  <div className={styles.itemMain}>
                    <span className={styles.itemPath}>
                      {highlight(entry.path, query)}
                    </span>
                    {entry.snippet && entry.priority === 1 && (
                      <span className={styles.itemSnippet}>
                        {entry.snippet}
                      </span>
                    )}
                  </div>
                  <span className={styles.itemCategory}>
                    {entry.category}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>검색 결과가 없습니다</div>
          )}
        </div>
      )}
    </div>
  );
}

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
