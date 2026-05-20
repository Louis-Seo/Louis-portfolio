"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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

function CaseImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`${styles.imageFrame} ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes="(max-width: 828px) 100vw, 1080px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

function DefectsTabs({ listLabel, detailLabel }: { listLabel: string; detailLabel: string }) {
  const [active, setActive] = useState<"list" | "detail">("list");
  return (
    <div className={styles.historyTabs}>
      <div className={styles.historyTabBar}>
        <button
          className={`${styles.historyTab} ${active === "list" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("list")}
          type="button"
        >
          {listLabel}
        </button>
        <button
          className={`${styles.historyTab} ${active === "detail" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("detail")}
          type="button"
        >
          {detailLabel}
        </button>
      </div>
      <div className={styles.reportsScreen}>
        <div
          className={`${styles.historyPane} ${active === "list" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/defects-list.png"
            alt="Defect List view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`${styles.historyPane} ${active === "detail" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/defects-detail.png"
            alt="Defect Detail view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

function ReportsTabs({ customLabel, turbineLabel }: { customLabel: string; turbineLabel: string }) {
  const [active, setActive] = useState<"custom" | "turbine">("custom");
  return (
    <div className={styles.historyTabs}>
      <div className={styles.historyTabBar}>
        <button
          className={`${styles.historyTab} ${active === "custom" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("custom")}
          type="button"
        >
          {customLabel}
        </button>
        <button
          className={`${styles.historyTab} ${active === "turbine" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("turbine")}
          type="button"
        >
          {turbineLabel}
        </button>
      </div>
      <div className={styles.reportsScreen}>
        <div
          className={`${styles.historyPane} ${active === "custom" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/reports-custom.png"
            alt="Custom Reports view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`${styles.historyPane} ${active === "turbine" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/reports-turbine.png"
            alt="Turbine Reports view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

function HistoryTabs({ bladeLabel, defectLabel }: { bladeLabel: string; defectLabel: string }) {
  const [active, setActive] = useState<"blade" | "defect">("blade");
  return (
    <div className={styles.historyTabs}>
      <div className={styles.historyTabBar}>
        <button
          className={`${styles.historyTab} ${active === "blade" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("blade")}
          type="button"
        >
          {bladeLabel}
        </button>
        <button
          className={`${styles.historyTab} ${active === "defect" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("defect")}
          type="button"
        >
          {defectLabel}
        </button>
      </div>
      <div className={styles.historyScreen}>
        <div
          className={`${styles.historyPane} ${active === "blade" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/history-blade.png"
            alt="Blade History view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`${styles.historyPane} ${active === "defect" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/history-defect.png"
            alt="Defect History view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

type HeroMeta = { label: string; value: string };
type Finding = { num: string; title: string; text: string };
type ProcessStep = { num: string; title: string; desc: string };
type Bullet = { title: string; text: string };
type DecisionItem = { question: string; answer: string };
type Metric = { value: string; label: string; desc: string };

export default function ZoomableWindClient() {
  const t = useTranslations("case.zoomable-wind");

  const heroScope = t.raw("hero.scope") as string[];
  const heroMeta = t.raw("hero.meta") as HeroMeta[];
  const findings = t.raw("research.findings") as Finding[];
  const overviewParagraphs = t.raw("overview.paragraphs") as string[];
  const processSteps = t.raw("process.steps") as ProcessStep[];
  const bladesBullets = t.raw("features.blades.bullets") as Bullet[];
  const defectsBullets = t.raw("features.defects.bullets") as Bullet[];
  const statsBullets = t.raw("features.statistics.bullets") as Bullet[];
  const reportsBullets = t.raw("features.reports.bullets") as Bullet[];
  const historyBullets = t.raw("features.history.bullets") as Bullet[];
  const mgmtDetailList = t.raw("features.management.detail.list") as string[];
  const decisionItems = t.raw("decisions.items") as DecisionItem[];
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
            <p className={styles.heroDescription}>{t("hero.description")}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.heroScope}>
              {heroScope.map((item, i) => (
                <span key={item} className={styles.heroScopeItem}>
                  {item}
                  {i < heroScope.length - 1 && <span className={styles.heroScopeArrow}>→</span>}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className={styles.heroMeta}>
              {heroMeta.map((m) => (
                <div key={m.label} className={styles.metaItem}>
                  <span className={styles.metaLabel}>{m.label}</span>
                  <span className={styles.metaValue}>{m.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={500}>
          <div className={styles.heroVisual}>
            <CaseImage
              src="/images/portfolio/zoomable-wind/hero.png"
              alt="Zoomable Wind product overview"
              className={styles.heroImage}
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Research Reference ═══ */}
      <div className={styles.researchRef}>
        <div className={styles.container}>
          <Reveal>
            <Link href="/portfolio/research-problem-framing" className={styles.researchRefLink}>
              <span className={styles.researchRefTag}>{t("research.tag")}</span>
              <p className={styles.researchRefText}>
                {t("research.textBefore")}
                <strong>{t("research.textLink")}</strong>
                {t("research.textAfter")}
              </p>
              <span className={styles.researchRefArrow}>{t("research.arrow")}</span>
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.researchFindings}>
              <h3 className={styles.researchFindingsTitle}>{t("research.findingsTitle")}</h3>
              <div className={styles.findingsGrid}>
                {findings.map((f) => (
                  <div key={f.num} className={styles.findingItem}>
                    <span className={styles.findingNum}>{f.num}</span>
                    <h4 className={styles.findingTitle}>{f.title}</h4>
                    <p className={styles.findingText}>{f.text}</p>
                  </div>
                ))}
              </div>
              <p className={styles.findingSummary}>{t("research.summary")}</p>
            </div>
          </Reveal>
        </div>
      </div>

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
                {overviewParagraphs.map((p, i) => (
                  <p key={i} className={styles.overviewText}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Process ═══ */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("process.label")}</p>
            <h2 className={styles.processTitle}>{t("process.title")}</h2>
            <p className={styles.processIntro}>{t("process.intro")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.processFlow}>
              {processSteps.map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div className={styles.processStep}>
                    <span className={styles.processNum}>{step.num}</span>
                    <h4 className={styles.processStepTitle}>{step.title}</h4>
                    <p className={styles.processStepDesc}>{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 1: Blades ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.blades.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.blades.title")}</h2>
            <p className={styles.featureDescription}>{t("features.blades.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-wind/blades-main.png"
              alt={t("features.blades.heroImageAlt")}
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {bladesBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/blades-sub1.png"
                alt={t("features.blades.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/blades-sub2.png"
                alt={t("features.blades.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 2: Defects (Pivot) ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.defects.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.defects.title")}</h2>
            <div className={styles.featurePivot}>
              <span className={styles.pivotBadge}>{t("features.defects.pivotBadge")}</span>
              <p className={styles.pivotText}>{t("features.defects.pivotText")}</p>
            </div>
            <p className={styles.featureDescription}>{t("features.defects.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <DefectsTabs
              listLabel={t("features.defects.tabs.list")}
              detailLabel={t("features.defects.tabs.detail")}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {defectsBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/defects-sub1.png"
                alt={t("features.defects.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/defects-sub2.png"
                alt={t("features.defects.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 3: Statistics ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.statistics.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.statistics.title")}</h2>
            <p className={styles.featureDescription}>{t("features.statistics.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-wind/statistics-main.png"
              alt={t("features.statistics.heroImageAlt")}
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {statsBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/statistics-sub1.png"
                alt={t("features.statistics.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/statistics-sub2.png"
                alt={t("features.statistics.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 4: Reports ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.reports.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.reports.title")}</h2>
            <p className={styles.featureDescription}>{t("features.reports.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <ReportsTabs
              customLabel={t("features.reports.tabs.custom")}
              turbineLabel={t("features.reports.tabs.turbine")}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {reportsBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/reports-sub1.png"
                alt={t("features.reports.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/reports-sub2.png"
                alt={t("features.reports.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 5: History ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.history.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.history.title")}</h2>
            <p className={styles.featureDescription}>{t("features.history.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <HistoryTabs
              bladeLabel={t("features.history.tabs.blade")}
              defectLabel={t("features.history.tabs.defect")}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {historyBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/history-sub1.png"
                alt={t("features.history.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/history-sub2.png"
                alt={t("features.history.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 6: Management ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.management.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.management.title")}</h2>
            <p className={styles.featureDescription}>{t("features.management.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.splitFeature}>
              <div className={styles.splitLeft}>
                <CaseImage
                  src="/images/portfolio/zoomable-wind/management-detail.png"
                  alt={t("features.management.imageAlt")}
                  className={styles.splitImage}
                />
              </div>
              <div className={styles.splitRight}>
                <div className={styles.splitDetail}>
                  <h4 className={styles.splitDetailTitle}>
                    {t("features.management.detail.title")}
                  </h4>
                  <p className={styles.splitDetailText}>{t("features.management.detail.text")}</p>
                  <ul className={styles.detailList}>
                    {mgmtDetailList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/management-sub1.png"
                alt={t("features.management.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/management-sub2.png"
                alt={t("features.management.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Design Decisions ═══ */}
      <section className={styles.designDecisions}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("decisions.label")}</p>
            <h2 className={styles.designDecisionsTitle}>{t("decisions.title")}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.decisionGrid}>
              {decisionItems.map((d) => (
                <div key={d.question} className={styles.decisionItem}>
                  <h4 className={styles.decisionQuestion}>{d.question}</h4>
                  <p className={styles.decisionAnswer}>{d.answer}</p>
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
            <h2 className={styles.outcomeTitle}>{t("outcome.title")}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.outcomeGrid}>
              {metrics.map((m) => (
                <div key={m.label} className={styles.outcomeCard}>
                  <span className={styles.outcomeValue}>{m.value}</span>
                  <span className={styles.outcomeLabel}>{m.label}</span>
                  <p className={styles.outcomeDesc}>{m.desc}</p>
                </div>
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
