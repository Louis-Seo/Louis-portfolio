import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const tIndex = await getTranslations({ locale, namespace: "ds.index" });
  const totalCount = SIDEBAR_SECTIONS.filter((s) => s.basePath === "/components").reduce(
    (sum, s) => sum + s.items.length,
    0,
  );
  return {
    title: tIndex("components.title"),
    description: tIndex("components.desc", { count: totalCount }),
    alternates: {
      canonical: `/${locale}/components`,
      languages: {
        "en-US": "/en/components",
        "ko-KR": "/ko/components",
        "x-default": "/en/components",
      },
    },
  };
}

/* ── Category visual config ── */
const CATEGORIES = [
  {
    key: "general",
    gradient: "linear-gradient(135deg, #E6F7EF 0%, #D2F2E6 100%)",
    accentDot: "var(--green-500)",
  },
  {
    key: "navigation",
    gradient: "linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)",
    accentDot: "var(--blue-500)",
  },
  {
    key: "dataEntry",
    gradient: "linear-gradient(135deg, #E6F7EF 0%, #C2EAD7 100%)",
    accentDot: "var(--green-600)",
  },
  {
    key: "dataDisplay",
    gradient: "linear-gradient(135deg, #E1F5FE 0%, #81D4FA 100%)",
    accentDot: "var(--blue-400)",
  },
  {
    key: "feedback",
    gradient: "linear-gradient(135deg, #FFF4ED 0%, #FFE6D5 100%)",
    accentDot: "var(--orange-500)",
  },
];

const componentSections = SIDEBAR_SECTIONS.filter((s) => s.basePath === "/components");

export default async function ComponentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tSections = await getTranslations({
    locale,
    namespace: "ds.common.sidebar.sections",
  });
  const tItems = await getTranslations({
    locale,
    namespace: "ds.common.sidebar.items",
  });
  const tCat = await getTranslations({
    locale,
    namespace: "ds.index.components.categories",
  });
  const tHero = await getTranslations({
    locale,
    namespace: "ds.index",
  });

  const totalCount = componentSections.reduce((sum, s) => sum + s.items.length, 0);

  const featured = componentSections.slice(0, 2);
  const standard = componentSections.slice(2);

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            {totalCount} {tHero("components.title")} · 5 {tHero("hero.stats.categories")}
          </div>
          <h1 className={styles.heroTitle}>{tHero("components.title")}</h1>
          <p className={styles.heroDesc}>{tHero("components.desc", { count: totalCount })}</p>
        </div>

        <div className={styles.heroGraphic}>
          <div className={styles.floatCard}>
            <div className={styles.floatBtn} />
            <div className={styles.floatBtnOutline} />
          </div>
          <div className={styles.floatToggle}>
            <div className={styles.floatToggleTrack}>
              <div className={styles.floatToggleThumb} />
            </div>
          </div>
          <div className={styles.floatChip}>Chip</div>
          <div className={styles.floatToast}>
            <div className={styles.floatToastIcon} />
            <div className={styles.floatToastLines}>
              <div className={styles.floatToastLine1} />
              <div className={styles.floatToastLine2} />
            </div>
          </div>
          <div className={styles.floatBadge}>3</div>
        </div>
      </section>

      {/* ── Featured Categories (2-col, large) ── */}
      <section className={styles.featuredGrid}>
        {featured.map((section) => {
          const cat = CATEGORIES.find((c) => c.key === section.key);
          return (
            <div key={section.key} className={styles.featuredCard}>
              <div className={styles.featuredVisual} style={{ background: cat?.gradient }}>
                <div className={styles.featuredShape}>
                  {section.key === "general" && <GeneralGraphic />}
                  {section.key === "navigation" && <NavigationGraphic />}
                </div>
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.cardHead}>
                  <h2 className={styles.cardTitle}>{tSections(section.key)}</h2>
                  <span
                    className={styles.cardCount}
                    style={{ "--dot": cat?.accentDot } as React.CSSProperties}
                  >
                    {section.items.length}
                  </span>
                </div>
                <p className={styles.cardDesc}>{tCat(`${section.key}.desc`)}</p>
                <div className={styles.chipRow}>
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/components/${item.id}` as `/components/${string}`}
                      className={styles.chip}
                    >
                      {tItems(item.id)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Standard Categories (3-col) ── */}
      <section className={styles.standardGrid}>
        {standard.map((section) => {
          const cat = CATEGORIES.find((c) => c.key === section.key);
          return (
            <div key={section.key} className={styles.standardCard}>
              <div className={styles.standardVisual} style={{ background: cat?.gradient }}>
                {section.key === "dataEntry" && <DataEntryGraphic />}
                {section.key === "dataDisplay" && <DataDisplayGraphic />}
                {section.key === "feedback" && <FeedbackGraphic />}
              </div>
              <div className={styles.standardBody}>
                <div className={styles.cardHead}>
                  <h2 className={styles.cardTitle}>{tSections(section.key)}</h2>
                  <span
                    className={styles.cardCount}
                    style={{ "--dot": cat?.accentDot } as React.CSSProperties}
                  >
                    {section.items.length}
                  </span>
                </div>
                <p className={styles.cardDesc}>{tCat(`${section.key}.desc`)}</p>
                <div className={styles.chipRow}>
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/components/${item.id}` as `/components/${string}`}
                      className={styles.chip}
                    >
                      {tItems(item.id)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Category Symbolic Graphics (CSS-based)
   ═══════════════════════════════════════════ */

function GeneralGraphic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
      <div
        style={{
          width: 80,
          height: 32,
          borderRadius: 6,
          background: "var(--green-500)",
          boxShadow: "0 4px 12px rgba(15, 186, 127, 0.3)",
        }}
      />
      <div style={{ display: "flex", gap: 6 }}>
        <div
          style={{
            width: 36,
            height: 28,
            borderRadius: 5,
            border: "2px solid var(--green-500)",
            background: "white",
          }}
        />
        <div style={{ width: 36, height: 28, borderRadius: 5, background: "var(--green-100)" }} />
      </div>
    </div>
  );
}

function NavigationGraphic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 80 }}>
      <div style={{ height: 6, borderRadius: 3, background: "var(--blue-500)", width: "100%" }} />
      <div style={{ height: 6, borderRadius: 3, background: "var(--blue-200)", width: "70%" }} />
      <div style={{ height: 6, borderRadius: 3, background: "var(--blue-200)", width: "85%" }} />
      <div style={{ display: "flex", gap: 3, marginTop: 4 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--blue-500)" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--blue-300)" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--blue-300)" }} />
      </div>
    </div>
  );
}

function DataEntryGraphic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <div
        style={{
          width: 64,
          height: 24,
          borderRadius: 4,
          border: "2px solid var(--green-400)",
          background: "white",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 28,
            height: 14,
            borderRadius: 7,
            background: "var(--green-500)",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "white",
              position: "absolute",
              top: 2,
              right: 2,
            }}
          />
        </div>
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 2,
            background: "var(--green-500)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 6,
              height: 3,
              borderBottom: "2px solid white",
              borderLeft: "2px solid white",
              transform: "rotate(-45deg) translateY(-1px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function DataDisplayGraphic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3, width: 64 }}>
      <div style={{ display: "flex", gap: 3 }}>
        <div style={{ flex: 1, height: 8, borderRadius: 2, background: "var(--blue-500)" }} />
        <div style={{ flex: 1, height: 8, borderRadius: 2, background: "var(--blue-500)" }} />
        <div style={{ flex: 1, height: 8, borderRadius: 2, background: "var(--blue-500)" }} />
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} style={{ display: "flex", gap: 3 }}>
          <div
            style={{
              flex: 1,
              height: 6,
              borderRadius: 2,
              background: `var(--blue-${i === 1 ? 200 : 100})`,
            }}
          />
          <div
            style={{
              flex: 1,
              height: 6,
              borderRadius: 2,
              background: `var(--blue-${i === 1 ? 200 : 100})`,
            }}
          />
          <div
            style={{
              flex: 1,
              height: 6,
              borderRadius: 2,
              background: `var(--blue-${i === 1 ? 200 : 100})`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function FeedbackGraphic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "var(--gray-800)",
          borderRadius: 6,
          padding: "6px 10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green-400)" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ width: 32, height: 3, borderRadius: 2, background: "var(--gray-300)" }} />
          <div style={{ width: 20, height: 3, borderRadius: 2, background: "var(--gray-500)" }} />
        </div>
      </div>
      <div style={{ width: 40, height: 4, borderRadius: 2, background: "var(--orange-300)" }} />
    </div>
  );
}
