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

type HeroMeta = { label: string; value: string };
type ChallengeCard = { title: string; text: string };
type Bullet = { title: string; text: string };
type ProcessStep = {
  num: string;
  title: string;
  desc: string;
  input: string;
  output: string;
};
type Metric = { subLabel: string; value: string; label: string; desc: string };
type Reflection = { title: string; text: string };

export default function NearthwindMobileClient() {
  const t = useTranslations("case.nearthwind-mobile");

  const heroMeta = t.raw("hero.meta") as HeroMeta[];
  const overviewParagraphs = t.raw("overview.paragraphs") as string[];
  const challengeCards = t.raw("challenge.cards") as ChallengeCard[];
  const settingsBullets = t.raw("features.settings.bullets") as Bullet[];
  const uploadBullets = t.raw("features.upload.bullets") as Bullet[];
  const processSteps = t.raw("process.steps") as ProcessStep[];
  const metrics = t.raw("outcome.metrics") as Metric[];
  const reflections = t.raw("outcome.reflections") as Reflection[];

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
              src="/images/portfolio/nearthwind-mobile/hero.png"
              alt="NearthWind Mobile product overview"
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

      {/* ═══ Challenge ═══ */}
      <section className={styles.challengeSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("challenge.label")}</p>
            <h2 className={styles.overviewTitle}>
              {t("challenge.titleLine1")}
              <br />
              {t("challenge.titleLine2")}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.challengeGrid}>
              {challengeCards.map((card) => (
                <div key={card.title} className={styles.challengeCard}>
                  <h4 className={styles.challengeCardTitle}>{card.title}</h4>
                  <p className={styles.challengeCardText}>{card.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 1 ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.settings.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.settings.title")}</h2>
            <p className={styles.featureDescription}>{t("features.settings.description")}</p>
          </Reveal>
          <Reveal delay={50}>
            <p className={styles.featureContext}>{t("features.settings.context")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/nearthwind-mobile/settings-main.png"
              alt={t("features.settings.heroImageAlt")}
              className={styles.featureHeroImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              {settingsBullets.map((b) => (
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
                src="/images/portfolio/nearthwind-mobile/settings-blade.png"
                alt={t("features.settings.subImageAlts.blade")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/nearthwind-mobile/settings-remote.png"
                alt={t("features.settings.subImageAlts.remote")}
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 2 ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>{t("features.upload.label")}</p>
            <h2 className={styles.featureTitle}>{t("features.upload.title")}</h2>
            <p className={styles.featureDescription}>{t("features.upload.description")}</p>
          </Reveal>
          <Reveal delay={50}>
            <p className={styles.featureContext}>{t("features.upload.context")}</p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/nearthwind-mobile/upload-main.png"
              alt={t("features.upload.heroImageAlt")}
              className={styles.featureHeroImage}
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
                src="/images/portfolio/nearthwind-mobile/upload-stitch01.png"
                alt={t("features.upload.subImageAlts.stitch1")}
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/nearthwind-mobile/upload-stitch02.png"
                alt={t("features.upload.subImageAlts.stitch2")}
                className={styles.subImage}
              />
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
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.processFlow}>
              {processSteps.map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div className={styles.processStep}>
                    <span className={styles.processNum}>{step.num}</span>
                    <h4 className={styles.processStepTitle}>{step.title}</h4>
                    <p className={styles.processStepDesc}>{step.desc}</p>
                    <div className={styles.processStepDetail}>
                      <span className={styles.processStepMeta}>→ {step.input}</span>
                      <span className={styles.processStepMeta}>← {step.output}</span>
                    </div>
                  </div>
                </Reveal>
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
                  <span className={styles.outcomeSubLabel}>{m.subLabel}</span>
                  <span className={styles.outcomeValue}>{m.value}</span>
                  <span className={styles.outcomeLabel}>{m.label}</span>
                  <p className={styles.outcomeDesc}>{m.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className={styles.reflectionGrid}>
              {reflections.map((r) => (
                <div key={r.title} className={styles.reflectionCard}>
                  <h3 className={styles.reflectionCardTitle}>{r.title}</h3>
                  <p className={styles.reflectionText}>{r.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
