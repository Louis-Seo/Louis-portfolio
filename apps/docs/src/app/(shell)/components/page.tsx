import Link from "next/link";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";
import styles from "./page.module.css";

/* ── Category config ── */
const CATEGORIES = [
  {
    id: "general",
    gradient: "linear-gradient(135deg, #E6F7EF 0%, #D2F2E6 100%)",
    accentDot: "var(--green-500)",
  },
  {
    id: "navigation",
    gradient: "linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)",
    accentDot: "var(--blue-500)",
  },
  {
    id: "data-entry",
    gradient: "linear-gradient(135deg, #E6F7EF 0%, #C2EAD7 100%)",
    accentDot: "var(--green-600)",
  },
  {
    id: "data-display",
    gradient: "linear-gradient(135deg, #E1F5FE 0%, #81D4FA 100%)",
    accentDot: "var(--blue-400)",
  },
  {
    id: "feedback",
    gradient: "linear-gradient(135deg, #FFF4ED 0%, #FFE6D5 100%)",
    accentDot: "var(--orange-500)",
  },
];

const CATEGORY_DESC: Record<string, string> = {
  general: "사용자 인터랙션의 기본이 되는 범용 컴포넌트",
  navigation: "사용자의 현재 위치를 안내하고 이동을 돕는 컴포넌트",
  "data-entry": "데이터를 입력하거나 옵션을 선택할 수 있는 컴포넌트",
  "data-display": "데이터를 시각적으로 정리하여 전달하는 컴포넌트",
  feedback: "시스템 응답을 전달하고 사용자 행동을 안내하는 컴포넌트",
};

const componentSections = SIDEBAR_SECTIONS.filter(
  (s) => s.basePath === "/components"
);

export default function ComponentsPage() {
  const totalCount = componentSections.reduce(
    (sum, s) => sum + s.items.length,
    0
  );

  // First 2 categories = featured (large), rest = standard
  const featured = componentSections.slice(0, 2);
  const standard = componentSections.slice(2);

  return (
    <div className={styles.page}>
      {/* ════════════════════════════════════════
          Hero
         ════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            {totalCount} Components · 5 Categories
          </div>
          <h1 className={styles.heroTitle}>Components</h1>
          <p className={styles.heroDesc}>
            Wind Design System을 구성하는 UI 컴포넌트 라이브러리입니다.
            <br />
            각 컴포넌트의 Anatomy, Variants, Spec, Usage 가이드라인을
            확인하세요.
          </p>
        </div>

        {/* Floating UI graphic */}
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

      {/* ════════════════════════════════════════
          Featured Categories (2-col, large)
         ════════════════════════════════════════ */}
      <section className={styles.featuredGrid}>
        {featured.map((section) => {
          const cat = CATEGORIES.find((c) => c.id === section.id);
          return (
            <div key={section.id} className={styles.featuredCard}>
              <div
                className={styles.featuredVisual}
                style={{ background: cat?.gradient }}
              >
                <div className={styles.featuredShape}>
                  {section.id === "general" && <GeneralGraphic />}
                  {section.id === "navigation" && <NavigationGraphic />}
                </div>
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.cardHead}>
                  <h2 className={styles.cardTitle}>{section.title}</h2>
                  <span
                    className={styles.cardCount}
                    style={
                      { "--dot": cat?.accentDot } as React.CSSProperties
                    }
                  >
                    {section.items.length}
                  </span>
                </div>
                <p className={styles.cardDesc}>
                  {CATEGORY_DESC[section.id]}
                </p>
                <div className={styles.chipRow}>
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/components/${item.id}`}
                      className={styles.chip}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ════════════════════════════════════════
          Standard Categories (3-col)
         ════════════════════════════════════════ */}
      <section className={styles.standardGrid}>
        {standard.map((section) => {
          const cat = CATEGORIES.find((c) => c.id === section.id);
          return (
            <div key={section.id} className={styles.standardCard}>
              <div
                className={styles.standardVisual}
                style={{ background: cat?.gradient }}
              >
                {section.id === "data-entry" && <DataEntryGraphic />}
                {section.id === "data-display" && <DataDisplayGraphic />}
                {section.id === "feedback" && <FeedbackGraphic />}
              </div>
              <div className={styles.standardBody}>
                <div className={styles.cardHead}>
                  <h2 className={styles.cardTitle}>{section.title}</h2>
                  <span
                    className={styles.cardCount}
                    style={
                      { "--dot": cat?.accentDot } as React.CSSProperties
                    }
                  >
                    {section.items.length}
                  </span>
                </div>
                <p className={styles.cardDesc}>
                  {CATEGORY_DESC[section.id]}
                </p>
                <div className={styles.chipRow}>
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/components/${item.id}`}
                      className={styles.chip}
                    >
                      {item.label}
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
      <div style={{ width: 80, height: 32, borderRadius: 6, background: "var(--green-500)", boxShadow: "0 4px 12px rgba(15, 186, 127, 0.3)" }} />
      <div style={{ display: "flex", gap: 6 }}>
        <div style={{ width: 36, height: 28, borderRadius: 5, border: "2px solid var(--green-500)", background: "white" }} />
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
      <div style={{ width: 64, height: 24, borderRadius: 4, border: "2px solid var(--green-400)", background: "white" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 28, height: 14, borderRadius: 7, background: "var(--green-500)", position: "relative" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "white", position: "absolute", top: 2, right: 2 }} />
        </div>
        <div style={{ width: 12, height: 12, borderRadius: 2, background: "var(--green-500)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 6, height: 3, borderBottom: "2px solid white", borderLeft: "2px solid white", transform: "rotate(-45deg) translateY(-1px)" }} />
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
          <div style={{ flex: 1, height: 6, borderRadius: 2, background: `var(--blue-${i === 1 ? 200 : 100})` }} />
          <div style={{ flex: 1, height: 6, borderRadius: 2, background: `var(--blue-${i === 1 ? 200 : 100})` }} />
          <div style={{ flex: 1, height: 6, borderRadius: 2, background: `var(--blue-${i === 1 ? 200 : 100})` }} />
        </div>
      ))}
    </div>
  );
}

function FeedbackGraphic() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--gray-800)", borderRadius: 6, padding: "6px 10px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
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
