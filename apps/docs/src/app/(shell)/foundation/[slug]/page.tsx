import { notFound } from "next/navigation";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";

/* Slugs that have their own dedicated page.tsx — exclude from dynamic route */
const DEDICATED_PAGES = new Set(["typography", "color", "icon", "object-style"]);

const foundationSlugs = SIDEBAR_SECTIONS
  .filter((s) => s.basePath === "/foundation")
  .flatMap((s) => s.items.map((item) => item.id))
  .filter((id) => !DEDICATED_PAGES.has(id));

export function generateStaticParams() {
  return foundationSlugs.map((slug) => ({ slug }));
}

function getLabel(slug: string): string | undefined {
  for (const section of SIDEBAR_SECTIONS) {
    if (section.basePath !== "/foundation") continue;
    const item = section.items.find((i) => i.id === slug);
    if (item) return item.label;
  }
  return undefined;
}

export default async function FoundationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = getLabel(slug);
  if (!label) notFound();

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
        Documentation for {label} will be added here.
      </p>
    </div>
  );
}
