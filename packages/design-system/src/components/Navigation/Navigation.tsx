"use client";

import {
  useState,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import styles from "./Navigation.module.css";

/* ── Types ── */

export interface NavSubItemData {
  id: string;
  label: string;
}

export interface NavItemData {
  id: string;
  label: string;
  icon: ReactNode;
  children?: NavSubItemData[];
}

export interface NavSectionData {
  id: string;
  title: string;
  items: NavItemData[];
}

export interface NavUserInfo {
  name: string;
  subtitle: string;
  avatarLetter: string;
  avatarBg?: string;
  avatarColor?: string;
}

interface NavigationProps {
  sections: NavSectionData[];
  header?: NavUserInfo;
  footer: NavUserInfo;
  selectedItemId?: string;
  selectedSubItemId?: string;
  expandedItemIds?: string[];
  onItemClick?: (itemId: string) => void;
  onSubItemClick?: (itemId: string, subItemId: string) => void;
  onExpandToggle?: (itemId: string) => void;
  fold?: boolean;
  onFoldToggle?: () => void;
  searchable?: boolean;
  className?: string;
}

/* ── Inline SVG Icons ── */

function SearchIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Avatar sub-component ── */

function Avatar({
  letter,
  bg = "#EEEEEE",
  color = "#616161",
}: {
  letter: string;
  bg?: string;
  color?: string;
}) {
  return (
    <span
      className={styles.avatar}
      style={{ backgroundColor: bg, color }}
    >
      {letter.charAt(0).toUpperCase()}
    </span>
  );
}

/* ── Sub Item ── */

function SubItem({
  item,
  selected,
  depth = 0,
  onClick,
}: {
  item: NavSubItemData;
  selected: boolean;
  depth?: number;
  onClick: () => void;
}) {
  const cls = [
    styles.subItem,
    selected && depth === 0 ? styles.subItemSelected : "",
    selected && depth > 0 ? styles.subItemSelectedDeep : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} onClick={onClick} role="menuitem">
      <span className={styles.subItemLabel}>{item.label}</span>
    </div>
  );
}

/* ── Nav Item (expanded sidebar) ── */

function NavItemExpanded({
  item,
  selected,
  expanded,
  selectedSubItemId,
  onItemClick,
  onSubItemClick,
  onExpandToggle,
}: {
  item: NavItemData;
  selected: boolean;
  expanded: boolean;
  selectedSubItemId?: string;
  onItemClick: () => void;
  onSubItemClick: (subId: string) => void;
  onExpandToggle: () => void;
}) {
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = useCallback(() => {
    if (hasChildren) {
      onExpandToggle();
    } else {
      onItemClick();
    }
  }, [hasChildren, onExpandToggle, onItemClick]);

  return (
    <div className={`${styles.navItem} ${selected ? styles.navItemSelected : ""}`}>
      <div className={styles.navItemRow} onClick={handleClick} role="menuitem">
        <span className={styles.navItemIcon}>{item.icon}</span>
        <div className={styles.navItemLabelWrap}>
          <span className={styles.navItemLabel}>{item.label}</span>
          {hasChildren && (
            <span
              className={`${styles.navItemChevron} ${expanded ? styles.navItemChevronOpen : ""}`}
            >
              <ChevronDownIcon />
            </span>
          )}
        </div>
      </div>

      {/* Sub menu */}
      {hasChildren && expanded && (
        <div className={styles.subMenu}>
          <div className={styles.subMenuLine} />
          <div className={styles.subMenuItems}>
            {item.children!.map((sub, idx) => (
              <SubItem
                key={sub.id}
                item={sub}
                selected={selectedSubItemId === sub.id}
                depth={idx > 0 ? 1 : 0}
                onClick={() => onSubItemClick(sub.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Nav Item (collapsed sidebar) ── */

function NavItemCollapsed({
  item,
  selected,
  onClick,
}: {
  item: NavItemData;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${styles.navItemFolded} ${selected ? styles.navItemFoldedSelected : ""}`}
      onClick={onClick}
      role="menuitem"
      title={item.label}
    >
      <span className={`${styles.navItemFoldedIcon} ${selected ? "" : ""}`}>
        {item.icon}
      </span>
    </div>
  );
}

/* ── Main Navigation Component ── */

export default function Navigation({
  sections,
  header,
  footer,
  selectedItemId,
  selectedSubItemId,
  expandedItemIds = [],
  onItemClick,
  onSubItemClick,
  onExpandToggle,
  fold = false,
  onFoldToggle,
  searchable = true,
  className,
}: NavigationProps) {
  const [search, setSearch] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isItemSelected = (itemId: string) => {
    return selectedItemId === itemId;
  };

  const isItemExpanded = (itemId: string) => {
    return expandedItemIds.includes(itemId);
  };

  const sidebarClasses = [
    styles.sidebar,
    fold ? styles.sidebarCollapsed : styles.sidebarExpanded,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  /* ── Collapsed sidebar ── */
  if (fold) {
    return (
      <nav className={sidebarClasses}>
        {/* Header - avatar only */}
        {header && (
          <>
            <div className={styles.headerCollapsed}>
              <div className={styles.headerCollapsedInner}>
                <Avatar
                  letter={header.avatarLetter}
                  bg={header.avatarBg}
                  color={header.avatarColor}
                />
              </div>
            </div>

            <div className={styles.separator} />
          </>
        )}

        {/* Nav items - icons only */}
        <div className={styles.navContentCollapsed}>
          {sections.map((section) =>
            section.items.map((item) => (
              <NavItemCollapsed
                key={item.id}
                item={item}
                selected={isItemSelected(item.id)}
                onClick={() => onItemClick?.(item.id)}
              />
            ))
          )}
        </div>

        {/* Footer - avatar only */}
        <div className={styles.footerCollapsed}>
          <div className={styles.footerCollapsedInner}>
            <Avatar
              letter={footer.avatarLetter}
              bg={footer.avatarBg}
              color={footer.avatarColor}
            />
          </div>
        </div>

        {/* Fold toggle */}
        {onFoldToggle && (
          <button
            className={styles.foldToggle}
            onClick={onFoldToggle}
            type="button"
            aria-label="Expand sidebar"
          >
            <span className={`${styles.foldToggleIcon} ${styles.foldToggleIconFlipped}`}>
              <ChevronLeftIcon />
            </span>
          </button>
        )}
      </nav>
    );
  }

  /* ── Expanded sidebar ── */
  return (
    <nav className={sidebarClasses}>
      {/* Header */}
      {header && (
        <>
          <div className={styles.header}>
            <div className={styles.headerInner}>
              <Avatar
                letter={header.avatarLetter}
                bg={header.avatarBg}
                color={header.avatarColor}
              />
              <div className={styles.headerInfo}>
                <div className={styles.headerName}>{header.name}</div>
                <div className={styles.headerSubtitle}>{header.subtitle}</div>
              </div>
            </div>
          </div>

          <div className={styles.separator} />
        </>
      )}

      {/* Search */}
      {searchable && (
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
          <input
            ref={searchInputRef}
            className={styles.searchInput}
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className={styles.searchClear}
              onClick={() => setSearch("")}
              type="button"
            >
              <CancelIcon />
            </button>
          )}
        </div>
      )}

      {/* Nav content */}
      <div className={styles.navContent}>
        {sections.map((section) => {
          // Filter items by search
          const filteredItems = search
            ? section.items.filter((item) => {
                const matchItem = item.label.toLowerCase().includes(search.toLowerCase());
                const matchChild = item.children?.some((c) =>
                  c.label.toLowerCase().includes(search.toLowerCase())
                );
                return matchItem || matchChild;
              })
            : section.items;

          if (filteredItems.length === 0) return null;

          return (
            <div key={section.id} className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>{section.title}</span>
              </div>
              <div className={styles.sectionItems}>
                {filteredItems.map((item) => (
                  <NavItemExpanded
                    key={item.id}
                    item={item}
                    selected={isItemSelected(item.id)}
                    expanded={isItemExpanded(item.id)}
                    selectedSubItemId={selectedSubItemId}
                    onItemClick={() => onItemClick?.(item.id)}
                    onSubItemClick={(subId) => onSubItemClick?.(item.id, subId)}
                    onExpandToggle={() => onExpandToggle?.(item.id)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <Avatar
            letter={footer.avatarLetter}
            bg={footer.avatarBg}
            color={footer.avatarColor}
          />
          <div className={styles.footerInfo}>
            <div className={styles.footerName}>{footer.name}</div>
            <div className={styles.footerSubtitle}>{footer.subtitle}</div>
          </div>
        </div>
      </div>

      {/* Fold toggle */}
      {onFoldToggle && (
        <button
          className={styles.foldToggle}
          onClick={onFoldToggle}
          type="button"
          aria-label="Collapse sidebar"
        >
          <span className={styles.foldToggleIcon}>
            <ChevronLeftIcon />
          </span>
        </button>
      )}
    </nav>
  );
}
