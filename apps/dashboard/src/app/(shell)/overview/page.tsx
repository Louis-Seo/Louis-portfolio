"use client";

import { useState } from "react";
import {
  Breadcrumb,
  Button,
  SegmentTab,
  Input,
  Dropdown,
  Table,
  Badge,
  Avatar,
  Pagination,
} from "@repo/design-system";
import type { TableColumn, DropdownItemData } from "@repo/design-system";
import styles from "./page.module.css";

/* ── Inline SVG Icons ── */

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StarOutlineIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5L9.8 5.2L14 5.8L11 8.7L11.7 12.8L8 10.9L4.3 12.8L5 8.7L2 5.8L6.2 5.2L8 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function StarFilledIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5L9.8 5.2L14 5.8L11 8.7L11.7 12.8L8 10.9L4.3 12.8L5 8.7L2 5.8L6.2 5.2L8 1.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="4" r="1.2" fill="currentColor" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      <circle cx="8" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

/* ── Dashboard Card Data ── */

interface DashboardCardData {
  id: string;
  title: string;
  description: string;
  isNew?: boolean;
}

const CARDS: DashboardCardData[] = [
  {
    id: "new",
    title: "New dashboard",
    description: "Create a new dashboard from scratch",
    isNew: true,
  },
  {
    id: "cash-flow",
    title: "Cash Flow Summary",
    description: "Monthly and quarterly cash flow analysis with trend indicators",
  },
  {
    id: "deal-pipeline",
    title: "Deal Pipeline Overview",
    description: "Active deals funnel, conversion rates, and stage breakdown",
  },
  {
    id: "portfolio",
    title: "Portfolio Performance",
    description: "Asset allocation, returns, and benchmark comparison metrics",
  },
];

/* ── Table Row Data ── */

interface DashboardRow {
  [key: string]: unknown;
  starred: boolean;
  title: string;
  scope: string;
  cashFlowConfig: string;
  pmrStatus: "Complete" | "Partial" | "Empty";
  lastViewed: string;
  updated: string;
  owner: string;
  ownerInitials: string;
}

const TABLE_DATA: DashboardRow[] = [
  { starred: true, title: "Q4 Cash Flow Analysis", scope: "Global", cashFlowConfig: "Standard Model v2", pmrStatus: "Complete", lastViewed: "2 hours ago", updated: "Jan 15, 2025", owner: "Louis S.", ownerInitials: "LS" },
  { starred: false, title: "Deal Pipeline - Series A", scope: "Fund III", cashFlowConfig: "Venture Config", pmrStatus: "Partial", lastViewed: "5 hours ago", updated: "Jan 14, 2025", owner: "Sarah K.", ownerInitials: "SK" },
  { starred: true, title: "Portfolio Returns Dashboard", scope: "All Funds", cashFlowConfig: "Multi-Asset Model", pmrStatus: "Complete", lastViewed: "1 day ago", updated: "Jan 13, 2025", owner: "Louis S.", ownerInitials: "LS" },
  { starred: false, title: "LP Reporting - Q3 2024", scope: "Fund II", cashFlowConfig: "LP Standard", pmrStatus: "Complete", lastViewed: "2 days ago", updated: "Jan 12, 2025", owner: "Mike R.", ownerInitials: "MR" },
  { starred: false, title: "Risk Assessment Overview", scope: "Global", cashFlowConfig: "Risk Model A", pmrStatus: "Empty", lastViewed: "3 days ago", updated: "Jan 10, 2025", owner: "Anna P.", ownerInitials: "AP" },
  { starred: true, title: "Monthly NAV Tracker", scope: "Fund I", cashFlowConfig: "NAV Calculation", pmrStatus: "Complete", lastViewed: "3 days ago", updated: "Jan 9, 2025", owner: "Louis S.", ownerInitials: "LS" },
  { starred: false, title: "Investor Relations Board", scope: "All Funds", cashFlowConfig: "Standard Model v2", pmrStatus: "Partial", lastViewed: "5 days ago", updated: "Jan 8, 2025", owner: "Sarah K.", ownerInitials: "SK" },
  { starred: false, title: "Compliance Monitoring", scope: "Fund III", cashFlowConfig: "Compliance Config", pmrStatus: "Empty", lastViewed: "1 week ago", updated: "Jan 5, 2025", owner: "David L.", ownerInitials: "DL" },
];

const SORT_ITEMS: DropdownItemData[] = [
  { label: "Last Viewed", value: "last-viewed" },
  { label: "Last Updated", value: "last-updated" },
  { label: "Title A-Z", value: "title-asc" },
  { label: "Title Z-A", value: "title-desc" },
];

const TAB_ITEMS = ["Created by me", "All Dashboards", "Shared with me", "Starred", "Archived"];

/* ── Page Component ── */

export default function SystemDashboardPage() {
  const [starredRows, setStarredRows] = useState<Set<number>>(
    new Set(TABLE_DATA.map((row, i) => (row.starred ? i : -1)).filter((i) => i >= 0))
  );
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("last-viewed");
  const [currentPage, setCurrentPage] = useState(3);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const toggleStar = (index: number) => {
    setStarredRows((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const pmrColor = (status: string): "green" | "yellow" | "red" => {
    if (status === "Complete") return "green";
    if (status === "Partial") return "yellow";
    return "red";
  };

  const columns: TableColumn<DashboardRow>[] = [
    {
      key: "starred",
      header: "",
      width: 44,
      align: "center",
      render: (_val, _row, rowIndex) => (
        <button
          className={`${styles.starButton} ${starredRows.has(rowIndex) ? styles.starred : ""}`}
          onClick={() => toggleStar(rowIndex)}
          aria-label="Toggle star"
        >
          {starredRows.has(rowIndex) ? <StarFilledIcon /> : <StarOutlineIcon />}
        </button>
      ),
    },
    {
      key: "title",
      header: "Title",
      sortable: true,
      render: (val) => <span className={styles.linkCell}>{val as string}</span>,
    },
    {
      key: "scope",
      header: "Dashboard Scope",
      sortable: true,
    },
    {
      key: "cashFlowConfig",
      header: "Cash Flow Configuration",
      sortable: true,
      render: (val) => <span className={styles.linkCell}>{val as string}</span>,
    },
    {
      key: "pmrStatus",
      header: "PMR Status",
      sortable: true,
      render: (val) => (
        <Badge size="medium" color={pmrColor(val as string)}>
          {val as string}
        </Badge>
      ),
    },
    {
      key: "lastViewed",
      header: "Last Viewed",
      sortable: true,
    },
    {
      key: "updated",
      header: "Updated",
      sortable: true,
    },
    {
      key: "owner",
      header: "Owner",
      render: (val, row) => (
        <div className={styles.ownerCell}>
          <Avatar size="xsmall" letter={row.ownerInitials} color="blue" />
          {val as string}
        </div>
      ),
    },
    {
      key: "more",
      header: "",
      width: 44,
      align: "center",
      render: () => (
        <button className={styles.moreButton} aria-label="More options">
          <MoreIcon />
        </button>
      ),
    },
  ];

  const filteredData = TABLE_DATA.filter((row) =>
    row.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <Breadcrumb items={[{ label: "System Dashboard" }]} />
          <h2 className={styles.pageTitle}>System Dashboard</h2>
        </div>
        <Button variant="primary" size="medium" icon={<PlusIcon />}>
          Create Dashboard
        </Button>
      </div>

      {/* Dashboard Cards */}
      <div className={styles.cardsRow}>
        {CARDS.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardThumbnail}>
              {card.isNew ? (
                <div className={styles.cardNewIllustration}>
                  <PlusIcon />
                  <span>New</span>
                </div>
              ) : (
                <div className={styles.barPlaceholder}>
                  {[40, 60, 35, 75, 50, 65, 45].map((h, i) => (
                    <span
                      key={i}
                      style={{
                        height: `${h}%`,
                        background: i % 2 === 0 ? "var(--blue-500)" : "var(--blue-300)",
                        opacity: 0.6,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardDesc}>{card.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className={styles.tabSection}>
        <SegmentTab items={TAB_ITEMS} selectedIndex={activeTab} onChange={setActiveTab} />
      </div>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterLeft}>
          <Input
            type="search"
            size="small"
            placeholder="Search dashboards..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>
        <Dropdown
          size="small"
          items={SORT_ITEMS}
          value={sortBy}
          onChange={setSortBy}
          placeholder="Sort by Last Viewed"
        />
      </div>

      {/* Table */}
      <div className={styles.tableSection}>
        <Table<DashboardRow>
          columns={columns}
          data={filteredData}
          size="medium"
          headerSize="small"
          headerBg
        />
      </div>

      {/* Pagination */}
      <div className={styles.paginationWrapper}>
        <Pagination
          totalItems={300}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>
    </>
  );
}
