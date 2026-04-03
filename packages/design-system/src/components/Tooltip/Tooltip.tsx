"use client";

import { ReactNode, useRef, useState, useCallback, useEffect } from "react";
import styles from "./Tooltip.module.css";

/* ── Types ── */

export type TooltipType = "short" | "long" | "list" | "toolbar";
export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipTip = "start" | "center" | "end";

/* ── Class Maps ── */

const POSITION_CLASS: Record<TooltipPosition, string> = {
  top: styles.top,
  bottom: styles.bottom,
  left: styles.left,
  right: styles.right,
};

const TIP_CLASS: Record<TooltipTip, string> = {
  start: styles.tipStart,
  center: styles.tipCenter,
  end: styles.tipEnd,
};

/* ── Tooltip Content Components ── */

interface ShortContentProps {
  text: string;
  shortcut?: string;
}

function ShortContent({ text, shortcut }: ShortContentProps) {
  return (
    <div className={styles.shortContent}>
      <span className={styles.text}>{text}</span>
      {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
    </div>
  );
}

interface LongContentProps {
  text: string;
}

function LongContent({ text }: LongContentProps) {
  return (
    <div className={styles.longContent}>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

interface ListContentProps {
  title: string;
  items: string[];
}

function ListContent({ title, items }: ListContentProps) {
  return (
    <div className={styles.listContent}>
      <div className={styles.listTitle}>{title}</div>
      <div className={styles.listBody}>
        <ul className={styles.listItems}>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ToolbarContentProps {
  header: string;
  shortcut?: string;
  description: string;
}

function ToolbarContent({ header, shortcut, description }: ToolbarContentProps) {
  return (
    <div className={styles.toolbarContent}>
      <div className={styles.toolbarHeader}>
        <span className={styles.text}>{header}</span>
        {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
      </div>
      <div className={styles.toolbarBody}>
        <span className={styles.toolbarDescription}>{description}</span>
      </div>
    </div>
  );
}

/* ── Tooltip Component ── */

interface TooltipProps {
  /** Element that triggers the tooltip */
  children: ReactNode;
  /** Tooltip position relative to the trigger */
  position?: TooltipPosition;
  /** Arrow alignment along the tooltip edge */
  tip?: TooltipTip;
  /** Short text tooltip content */
  text?: string;
  /** Keyboard shortcut label */
  shortcut?: string;
  /** Long-form text content (type=long) */
  longText?: string;
  /** List tooltip title (type=list) */
  listTitle?: string;
  /** List tooltip items (type=list) */
  listItems?: string[];
  /** Toolbar header (type=toolbar) */
  toolbarHeader?: string;
  /** Toolbar shortcut (type=toolbar) */
  toolbarShortcut?: string;
  /** Toolbar description (type=toolbar) */
  toolbarDescription?: string;
  className?: string;
}

export default function Tooltip({
  children,
  position = "top",
  tip = "start",
  text,
  shortcut,
  longText,
  listTitle,
  listItems,
  toolbarHeader,
  toolbarShortcut,
  toolbarDescription,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(false), 100);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  /* Determine tooltip type from props */
  const type: TooltipType =
    toolbarHeader && toolbarDescription
      ? "toolbar"
      : listTitle && listItems
        ? "list"
        : longText
          ? "long"
          : "short";

  const wrapperClasses = [
    styles.wrapper,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const tooltipClasses = [
    styles.tooltip,
    POSITION_CLASS[position],
    TIP_CLASS[tip],
  ]
    .filter(Boolean)
    .join(" ");

  const isHorizontal = position === "left" || position === "right";

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <div className={tooltipClasses} role="tooltip">
          {/* Arrow before content for bottom/right */}
          {(position === "bottom" || position === "right") && (
            <span className={[styles.arrow, isHorizontal ? styles.arrowHorizontal : styles.arrowVertical].join(" ")} />
          )}

          <div className={styles.bubble}>
            {type === "short" && <ShortContent text={text ?? ""} shortcut={shortcut} />}
            {type === "long" && <LongContent text={longText ?? ""} />}
            {type === "list" && <ListContent title={listTitle ?? ""} items={listItems ?? []} />}
            {type === "toolbar" && (
              <ToolbarContent
                header={toolbarHeader ?? ""}
                shortcut={toolbarShortcut}
                description={toolbarDescription ?? ""}
              />
            )}
          </div>

          {/* Arrow after content for top/left */}
          {(position === "top" || position === "left") && (
            <span className={[styles.arrow, isHorizontal ? styles.arrowHorizontal : styles.arrowVertical].join(" ")} />
          )}
        </div>
      )}
    </div>
  );
}
