"use client";

import { useCallback } from "react";
import styles from "./TreeView.module.css";

/* ── Types ── */

export interface TreeNodeData {
  id: string;
  label: string;
  children?: TreeNodeData[];
  disabled?: boolean;
}

interface TreeViewProps {
  data: TreeNodeData[];
  selectedId?: string;
  expandedIds?: string[];
  onSelect?: (id: string) => void;
  onToggle?: (id: string) => void;
  className?: string;
}

/* ── Expand Arrow SVG ── */

function ExpandArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7L8 10L11 7"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Tree Node (recursive) ── */

interface TreeNodeProps {
  node: TreeNodeData;
  selectedId?: string;
  expandedIds: string[];
  onSelect?: (id: string) => void;
  onToggle?: (id: string) => void;
}

function TreeNode({
  node,
  selectedId,
  expandedIds,
  onSelect,
  onToggle,
}: TreeNodeProps) {
  const isBranch = node.children && node.children.length > 0;
  const isExpanded = expandedIds.includes(node.id);
  const isSelected = selectedId === node.id;

  const handleBranchClick = useCallback(() => {
    if (node.disabled) return;
    onToggle?.(node.id);
  }, [node.id, node.disabled, onToggle]);

  const handleLeafClick = useCallback(() => {
    if (node.disabled) return;
    onSelect?.(node.id);
  }, [node.id, node.disabled, onSelect]);

  if (isBranch) {
    const branchClasses = [
      styles.branch,
      node.disabled ? styles.branchDisabled : "",
    ]
      .filter(Boolean)
      .join(" ");

    const iconClasses = [
      styles.branchIcon,
      !isExpanded ? styles.branchIconCollapsed : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={styles.group}>
        <button
          className={branchClasses}
          onClick={handleBranchClick}
          type="button"
        >
          <span className={iconClasses}>
            <ExpandArrow />
          </span>
          <span className={styles.branchLabel}>{node.label}</span>
        </button>
        {isExpanded && (
          <div className={styles.children}>
            {node.children!.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                selectedId={selectedId}
                expandedIds={expandedIds}
                onSelect={onSelect}
                onToggle={onToggle}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const leafClasses = [
    styles.leaf,
    isSelected ? styles.leafSelected : "",
    node.disabled ? styles.leafDisabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={leafClasses}
      onClick={handleLeafClick}
      type="button"
    >
      <span className={styles.leafLabel}>{node.label}</span>
    </button>
  );
}

/* ── TreeView Component ── */

export default function TreeView({
  data,
  selectedId,
  expandedIds = [],
  onSelect,
  onToggle,
  className,
}: TreeViewProps) {
  const containerClasses = [styles.tree, styles.groupList, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          selectedId={selectedId}
          expandedIds={expandedIds}
          onSelect={onSelect}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
