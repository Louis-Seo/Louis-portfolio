"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
  useMemo,
} from "react";
import styles from "./Dropdown.module.css";

export type DropdownSize = "large" | "medium" | "small";
export type DropdownVariant = "label" | "badge" | "avatar";

export interface DropdownItemData {
  label: string;
  value: string;
  disabled?: boolean;
  toggle?: boolean;
  toggleValue?: boolean;
  badgeColor?: "green" | "blue";
  avatarColor?: "blue" | "green" | "yellow" | "red" | "gray";
  avatarLetter?: string;
}

interface DropdownProps {
  size?: DropdownSize;
  variant?: DropdownVariant;
  placeholder?: string;
  icon?: ReactNode;
  items: DropdownItemData[];
  value?: string | string[];
  onChange?: (value: string) => void;
  onMultiChange?: (values: string[]) => void;
  onToggleChange?: (value: string, toggled: boolean) => void;
  disabled?: boolean;
  multiSelect?: boolean;
  searchable?: boolean;
  className?: string;
}

/* ── Inline SVG Icons ── */

function ChevronDownIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7"
        cy="7"
        r="4.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 10.5L13.5 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseSmallIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Toggle sub-component ── */

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div
      className={`${styles.toggle} ${styles.toggleSmall} ${
        checked ? styles.toggleOn : styles.toggleOff
      }`}
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
      role="switch"
      aria-checked={checked}
    >
      <div className={styles.toggleKnob} />
    </div>
  );
}

/* ── Badge Chip sub-component ── */

function BadgeChip({
  label,
  color = "green",
}: {
  label: string;
  color?: "green" | "blue";
}) {
  const colorClass = color === "blue" ? styles.badgeBlue : styles.badgeGreen;
  return (
    <span className={`${styles.badgeChip} ${colorClass}`}>
      {label}
    </span>
  );
}

/* ── Avatar Circle sub-component ── */

const AVATAR_BG: Record<string, string> = {
  blue: "#A7D9FF",
  green: "#C2EAD7",
  yellow: "#FFF59D",
  red: "#FFBFBF",
  gray: "#EEEEEE",
};

const AVATAR_TEXT: Record<string, string> = {
  blue: "#0048C8",
  green: "#008F60",
  yellow: "#FBC02D",
  red: "#BF0A03",
  gray: "#616161",
};

function AvatarCircle({
  letter = "D",
  color = "blue",
  sizeClass,
}: {
  letter?: string;
  color?: string;
  sizeClass: "large" | "medium" | "small" | "xsmall";
}) {
  const sizeMap = { large: 36, medium: 32, small: 24, xsmall: 18 };
  const fontMap = { large: 16, medium: 14, small: 14, xsmall: 12 };
  const radiusMap = { large: 6, medium: 4, small: 3, xsmall: 2 };
  const px = sizeMap[sizeClass];
  const fs = fontMap[sizeClass];
  const r = radiusMap[sizeClass];

  return (
    <span
      className={styles.avatarCircle}
      style={{
        width: px,
        height: px,
        borderRadius: r,
        backgroundColor: AVATAR_BG[color] || AVATAR_BG.blue,
        color: AVATAR_TEXT[color] || AVATAR_TEXT.blue,
        fontSize: fs,
      }}
    >
      {letter.charAt(0).toUpperCase()}
    </span>
  );
}

/* ── Main Dropdown Component ── */

export default function Dropdown({
  size = "medium",
  variant = "label",
  placeholder = "Select",
  icon,
  items,
  value,
  onChange,
  onMultiChange,
  onToggleChange,
  disabled = false,
  multiSelect = false,
  searchable = false,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleTriggerClick = useCallback(() => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    if (isOpen) setSearch("");
  }, [disabled, isOpen]);

  const handleItemClick = useCallback(
    (item: DropdownItemData) => {
      if (item.disabled) return;

      if (item.toggle !== undefined) {
        onToggleChange?.(item.value, !item.toggleValue);
        return;
      }

      if (multiSelect) {
        const currentValues = Array.isArray(value) ? value : [];
        const newValues = currentValues.includes(item.value)
          ? currentValues.filter((v) => v !== item.value)
          : [...currentValues, item.value];
        onMultiChange?.(newValues);
      } else {
        onChange?.(item.value);
        setIsOpen(false);
        setSearch("");
      }
    },
    [multiSelect, value, onChange, onMultiChange, onToggleChange]
  );

  const handleClearAll = useCallback(() => {
    onMultiChange?.([]);
  }, [onMultiChange]);

  // Filter items by search
  const filteredItems = useMemo(() => {
    if (!search) return items;
    return items.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  // Determine if scrollable (more than 4 items)
  const isScrollable = filteredItems.length > 4;

  // Display text for trigger
  const displayText = useMemo(() => {
    if (multiSelect) {
      const vals = Array.isArray(value) ? value : [];
      if (vals.length === 0) return null;
      const labels = vals
        .map((v) => items.find((i) => i.value === v)?.label)
        .filter(Boolean);
      return labels.join(", ");
    }
    if (!value) return null;
    return items.find((i) => i.value === value)?.label ?? null;
  }, [value, items, multiSelect]);

  // Selected item for badge/avatar trigger display
  const selectedItem = useMemo(() => {
    if (multiSelect || !value || typeof value !== "string") return null;
    return items.find((i) => i.value === value) ?? null;
  }, [value, items, multiSelect]);

  const isSelected = (itemValue: string) => {
    if (multiSelect) {
      return Array.isArray(value) && value.includes(itemValue);
    }
    return value === itemValue;
  };

  const hasMultiValues = multiSelect && Array.isArray(value) && value.length > 0;

  // Size class maps
  const sizeClassMap = {
    large: styles.triggerLarge,
    medium: styles.triggerMedium,
    small: styles.triggerSmall,
  };

  const itemSizeClassMap = {
    large: styles.itemLarge,
    medium: styles.itemMedium,
    small: styles.itemSmall,
  };

  const searchSizeClassMap = {
    large: styles.searchWrapperLarge,
    medium: styles.searchWrapperMedium,
    small: styles.searchWrapperSmall,
  };

  const scrollClassMap = {
    large: styles.menuLargeScroll,
    medium: styles.menuMediumScroll,
    small: styles.menuSmallScroll,
  };

  // Avatar size for items based on dropdown size
  const avatarItemSize = size === "large" ? "small" : size === "medium" ? "small" : "xsmall";
  const avatarTriggerSize = size === "large" ? "small" : size === "medium" ? "small" : "xsmall";

  const triggerClasses = [
    styles.trigger,
    sizeClassMap[size],
    isOpen && !disabled ? styles.triggerOpen : "",
    disabled ? styles.triggerDisabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  // Render trigger content based on variant
  const renderTriggerContent = () => {
    if (variant === "badge" && selectedItem) {
      return (
        <>
          <BadgeChip
            label={selectedItem.label}
            color={selectedItem.badgeColor || "green"}
          />
          <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
            <ChevronDownIcon />
          </span>
        </>
      );
    }

    if (variant === "avatar" && selectedItem) {
      return (
        <>
          <span className={styles.avatarTriggerContent}>
            <AvatarCircle
              letter={selectedItem.avatarLetter || selectedItem.label.charAt(0)}
              color={selectedItem.avatarColor || "blue"}
              sizeClass={avatarTriggerSize}
            />
            <span className={styles.selectedText}>{selectedItem.label}</span>
          </span>
          <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
            <ChevronDownIcon />
          </span>
        </>
      );
    }

    return (
      <>
        {icon && <span className={styles.leadingIcon}>{icon}</span>}
        <span
          className={`${styles.triggerText} ${
            displayText ? styles.selectedText : styles.placeholder
          }`}
        >
          {displayText ?? placeholder}
        </span>
        {/* Multi-select clear button */}
        {hasMultiValues && (
          <button
            className={styles.clearButton}
            onClick={(e) => {
              e.stopPropagation();
              handleClearAll();
            }}
            type="button"
          >
            <CloseSmallIcon />
          </button>
        )}
        <span
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
        >
          <ChevronDownIcon />
        </span>
      </>
    );
  };

  // Render item content based on variant
  const renderItemContent = (item: DropdownItemData, selected: boolean) => {
    if (variant === "badge") {
      return (
        <BadgeChip
          label={item.label}
          color={item.badgeColor || "green"}
        />
      );
    }

    if (variant === "avatar") {
      return (
        <>
          <span className={styles.avatarItemContent}>
            <AvatarCircle
              letter={item.avatarLetter || item.label.charAt(0)}
              color={item.avatarColor || "blue"}
              sizeClass={avatarItemSize}
            />
            <span className={styles.itemLabel}>{item.label}</span>
          </span>
          {multiSelect && selected && (
            <span className={styles.checkIcon}>
              <CheckIcon />
            </span>
          )}
        </>
      );
    }

    return (
      <>
        <span className={styles.itemLabel}>{item.label}</span>

        {/* Multi-select checkmark */}
        {multiSelect && selected && (
          <span className={styles.checkIcon}>
            <CheckIcon />
          </span>
        )}

        {/* Toggle switch */}
        {item.toggle !== undefined && (
          <Toggle
            checked={!!item.toggleValue}
            onChange={() =>
              onToggleChange?.(item.value, !item.toggleValue)
            }
          />
        )}
      </>
    );
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Trigger */}
      <button
        className={triggerClasses}
        onClick={handleTriggerClick}
        disabled={disabled}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {renderTriggerContent()}
      </button>

      {/* Menu */}
      {isOpen && !disabled && (
        <div className={styles.menu} role="listbox">
          {/* Search */}
          {searchable && (
            <div
              className={`${styles.searchWrapper} ${searchSizeClassMap[size]}`}
            >
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

          {/* Items list */}
          <div
            className={
              isScrollable
                ? `${styles.menuScrollable} ${scrollClassMap[size]}`
                : undefined
            }
          >
            {filteredItems.map((item) => {
              const selected = isSelected(item.value);
              const itemClasses = [
                styles.item,
                itemSizeClassMap[size],
                selected && variant === "label" ? styles.itemSelected : "",
                item.disabled ? styles.itemDisabled : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div
                  key={item.value}
                  className={itemClasses}
                  onClick={() => handleItemClick(item)}
                  role="option"
                  aria-selected={selected}
                  aria-disabled={item.disabled}
                >
                  {renderItemContent(item, selected)}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
