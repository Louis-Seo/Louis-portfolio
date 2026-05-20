import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-tree-view.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/tree-view`,
      languages: {
        "en-US": "/en/components/tree-view",
        "ko-KR": "/ko/components/tree-view",
        "x-default": "/en/components/tree-view",
      },
    },
  };
}

export default async function TreeViewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-tree-view",
  });

  const anatomyLabels = t.raw("anatomy.labels") as string[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/tree-view/Anatomy.png" alt="Tree Anatomy" />
        <p className={styles.previewBoxCompactLabel}>
          {anatomyLabels.map((line, i) => (
            <span key={line}>
              {line}
              {i < anatomyLabels.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("usage.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("usage.desc")}
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Text Type.png" alt="Text Type" />
          </div>
          <h4 className={s.typeHeading}>{t("usage.text.title")}</h4>
          <p className={s.typeSubtext}>{t("usage.text.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Checkbox Type.png" alt="Checkbox Type" />
          </div>
          <h4 className={s.typeHeading}>{t("usage.checkbox.title")}</h4>
          <p className={s.typeSubtext}>{t("usage.checkbox.desc")}</p>
        </div>
      </div>

      <h3 className={s.sectionHeading}>{t("spacing.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("spacing.desc")}
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Text Type Sizing.png" alt="Text Type Sizing" />
          </div>
          <h4 className={s.typeHeading}>{t("spacing.text.title")}</h4>
          <p className={s.typeSubtext}>{t("spacing.text.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBoxFixed}>
            <img
              src="/images/components/tree-view/Checkbox Type Sizing.png"
              alt="Checkbox Type Sizing"
            />
          </div>
          <h4 className={s.typeHeading}>{t("spacing.checkbox.title")}</h4>
          <p className={s.typeSubtext}>{t("spacing.checkbox.desc")}</p>
        </div>
      </div>

      <h3 className={s.sectionHeading}>{t("variants.title")}</h3>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Leaf Item.png" alt="Leaf Item" />
          </div>
          <h4 className={s.typeHeading}>{t("variants.leaf.title")}</h4>
          <p className={s.typeSubtext}>{t("variants.leaf.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Branch Item.png" alt="Branch Item" />
          </div>
          <h4 className={s.typeHeading}>{t("variants.branch.title")}</h4>
          <p className={s.typeSubtext}>{t("variants.branch.desc")}</p>
        </div>
      </div>
    </div>
  );
}
