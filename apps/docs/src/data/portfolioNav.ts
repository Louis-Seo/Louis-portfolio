export interface PortfolioNavItem {
  /** Translation key under `common.nav.*` */
  key: "projects" | "designSystem" | "about";
  /** Locale-independent href (without locale prefix; next-intl Link adds it) */
  href: "/portfolio" | "/design-system" | "/portfolio/about";
}

export const PORTFOLIO_NAV: PortfolioNavItem[] = [
  { key: "projects", href: "/portfolio" },
  { key: "designSystem", href: "/design-system" },
  { key: "about", href: "/portfolio/about" },
];
