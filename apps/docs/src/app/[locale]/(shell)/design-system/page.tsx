import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";
import styles from "./page.module.css";

/* ── Data ── */
const foundationSections = SIDEBAR_SECTIONS.filter((s) => s.basePath === "/foundation");
const componentSections = SIDEBAR_SECTIONS.filter((s) => s.basePath === "/components");

const foundationCount = foundationSections.reduce((n, s) => n + s.items.length, 0);
const componentCount = componentSections.reduce((n, s) => n + s.items.length, 0);

const FOUNDATION_COLOR: Record<string, string> = {
  typography: "var(--gray-900)",
  color: "var(--green-500)",
  icon: "var(--blue-500)",
  "object-style": "var(--gray-700)",
};

const CATEGORY_GRADIENT: Record<string, string> = {
  general: "linear-gradient(135deg, #E6F7EF, #C2EAD7)",
  navigation: "linear-gradient(135deg, #E1F5FE, #B3E5FC)",
  dataEntry: "linear-gradient(135deg, #E6F7EF, #D2F2E6)",
  dataDisplay: "linear-gradient(135deg, #E1F5FE, #81D4FA)",
  feedback: "linear-gradient(135deg, #FFF4ED, #FFE6D5)",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "ds.index.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/design-system`,
      languages: {
        "en-US": "/en/design-system",
        "ko-KR": "/ko/design-system",
        "x-default": "/en/design-system",
      },
    },
  };
}

export default async function DesignSystemHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ds.index" });
  const tSections = await getTranslations({
    locale,
    namespace: "ds.common.sidebar.sections",
  });
  const tItems = await getTranslations({
    locale,
    namespace: "ds.common.sidebar.items",
  });

  return (
    <div className={styles.page}>
      {/* ── Hero Banner ── */}
      <section className={styles.heroBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>{t("hero.title")}</h1>
          <p className={styles.bannerDesc}>{t("hero.desc")}</p>
          <div className={styles.bannerStats}>
            <div className={styles.statPill}>
              <span className={styles.statLabel}>{t("hero.stats.foundation")}</span>
              <span className={styles.statNumber}>{foundationCount}</span>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statLabel}>{t("hero.stats.components")}</span>
              <span className={styles.statNumber}>{componentCount}</span>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statLabel}>{t("hero.stats.categories")}</span>
              <span className={styles.statNumber}>{componentSections.length}</span>
            </div>
          </div>
        </div>
        <div className={styles.bannerVisual}>
          <HeroGraphic />
        </div>
      </section>

      {/* ── Foundation ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>{t("foundation.title")}</h2>
            <p className={styles.sectionDesc}>{t("foundation.desc")}</p>
          </div>
          <span className={styles.sectionCount}>
            {t("foundation.count", { count: foundationCount })}
          </span>
        </div>

        <div className={styles.foundationGrid}>
          {foundationSections.flatMap((section) =>
            section.items.map((item) => (
              <Link
                key={item.id}
                href={`/foundation/${item.id}` as `/foundation/${string}`}
                className={styles.foundationCard}
                style={{ "--f-color": FOUNDATION_COLOR[item.id] } as React.CSSProperties}
              >
                <div className={styles.foundationIcon}>
                  <FoundationIcon type={item.id} />
                </div>
                <div>
                  <h3 className={styles.foundationName}>{tItems(item.id)}</h3>
                  <p className={styles.foundationDesc}>{t(`foundation.items.${item.id}.desc`)}</p>
                </div>
              </Link>
            )),
          )}
        </div>
      </section>

      {/* ── Components ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>{t("components.title")}</h2>
            <p className={styles.sectionDesc}>{t("components.desc", { count: componentCount })}</p>
          </div>
        </div>

        <div className={styles.componentGrid}>
          {componentSections.map((section) => (
            <div key={section.key} className={styles.componentCard}>
              <div
                className={styles.componentVisual}
                style={{ background: CATEGORY_GRADIENT[section.key] }}
              >
                <CategoryGraphic type={section.key} />
              </div>
              <div className={styles.componentBody}>
                <div className={styles.componentHead}>
                  <h3 className={styles.componentTitle}>{tSections(section.key)}</h3>
                  <span className={styles.componentCount}>{section.items.length}</span>
                </div>
                <p className={styles.componentDesc}>
                  {t(`components.categories.${section.key}.desc`)}
                </p>
                <div className={styles.componentChips}>
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/components/${item.id}` as `/components/${string}`}
                      className={styles.componentChip}
                    >
                      {tItems(item.id)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Graphics (CSS-based soft objects)
   ═══════════════════════════════════════════ */

function HeroGraphic() {
  return (
    <div className={styles.gWrap}>
      <div className={styles.gMainCard}>
        <div className={styles.gMainCardHeader} />
        <div className={styles.gMainCardBody}>
          <div className={styles.gMainCardLine1} />
          <div className={styles.gMainCardLine2} />
        </div>
      </div>
      <div className={styles.gCircle1} />
      <div className={styles.gCircle2} />
      <div className={styles.gPill} />
    </div>
  );
}

function FoundationIcon({ type }: { type: string }) {
  switch (type) {
    case "typography":
      return (
        <div
          style={{
            fontWeight: 800,
            fontSize: 18,
            color: "var(--gray-900)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Aa
        </div>
      );
    case "color":
      return (
        <div style={{ display: "flex", gap: 3 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "var(--green-500)",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "var(--blue-500)",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "var(--red-500)",
            }}
          />
        </div>
      );
    case "icon":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="2"
            y="2"
            width="16"
            height="16"
            rx="4"
            stroke="var(--blue-500)"
            strokeWidth="1.5"
          />
          <path
            d="M7 10L9 12L13 8"
            stroke="var(--blue-500)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "object-style":
      return (
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 5,
            border: "2px solid var(--gray-400)",
            boxShadow: "2px 2px 0 var(--gray-200)",
          }}
        />
      );
    default:
      return null;
  }
}

function CategoryGraphic({ type }: { type: string }) {
  const base: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  switch (type) {
    case "general":
      return (
        <div style={{ ...base, flexDirection: "column", gap: 6 }}>
          <div
            style={{
              width: 64,
              height: 26,
              borderRadius: 6,
              background: "var(--green-500)",
              boxShadow: "0 3px 8px rgba(15,186,127,0.25)",
            }}
          />
          <div style={{ display: "flex", gap: 6 }}>
            <div
              style={{
                width: 30,
                height: 22,
                borderRadius: 4,
                border: "2px solid var(--green-500)",
                background: "white",
              }}
            />
            <div
              style={{
                width: 30,
                height: 22,
                borderRadius: 4,
                background: "var(--green-100)",
              }}
            />
          </div>
        </div>
      );
    case "navigation":
      return (
        <div style={{ ...base, flexDirection: "column", gap: 3, width: 60 }}>
          <div
            style={{
              height: 5,
              borderRadius: 3,
              background: "var(--blue-500)",
              width: "100%",
            }}
          />
          <div
            style={{
              height: 5,
              borderRadius: 3,
              background: "var(--blue-200)",
              width: "70%",
            }}
          />
          <div
            style={{
              height: 5,
              borderRadius: 3,
              background: "var(--blue-200)",
              width: "85%",
            }}
          />
        </div>
      );
    case "dataEntry":
      return (
        <div style={{ ...base, flexDirection: "column", gap: 6 }}>
          <div
            style={{
              width: 56,
              height: 22,
              borderRadius: 4,
              border: "2px solid var(--green-400)",
              background: "white",
            }}
          />
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
        </div>
      );
    case "dataDisplay":
      return (
        <div style={{ ...base, flexDirection: "column", gap: 2, width: 56 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ display: "flex", gap: 2, width: "100%" }}>
              <div
                style={{
                  flex: 1,
                  height: i === 0 ? 6 : 5,
                  borderRadius: 2,
                  background: i === 0 ? "var(--blue-500)" : "var(--blue-100)",
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: i === 0 ? 6 : 5,
                  borderRadius: 2,
                  background: i === 0 ? "var(--blue-500)" : "var(--blue-100)",
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: i === 0 ? 6 : 5,
                  borderRadius: 2,
                  background: i === 0 ? "var(--blue-500)" : "var(--blue-100)",
                }}
              />
            </div>
          ))}
        </div>
      );
    case "feedback":
      return (
        <div style={{ ...base, flexDirection: "column", gap: 6 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "var(--gray-800)",
              borderRadius: 6,
              padding: "5px 10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--green-400)",
              }}
            />
            <div
              style={{
                width: 28,
                height: 3,
                borderRadius: 2,
                background: "var(--gray-400)",
              }}
            />
          </div>
          <div
            style={{
              width: 36,
              height: 3,
              borderRadius: 2,
              background: "var(--orange-300)",
            }}
          />
        </div>
      );
    default:
      return null;
  }
}
