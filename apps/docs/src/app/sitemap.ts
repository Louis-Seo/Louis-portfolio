import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { PROJECTS } from "@/data/projects";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://louisseo.com";

const PORTFOLIO_PATHS: string[] = [
  "/portfolio",
  "/portfolio/about",
  ...PROJECTS.map((p) => `/portfolio/${p.slug}`),
];

function buildEntry(path: string): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l === "ko" ? "ko-KR" : "en-US", `${SITE_URL}/${l}${path}`]),
  );
  languages["x-default"] = `${SITE_URL}/${routing.defaultLocale}${path}`;

  return {
    url: `${SITE_URL}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/portfolio" ? 1.0 : 0.7,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PORTFOLIO_PATHS.map(buildEntry);
}
