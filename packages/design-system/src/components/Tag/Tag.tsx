"use client";

import { type ReactNode } from "react";
import styles from "./Tag.module.css";

/* ── Inline SVG Icons ── */

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.7 11.3L8 8L11.3 11.3M11.3 4.7L8 8L4.7 4.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Selector Tag ── */

interface SelectorTagProps {
  children: ReactNode;
  closable?: boolean;
  icon?: ReactNode;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
}

export function SelectorTag({
  children,
  closable = false,
  icon,
  onClose,
  onClick,
  className,
}: SelectorTagProps) {
  return (
    <div
      className={`${styles.selectorTag} ${className ?? ""}`}
      onClick={onClick}
    >
      <div className={styles.selectorContent}>
        {icon && <span className={styles.selectorIcon}>{icon}</span>}
        <span className={styles.selectorText}>{children}</span>
        {closable && (
          <span
            className={styles.selectorIcon}
            onClick={(e) => { e.stopPropagation(); onClose?.(); }}
          >
            <CloseIcon />
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Filter Tag ── */

interface FilterTagProps {
  children: ReactNode;
  avatarLetter?: string;
  closable?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
}

export function FilterTag({
  children,
  avatarLetter,
  closable = true,
  onClose,
  onClick,
  className,
}: FilterTagProps) {
  return (
    <div
      className={`${styles.filterTag} ${className ?? ""}`}
      onClick={onClick}
    >
      <div className={styles.filterContent}>
        <div className={styles.filterAvatar}>
          {avatarLetter && (
            <span className={styles.filterAvatarCircle}>{avatarLetter}</span>
          )}
          <span className={styles.filterLabel}>{children}</span>
        </div>
        {closable && (
          <span
            className={styles.filterCloseIcon}
            onClick={(e) => { e.stopPropagation(); onClose?.(); }}
          >
            <CloseIcon />
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Checklist Tag ── */

type ChecklistState = "pass" | "fail";

interface ChecklistTagProps {
  state?: ChecklistState;
  children?: ReactNode;
  className?: string;
}

export function ChecklistTag({
  state = "pass",
  children,
  className,
}: ChecklistTagProps) {
  const bgClass = state === "pass" ? styles.checklistPass : styles.checklistFail;

  return (
    <span className={`${styles.checklistTag} ${bgClass} ${className ?? ""}`}>
      <span className={styles.checklistText}>
        {children ?? (state === "pass" ? "Checklist: Pass" : "Checklist: Fail")}
      </span>
    </span>
  );
}

/* ── Default Export (SelectorTag) ── */
export default SelectorTag;
