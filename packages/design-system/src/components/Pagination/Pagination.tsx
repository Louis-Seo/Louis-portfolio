"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Pagination.module.css";

/* ── Inline SVG Arrow Icons ── */

function DoubleArrowLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.59 18L18.99 16.59L14.42 12L18.99 7.41L17.59 6L11.59 12L17.59 18Z" fill="currentColor"/>
      <path d="M11 18L12.41 16.59L7.83 12L12.41 7.41L11 6L5 12L11 18Z" fill="currentColor"/>
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
    </svg>
  );
}

function DoubleArrowRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.41 6L5.01 7.41L9.58 12L5.01 16.59L6.41 18L12.41 12L6.41 6Z" fill="currentColor"/>
      <path d="M13 6L11.59 7.41L16.17 12L11.59 16.59L13 18L19 12L13 6Z" fill="currentColor"/>
    </svg>
  );
}

function ChevronDownSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Types ── */

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  visiblePages?: number;
  showCapacity?: boolean;
  capacityOptions?: number[];
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (count: number) => void;
  className?: string;
}

/* ── Component ── */

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  visiblePages = 5,
  showCapacity = true,
  capacityOptions = [10, 20, 50, 100],
  onPageChange,
  onItemsPerPageChange,
  className,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const page = Math.min(Math.max(1, currentPage), totalPages);

  /* Calculate visible page range */
  const getPageRange = useCallback((): number[] => {
    const half = Math.floor(visiblePages / 2);
    let start = Math.max(1, page - half);
    let end = start + visiblePages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - visiblePages + 1);
    }

    const pages: number[] = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }, [page, totalPages, visiblePages]);

  const pageRange = getPageRange();

  const isFirst = page === 1;
  const isLast = page === totalPages;

  /* Info text */
  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  /* Capacity dropdown */
  const [capacityOpen, setCapacityOpen] = useState(false);
  const capacityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (capacityRef.current && !capacityRef.current.contains(e.target as Node)) {
        setCapacityOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`${styles.pagination} ${className ?? ""}`}>
      {/* Left: info text */}
      <span className={styles.info}>
        {startItem}-{endItem} of {totalItems}
      </span>

      {/* Center: navigation controls */}
      <div className={styles.controls}>
        {/* Left arrows */}
        <div className={styles.navGroup}>
          <button
            className={isFirst ? styles.navButtonDisabled : styles.navButton}
            onClick={!isFirst ? () => onPageChange?.(1) : undefined}
            type="button"
            aria-label="First page"
          >
            <span className={styles.navIcon}><DoubleArrowLeftIcon /></span>
          </button>
          <button
            className={isFirst ? styles.navButtonDisabled : styles.navButton}
            onClick={!isFirst ? () => onPageChange?.(page - 1) : undefined}
            type="button"
            aria-label="Previous page"
          >
            <span className={styles.navIcon}><ArrowLeftIcon /></span>
          </button>
        </div>

        {/* Page numbers */}
        <div className={styles.pages}>
          {pageRange.map((p) => (
            <button
              key={p}
              className={p === page ? styles.pageItemSelected : styles.pageItem}
              onClick={p !== page ? () => onPageChange?.(p) : undefined}
              type="button"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Right arrows */}
        <div className={styles.navGroup}>
          <button
            className={isLast ? styles.navButtonDisabled : styles.navButton}
            onClick={!isLast ? () => onPageChange?.(page + 1) : undefined}
            type="button"
            aria-label="Next page"
          >
            <span className={styles.navIcon}><ArrowRightIcon /></span>
          </button>
          <button
            className={isLast ? styles.navButtonDisabled : styles.navButton}
            onClick={!isLast ? () => onPageChange?.(totalPages) : undefined}
            type="button"
            aria-label="Last page"
          >
            <span className={styles.navIcon}><DoubleArrowRightIcon /></span>
          </button>
        </div>
      </div>

      {/* Right: capacity selector */}
      {showCapacity && (
        <div className={styles.capacity} ref={capacityRef}>
          <div
            className={styles.capacitySelect}
            onClick={() => setCapacityOpen((o) => !o)}
            role="button"
          >
            <span className={styles.capacityLabel}>Show {itemsPerPage}</span>
            <span className={styles.capacityIcon}><ChevronDownSmall /></span>

            {capacityOpen && (
              <div className={styles.capacityDropdown}>
                {capacityOptions.map((opt) => (
                  <div
                    key={opt}
                    className={
                      opt === itemsPerPage
                        ? styles.capacityOptionSelected
                        : styles.capacityOption
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      onItemsPerPageChange?.(opt);
                      setCapacityOpen(false);
                    }}
                  >
                    Show {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
