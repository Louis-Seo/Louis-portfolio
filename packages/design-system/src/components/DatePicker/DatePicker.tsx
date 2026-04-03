"use client";

import { useState, useRef, useEffect, useCallback, useMemo, ReactNode } from "react";
import styles from "./DatePicker.module.css";

export type DatePickerSize = "large" | "medium" | "small";
export type DatePickerType = "date" | "dateTime" | "yearMonth";

interface DatePickerProps {
  type?: DatePickerType;
  size?: DatePickerSize;
  placeholder?: string;
  icon?: ReactNode;
  value?: Date | null;
  onChange?: (date: Date) => void;
  disabled?: boolean;
  className?: string;
}

/* ── Inline SVG Icons ── */

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

function ChevronRightIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Helpers ── */

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const MONTH_SHORT_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DAY_HEADERS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatDate(date: Date, type: DatePickerType) {
  if (type === "yearMonth") {
    return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
  }
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  if (type === "dateTime") {
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
  }
  return `${dd}/${mm}/${yyyy}`;
}

function generateTimeSlots(): string[] {
  const slots: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return slots;
}

const TIME_SLOTS = generateTimeSlots();

/* ── Main DatePicker Component ── */

export default function DatePicker({
  type = "date",
  size = "large",
  placeholder,
  icon,
  value = null,
  onChange,
  disabled = false,
  className,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeListRef = useRef<HTMLDivElement>(null);

  const today = useMemo(() => new Date(), []);

  const [viewYear, setViewYear] = useState(value ? value.getFullYear() : today.getFullYear());
  const [viewMonth, setViewMonth] = useState(value ? value.getMonth() : today.getMonth());

  const defaultPlaceholder =
    type === "yearMonth"
      ? "Select Month"
      : type === "dateTime"
      ? "Select Date & Time"
      : "Select Date";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleTriggerClick = useCallback(() => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  }, [disabled]);

  const handlePrevMonth = useCallback(() => {
    if (type === "yearMonth") {
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((prev) => {
        if (prev === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return prev - 1;
      });
    }
  }, [type]);

  const handleNextMonth = useCallback(() => {
    if (type === "yearMonth") {
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((prev) => {
        if (prev === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return prev + 1;
      });
    }
  }, [type]);

  const handleDayClick = useCallback(
    (day: number, isPlaceholder: boolean) => {
      if (isPlaceholder) return;
      const hours = value ? value.getHours() : 0;
      const minutes = value ? value.getMinutes() : 0;
      const selected = new Date(viewYear, viewMonth, day, hours, minutes);
      onChange?.(selected);
      if (type !== "dateTime") {
        setIsOpen(false);
      }
    },
    [viewYear, viewMonth, onChange, type, value]
  );

  const handleMonthClick = useCallback(
    (monthIndex: number) => {
      const selected = new Date(viewYear, monthIndex, 1);
      onChange?.(selected);
      setIsOpen(false);
    },
    [viewYear, onChange]
  );

  const handleTimeClick = useCallback(
    (timeStr: string) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      const base = value ?? new Date(viewYear, viewMonth, today.getDate());
      const selected = new Date(
        base.getFullYear(),
        base.getMonth(),
        base.getDate(),
        hours,
        minutes
      );
      onChange?.(selected);
    },
    [value, viewYear, viewMonth, today, onChange]
  );

  // Build calendar grid
  const calendarWeeks = useMemo(() => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfWeek(viewYear, viewMonth);
    const prevMonthDays = getDaysInMonth(viewYear, viewMonth - 1);

    const weeks: { day: number; isPlaceholder: boolean }[][] = [];
    let currentWeek: { day: number; isPlaceholder: boolean }[] = [];

    // Previous month placeholder days
    for (let i = firstDay - 1; i >= 0; i--) {
      currentWeek.push({ day: prevMonthDays - i, isPlaceholder: true });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.push({ day, isPlaceholder: false });
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    // Next month placeholder days
    if (currentWeek.length > 0) {
      let nextDay = 1;
      while (currentWeek.length < 7) {
        currentWeek.push({ day: nextDay++, isPlaceholder: true });
      }
      weeks.push(currentWeek);
    }

    return weeks;
  }, [viewYear, viewMonth]);

  const displayText = value ? formatDate(value, type) : null;

  const currentTimeStr = value
    ? `${String(value.getHours()).padStart(2, "0")}:${String(value.getMinutes()).padStart(2, "0")}`
    : null;

  // Scroll to selected time when popup opens
  useEffect(() => {
    if (isOpen && type === "dateTime" && timeListRef.current && currentTimeStr) {
      const index = TIME_SLOTS.indexOf(currentTimeStr);
      if (index > -1) {
        const itemHeight = 22;
        timeListRef.current.scrollTop = index * itemHeight;
      }
    }
  }, [isOpen, type, currentTimeStr]);

  const sizeClassMap = {
    large: styles.triggerLarge,
    medium: styles.triggerMedium,
    small: styles.triggerSmall,
  };

  const triggerClasses = [
    styles.trigger,
    sizeClassMap[size],
    isOpen && !disabled ? styles.triggerOpen : "",
    disabled ? styles.triggerDisabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  /* ── Render: Date Calendar ── */
  const renderDateCalendar = () => (
    <div className={styles.calendarInner}>
      {/* Month Header */}
      <div className={styles.monthHeader}>
        <button
          className={styles.navButton}
          onClick={handlePrevMonth}
          type="button"
        >
          <span className={styles.navIcon}>
            <ChevronLeftIcon />
          </span>
        </button>
        <span className={styles.monthTitle}>
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>
        <button
          className={styles.navButton}
          onClick={handleNextMonth}
          type="button"
        >
          <span className={styles.navIcon}>
            <ChevronRightIcon />
          </span>
        </button>
      </div>

      {/* Day Grid */}
      <div className={styles.dayGrid}>
        <div className={styles.dayHeaders}>
          {DAY_HEADERS.map((d) => (
            <span key={d} className={styles.dayHeaderCell}>
              {d}
            </span>
          ))}
        </div>

        <div className={styles.separator} />

        <div className={styles.daysContainer}>
          {calendarWeeks.map((week, wi) => (
            <div key={wi} className={styles.weekRow}>
              {week.map((cell, di) => {
                const isToday =
                  !cell.isPlaceholder &&
                  isSameDay(new Date(viewYear, viewMonth, cell.day), today);
                const isSelected =
                  !cell.isPlaceholder &&
                  value !== null &&
                  isSameDay(new Date(viewYear, viewMonth, cell.day), value);

                const cellClasses = [
                  styles.dayCell,
                  cell.isPlaceholder ? styles.dayCellPlaceholder : "",
                  isToday && !isSelected ? styles.dayCellCurrent : "",
                  isSelected ? styles.dayCellSelected : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    key={`${wi}-${di}`}
                    className={cellClasses}
                    onClick={() => handleDayClick(cell.day, cell.isPlaceholder)}
                    type="button"
                    tabIndex={cell.isPlaceholder ? -1 : 0}
                  >
                    <span className={styles.dayText}>{cell.day}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ── Render: Year/Month Picker ── */
  const renderYearMonthPicker = () => (
    <div className={styles.calendarInner}>
      {/* Year Header */}
      <div className={styles.monthHeader}>
        <button
          className={styles.navButton}
          onClick={handlePrevMonth}
          type="button"
        >
          <span className={styles.navIcon}>
            <ChevronLeftIcon />
          </span>
        </button>
        <span className={styles.monthTitle}>{viewYear}</span>
        <button
          className={styles.navButton}
          onClick={handleNextMonth}
          type="button"
        >
          <span className={styles.navIcon}>
            <ChevronRightIcon />
          </span>
        </button>
      </div>

      {/* Month Grid */}
      <div className={styles.monthGrid}>
        {MONTH_SHORT_NAMES.map((name, idx) => {
          const isSelected =
            value !== null &&
            value.getMonth() === idx &&
            value.getFullYear() === viewYear;
          return (
            <button
              key={name}
              className={`${styles.monthChip} ${isSelected ? styles.monthChipSelected : ""}`}
              onClick={() => handleMonthClick(idx)}
              type="button"
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );

  /* ── Render: Time Column ── */
  const renderTimeColumn = () => (
    <div className={styles.timeColumn}>
      <div className={styles.timeHeader}>Time</div>
      <div className={styles.timeList} ref={timeListRef}>
        {TIME_SLOTS.map((slot) => (
          <button
            key={slot}
            className={`${styles.timeCell} ${currentTimeStr === slot ? styles.timeCellSelected : ""}`}
            onClick={() => handleTimeClick(slot)}
            type="button"
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Trigger */}
      <button
        className={triggerClasses}
        onClick={handleTriggerClick}
        disabled={disabled}
        type="button"
        aria-expanded={isOpen}
      >
        {icon && <span className={styles.leadingIcon}>{icon}</span>}
        <span
          className={`${styles.triggerText} ${
            displayText ? styles.selectedText : styles.placeholder
          }`}
        >
          {displayText ?? (placeholder || defaultPlaceholder)}
        </span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
          <ChevronDownIcon />
        </span>
      </button>

      {/* Calendar Popup */}
      {isOpen && !disabled && (
        type === "dateTime" ? (
          <div className={styles.calendarDateTime}>
            <div className={styles.dateSection}>
              {renderDateCalendar()}
            </div>
            {renderTimeColumn()}
          </div>
        ) : (
          <div className={styles.calendar}>
            {type === "yearMonth" ? renderYearMonthPicker() : renderDateCalendar()}
          </div>
        )
      )}
    </div>
  );
}
