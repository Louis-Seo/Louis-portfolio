import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type PropsRow = { prop: string; values: string; default: string };
type PropsHeaders = { property: string; values: string; default: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-date-picker.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/date-picker`,
      languages: {
        "en-US": "/en/components/date-picker",
        "ko-KR": "/ko/components/date-picker",
        "x-default": "/en/components/date-picker",
      },
    },
  };
}

function PropsTable({ headers, rows }: { headers: PropsHeaders; rows: PropsRow[] }) {
  return (
    <div className={s.propsTable}>
      <div className={`${s.propsRow3col} ${s.propsHeader}`}>
        <div className={s.propsCell}>{headers.property}</div>
        <div className={s.propsCell}>{headers.values}</div>
        <div className={s.propsCell}>{headers.default}</div>
      </div>
      {rows.map((row) => (
        <div key={row.prop} className={s.propsRow3col}>
          <div className={s.propsCell}>{row.prop}</div>
          <div className={s.propsCell}>{row.values}</div>
          <div className={s.propsCell}>{row.default}</div>
        </div>
      ))}
    </div>
  );
}

export default async function DatePickerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-date-picker",
  });

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/date-picker/Anatomy.png" alt="Date Picker Anatomy" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/date-picker/Components.png" alt="Date Picker Components" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("props.title")}</h3>
      <PropsTable
        headers={t.raw("props.headers") as PropsHeaders}
        rows={t.raw("props.rows") as PropsRow[]}
      />

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("sizing.title")}</h3>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/date-picker/Width & Padding.png" alt="Width & Padding" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("sizing.width.title")}</h4>
          <p className={s.ruleText}>{t("sizing.width.text")}</p>
        </div>
      </div>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/date-picker/Internal Spacing.png" alt="Internal Spacing" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("sizing.spacing.title")}</h4>
          <p className={s.ruleText}>{t("sizing.spacing.text")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("alignment.title")}</h3>
      <p className={s.sectionSubtext}>{t("alignment.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/date-picker/Alignment.png" alt="Date Picker Alignment" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("picker.title")}</h3>
      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={styles.previewBoxTransparent}>
            <img src="/images/components/date-picker/Type.png" alt="Picker Type" />
          </div>
          <h4 className={styles.variantColHeading}>{t("picker.type.title")}</h4>
          <p className={styles.variantColDesc}>{t("picker.type.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.previewBoxTransparent}>
            <img src="/images/components/date-picker/State.png" alt="Picker State" />
          </div>
          <h4 className={styles.variantColHeading}>{t("picker.state.title")}</h4>
          <p className={styles.variantColDesc}>{t("picker.state.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("usecase.title")}</h3>
      <div className={styles.variantsRow}>
        <div className={s.previewBox}>
          <img src="/images/components/date-picker/Usecase 01.png" alt="Create Project / Task" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/date-picker/Usecase 02.png" alt="Project / Task Detail" />
        </div>
      </div>
    </div>
  );
}
