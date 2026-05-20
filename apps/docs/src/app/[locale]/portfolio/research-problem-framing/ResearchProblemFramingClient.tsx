"use client";

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

type HeroMeta = { label: string; value: string };
type MethodCard = { num: string; title: string; text: string; outcome: string };
type InterviewCard = {
  name: string;
  role: string;
  quote: string;
  goalLabel: string;
  goal: string;
};
type SynthesisItem = { name: string; text: string };
type FindingsItem = { name: string; text: string };
type ProblemCard = {
  num: string;
  title: string;
  problem: string;
  why: string;
  response: string;
};
type SummaryItem = { label: string; text: string };
type OpportunityCard = { title: string; sub: string; text: string };
type QuantMetric = {
  value: string;
  label: string;
  desc: string;
  insight: string;
};
type TableRow = { metric: string; dm: string; qdm: string; change: string };
type ConnectedCard = {
  tag: string;
  title: string;
  text: string;
  bullets: string[];
  cta: string;
  href: "/portfolio/zoomable-worker" | "/portfolio/zoomable-wind";
};

export default function ResearchProblemFramingClient() {
  const t = useTranslations("case.research-problem-framing");

  const heroTags = t.raw("hero.tags") as string[];
  const heroMeta = t.raw("hero.meta") as HeroMeta[];
  const whyParagraphs = t.raw("whyThisMattered.paragraphs") as string[];
  const methodCards = t.raw("methods.cards") as MethodCard[];
  const interviewCards = t.raw("interview.cards") as InterviewCard[];
  const synthesisItems = t.raw("interview.synthesis.items") as SynthesisItem[];
  const asIsItems = t.raw("findings.asIs.items") as FindingsItem[];
  const toBeItems = t.raw("findings.toBe.items") as FindingsItem[];
  const problemCards = t.raw("problemFraming.cards") as ProblemCard[];
  const summary = t.raw("opportunity.summary") as SummaryItem[];
  const oppCards = t.raw("opportunity.cards") as OpportunityCard[];
  const quantYLabels = t.raw("quant.chart.yAxisLabels") as string[];
  const quantXLabels = t.raw("quant.chart.xLabels") as string[];
  const quantMetrics = t.raw("quant.metrics") as QuantMetric[];
  const perfLeadYLabels = t.raw("performance.charts.leadTime.yLabels") as string[];
  const perfLeadXLabels = t.raw("performance.charts.leadTime.xLabels") as string[];
  const perfImageYLabels = t.raw("performance.charts.imageCount.yLabels") as string[];
  const perfImageXLabels = t.raw("performance.charts.imageCount.xLabels") as string[];
  const perfProdYLabels = t.raw("performance.charts.productionDefects.yLabels") as string[];
  const perfProdXLabels = t.raw("performance.charts.productionDefects.xLabels") as string[];
  const perfTestYLabels = t.raw("performance.charts.testDefects.yLabels") as string[];
  const perfTestXLabels = t.raw("performance.charts.testDefects.xLabels") as string[];
  const tableHeaders = t.raw("performance.table.headers") as string[];
  const tableRows = t.raw("performance.table.rows") as TableRow[];
  const connectedCards = t.raw("connected.cards") as ConnectedCard[];

  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.heroTagRow}>
              {heroTags.map((tag) => (
                <span key={tag} className={styles.heroTag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>
              {t("hero.titleLine1")}
              <br />
              {t("hero.titleLine2")}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroDescription}>{t("hero.description")}</p>
          </Reveal>
          <Reveal delay={300}>
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
        <Reveal delay={400}>
          <div className={styles.heroVisual}>
            <CaseImage
              src="/images/portfolio/research-problem-framing/hero.png"
              alt="Research & Problem Framing overview"
              className={styles.heroImage}
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Why This Mattered ═══ */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.whyGrid}>
              <div className={styles.whyLeft}>
                <p className={styles.sectionLabel}>{t("whyThisMattered.label")}</p>
                <h2 className={styles.whyTitle}>
                  {t("whyThisMattered.titleLine1")}
                  <br />
                  {t("whyThisMattered.titleLine2")}
                </h2>
              </div>
              <div className={styles.whyRight}>
                {whyParagraphs.map((p, i) => (
                  <p key={i} className={styles.whyText}>
                    {p}
                  </p>
                ))}
                <p className={styles.whyHighlight}>{t("whyThisMattered.highlight")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Research Methods ═══ */}
      <section className={styles.methodsSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("methods.label")}</p>
            <h2 className={styles.sectionTitle}>
              {t("methods.titleLine1")}
              <br />
              {t("methods.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("methods.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.methodGrid}>
              {methodCards.map((card) => (
                <div key={card.num} className={styles.methodCard}>
                  <span className={styles.methodNum}>{card.num}</span>
                  <h4 className={styles.methodCardTitle}>{card.title}</h4>
                  <p className={styles.methodCardText}>{card.text}</p>
                  <p className={styles.methodCardOutcome}>{card.outcome}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Interview ═══ */}
      <section className={styles.interviewSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("interview.label")}</p>
            <h2 className={styles.sectionTitle}>
              {t("interview.titleLine1")}
              <br />
              {t("interview.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("interview.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/research-problem-framing/interview.png"
              alt={t("interview.imageAlt")}
              className={styles.fullImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.interviewHighlights}>
              {interviewCards.map((card) => (
                <div key={card.name} className={styles.interviewCard}>
                  <div className={styles.interviewMeta}>
                    <span className={styles.interviewName}>{card.name}</span>
                    <span className={styles.interviewRole}>{card.role}</span>
                  </div>
                  <p className={styles.interviewQuote}>&ldquo;{card.quote}&rdquo;</p>
                  <p className={styles.interviewGoal}>
                    <span className={styles.interviewGoalLabel}>{card.goalLabel} </span>
                    {card.goal}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className={styles.synthesisBlock}>
              <h3 className={styles.synthesisTitle}>{t("interview.synthesis.title")}</h3>
              <div className={styles.synthesisGrid}>
                {synthesisItems.map((item) => (
                  <p key={item.name} className={styles.synthesisItem}>
                    <strong>{item.name}</strong>
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Findings ═══ */}
      <section className={styles.findingsSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("findings.label")}</p>
            <h2 className={styles.sectionTitle}>
              {t("findings.titleLine1")}
              <br />
              {t("findings.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("findings.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.findingsGrid}>
              <div className={styles.findingsColumn}>
                <span className={styles.findingsColumnTitle}>{t("findings.asIs.title")}</span>
                {asIsItems.map((item) => (
                  <div key={item.name} className={styles.findingsItem}>
                    <strong>{item.name}</strong>
                    {item.text}
                  </div>
                ))}
              </div>
              <div className={styles.findingsColumn}>
                <span className={styles.findingsColumnTitle}>{t("findings.toBe.title")}</span>
                {toBeItems.map((item) => (
                  <div key={item.name} className={styles.findingsItemStrong}>
                    <strong>{item.name}</strong>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <CaseImage
              src="/images/portfolio/research-problem-framing/process-transformation.png"
              alt={t("findings.imageAlt")}
              className={styles.fullImage}
            />
          </Reveal>
          <Reveal delay={300}>
            <p className={styles.findingsInsight}>{t("findings.insight")}</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Problem Framing ═══ */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("problemFraming.label")}</p>
            <h2 className={styles.sectionTitleLight}>
              {t("problemFraming.titleLine1")}
              <br />
              {t("problemFraming.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("problemFraming.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.problemGrid}>
              {problemCards.map((card) => (
                <div key={card.num} className={styles.problemCard}>
                  <span className={styles.problemNum}>{card.num}</span>
                  <h3 className={styles.problemCardTitle}>{card.title}</h3>
                  <p className={styles.problemCardProblem}>{card.problem}</p>
                  <p className={styles.problemCardWhy}>{card.why}</p>
                  <p className={styles.problemCardResponse}>{card.response}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Opportunity ═══ */}
      <section className={styles.opportunitySection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("opportunity.label")}</p>
            <h2 className={styles.sectionTitle}>
              {t("opportunity.titleLine1")}
              <br />
              {t("opportunity.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("opportunity.desc")}</p>
          </Reveal>

          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/research-problem-framing/automated-process.png"
              alt={t("opportunity.imageAlt")}
              className={styles.fullImage}
            />
          </Reveal>

          <Reveal delay={200}>
            <div className={styles.opportunitySummary}>
              {summary.map((item) => (
                <div key={item.label} className={styles.opportunitySummaryCard}>
                  <span className={styles.opportunitySummaryLabel}>{item.label}</span>
                  <p className={styles.opportunitySummaryText}>{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className={styles.opportunityGrid}>
              {oppCards.map((card) => (
                <div key={card.title} className={styles.opportunityCard}>
                  <h4 className={styles.opportunityCardTitle}>{card.title}</h4>
                  <p className={styles.opportunityCardSub}>{card.sub}</p>
                  <p className={styles.opportunityCardText}>{card.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Quantitative Results ═══ */}
      <section className={styles.quantSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("quant.label")}</p>
            <h2 className={styles.sectionTitle}>
              {t("quant.titleLine1")}
              <br />
              {t("quant.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("quant.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.chartFrame}>
              <p className={styles.chartTitle}>{t("quant.chart.title")}</p>
              <div className={styles.chartArea}>
                <div className={styles.chartYAxis}>
                  {quantYLabels.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </div>
                <div className={styles.chartContent}>
                  <div className={styles.chartPlot}>
                    <div className={styles.chartGridLines}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className={styles.chartGridLine} />
                      ))}
                    </div>
                    <div className={styles.chartGroups}>
                      <div className={styles.chartGroup}>
                        <div className={styles.chartBars}>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>435</span>
                            <div className={styles.chartBarBefore} style={{ height: "100%" }} />
                          </div>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>189</span>
                            <div className={styles.chartBarAfter} style={{ height: "43.4%" }} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.chartGroup}>
                        <div className={styles.chartBars}>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>79</span>
                            <div className={styles.chartBarBefore} style={{ height: "18.2%" }} />
                          </div>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>35</span>
                            <div className={styles.chartBarAfter} style={{ height: "8%" }} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.chartGroup}>
                        <div className={styles.chartBars}>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>56</span>
                            <div className={styles.chartBarBefore} style={{ height: "12.9%" }} />
                          </div>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>66</span>
                            <div className={styles.chartBarAfter} style={{ height: "15.2%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chartXLabels}>
                    {quantXLabels.map((l) => (
                      <span key={l} className={styles.chartXLabel}>
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.chartLegend}>
                <div className={styles.chartLegendItem}>
                  <span className={styles.chartLegendSwatchBefore} />
                  <span>{t("quant.chart.legend.before")}</span>
                </div>
                <div className={styles.chartLegendItem}>
                  <span className={styles.chartLegendSwatchAfter} />
                  <span>{t("quant.chart.legend.after")}</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.quantMetrics}>
              {quantMetrics.map((item) => (
                <div key={item.label} className={styles.quantMetricCard}>
                  <span className={styles.quantValue}>{item.value}</span>
                  <span className={styles.quantLabel}>{item.label}</span>
                  <p className={styles.quantDesc}>{item.desc}</p>
                  <p className={styles.quantInsight}>{item.insight}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className={styles.quantSynthesis}>{t("quant.synthesis")}</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Performance ═══ */}
      <section className={styles.perfSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("performance.label")}</p>
            <h2 className={styles.sectionTitle}>{t("performance.title")}</h2>
            <p className={styles.sectionDesc}>{t("performance.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.perfChartRow}>
              {/* Panel 1 */}
              <div className={styles.perfChartPanel}>
                <p className={styles.perfChartSectionTitle}>
                  {t("performance.charts.panel1Title")}
                </p>
                <div className={styles.perfChartPairRow}>
                  {/* Lead Time */}
                  <div className={styles.perfMiniChart}>
                    <p className={styles.perfMiniTitle}>{t("performance.charts.leadTime.title")}</p>
                    <div className={styles.perfMiniPlotWrap}>
                      <span className={styles.perfMiniAxisLabel}>
                        {t("performance.charts.leadTime.axisLabel")}
                      </span>
                      <div className={styles.perfMiniYAxis}>
                        {perfLeadYLabels.map((l) => (
                          <span key={l} className={styles.perfMiniYLabel}>
                            {l}
                          </span>
                        ))}
                      </div>
                      <div className={styles.perfMiniPlotArea}>
                        <div className={styles.perfMiniGridLines}>
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className={styles.perfMiniGridLine} />
                          ))}
                        </div>
                        <div className={styles.perfMiniBars}>
                          <div className={styles.perfMiniBarCol}>
                            <div
                              className={`${styles.perfMiniBar} ${styles.perfMiniBarPrimary}`}
                              style={{ height: "97.5%" }}
                            />
                          </div>
                          <div className={styles.perfMiniBarCol}>
                            <div
                              className={`${styles.perfMiniBar} ${styles.perfMiniBarSecondary}`}
                              style={{ height: "43.8%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.perfMiniXLabels}>
                      {perfLeadXLabels.map((l) => (
                        <span key={l} className={styles.perfMiniXLabel}>
                          {l}
                        </span>
                      ))}
                    </div>
                    <p className={styles.perfMiniSubtitle}>
                      {t("performance.charts.leadTime.subtitle")}
                    </p>
                  </div>
                  {/* Image Count */}
                  <div className={styles.perfMiniChart}>
                    <p className={styles.perfMiniTitle}>
                      {t("performance.charts.imageCount.title")}
                    </p>
                    <div className={styles.perfMiniPlotWrap}>
                      <span className={styles.perfMiniAxisLabel}>
                        {t("performance.charts.imageCount.axisLabel")}
                      </span>
                      <div className={styles.perfMiniYAxis}>
                        {perfImageYLabels.map((l) => (
                          <span key={l} className={styles.perfMiniYLabel}>
                            {l}
                          </span>
                        ))}
                      </div>
                      <div className={styles.perfMiniPlotArea}>
                        <div className={styles.perfMiniGridLines}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className={styles.perfMiniGridLine} />
                          ))}
                        </div>
                        <div className={styles.perfMiniBars}>
                          <div className={styles.perfMiniBarCol}>
                            <div
                              className={`${styles.perfMiniBar} ${styles.perfMiniBarPrimary}`}
                              style={{ height: "100%" }}
                            />
                          </div>
                          <div className={styles.perfMiniBarCol}>
                            <div
                              className={`${styles.perfMiniBar} ${styles.perfMiniBarSecondary}`}
                              style={{ height: "43.4%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.perfMiniXLabels}>
                      {perfImageXLabels.map((l) => (
                        <span key={l} className={styles.perfMiniXLabel}>
                          {l}
                        </span>
                      ))}
                    </div>
                    <p className={styles.perfMiniSubtitle}>
                      {t("performance.charts.imageCount.subtitle")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 2 */}
              <div className={styles.perfChartPanel}>
                <p className={styles.perfChartSectionTitle}>
                  {t("performance.charts.panel2Title")}
                </p>
                <div className={styles.perfChartPairRow}>
                  {/* Production Defects */}
                  <div className={styles.perfMiniChart}>
                    <p className={styles.perfMiniTitle}>
                      {t("performance.charts.productionDefects.title")}
                    </p>
                    <div className={styles.perfMiniPlotWrap}>
                      <span className={styles.perfMiniAxisLabel}>
                        {t("performance.charts.productionDefects.axisLabel")}
                      </span>
                      <div className={styles.perfMiniYAxis}>
                        {perfProdYLabels.map((l) => (
                          <span key={l} className={styles.perfMiniYLabel}>
                            {l}
                          </span>
                        ))}
                      </div>
                      <div className={styles.perfMiniPlotArea}>
                        <div className={styles.perfMiniGridLines}>
                          {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} className={styles.perfMiniGridLine} />
                          ))}
                        </div>
                        <div className={styles.perfMiniBars}>
                          <div className={styles.perfMiniBarCol}>
                            <div
                              className={`${styles.perfMiniBar} ${styles.perfMiniBarPrimary}`}
                              style={{ height: "93.3%" }}
                            />
                          </div>
                          <div className={styles.perfMiniBarCol}>
                            <div
                              className={`${styles.perfMiniBar} ${styles.perfMiniBarSecondary}`}
                              style={{ height: "5%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.perfMiniXLabels}>
                      {perfProdXLabels.map((l) => (
                        <span key={l} className={styles.perfMiniXLabel}>
                          {l}
                        </span>
                      ))}
                    </div>
                    <p className={styles.perfMiniSubtitle}>
                      {t("performance.charts.productionDefects.subtitle")}
                    </p>
                  </div>
                  {/* Test Defects */}
                  <div className={styles.perfMiniChart}>
                    <p className={styles.perfMiniTitle}>
                      {t("performance.charts.testDefects.title")}
                    </p>
                    <div className={styles.perfMiniPlotWrap}>
                      <span className={styles.perfMiniAxisLabel}>
                        {t("performance.charts.testDefects.axisLabel")}
                      </span>
                      <div className={styles.perfMiniYAxis}>
                        {perfTestYLabels.map((l) => (
                          <span key={l} className={styles.perfMiniYLabel}>
                            {l}
                          </span>
                        ))}
                      </div>
                      <div className={styles.perfMiniPlotArea}>
                        <div className={styles.perfMiniGridLines}>
                          {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} className={styles.perfMiniGridLine} />
                          ))}
                        </div>
                        <div className={styles.perfMiniBars}>
                          <div className={styles.perfMiniBarCol}>
                            <div
                              className={`${styles.perfMiniBar} ${styles.perfMiniBarPrimary}`}
                              style={{ height: "86.7%" }}
                            />
                          </div>
                          <div className={styles.perfMiniBarCol}>
                            <div
                              className={`${styles.perfMiniBar} ${styles.perfMiniBarSecondary}`}
                              style={{ height: "93.3%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.perfMiniXLabels}>
                      {perfTestXLabels.map((l) => (
                        <span key={l} className={styles.perfMiniXLabel}>
                          {l}
                        </span>
                      ))}
                    </div>
                    <p className={styles.perfMiniSubtitle}>
                      {t("performance.charts.testDefects.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <table className={styles.perfTable}>
              <thead>
                <tr>
                  {tableHeaders.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.metric}>
                    <td>{row.metric}</td>
                    <td>{row.dm}</td>
                    <td>{row.qdm}</td>
                    <td className={styles.perfHighlight}>{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ═══ Connected Outcomes ═══ */}
      <section className={styles.connectedSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("connected.label")}</p>
            <h2 className={styles.sectionTitleLight}>
              {t("connected.titleLine1")}
              <br />
              {t("connected.titleLine2")}
            </h2>
            <p className={styles.connectedDesc}>{t("connected.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.connectedGrid}>
              {connectedCards.map((card) => (
                <Link key={card.href} href={card.href} className={styles.connectedCard}>
                  <div className={styles.connectedCardInner}>
                    <span className={styles.connectedTag}>{card.tag}</span>
                    <h3 className={styles.connectedCardTitle}>{card.title}</h3>
                    <p className={styles.connectedCardText}>{card.text}</p>
                    <ul className={styles.connectedCardBullets}>
                      {card.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <span className={styles.connectedArrow}>{card.cta}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
