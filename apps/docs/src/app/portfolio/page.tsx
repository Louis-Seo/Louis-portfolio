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
    "invest-manager": { bg: "#0F1520", accent: "#03A9F4" },
    "dnk-rp": { bg: "#0F1520", accent: "#03A9F4" },
    "design-system": { bg: "#141414", accent: "#0FBA7F" },
    "research-problem-framing": { bg: "#141414", accent: "#0FBA7F" },
    "zoomable-wind": { bg: "#111118", accent: "#29B6F6" },
    "nearthwind-mobile": { bg: "#0F1612", accent: "#54C694" },
    "zoomable-worker": { bg: "#14120F", accent: "#FFA726" },
  };
  const c = colors[slug] || { bg: "#141414", accent: "#0FBA7F" };

  return (
    <div className={styles.projectVisual} style={{ background: c.bg }}>
      <div className={styles.pvGrid}>
        <div className={styles.pvBar} style={{ background: c.accent, width: "60%" }} />
        <div
          className={styles.pvBar}
          style={{ background: c.accent, opacity: 0.3, width: "80%" }}
        />
        <div
          className={styles.pvBar}
          style={{ background: c.accent, opacity: 0.15, width: "45%" }}
        />
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
                여러 역할이 얽힌 운영 플랫폼과
                <br />
                데이터 중심 제품을 설계합니다.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className={styles.heroSub}>
                PMS, 투자 대시보드, AI 검사 시스템, 디자인 시스템까지 —
                <br />
                구조가 복잡할수록 더 명확하게 만드는 일을 해왔습니다.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className={styles.heroTags}>
                <span>Multi-Role Platforms</span>
                <span>AI &amp; Data Products</span>
                <span>Design Systems</span>
                <span>Workflow Design</span>
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
                구조가 복잡한 제품일수록 문제 정의가 설계의 절반입니다.
                <br />
                워크플로우 분석부터 시스템 설계, 제품 실행까지 직접 리드한 대표 프로젝트입니다.
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
                  className={`${styles.showcaseCard} ${i === 0 ? styles.showcaseCardLarge : ""}`}
                >
                  <div className={styles.showcaseImage}>
                    <ProjectVisual slug={project.slug} />
                  </div>
                  <div className={styles.showcaseInfo}>
                    <div className={styles.showcaseMeta}>
                      <div className={styles.showcaseTags}>
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className={styles.showcaseTag}>
                            {tag}
                          </span>
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
              <h2 className={styles.indexSectionTitle}>All Projects</h2>
              <p className={styles.sectionSub}>도메인은 달라도, 풀어온 문제의 구조는 같습니다.</p>
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

      {/* ═══ What I Bring ═══ */}
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
              <Reveal delay={100}>
                <div className={styles.principleChips}>
                  <span>Structure First</span>
                  <span>System Thinking</span>
                  <span>Ship with Engineers</span>
                </div>
              </Reveal>
            </div>
            <div className={styles.approachRight}>
              {[
                {
                  num: "01",
                  title: "Product Systems",
                  text: "4개 제품팀이 공유하는 토큰 기반 디자인 시스템을 구축하고, 70개 이상의 컴포넌트를 직접 설계·운영했습니다. 제품이 확장되어도 경험이 흐트러지지 않는 구조를 만듭니다.",
                },
                {
                  num: "02",
                  title: "AI & Data Products",
                  text: "드론 촬영 데이터의 AI 결함 분석, 풍력 자산 투자 대시보드, 실시간 모니터링 인터페이스를 설계했습니다. 복잡한 데이터를 판단과 행동으로 연결하는 UI를 만듭니다.",
                },
                {
                  num: "03",
                  title: "Design–Dev Bridge",
                  text: "Figma 토큰과 React 컴포넌트 스펙을 직접 정의하고, 상태·변형·제약 조건까지 설계에 포함시킵니다. 디자인 의도가 코드에서 그대로 작동하도록 만듭니다.",
                },
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
              <h2 className={styles.contactTitle}>
                구조가 복잡한 제품,
                <br />
                함께 풀어볼 팀을 찾고 있습니다.
              </h2>
              <p className={styles.contactText}>
                멀티롤 플랫폼, AI·데이터 제품, 운영 중심 SaaS —
                <br />
                문제를 구조화하고 실행까지 이어본 디자이너가 필요하다면.
              </p>
              <a href="mailto:niedr7893@gmail.com" className={styles.contactEmail}>
                niedr7893@gmail.com →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
