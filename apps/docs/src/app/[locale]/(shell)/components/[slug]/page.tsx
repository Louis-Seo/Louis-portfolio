import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";

/* Slugs that have a dedicated page.tsx — excluded from the dynamic route */
const DEDICATED_PAGES = new Set([
  "button",
  "dropdown",
  "navigation",
  "breadcrumb",
  "pagination",
  "input",
  "toggle-radio-checkbox",
  "chip",
  "date-picker",
  "toolbar",
  "slider",
  "filter",
  "expansion-panel",
  "table-list",
  "badge-tag",
  "avatar",
  "empty-state",
  "image-gallery",
  "tree-view",
  "feedback-message",
  "tooltip",
  "modal",
  "indicator",
]);

const componentSlugs = SIDEBAR_SECTIONS.filter((s) => s.basePath === "/components")
  .flatMap((s) => s.items.map((item) => item.id))
  .filter((id) => !DEDICATED_PAGES.has(id));

export function generateStaticParams() {
  return componentSlugs.map((slug) => ({ slug }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  if (!componentSlugs.includes(slug)) notFound();

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
