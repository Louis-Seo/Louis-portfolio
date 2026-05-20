import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://louisseo.com"),
  title: {
    default: "Louis Seo — Product Designer",
    template: "%s · Louis Seo",
  },
  description: "Portfolio of Louis Seo, a system-oriented product designer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
