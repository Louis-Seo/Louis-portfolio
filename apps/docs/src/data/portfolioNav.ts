export interface PortfolioNavItem {
  label: string;
  href: string;
}

export const PORTFOLIO_NAV: PortfolioNavItem[] = [
  { label: "Projects", href: "/portfolio" },
  { label: "Design System", href: "/" },
  { label: "About", href: "/portfolio/about" },
];
