"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
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

function CaseImage({
  src,
  alt,
  className,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`${styles.imageFrame} ${className || ""}`}>
      {failed ? (
        <div className={styles.imagePlaceholder}>
          <span className={styles.placeholderLabel}>{label || alt}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 828px) 100vw, 1080px"
          style={{ objectFit: "cover" }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

type HeroMeta =
  | { label: string; value: string }
  | { label: string; valueLine1: string; valueLine2: string };
type PainCard = { num: string; title: string; desc: string };
type DiagramOutput = { role: string; value: string };
type UserCard = { role: string; question: string; needs: string; tab: string };
type StrategyCard = { num: string; title: string; desc: string; tags: string[] };
type Bullet = { title: string; text: string };
type DecisionCard = {
  num: string;
  title: string;
  alternative: string;
  chosen: string;
  reason: string;
};
type Metric = { value: string; label: string; desc: string };

export default function InvestManagerClient() {
  const t = useTranslations("case.invest-manager");

  const heroMeta = t.raw("heroMeta") as HeroMeta[];
  const painCards = t.raw("problem.painCards") as PainCard[];
  const tier1Roles = t.raw("problem.diagram.tier1.roles") as string[];
  const tier3Outputs = t.raw("problem.diagram.tier3.outputs") as DiagramOutput[];
  const userCards = t.raw("users.cards") as UserCard[];
  const strategyCards = t.raw("strategy.cards") as StrategyCard[];
  const homeBullets = t.raw("features.home.bullets") as Bullet[];
  const dashboardBuilderBullets = t.raw("features.dashboardBuilder.bullets") as Bullet[];
  const dashboardCompletedBullets = t.raw(
    "features.dashboardBuilder.completed.bullets",
  ) as Bullet[];
  const dealPipelineBullets = t.raw("features.dealPipeline.bullets") as Bullet[];
  const cashFlowConfigBullets = t.raw("features.cashFlowConfig.bullets") as Bullet[];
  const dataManagementBullets = t.raw("features.dataManagement.bullets") as Bullet[];
  const pmrReviewBullets = t.raw("features.dataManagement.pmrReview.bullets") as Bullet[];
  const aiSqlBullets = t.raw("features.aiSql.bullets") as Bullet[];
  const aiInsightsBullets = t.raw("features.aiInsights.bullets") as Bullet[];
  const systemChromeBullets = t.raw("features.systemChrome.bullets") as Bullet[];
  const decisionCards = t.raw("decisions.cards") as DecisionCard[];
  const metrics = t.raw("outcome.metrics") as Metric[];
  const reflectionParagraphs = t.raw("outcome.reflection.paragraphs") as string[];

  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.heroLabel}>{t("hero.label")}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>{t("hero.title")}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroTagline}>{t("hero.tagline")}</p>
            <p className={styles.heroDescription}>
              {t("hero.descLine1")}
              <br />
              {t("hero.descLine2")}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.heroMeta}>
              {heroMeta.map((m) => (
                <div key={m.label} className={styles.metaItem}>
                  <span className={styles.metaLabel}>{m.label}</span>
                  <span className={styles.metaValue}>
                    {"value" in m ? (
                      m.value
                    ) : (
                      <>
                        {m.valueLine1}
                        <br />
                        {m.valueLine2}
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={400}>
          <div className={styles.container}>
            <CaseImage
              src="/images/portfolio/invest-manager/hero.png"
              alt="DNK Investment Manager System Dashboard"
              className={styles.heroImage}
              label="System Dashboard"
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Overview ═══ */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.overviewGrid}>
              <div className={styles.overviewLeft}>
                <p className={styles.sectionLabel}>{t("overview.label")}</p>
                <h2 className={styles.overviewTitle}>
                  {t("overview.titleLine1")}
                  <br />
                  {t("overview.titleLine2")}
                </h2>
              </div>
              <div className={styles.overviewRight}>
                {(t.raw("overview.paragraphs") as string[]).map((p, i) => (
                  <p key={i} className={styles.overviewText}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Problem ═══ */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("problem.label")}</p>
            <h2 className={styles.sectionTitle}>
              {t("problem.titleLine1")}
              <br />
              {t("problem.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("problem.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.painGrid}>
              {painCards.map((item, i) => (
                <Reveal key={item.num} delay={i * 60}>
                  <div className={styles.painCard}>
                    <span className={styles.painNum}>{item.num}</span>
                    <h4 className={styles.painTitle}>{item.title}</h4>
                    <p className={styles.painDesc}>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className={styles.container}>
            <div className={styles.problemDiagram}>
              <div className={styles.diagramTier}>
                <span className={styles.diagramTierLabel}>{t("problem.diagram.tier1.label")}</span>
                <div className={styles.diagramRoleRow}>
                  {tier1Roles.map((role) => (
                    <div key={role} className={styles.diagramRole}>
                      {role}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.diagramConnector} aria-hidden />

              <div className={styles.diagramTier}>
                <span className={styles.diagramTierLabel}>{t("problem.diagram.tier2.label")}</span>
                <div className={styles.diagramBarrier}>
                  <span className={styles.diagramBarrierLabel}>
                    {t("problem.diagram.tier2.title")}
                  </span>
                  <span className={styles.diagramBarrierMeta}>
                    {t("problem.diagram.tier2.meta")}
                  </span>
                </div>
              </div>

              <div className={styles.diagramConnector} aria-hidden />

              <div className={styles.diagramTier}>
                <span className={styles.diagramTierLabel}>{t("problem.diagram.tier3.label")}</span>
                <div className={styles.diagramOutputRow}>
                  {tier3Outputs.map((o) => (
                    <div key={o.role} className={styles.diagramOutput}>
                      <span className={styles.diagramOutputRole}>{o.role}</span>
                      <span className={styles.diagramOutputValue}>{o.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className={styles.diagramCaption}>{t("problem.diagram.caption")}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ Users ═══ */}
      <section className={styles.usersSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("users.label")}</p>
            <h2 className={styles.sectionTitle}>{t("users.title")}</h2>
            <p className={styles.sectionDesc}>{t("users.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.userGrid}>
              {userCards.map((item, i) => (
                <Reveal key={item.role} delay={i * 80}>
                  <div className={styles.userCard}>
                    <span className={styles.userRole}>{item.role}</span>
                    <p className={styles.userQuestion}>&ldquo;{item.question}&rdquo;</p>
                    <p className={styles.userNeeds}>{item.needs}</p>
                    <span className={styles.userTab}>{item.tab}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Design Strategy ═══ */}
      <section className={styles.strategySection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("strategy.label")}</p>
            <h2 className={styles.sectionTitleLight}>
              {t("strategy.titleLine1")}
              <br />
              {t("strategy.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("strategy.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.strategyGrid}>
              {strategyCards.map((item, i) => (
                <Reveal key={item.num} delay={i * 80}>
                  <div className={styles.strategyCard}>
                    <span className={styles.strategyNum}>{item.num}</span>
                    <h4 className={styles.strategyTitle}>{item.title}</h4>
                    <p className={styles.strategyDesc}>{item.desc}</p>
                    <div className={styles.strategyTags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.strategyTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ IA ═══ */}
      <section className={styles.iaSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("ia.label")}</p>
            <h2 className={styles.sectionTitle}>{t("ia.title")}</h2>
            <p className={styles.sectionDesc}>{t("ia.desc")}</p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div className={styles.container}>
            <CaseImage
              src="/images/portfolio/invest-manager/ia-map.png"
              alt={t("ia.imageAlt")}
              className={styles.fullImage}
              label="Information Architecture — 6 Tabs"
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Feature 01: Home ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.home.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.home.title")}</h2>
            <p className={styles.featureDescription}>{t("features.home.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/home.png"
              alt={t("features.home.heroImageAlt")}
              className={styles.featureHeroImage}
              label="Home — Portfolio Overview"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {homeBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 02: Dashboard Builder ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.dashboardBuilder.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.dashboardBuilder.title")}</h2>
            <p className={styles.featureDescription}>
              {t("features.dashboardBuilder.description")}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/dashboard-builder.png"
              alt={t("features.dashboardBuilder.heroImageAlt")}
              className={styles.featureHeroImage}
              label="Dashboard Builder"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {dashboardBuilderBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className={styles.subSectionHeader}>
              <p className={styles.subSectionLabel}>
                {t("features.dashboardBuilder.completed.label")}
              </p>
              <h3 className={styles.subSectionTitle}>
                {t("features.dashboardBuilder.completed.title")}
              </h3>
              <p className={styles.subSectionDesc}>
                {t("features.dashboardBuilder.completed.desc")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={350}>
            <CaseImage
              src="/images/portfolio/invest-manager/dashboard-built.png"
              alt={t("features.dashboardBuilder.completed.heroImageAlt")}
              className={styles.featureHeroImage}
              label="Portfolio Performance Overview"
            />
          </Reveal>
          <Reveal delay={400}>
            <div className={styles.bulletRow}>
              {dashboardCompletedBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 03: Deal Pipeline ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.dealPipeline.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.dealPipeline.title")}</h2>
            <p className={styles.featureDescription}>{t("features.dealPipeline.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/deal-pipeline.png"
              alt={t("features.dealPipeline.heroImageAlt")}
              className={styles.featureHeroImage}
              label="Deal Pipeline — Kanban"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {dealPipelineBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 04: Cash Flow Config ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.cashFlowConfig.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.cashFlowConfig.title")}</h2>
            <p className={styles.featureDescription}>{t("features.cashFlowConfig.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/cfc.png"
              alt={t("features.cashFlowConfig.heroImageAlt")}
              className={styles.featureHeroImage}
              label="Cash Flow Config"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {cashFlowConfigBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 05: Data Management ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.dataManagement.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.dataManagement.title")}</h2>
            <p className={styles.featureDescription}>{t("features.dataManagement.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/data-management.png"
              alt={t("features.dataManagement.heroImageAlt")}
              className={styles.featureHeroImage}
              label="Data Management"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {dataManagementBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subSectionHeader}>
              <p className={styles.subSectionLabel}>
                {t("features.dataManagement.pmrReview.label")}
              </p>
              <h3 className={styles.subSectionTitle}>
                {t("features.dataManagement.pmrReview.title")}
              </h3>
              <p className={styles.subSectionDesc}>{t("features.dataManagement.pmrReview.desc")}</p>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <CaseImage
              src="/images/portfolio/invest-manager/pmr-review.png"
              alt={t("features.dataManagement.pmrReview.heroImageAlt")}
              className={styles.featureHeroImage}
              label="PMR Upload Portal — AI-assisted Review"
            />
          </Reveal>
          <Reveal delay={500}>
            <div className={styles.bulletRow}>
              {pmrReviewBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 06: AI SQL ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.aiSql.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.aiSql.title")}</h2>
            <p className={styles.featureDescription}>{t("features.aiSql.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/ai-sql.png"
              alt={t("features.aiSql.heroImageAlt")}
              className={styles.featureHeroImage}
              label="AI SQL"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {aiSqlBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 07: AI Insights ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.aiInsights.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.aiInsights.title")}</h2>
            <p className={styles.featureDescription}>{t("features.aiInsights.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/ai-insights.png"
              alt={t("features.aiInsights.heroImageAlt")}
              className={styles.featureHeroImage}
              label="AI Insights — Chart-contextual Panel"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {aiInsightsBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 08: System Chrome ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.systemChrome.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.systemChrome.title")}</h2>
            <p className={styles.featureDescription}>{t("features.systemChrome.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/system-chrome.png"
              alt={t("features.systemChrome.heroImageAlt")}
              className={styles.featureHeroImage}
              label="System Chrome — Topbar + Command Palette"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {systemChromeBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Design Decisions ═══ */}
      <section className={styles.decisionSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("decisions.label")}</p>
            <h2 className={styles.sectionTitle}>{t("decisions.title")}</h2>
            <p className={styles.sectionDesc}>{t("decisions.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.decisionGrid}>
              {decisionCards.map((d) => (
                <div key={d.num} className={styles.decisionCard}>
                  <span className={styles.decisionNum}>{d.num}</span>
                  <h4 className={styles.decisionTitle}>{d.title}</h4>
                  <div className={styles.decisionOptions}>
                    <div className={styles.decisionOption}>
                      <span className={styles.optionLabel}>Alternative</span>
                      <p className={styles.optionDesc}>{d.alternative}</p>
                    </div>
                    <div className={styles.decisionChosen}>
                      <span className={styles.chosenLabel}>Chosen</span>
                      <p className={styles.optionDesc}>{d.chosen}</p>
                    </div>
                  </div>
                  <p className={styles.decisionReason}>{d.reason}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Outcome ═══ */}
      <section className={styles.outcomeSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("outcome.label")}</p>
            <h2 className={styles.outcomeTitle}>
              {t("outcome.titleLine1")}
              <br />
              {t("outcome.titleLine2")}
              <br />
              {t("outcome.titleLine3")}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.outcomeGrid}>
              {metrics.map((item, i) => (
                <Reveal key={item.label} delay={i * 80}>
                  <div className={styles.outcomeCard}>
                    <span className={styles.outcomeValue}>{item.value}</span>
                    <span className={styles.outcomeLabel}>{item.label}</span>
                    <span className={styles.outcomeDesc}>{item.desc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className={styles.reflectionBox}>
              <h3 className={styles.reflectionTitle}>{t("outcome.reflection.title")}</h3>
              {reflectionParagraphs.map((p, i) => (
                <p key={i} className={styles.reflectionText}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
