"use client";

import Link from "next/link";
import { PROJECTS, getFeaturedProjects } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";
import styles from "./page.module.css";

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible=""
      className={`${styles.reveal} ${className || ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── CSS-based product screen mockups ── */
function DashboardMock() {
  return (
    <div className={styles.mockDashboard}>
      <div className={styles.mockSidebar}>
        <div className={styles.mockLogo} />
        <div className={styles.mockNavItem} style={{ opacity: 1 }} />
        <div className={styles.mockNavItem} />
        <div className={styles.mockNavItem} />
        <div className={styles.mockNavItem} />
      </div>
      <div className={styles.mockMain}>
        <div className={styles.mockTopbar}>
          <div className={styles.mockBreadcrumb} />
          <div className={styles.mockSearch} />
        </div>
        <div className={styles.mockContent}>
          <div className={styles.mockCardRow}>
            <div className={styles.mockStatCard} />
            <div className={styles.mockStatCard} />
            <div className={styles.mockStatCard} />
          </div>
          <div className={styles.mockTable}>
            <div className={styles.mockTableHeader} />
            <div className={styles.mockTableRow} />
            <div className={styles.mockTableRow} />
            <div className={styles.mockTableRow} />
            <div className={styles.mockTableRow} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMock() {
  return (
    <div className={styles.mockMobile}>
      <div className={styles.mockMobileHeader} />
      <div className={styles.mockMobileCard} />
      <div className={styles.mockMobileList}>
        <div className={styles.mockMobileRow} />
        <div className={styles.mockMobileRow} />
        <div className={styles.mockMobileRow} />
      </div>
      <div className={styles.mockMobileNav}>
        <div className={styles.mockMobileNavDot} />
        <div className={styles.mockMobileNavDot} style={{ background: "#0FBA7F" }} />
        <div className={styles.mockMobileNavDot} />
      </div>
    </div>
  );
}

function ProjectVisual({ slug }: { slug: string }) {
  const colors: Record<string, { bg: string; accent: string }> = {
    "dnk-rp": { bg: "#0F1A14", accent: "#0FBA7F" },
    "invest-manager": { bg: "#0F1520", accent: "#03A9F4" },
    "design-system": { bg: "#141414", accent: "#0FBA7F" },
    "zoomable-wind": { bg: "#111118", accent: "#29B6F6" },
    "nearthwind-mobile": { bg: "#0F1612", accent: "#54C694" },
    "zoomable-worker": { bg: "#14120F", accent: "#FFA726" },
  };
  const c = colors[slug] || { bg: "#141414", accent: "#0FBA7F" };

  return (
    <div className={styles.projectVisual} style={{ background: c.bg }}>
      <div className={styles.pvGrid}>
        <div className={styles.pvBar} style={{ background: c.accent, width: "60%" }} />
        <div className={styles.pvBar} style={{ background: c.accent, opacity: 0.3, width: "80%" }} />
        <div className={styles.pvBar} style={{ background: c.accent, opacity: 0.15, width: "45%" }} />
      </div>
      <div className={styles.pvDot} style={{ background: c.accent }} />
    </div>
  );
}

export default function PortfolioPage() {
  const featured = getFeaturedProjects();
  const allProjects = PROJECTS;

  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <Reveal>
              <p className={styles.heroLabel}>Product Designer</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className={styles.heroName}>Louis Seo</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className={styles.heroStatement}>
                복잡한 제품 구조를
                <br />
                명확한 경험으로 설계합니다.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className={styles.heroTags}>
                <span>Product Systems</span>
                <span>AI &amp; Data</span>
                <span>Design Systems</span>
                <span>Scalable UX</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className={styles.heroVisual}>
              <div className={styles.heroFrame1}>
                <DashboardMock />
              </div>
              <div className={styles.heroFrame2}>
                <MobileMock />
              </div>
            </div>
          </Reveal>
        </div>

        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <div className={styles.heroScrollLine} />
        </div>
      </section>

      {/* ═══ Selected Work ═══ */}
      <section className={styles.workSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>Selected Work</h2>
              <p className={styles.sectionSub}>
                플랫폼, 데이터, AI 등 높은 복잡도의 도메인에서 제품 구조와 사용자 경험을 설계한 프로젝트
              </p>
            </div>
          </Reveal>

          <div className={styles.showcase}>
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <Link
                  href={
                    project.slug === "design-system"
                      ? "/"
                      : `/portfolio/${project.slug}`
                  }
                  className={`${styles.showcaseCard} ${
                    i === 0 ? styles.showcaseCardLarge : ""
                  }`}
                >
                  <div className={styles.showcaseImage}>
                    <ProjectVisual slug={project.slug} />
                  </div>
                  <div className={styles.showcaseInfo}>
                    <div className={styles.showcaseMeta}>
                      <div className={styles.showcaseTags}>
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className={styles.showcaseTag}>{tag}</span>
                        ))}
                      </div>
                      <span className={styles.showcaseYear}>{project.year}</span>
                    </div>
                    <h3 className={styles.showcaseTitle}>{project.title}</h3>
                    <p className={styles.showcaseSubtitle}>{project.subtitle}</p>
                    <div className={styles.showcaseFooter}>
                      <span className={styles.showcaseRole}>{project.role}</span>
                      <span className={styles.showcaseArrow}>→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ All Projects ═══ */}
      <section className={styles.indexSection}>
        <div className={styles.container}>
          <Reveal>
            <h2 className={styles.sectionTitle}>All Projects</h2>
          </Reveal>
          <div className={styles.projectIndex}>
            {allProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 40}>
                <Link
                  href={
                    project.slug === "design-system"
                      ? "/"
                      : `/portfolio/${project.slug}`
                  }
                  className={styles.indexRow}
                >
                  <span className={styles.indexNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.indexTitle}>{project.title}</span>
                  <span className={styles.indexDomain}>{project.domain}</span>
                  <span className={styles.indexYear}>{project.year}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ How I Design ═══ */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.approachLayout}>
            <div className={styles.approachLeft}>
              <Reveal>
                <h2 className={styles.approachHeadline}>
                  화면이 아닌
                  <br />
                  구조를,
                  <br />
                  제품 전체를
                  <br />
                  설계합니다.
                </h2>
              </Reveal>
            </div>
            <div className={styles.approachRight}>
              {[
                { num: "01", title: "Product Systems", text: "토큰, 컴포넌트, 패턴 기반의 디자인 시스템을 설계하고 운영하며, 제품이 성장해도 일관된 경험을 유지하는 구조를 만듭니다." },
                { num: "02", title: "AI & Data Experience", text: "AI 예측 모델, 실시간 모니터링, 복잡한 데이터셋을 사용자가 해석하고 행동할 수 있는 직관적인 인터페이스로 전환합니다." },
                { num: "03", title: "Design–Dev Bridge", text: "컴포넌트 스펙, 상태 정의, React 패턴까지 이해하며 엔지니어와 같은 언어로 소통합니다. 디자인 의도가 코드로 정확히 전달됩니다." },
              ].map((item, i) => (
                <Reveal key={item.num} delay={i * 100}>
                  <div className={styles.approachCard}>
                    <span className={styles.approachNum}>{item.num}</span>
                    <h3 className={styles.approachTitle}>{item.title}</h3>
                    <p className={styles.approachText}>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Contact ═══ */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.contactInner}>
              <h2 className={styles.contactTitle}>함께 만들어갈 제품이 있다면</h2>
              <p className={styles.contactText}>
                복잡한 도메인, 까다로운 사용자 구조, 성장하는 플랫폼 —
                <br />
                그런 문제를 함께 풀 팀을 찾고 있습니다.
              </p>
              <a href="mailto:niedr7893@gmail.com" className={styles.contactEmail}>niedr7893@gmail.com →</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
