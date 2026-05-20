"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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

type ApproachCard = { num: string; title: string; text: string };

export default function PortfolioPage() {
  const t = useTranslations("home");
  const tp = useTranslations("projects");

  const featured = getFeaturedProjects();
  const allProjects = PROJECTS;

  const heroTags = t.raw("hero.tags") as string[];
  const principles = t.raw("approach.principles") as string[];
  const approachCards = t.raw("approach.cards") as ApproachCard[];

  const projectHref = (slug: string) =>
    slug === "design-system" ? "/design-system" : `/portfolio/${slug}`;

  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <Reveal>
              <p className={styles.heroLabel}>{t("hero.label")}</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className={styles.heroName}>{t("hero.name")}</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className={styles.heroStatement}>
                {t("hero.statementLine1")}
                <br />
                {t("hero.statementLine2")}
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className={styles.heroSub}>
                {t("hero.subLine1")}
                <br />
                {t("hero.subLine2")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className={styles.heroTags}>
                {heroTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
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
          <span>{t("hero.scroll")}</span>
          <div className={styles.heroScrollLine} />
        </div>
      </section>

      {/* ═══ Selected Work ═══ */}
      <section className={styles.workSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>{t("selectedWork.title")}</h2>
              <p className={styles.sectionSub}>
                {t("selectedWork.subLine1")}
                <br />
                {t("selectedWork.subLine2")}
              </p>
            </div>
          </Reveal>

          <div className={styles.showcase}>
            {featured.map((project, i) => {
              const title = tp(`${project.slug}.title`);
              const subtitle = tp(`${project.slug}.subtitle`);
              const tags = tp.raw(`${project.slug}.tags`) as string[];
              return (
                <Reveal key={project.slug} delay={i * 100}>
                  <Link
                    href={projectHref(project.slug)}
                    className={`${styles.showcaseCard} ${i === 0 ? styles.showcaseCardLarge : ""}`}
                  >
                    <div className={styles.showcaseImage}>
                      <ProjectVisual slug={project.slug} />
                    </div>
                    <div className={styles.showcaseInfo}>
                      <div className={styles.showcaseMeta}>
                        <div className={styles.showcaseTags}>
                          {tags.slice(0, 2).map((tag) => (
                            <span key={tag} className={styles.showcaseTag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className={styles.showcaseYear}>{project.year}</span>
                      </div>
                      <h3 className={styles.showcaseTitle}>{title}</h3>
                      <p className={styles.showcaseSubtitle}>{subtitle}</p>
                      <div className={styles.showcaseFooter}>
                        <span className={styles.showcaseRole}>{project.role}</span>
                        <span className={styles.showcaseArrow}>→</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ All Projects ═══ */}
      <section className={styles.indexSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.sectionHead}>
              <h2 className={styles.indexSectionTitle}>{t("allProjects.title")}</h2>
              <p className={styles.sectionSub}>{t("allProjects.sub")}</p>
            </div>
          </Reveal>
          <div className={styles.projectIndex}>
            {allProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 40}>
                <Link href={projectHref(project.slug)} className={styles.indexRow}>
                  <span className={styles.indexNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.indexTitle}>{tp(`${project.slug}.title`)}</span>
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
                  {t("approach.headlineLine1")}
                  <br />
                  {t("approach.headlineLine2")}
                  <br />
                  {t("approach.headlineLine3")}
                  <br />
                  {t("approach.headlineLine4")}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className={styles.principleChips}>
                  {principles.map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className={styles.approachRight}>
              {approachCards.map((item, i) => (
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
                {t("contact.titleLine1")}
                <br />
                {t("contact.titleLine2")}
              </h2>
              <p className={styles.contactText}>
                {t("contact.textLine1")}
                <br />
                {t("contact.textLine2")}
              </p>
              <a href={`mailto:${t("contact.email")}`} className={styles.contactEmail}>
                {t("contact.email")} →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
