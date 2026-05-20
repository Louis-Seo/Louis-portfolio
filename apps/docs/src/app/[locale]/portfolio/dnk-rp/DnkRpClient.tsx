"use client";

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

type HeroMeta =
  | { label: string; value: string }
  | { label: string; valueLine1: string; valueLine2: string };
type QuoteCard = { user: string; tag: string; quote: string };
type DirectionCard = { title: string; subtitle: string; text: string };
type ConceptStep = { step: string; title: string; text: string };
type DsContext = { title: string; text: string };
type Bullet = { title: string; text: string };
type Metric = { value: string; label: string; desc: string };

const FEATURE_KEYS = [
  "myContract",
  "billing",
  "intent",
  "notifications",
  "tenantRequests",
  "announcements",
] as const;

const FEATURE_IMAGE_SRC: Record<(typeof FEATURE_KEYS)[number], string> = {
  myContract: "/images/portfolio/dnk-rp/contract-main.png",
  billing: "/images/portfolio/dnk-rp/billing-main.png",
  intent: "/images/portfolio/dnk-rp/intent-main.png",
  notifications: "/images/portfolio/dnk-rp/notification-main.png",
  tenantRequests: "/images/portfolio/dnk-rp/tenant-main.png",
  announcements: "/images/portfolio/dnk-rp/announcement-main.png",
};

export default function DnkRpClient() {
  const t = useTranslations("case.dnk-rp");

  const heroMeta = t.raw("hero.meta") as HeroMeta[];
  const overviewParagraphs = t.raw("overview.paragraphs") as string[];
  const userQuotes = t.raw("userResearch.quotes") as QuoteCard[];
  const directionCards = t.raw("direction.cards") as DirectionCard[];
  const conceptFlow = t.raw("concept.flow") as ConceptStep[];
  const dsContext = t.raw("designSystem.context") as DsContext[];
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
          <div className={styles.heroVisual}>
            <CaseImage
              src="/images/portfolio/dnk-rp/hero.png"
              alt="DNK RP App on iPhone"
              className={styles.heroImage}
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

      {/* ═══ Market Research ═══ */}
      <section className={styles.researchSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("marketResearch.label")}</p>
            <h2 className={styles.sectionTitle}>
              {t("marketResearch.titleLine1")}
              <br />
              {t("marketResearch.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("marketResearch.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/market-research.png"
              alt={t("marketResearch.imageAlt")}
              className={styles.fullImage}
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ Product Overview ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("productOverview.label")}</p>
            <h2 className={styles.sectionTitle}>{t("productOverview.title")}</h2>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/product-overview.png"
              alt={t("productOverview.imageAlt")}
              className={styles.fullImage}
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ User Research ═══ */}
      <section className={styles.researchSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("userResearch.label")}</p>
            <h2 className={styles.sectionTitle}>
              {t("userResearch.titleLine1")}
              <br />
              {t("userResearch.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("userResearch.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.userQuoteGrid}>
              {userQuotes.map((item, i) => (
                <Reveal key={item.user} delay={i * 60}>
                  <div className={styles.userQuoteCard}>
                    <span className={styles.userQuoteLabel}>{item.user}</span>
                    <span className={styles.userQuoteTag}>{item.tag}</span>
                    <p className={styles.userQuoteText}>{item.quote}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Insight ═══ */}
      <section className={styles.insightSection}>
        <div className={styles.containerWide}>
          <Reveal>
            <CaseImage
              src="/images/portfolio/dnk-rp/insight.png"
              alt={t("insight.imageAlt")}
              className={styles.insightImage}
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ Direction ═══ */}
      <section className={styles.directionSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("direction.label")}</p>
            <h2 className={styles.sectionTitleLight}>
              {t("direction.titleLine1")}
              <br />
              {t("direction.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("direction.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.directionGrid}>
              {directionCards.map((card) => (
                <div key={card.title} className={styles.directionCard}>
                  <h4 className={styles.directionCardTitle}>{card.title}</h4>
                  <p className={styles.directionCardSubtitle}>{card.subtitle}</p>
                  <p className={styles.directionCardText}>{card.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Concept: Contract → Data → Autonomy ═══ */}
      <section className={styles.conceptSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.conceptHeader}>
              <p className={styles.sectionLabel}>{t("concept.label")}</p>
              <h2 className={styles.conceptTitle}>
                {t("concept.titleLine1")}
                <br />
                {t("concept.titleLine2")}
              </h2>
              <p className={styles.conceptDesc}>{t("concept.desc")}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.conceptFlow}>
              {conceptFlow.map((step) => (
                <div key={step.title} className={styles.conceptFlowCard}>
                  <p className={styles.conceptFlowStep}>{step.step}</p>
                  <h4 className={styles.conceptFlowTitle}>{step.title}</h4>
                  <p className={styles.conceptFlowText}>{step.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <CaseImage
              src="/images/portfolio/dnk-rp/concept.png"
              alt={t("concept.imageAlt")}
              className={styles.fullImage}
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ Design System ═══ */}
      <section className={styles.designSystemSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("designSystem.label")}</p>
            <h2 className={styles.sectionTitle}>
              {t("designSystem.titleLine1")}
              <br />
              {t("designSystem.titleLine2")}
            </h2>
            <p className={styles.sectionDesc}>{t("designSystem.desc")}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.dsContext}>
              {dsContext.map((item) => (
                <div key={item.title} className={styles.dsContextCard}>
                  <h4 className={styles.dsContextTitle}>{item.title}</h4>
                  <p className={styles.dsContextText}>{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.dsGrid}>
              <CaseImage
                src="/images/portfolio/dnk-rp/ds-typography.png"
                alt={t("designSystem.imageAlts.typography")}
                className={styles.dsImage}
              />
              <CaseImage
                src="/images/portfolio/dnk-rp/ds-color.png"
                alt={t("designSystem.imageAlts.color")}
                className={styles.dsImage}
              />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.dsGrid}>
              <CaseImage
                src="/images/portfolio/dnk-rp/ds-icon.png"
                alt={t("designSystem.imageAlts.icon")}
                className={styles.dsImage}
              />
              <CaseImage
                src="/images/portfolio/dnk-rp/ds-button.png"
                alt={t("designSystem.imageAlts.button")}
                className={styles.dsImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Features (6) ═══ */}
      {FEATURE_KEYS.map((key, idx) => {
        const altSection = idx % 2 === 1;
        const bullets = t.raw(`features.${key}.bullets`) as Bullet[];
        return (
          <section
            key={key}
            className={altSection ? styles.featureSectionAlt : styles.featureSection}
          >
            <div className={styles.container}>
              <Reveal>
                <p className={styles.sectionLabel}>{t(`features.${key}.label`)}</p>
                <h2 className={styles.featureTitle}>{t(`features.${key}.title`)}</h2>
                <p className={styles.featureDescription}>{t(`features.${key}.description`)}</p>
              </Reveal>
              <Reveal delay={100}>
                <CaseImage
                  src={FEATURE_IMAGE_SRC[key]}
                  alt={t(`features.${key}.heroImageAlt`)}
                  className={styles.featureHeroImage}
                />
              </Reveal>
              <Reveal delay={200}>
                <div className={styles.bulletRow}>
                  {bullets.map((b) => (
                    <div key={b.title} className={styles.bulletCard}>
                      <h4 className={styles.bulletTitle}>{b.title}</h4>
                      <p className={styles.bulletText}>{b.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

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
