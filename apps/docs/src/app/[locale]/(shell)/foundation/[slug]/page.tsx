import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";

/* Slugs that have a dedicated page.tsx — excluded from the dynamic route */
const DEDICATED_PAGES = new Set(["typography", "color", "icon", "object-style"]);

const foundationSlugs = SIDEBAR_SECTIONS.filter((s) => s.basePath === "/foundation")
  .flatMap((s) => s.items.map((item) => item.id))
  .filter((id) => !DEDICATED_PAGES.has(id));

export function generateStaticParams() {
  return foundationSlugs.map((slug) => ({ slug }));
}

export default async function FoundationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  if (!foundationSlugs.includes(slug)) notFound();

  const tItems = await getTranslations({
    locale,
    namespace: "ds.common.sidebar.items",
  });
  const label = tItems(slug);

  return (
    <div>
      <h1
        style={{
          fontSize: "var(--font-size-h1)",
          lineHeight: "var(--line-height-h1)",
          fontWeight: "var(--font-weight-h1)",
          color: "var(--text-primary)",
          marginBottom: 16,
        }}
      >
        {label}
      </h1>
      <p
        style={{
          fontSize: "var(--font-size-body1)",
          lineHeight: "var(--line-height-body1)",
          color: "var(--text-secondary)",
        }}
      >
        Documentation coming soon.
      </p>
    </div>
  );
}
