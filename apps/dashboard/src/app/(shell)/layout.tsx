"use client";

import { useState } from "react";
import { Navigation, Input, Avatar } from "@repo/design-system";
import type { NavSectionData, NavUserInfo } from "@repo/design-system";
import styles from "./layout.module.css";

/* ── Inline SVG Icons ── */

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LogoIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M10 15C10 12.2 12.2 10 15 10C17.8 10 20 12.2 20 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8L6 0Z" fill="currentColor" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 7.5C7.5 6.12 8.62 5 10 5C11.38 5 12.5 6.12 12.5 7.5C12.5 8.88 11.38 10 10 10V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.167 10C16.167 9.583 16.117 9.183 16.033 8.8L17.767 7.4L16.267 4.8L14.267 5.533C13.717 5.067 13.083 4.7 12.383 4.467L12 2.5H8L7.617 4.467C6.917 4.7 6.283 5.067 5.733 5.533L3.733 4.8L2.233 7.4L3.967 8.8C3.883 9.183 3.833 9.583 3.833 10C3.833 10.417 3.883 10.817 3.967 11.2L2.233 12.6L3.733 15.2L5.733 14.467C6.283 14.933 6.917 15.3 7.617 15.533L8 17.5H12L12.383 15.533C13.083 15.3 13.717 14.933 14.267 14.467L16.267 15.2L17.767 12.6L16.033 11.2C16.117 10.817 16.167 10.417 16.167 10Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* ── Nav Icons ── */

function OverviewIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="8" height="18" rx="2" fill="currentColor" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" fill="currentColor" />
      <path d="M14 2V7C14 7.55 14.45 8 15 8H20L14 2Z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="14" width="4" height="7" rx="1" fill="currentColor" />
      <rect x="10" y="10" width="4" height="11" rx="1" fill="currentColor" />
      <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="currentColor" />
      <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6C20 7.66 16.42 9 12 9C7.58 9 4 7.66 4 6Z" fill="currentColor" opacity="0.7" />
      <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12C20 13.66 16.42 15 12 15C7.58 15 4 13.66 4 12Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M5 20C5 16.13 8.13 13 12 13C15.87 13 19 16.13 19 20H5Z" fill="currentColor" />
    </svg>
  );
}

function ConfigIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="3" rx="1.5" fill="currentColor" />
      <rect x="3" y="10.5" width="18" height="3" rx="1.5" fill="currentColor" />
      <rect x="3" y="17" width="10" height="3" rx="1.5" fill="currentColor" />
      <circle cx="17" cy="18.5" r="3.5" fill="currentColor" />
    </svg>
  );
}

/* ── Navigation Data ── */

const NAV_SECTIONS: NavSectionData[] = [
  {
    id: "overview",
    title: "Overview",
    items: [
      { id: "overview", label: "Overview", icon: <OverviewIcon /> },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    items: [
      { id: "system-dashboard", label: "System Dashboard", icon: <DashboardIcon /> },
      { id: "cash-flow-modeling", label: "Cash Flow Modeling", icon: <DocIcon /> },
      { id: "deal-pipeline", label: "Deal Pipeline", icon: <DocIcon /> },
      { id: "data-management", label: "Data Management", icon: <DataIcon />, children: [
        { id: "dm-import", label: "Import" },
        { id: "dm-export", label: "Export" },
      ]},
    ],
  },
  {
    id: "bi-tools",
    title: "BI Tools",
    items: [
      { id: "data-analytics", label: "Data Analytics", icon: <ChartIcon />, children: [
        { id: "dashboards", label: "Dashboards" },
        { id: "charts", label: "Charts" },
        { id: "ai-sql", label: "AI SQL" },
      ]},
    ],
  },
  {
    id: "admin",
    title: "Admin & Settings",
    items: [
      { id: "user-management", label: "User Management", icon: <UserIcon /> },
      { id: "cash-flow-config", label: "Cash Flow Configuration", icon: <ConfigIcon /> },
    ],
  },
];

const HEADER_USER: NavUserInfo = {
  name: "Admin",
  subtitle: "Louis@dnk.co",
  avatarLetter: "LS",
  avatarBg: "#0048C8",
  avatarColor: "#FFFFFF",
};

/* ── Shell Layout ── */

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expandedIds, setExpandedIds] = useState(["data-analytics"]);

  return (
    <div className={styles.shell}>
      {/* Top Header Bar */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.menuButton} aria-label="Menu">
            <MenuIcon />
          </button>
          <div className={styles.logo}>
            <div className={styles.logoIcon}><LogoIcon /></div>
            <span className={styles.logoText}>dnk</span>
          </div>
        </div>

        <div className={styles.headerCenter}>
          <Input type="search" size="small" placeholder="Search" />
        </div>

        <div className={styles.headerRight}>
          <button className={styles.aiButton}>
            <SparklesIcon />
            AI Assistant
          </button>
          <button className={styles.headerIcon} aria-label="Help">
            <HelpIcon />
          </button>
          <button className={styles.headerIcon} aria-label="Settings">
            <SettingsIcon />
          </button>
          <Avatar size="xsmall" letter="LS" color="blue" />
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <Navigation
            sections={NAV_SECTIONS}
            footer={HEADER_USER}
            selectedItemId="system-dashboard"
            expandedItemIds={expandedIds}
            searchable={false}
            onExpandToggle={(id) => {
              setExpandedIds((prev) =>
                prev.includes(id)
                  ? prev.filter((x) => x !== id)
                  : [...prev, id]
              );
            }}
          />
        </div>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
