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

function QualityTabs({ gridLabel, stitchingLabel }: { gridLabel: string; stitchingLabel: string }) {
  const [active, setActive] = useState<"grid" | "stitching">("grid");
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabBar}>
        <button
          className={`${styles.tab} ${active === "grid" ? styles.tabActive : ""}`}
          onClick={() => setActive("grid")}
          type="button"
        >
          {gridLabel}
        </button>
        <button
          className={`${styles.tab} ${active === "stitching" ? styles.tabActive : ""}`}
          onClick={() => setActive("stitching")}
          type="button"
        >
          {stitchingLabel}
        </button>
      </div>
      <div className={styles.tabScreen}>
        <div className={`${styles.tabPane} ${active === "grid" ? styles.tabPaneActive : ""}`}>
          <Image
            src="/images/portfolio/zoomable-worker/quality-grid.png"
            alt="Quality Check — Grid View"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={`${styles.tabPane} ${active === "stitching" ? styles.tabPaneActive : ""}`}>
          <Image
            src="/images/portfolio/zoomable-worker/quality-stitching.png"
            alt="Quality Check — Stitching View"
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
type Metric = { value: string; label: string; desc: string };
type DecisionItem = { question: string; answer: string };

export default function ZoomableWorkerClient() {
  const t = useTranslations("case.zoomable-worker");

  const heroScope = t.raw("hero.scope") as string[];
  const heroMeta = t.raw("hero.meta") as HeroMeta[];
  const findings = t.raw("research.findings") as Finding[];
  const overviewParagraphs = t.raw("overview.paragraphs") as string[];
  const processSteps = t.raw("process.steps") as ProcessStep[];
  const uploadBullets = t.raw("features.upload.bullets") as Bullet[];
  const qualityBullets = t.raw("features.quality.bullets") as Bullet[];
  const osdBullets = t.raw("features.osd.bullets") as Bullet[];
  const markingBullets = t.raw("features.marking.bullets") as Bullet[];
  const decisionBullets = t.raw("features.decision.bullets") as Bullet[];
  const dashboardBullets = t.raw("features.dashboard.bullets") as Bullet[];
  const flightLogBullets = t.raw("features.flightLog.bullets") as Bullet[];
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
              src="/images/portfolio/zoomable-worker/hero.png"
              alt="Zoomable Worker product overview"
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

      {/* ═══ Feature 1: Upload ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.upload.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.upload.title")}</h2>
            <p className={styles.featureDescription}>{t("features.upload.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/upload-main.png"
              alt={t("features.upload.heroImageAlt")}
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {uploadBullets.map((b) => (
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
                src="/images/portfolio/zoomable-worker/upload-sub1.png"
                alt={t("features.upload.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/upload-sub2.png"
                alt={t("features.upload.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 2: Quality Check ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.quality.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.quality.title")}</h2>
            <p className={styles.featureDescription}>{t("features.quality.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <QualityTabs
              gridLabel={t("features.quality.tabs.grid")}
              stitchingLabel={t("features.quality.tabs.stitching")}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {qualityBullets.map((b) => (
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
                src="/images/portfolio/zoomable-worker/quality-detail1.png"
                alt={t("features.quality.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/quality-detail2.png"
                alt={t("features.quality.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 3: OSD Viewer ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.osd.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.osd.title")}</h2>
            <p className={styles.featureDescription}>{t("features.osd.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.osdLayout}>
              <div className={styles.osdLeftStack}>
                <CaseImage
                  src="/images/portfolio/zoomable-worker/osd-viewer-left1.png"
                  alt={t("features.osd.imageAlts.left1")}
                  className={styles.osdStackImage}
                />
                <CaseImage
                  src="/images/portfolio/zoomable-worker/osd-viewer-left2.png"
                  alt={t("features.osd.imageAlts.left2")}
                  className={styles.osdStackImage}
                />
              </div>
              <CaseImage
                src="/images/portfolio/zoomable-worker/osd-viewer-right.png"
                alt={t("features.osd.imageAlts.right")}
                className={styles.osdRight}
              />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {osdBullets.map((b) => (
                <div key={b.title} className={styles.bulletCard}>
                  <h4 className={styles.bulletTitle}>{b.title}</h4>
                  <p className={styles.bulletText}>{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 4: Marking ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.marking.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.marking.title")}</h2>
            <p className={styles.featureDescription}>{t("features.marking.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/defect-marking.png"
              alt={t("features.marking.heroImageAlt")}
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {markingBullets.map((b) => (
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
                src="/images/portfolio/zoomable-worker/defect-marking-sub1.png"
                alt={t("features.marking.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/defect-marking-sub2.png"
                alt={t("features.marking.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 5: Decision ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.decision.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.decision.title")}</h2>
            <p className={styles.featureDescription}>{t("features.decision.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/defect-decision.png"
              alt={t("features.decision.heroImageAlt")}
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {decisionBullets.map((b) => (
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
                src="/images/portfolio/zoomable-worker/defect-decision-sub1.png"
                alt={t("features.decision.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/defect-decision-sub2.png"
                alt={t("features.decision.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 6: Dashboard ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.dashboard.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.dashboard.title")}</h2>
            <p className={styles.featureDescription}>{t("features.dashboard.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/dashboard-main.png"
              alt={t("features.dashboard.heroImageAlt")}
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {dashboardBullets.map((b) => (
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
                src="/images/portfolio/zoomable-worker/dashboard-sub1.png"
                alt={t("features.dashboard.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/dashboard-sub2.png"
                alt={t("features.dashboard.subImageAlts.sub2")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 7: Flight Log ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.flightLog.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.flightLog.title")}</h2>
            <p className={styles.featureDescription}>{t("features.flightLog.description")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/flightlog-main.png"
              alt={t("features.flightLog.heroImageAlt")}
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {flightLogBullets.map((b) => (
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
                src="/images/portfolio/zoomable-worker/flightlog-detail1.png"
                alt={t("features.flightLog.subImageAlts.sub1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/flightlog-detail2.png"
                alt={t("features.flightLog.subImageAlts.sub2")}
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

      {/* ═══ Quote ═══ */}
      <section className={styles.quoteSection}>
        <div className={styles.container}>
          <Reveal>
            <blockquote className={styles.quote}>{t("quote")}</blockquote>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
