"use client";

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

type WhatICard = { num: string; title: string; text: string; tags: string[] };
type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  desc: string;
  projects: string[];
};
type NamedMeta = { name: string; meta: string };
type Principle = { title: string; text: string };
type ToolGroup = { label: string; chips: string[] };

export default function AboutPage() {
  const t = useTranslations("about");

  const whatICards = t.raw("whatIBring.cards") as WhatICard[];
  const experienceItems = t.raw("experience.items") as ExperienceItem[];
  const awardItems = t.raw("awards.items") as NamedMeta[];
  const educationItems = t.raw("education.items") as NamedMeta[];
  const principles = t.raw("howIWork.principles") as Principle[];
  const capabilityGroups = t.raw("capabilities.groups") as ToolGroup[];

  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.heroLabel}>{t("hero.label")}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>
              {t("hero.titleLine1")}
              <br />
              {t("hero.titleLine2")}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroDesc}>
              {t("hero.descLine1")}
              <br />
              {t("hero.descLine2")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ What I Bring ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitLayout}>
            <div className={styles.splitSticky}>
              <Reveal>
                <h2 className={styles.splitTitle}>{t("whatIBring.title")}</h2>
                <p className={styles.splitDesc}>{t("whatIBring.desc")}</p>
              </Reveal>
            </div>
            <div className={styles.splitFlow}>
              {whatICards.map((item, i) => (
                <Reveal key={item.num} delay={i * 80}>
                  <div className={styles.expertiseCard}>
                    <span className={styles.expertiseNum}>{item.num}</span>
                    <h3 className={styles.expertiseTitle}>{item.title}</h3>
                    <p className={styles.expertiseText}>{item.text}</p>
                    <div className={styles.expertiseTags}>
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Experience ═══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <Reveal>
            <h2 className={styles.sectionTitle}>{t("experience.title")}</h2>
          </Reveal>

          <div className={styles.expList}>
            {experienceItems.map((item, i) => (
              <Reveal key={item.company} delay={i * 80}>
                <div className={styles.expItem}>
                  <div className={styles.expHead}>
                    <div>
                      <h3 className={styles.expRole}>{item.role}</h3>
                      <span className={styles.expCompany}>{item.company}</span>
                    </div>
                    <span className={styles.expPeriod}>{item.period}</span>
                  </div>
                  <p className={styles.expDesc}>{item.desc}</p>
                  <div className={styles.expProjects}>
                    {item.projects.map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Awards & Education ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.credentialGrid}>
            <div>
              <Reveal>
                <h2 className={styles.sectionTitle}>{t("awards.title")}</h2>
              </Reveal>
              <div className={styles.credentialList}>
                {awardItems.map((item, i) => (
                  <Reveal key={item.name} delay={40 + i * 40}>
                    <div className={styles.credentialItem}>
                      <span className={styles.credentialName}>{item.name}</span>
                      <span className={styles.credentialMeta}>{item.meta}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Reveal>
                <h2 className={styles.sectionTitle}>{t("education.title")}</h2>
              </Reveal>
              <div className={styles.credentialList}>
                {educationItems.map((item, i) => (
                  <Reveal key={item.name} delay={40 + i * 40}>
                    <div className={styles.credentialItem}>
                      <span className={styles.credentialName}>{item.name}</span>
                      <span className={styles.credentialMeta}>{item.meta}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ How I Work ═══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.principleIntro}>
              <h2 className={styles.principleHeadline}>
                {t("howIWork.headlineLine1")}
                <br />
                {t("howIWork.headlineLine2")}
              </h2>
            </div>
          </Reveal>

          <div className={styles.principleList}>
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className={styles.principleItem}>
                  <span className={styles.principleNum}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={styles.principleTitle}>{item.title}</h3>
                    <p className={styles.principleText}>{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Capabilities & Contact ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bottomGrid}>
            <Reveal>
              <div>
                <h2 className={styles.sectionTitle}>{t("capabilities.title")}</h2>
                <div className={styles.toolGroups}>
                  {capabilityGroups.map((group) => (
                    <div key={group.label} className={styles.toolGroup}>
                      <h3 className={styles.toolLabel}>{group.label}</h3>
                      <div className={styles.toolChips}>
                        {group.chips.map((chip) => (
                          <span key={chip}>{chip}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2 className={styles.sectionTitle}>{t("whatsNext.title")}</h2>
                <p className={styles.contactIntro}>{t("whatsNext.intro")}</p>
                <div className={styles.contactList}>
                  <a href={`mailto:${t("whatsNext.links.email")}`} className={styles.contactLink}>
                    {t("whatsNext.links.email")} →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/louisseo"
                    className={styles.contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("whatsNext.links.linkedin")} →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
