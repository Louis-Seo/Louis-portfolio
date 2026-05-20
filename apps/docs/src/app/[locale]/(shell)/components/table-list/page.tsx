import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type GuidelineItem = {
  key: string;
  type: "do" | "dont";
  title: string;
  desc: string;
};

const GUIDELINE_IMAGES: Record<string, string> = {
  "do-text": "/images/components/table-list/Do 01.png",
  "dont-zebra": "/images/components/table-list/Dont 01.png",
  "do-state": "/images/components/table-list/Do 02.png",
  "dont-headers": "/images/components/table-list/Dont 02.png",
  "do-context": "/images/components/table-list/Do 03.png",
  "dont-vertical": "/images/components/table-list/Dont 03.png",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-table-list.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/table-list`,
      languages: {
        "en-US": "/en/components/table-list",
        "ko-KR": "/ko/components/table-list",
        "x-default": "/en/components/table-list",
      },
    },
  };
}

export default async function TableListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-table-list",
  });

  const guidelines = t.raw("guidelines.items") as GuidelineItem[];

  // Group guidelines into pairs for layout
  const guidelinePairs: GuidelineItem[][] = [];
  for (let i = 0; i < guidelines.length; i += 2) {
    guidelinePairs.push(guidelines.slice(i, i + 2));
  }

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Anatomy.png" alt="Table Anatomy" />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("usage.title")}</h3>
      <p className={s.sectionSubtext}>{t("usage.desc1")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Usage 01.png" alt="Stable Type and Editable Type" />
      </div>

      <div className={s.sectionGap} />

      <p className={s.sectionSubtext}>{t("usage.desc2")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Usage 02.png" alt="Fixed Type and Flexible Type" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("tableStyle.title")}</h3>
      <p className={s.sectionSubtext}>{t("tableStyle.desc")}</p>

      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/table-list/Wind Page Header.png" alt="Wind Page Header" />
          </div>
          <p className={styles.previewLabel}>{t("tableStyle.windHeader")}</p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img
              src="/images/components/table-list/Wind Admin Page Header.png"
              alt="Wind Admin Page Header"
            />
          </div>
          <p className={styles.previewLabel}>{t("tableStyle.windAdminHeader")}</p>
        </div>
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("tableStyle.typography.title")}</h4>
      <div className={styles.previewBoxNoBg}>
        <img src="/images/components/table-list/Typography.png" alt="Typography" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("tableStyle.border.title")}</h4>
      <p className={s.typeSubtext}>{t("tableStyle.border.desc1")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Border 01.png" alt="Border" />
      </div>

      <div style={{ marginBottom: 24 }} />

      <p className={s.typeSubtext}>{t("tableStyle.border.desc2")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Border 02.png" alt="Border Pinned Column" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("tableStyle.visualCue.title")}</h4>
      <p className={s.typeSubtext}>{t("tableStyle.visualCue.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Visual Cue.png" alt="Visual Cue" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("alignment.title")}</h3>
      <p className={s.sectionSubtext}>{t("alignment.desc")}</p>

      <h4 className={s.typeHeading}>{t("alignment.left.title")}</h4>
      <p className={s.typeSubtext}>{t("alignment.left.desc")}</p>

      <h4 className={s.typeHeading}>{t("alignment.right.title")}</h4>
      <p className={s.typeSubtext}>{t("alignment.right.desc")}</p>

      <h4 className={s.typeHeading}>{t("alignment.middle.title")}</h4>
      <p className={s.typeSubtext}>{t("alignment.middle.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("interaction.title")}</h3>
      <p className={s.sectionSubtext}>{t("interaction.desc")}</p>

      <h4 className={s.typeHeading}>{t("interaction.sorting.title")}</h4>
      <p className={s.typeSubtext}>{t("interaction.sorting.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Sorting (Header).png" alt="Sorting Header" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("interaction.maintain.title")}</h4>
      <p className={s.typeSubtext}>{t("interaction.maintain.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/table-list/Maintain Column or Row when Scrolling.png"
          alt="Maintain Column or Row when Scrolling"
        />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("state.title")}</h3>
      <p className={s.sectionSubtext}>{t("state.desc")}</p>

      <h4 className={s.typeHeading}>{t("state.main.title")}</h4>
      <div className={styles.previewBoxNoBg}>
        <img
          src="/images/components/table-list/Main Table Contents State.png"
          alt="Main Table Contents State"
        />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("state.sub.title")}</h4>
      <div className={styles.previewBoxNoBg}>
        <img
          src="/images/components/table-list/Sub Table Contents State.png"
          alt="Sub Table Contents State"
        />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("emptyState.title")}</h3>
      <p className={s.sectionSubtext}>{t("emptyState.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Table Empty State.png" alt="Table Empty State" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("sizing.title")}</h3>
      <p className={s.sectionSubtext}>{t("sizing.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Sizing.png" alt="Sizing" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("headerStyle.title")}</h3>
      <p className={s.sectionSubtext}>{t("headerStyle.desc")}</p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Text Label Type.png" alt="Text Label Type" />
          </div>
          <h4 className={s.typeHeading}>{t("headerStyle.textLabel.title")}</h4>
          <p className={s.typeSubtext}>{t("headerStyle.textLabel.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img
              src="/images/components/table-list/Text with Filter Type.png"
              alt="Text with Filter Type"
            />
          </div>
          <h4 className={s.typeHeading}>{t("headerStyle.textFilter.title")}</h4>
          <p className={s.typeSubtext}>{t("headerStyle.textFilter.desc")}</p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img
              src="/images/components/table-list/Selection with Filter Type.png"
              alt="Selection with Filter Type"
            />
          </div>
          <h4 className={s.typeHeading}>{t("headerStyle.selectionFilter.title")}</h4>
          <p className={s.typeSubtext}>{t("headerStyle.selectionFilter.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Selection Type.png" alt="Selection Type" />
          </div>
          <h4 className={s.typeHeading}>{t("headerStyle.selection.title")}</h4>
          <p className={s.typeSubtext}>{t("headerStyle.selection.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("contentsStyle.title")}</h3>
      <p className={s.sectionSubtext}>{t("contentsStyle.desc")}</p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Checkbox Type.png" alt="Checkbox Type" />
          </div>
          <h4 className={s.typeHeading}>{t("contentsStyle.checkbox.title")}</h4>
          <p className={s.typeSubtext}>{t("contentsStyle.checkbox.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img
              src="/images/components/table-list/Text Label Type-1.png"
              alt="Contents Text Label Type"
            />
          </div>
          <h4 className={s.typeHeading}>{t("contentsStyle.textLabel.title")}</h4>
          <p className={s.typeSubtext}>{t("contentsStyle.textLabel.desc")}</p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Badge Type.png" alt="Badge Type" />
          </div>
          <h4 className={s.typeHeading}>{t("contentsStyle.badge.title")}</h4>
          <p className={s.typeSubtext}>{t("contentsStyle.badge.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img
              src="/images/components/table-list/Hover Action Icon Type.png"
              alt="Hover Action Icon Type"
            />
          </div>
          <h4 className={s.typeHeading}>{t("contentsStyle.hoverIcon.title")}</h4>
          <p className={s.typeSubtext}>{t("contentsStyle.hoverIcon.desc")}</p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Avatar Type.png" alt="Avatar Type" />
          </div>
          <h4 className={s.typeHeading}>{t("contentsStyle.avatar.title")}</h4>
          <p className={s.typeSubtext}>{t("contentsStyle.avatar.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Expand Type.png" alt="Expand Type" />
          </div>
          <h4 className={s.typeHeading}>{t("contentsStyle.expand.title")}</h4>
          <p className={s.typeSubtext}>{t("contentsStyle.expand.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("guidelines.title")}</h3>

      {guidelinePairs.map((pair, idx) => (
        <div key={idx} className={s.previewRow}>
          {pair.map((item) => (
            <div key={item.key}>
              <div className={s.previewBox}>
                <img src={GUIDELINE_IMAGES[item.key]} alt={item.title} />
              </div>
              <h4 className={s.typeHeading}>{item.title}</h4>
              <p className={s.typeSubtext}>{item.desc}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
