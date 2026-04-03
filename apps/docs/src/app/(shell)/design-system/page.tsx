import Link from "next/link";
import { SIDEBAR_SECTIONS } from "@/data/sidebarData";
import styles from "./page.module.css";

/* ── Data ── */
const foundationSections = SIDEBAR_SECTIONS.filter(
  (s) => s.basePath === "/foundation"
);
const componentSections = SIDEBAR_SECTIONS.filter(
  (s) => s.basePath === "/components"
);

const foundationCount = foundationSections.reduce(
  (n, s) => n + s.items.length,
  0
);
const componentCount = componentSections.reduce(
  (n, s) => n + s.items.length,
  0
);

const FOUNDATION_META: Record<string, { desc: string; color: string }> = {
  typography: {
    desc: "서체, 크기, 굵기, 행간 등 텍스트 스타일 체계",
    color: "var(--gray-900)",
  },
  color: {
    desc: "브랜드, 시맨틱, UI 상태별 컬러 팔레트",
    color: "var(--green-500)",
  },
  icon: {
    desc: "시스템 전반에 사용되는 아이콘 가이드라인",
    color: "var(--blue-500)",
  },
  "object-style": {
    desc: "Radius, Elevation, Border 등 오브젝트 스타일",
    color: "var(--gray-700)",
  },
};

const COMPONENT_CATEGORY_META: Record<
  string,
  { desc: string; gradient: string }
> = {
  general: {
    desc: "인터랙션의 기본이 되는 범용 컴포넌트",
    gradient: "linear-gradient(135deg, #E6F7EF, #C2EAD7)",
  },
  navigation: {
    desc: "위치 안내와 이동을 돕는 컴포넌트",
    gradient: "linear-gradient(135deg, #E1F5FE, #B3E5FC)",
  },
  "data-entry": {
    desc: "데이터 입력과 옵션 선택 컴포넌트",
    gradient: "linear-gradient(135deg, #E6F7EF, #D2F2E6)",
  },
  "data-display": {
    desc: "데이터를 정리하여 전달하는 컴포넌트",
    gradient: "linear-gradient(135deg, #E1F5FE, #81D4FA)",
  },
  feedback: {
    desc: "시스템 응답과 안내 컴포넌트",
    gradient: "linear-gradient(135deg, #FFF4ED, #FFE6D5)",
  },
};

export default function DesignSystemHome() {
  return (
    <div className={styles.page}>
      {/* ── Hero Banner ── */}
      <section className={styles.heroBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Design System</h1>
          <p className={styles.bannerDesc}>
            일관된 제품 경험을 만들기 위한 디자인 원칙과 UI 라이브러리입니다.
            <br />
            Foundation에서는 기본 스타일과 시각 규칙을, Components에서는
            재사용 가능한 UI 패턴을 탐색할 수 있습니다.
          </p>
          <div className={styles.bannerStats}>
            <div className={styles.statPill}>
              <span className={styles.statLabel}>Foundation</span>
              <span className={styles.statNumber}>{foundationCount}</span>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statLabel}>Components</span>
              <span className={styles.statNumber}>{componentCount}</span>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statLabel}>Categories</span>
              <span className={styles.statNumber}>{componentSections.length}</span>
            </div>
          </div>
        </div>
        <div className={styles.bannerVisual}>
          <HeroGraphic />
        </div>
      </section>

      {/* ════════════════════════════════════════
          Foundation
         ════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Foundation</h2>
            <p className={styles.sectionDesc}>
              컴포넌트를 구성하는 시각적 기반 요소 — 색상, 타이포그래피, 아이콘, 스타일 토큰
            </p>
          </div>
          <span className={styles.sectionCount}>{foundationCount} items</span>
        </div>

        <div className={styles.foundationGrid}>
          {foundationSections.flatMap((section) =>
            section.items.map((item) => {
              const meta = FOUNDATION_META[item.id];
              return (
                <Link
                  key={item.id}
                  href={`/foundation/${item.id}`}
                  className={styles.foundationCard}
                  style={
                    { "--f-color": meta?.color } as React.CSSProperties
                  }
                >
                  <div className={styles.foundationIcon}>
                    <FoundationIcon type={item.id} />
                  </div>
                  <div>
                    <h3 className={styles.foundationName}>{item.label}</h3>
                    <p className={styles.foundationDesc}>
                      {meta?.desc}
                    </p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════
          Components
         ════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Components</h2>
            <p className={styles.sectionDesc}>
              UI를 구성하는 {componentCount}개 빌딩 블록 — Anatomy, Variants, Spec, Usage 가이드라인 포함
            </p>
          </div>
        </div>

        <div className={styles.componentGrid}>
          {componentSections.map((section) => {
            const meta = COMPONENT_CATEGORY_META[section.id];
            return (
              <div key={section.id} className={styles.componentCard}>
                <div
                  className={styles.componentVisual}
                  style={{ background: meta?.gradient }}
                >
                  <CategoryGraphic type={section.id} />
                </div>
                <div className={styles.componentBody}>
                  <div className={styles.componentHead}>
                    <h3 className={styles.componentTitle}>
                      {section.title}
                    </h3>
                    <span className={styles.componentCount}>
                      {section.items.length}
                    </span>
                  </div>
                  <p className={styles.componentDesc}>{meta?.desc}</p>
                  <div className={styles.componentChips}>
                    {section.items.map((item) => (
                      <Link
                        key={item.id}
                        href={`/components/${item.id}`}
                        className={styles.componentChip}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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
      {/* Main floating card */}
      <div className={styles.gMainCard}>
        <div className={styles.gMainCardHeader} />
        <div className={styles.gMainCardBody}>
          <div className={styles.gMainCardLine1} />
          <div className={styles.gMainCardLine2} />
        </div>
      </div>
      {/* Small circle accent */}
      <div className={styles.gCircle1} />
      <div className={styles.gCircle2} />
      {/* Floating pill */}
      <div className={styles.gPill} />
    </div>
  );
}

function FoundationIcon({ type }: { type: string }) {
  switch (type) {
    case "typography":
      return (
        <div style={{ fontWeight: 800, fontSize: 18, color: "var(--gray-900)", fontFamily: "Inter, sans-serif" }}>
          Aa
        </div>
      );
    case "color":
      return (
        <div style={{ display: "flex", gap: 3 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--green-500)" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--blue-500)" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--red-500)" }} />
        </div>
      );
    case "icon":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="16" height="16" rx="4" stroke="var(--blue-500)" strokeWidth="1.5" />
          <path d="M7 10L9 12L13 8" stroke="var(--blue-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "object-style":
      return (
        <div style={{ width: 18, height: 18, borderRadius: 5, border: "2px solid var(--gray-400)", boxShadow: "2px 2px 0 var(--gray-200)" }} />
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
          <div style={{ width: 64, height: 26, borderRadius: 6, background: "var(--green-500)", boxShadow: "0 3px 8px rgba(15,186,127,0.25)" }} />
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 30, height: 22, borderRadius: 4, border: "2px solid var(--green-500)", background: "white" }} />
            <div style={{ width: 30, height: 22, borderRadius: 4, background: "var(--green-100)" }} />
          </div>
        </div>
      );
    case "navigation":
      return (
        <div style={{ ...base, flexDirection: "column", gap: 3, width: 60 }}>
          <div style={{ height: 5, borderRadius: 3, background: "var(--blue-500)", width: "100%" }} />
          <div style={{ height: 5, borderRadius: 3, background: "var(--blue-200)", width: "70%" }} />
          <div style={{ height: 5, borderRadius: 3, background: "var(--blue-200)", width: "85%" }} />
        </div>
      );
    case "data-entry":
      return (
        <div style={{ ...base, flexDirection: "column", gap: 6 }}>
          <div style={{ width: 56, height: 22, borderRadius: 4, border: "2px solid var(--green-400)", background: "white" }} />
          <div style={{ width: 28, height: 14, borderRadius: 7, background: "var(--green-500)", position: "relative" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "white", position: "absolute", top: 2, right: 2 }} />
          </div>
        </div>
      );
    case "data-display":
      return (
        <div style={{ ...base, flexDirection: "column", gap: 2, width: 56 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ display: "flex", gap: 2, width: "100%" }}>
              <div style={{ flex: 1, height: i === 0 ? 6 : 5, borderRadius: 2, background: i === 0 ? "var(--blue-500)" : "var(--blue-100)" }} />
              <div style={{ flex: 1, height: i === 0 ? 6 : 5, borderRadius: 2, background: i === 0 ? "var(--blue-500)" : "var(--blue-100)" }} />
              <div style={{ flex: 1, height: i === 0 ? 6 : 5, borderRadius: 2, background: i === 0 ? "var(--blue-500)" : "var(--blue-100)" }} />
            </div>
          ))}
        </div>
      );
    case "feedback":
      return (
        <div style={{ ...base, flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--gray-800)", borderRadius: 6, padding: "5px 10px", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green-400)" }} />
            <div style={{ width: 28, height: 3, borderRadius: 2, background: "var(--gray-400)" }} />
          </div>
          <div style={{ width: 36, height: 3, borderRadius: 2, background: "var(--orange-300)" }} />
        </div>
      );
    default:
      return null;
  }
}
