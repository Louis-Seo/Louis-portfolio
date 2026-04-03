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
                복잡한 운영 구조와 제품 시스템을,
                <br />
                명확하고 확장 가능한 경험으로 설계합니다.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className={styles.heroSub}>
                플랫폼, AI·데이터, 디자인 시스템까지 연결해
                <br />
                여러 역할과 워크플로우가 얽힌 제품을 더 이해하기 쉽게 만듭니다.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className={styles.heroTags}>
                <span>Platform UX</span>
                <span>AI &amp; Data</span>
                <span>Design Systems</span>
                <span>Scalable Products</span>
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
                플랫폼, 운영, 데이터, AI가 맞물린 복잡한 제품을 구조적으로 풀어낸 대표 프로젝트입니다.
                <br />
                문제 정의부터 워크플로우 설계, 시스템 정리, 제품 실행까지 직접 리드한 작업을 중심으로 구성했습니다.
              </p>
            </div>
          </Reveal>

          <div className={styles.showcase}>
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <Link
                  href={
                    project.slug === "design-system"
                      ? "/design-system"
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
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>All Projects</h2>
              <p className={styles.sectionSub}>
                도메인은 달라도, 제가 반복해서 풀어온 문제는 같습니다.
                <br />
                복잡한 데이터, 운영 흐름, 사용자 역할을 더 명확한 구조와 경험으로 바꾸는 일입니다.
              </p>
            </div>
          </Reveal>
          <div className={styles.projectIndex}>
            {allProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 40}>
                <Link
                  href={
                    project.slug === "design-system"
                      ? "/design-system"
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
                  화면보다 먼저,
                  <br />
                  제품이 작동하는
                  <br />
                  구조를
                  <br />
                  설계합니다.
                </h2>
              </Reveal>
            </div>
            <div className={styles.approachRight}>
              {[
                { num: "01", title: "Product Systems", text: "디자인 시스템을 단순 컴포넌트 모음이 아니라, 제품이 커져도 일관된 경험을 유지하게 만드는 운영 구조로 설계합니다." },
                { num: "02", title: "AI & Data Products", text: "예측 모델, 모니터링 데이터, 복잡한 테이블과 차트를 사용자가 해석하고 행동으로 옮길 수 있는 인터페이스로 전환합니다." },
                { num: "03", title: "Design–Development Bridge", text: "상태 정의, 컴포넌트 스펙, 구현 제약까지 고려해 디자인 의도가 코드에서 흐려지지 않도록 설계합니다." },
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
              <h2 className={styles.contactTitle}>복잡한 제품을 함께 더 명확하게 만들 팀을 찾고 있습니다.</h2>
              <p className={styles.contactText}>
                운영 구조가 복잡한 플랫폼, AI·데이터 기반 제품,
                <br />
                여러 역할이 얽힌 SaaS처럼 구조 설계가 중요한 문제에 특히 강합니다.
              </p>
              <a href="mailto:niedr7893@gmail.com" className={styles.contactEmail}>niedr7893@gmail.com →</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
