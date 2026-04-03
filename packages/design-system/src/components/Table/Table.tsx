"use client";

import { useCallback, ReactNode } from "react";
import styles from "./Table.module.css";

/* ── Types ── */

type Alignment = "left" | "center" | "right";
type SortDirection = "asc" | "desc" | null;
type CellSize = "large" | "medium";

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  header: string;
  subtext?: string;
  align?: Alignment;
  width?: number | string;
  sortable?: boolean;
  render?: (value: unknown, row: T, rowIndex: number) => ReactNode;
  cellType?: "text" | "link";
}

interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  size?: CellSize;
  headerSize?: "medium" | "small";
  headerBg?: boolean;
  selectable?: boolean;
  selectedRows?: Set<number>;
  onSelectRow?: (rowIndex: number, selected: boolean) => void;
  onSelectAll?: (selected: boolean) => void;
  sortKey?: string;
  sortDirection?: SortDirection;
  onSort?: (key: string, direction: SortDirection) => void;
  className?: string;
}

/* ── Sort Icon SVG ── */

function SortIcon({ direction }: { direction: SortDirection }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3L9 5.5H5L7 3Z"
        fill={direction === "asc" ? "currentColor" : "#BDBDBD"}
      />
      <path
        d="M7 11L5 8.5H9L7 11Z"
        fill={direction === "desc" ? "currentColor" : "#BDBDBD"}
      />
    </svg>
  );
}

/* ── Checkbox SVG ── */

function CheckboxIcon({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="14" rx="2" fill="#067DFD" />
        <path d="M4 7L6 9L10 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="#EEEEEE" fill="white" />
    </svg>
  );
}

/* ── Table Component ── */

export default function Table<T extends Record<string, unknown>>({
  columns,
  data,
  size = "large",
  headerSize = "medium",
  headerBg = false,
  selectable = false,
  selectedRows,
  onSelectRow,
  onSelectAll,
  sortKey,
  sortDirection,
  onSort,
  className,
}: TableProps<T>) {
  const allSelected =
    selectable && data.length > 0 && selectedRows?.size === data.length;

  const handleSort = useCallback(
    (key: string) => {
      if (!onSort) return;
      if (sortKey === key) {
        if (sortDirection === "asc") onSort(key, "desc");
        else if (sortDirection === "desc") onSort(key, null);
        else onSort(key, "asc");
      } else {
        onSort(key, "asc");
      }
    },
    [sortKey, sortDirection, onSort]
  );

  const tableClasses = [styles.table, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <table className={tableClasses}>
      <thead className={styles.thead}>
        <tr>
          {selectable && (
            <th
              className={[
                styles.th,
                styles.thCheckbox,
                headerSize === "small" ? styles.thSmall : "",
                headerBg ? styles.thBg : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <button
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "inline-flex",
                }}
                onClick={() => onSelectAll?.(!allSelected)}
              >
                <CheckboxIcon checked={allSelected} />
              </button>
            </th>
          )}
          {columns.map((col) => {
            const thClasses = [
              styles.th,
              headerSize === "small" ? styles.thSmall : "",
              headerBg ? styles.thBg : "",
              col.align === "right"
                ? styles.thRight
                : col.align === "center"
                ? styles.thCenter
                : styles.thLeft,
            ]
              .filter(Boolean)
              .join(" ");

            const currentDir: SortDirection =
              sortKey === col.key && sortDirection ? sortDirection : null;

            return (
              <th
                key={col.key}
                className={thClasses}
                style={col.width ? { width: col.width } : undefined}
              >
                {col.subtext ? (
                  <div className={styles.thWithSubtext}>
                    <span>{col.header}</span>
                    <span className={styles.thSubtext}>{col.subtext}</span>
                  </div>
                ) : col.sortable ? (
                  <span className={styles.thContent}>
                    <span>{col.header}</span>
                    <button
                      type="button"
                      className={[
                        styles.sortButton,
                        currentDir ? styles.sortActive : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => handleSort(col.key)}
                    >
                      <SortIcon direction={currentDir} />
                    </button>
                  </span>
                ) : (
                  col.header
                )}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map((row, rowIndex) => {
          const isSelected = selectedRows?.has(rowIndex) ?? false;

          return (
            <tr key={rowIndex}>
              {selectable && (
                <td
                  className={[
                    styles.td,
                    styles.tdCheckbox,
                    size === "medium" ? styles.tdMedium : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <button
                    type="button"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "inline-flex",
                    }}
                    onClick={() => onSelectRow?.(rowIndex, !isSelected)}
                  >
                    <CheckboxIcon checked={isSelected} />
                  </button>
                </td>
              )}
              {columns.map((col) => {
                const value = row[col.key];
                const tdClasses = [
                  styles.td,
                  size === "medium" ? styles.tdMedium : "",
                  col.align === "right"
                    ? styles.tdRight
                    : col.align === "center"
                    ? styles.tdCenter
                    : styles.tdLeft,
                  col.cellType === "link" ? styles.tdLink : "",
                  value === null || value === undefined
                    ? styles.tdNoData
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                let content: ReactNode;
                if (col.render) {
                  content = col.render(value, row, rowIndex);
                } else if (value === null || value === undefined) {
                  content = "-";
                } else {
                  content = String(value);
                }

                return (
                  <td
                    key={col.key}
                    className={tdClasses}
                    style={col.width ? { width: col.width } : undefined}
                  >
                    {content}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
