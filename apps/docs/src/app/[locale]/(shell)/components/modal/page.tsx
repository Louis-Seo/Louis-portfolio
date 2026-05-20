import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";

type ButtonsHeaders = { property: string; values: string; default: string };
type ButtonsRow = { prop: string; values: string; default: string };
type CriteriaRow = { key: string; label: string; desc: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-modal.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/modal`,
      languages: {
        "en-US": "/en/components/modal",
        "ko-KR": "/ko/components/modal",
        "x-default": "/en/components/modal",
      },
    },
  };
}

export default async function ModalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-modal",
  });

  const buttonsHeaders = t.raw("buttons.headers") as ButtonsHeaders;
  const buttonsRows = t.raw("buttons.rows") as ButtonsRow[];
  const requiredRows = t.raw("criteria.requiredRows") as CriteriaRow[];
  const recommendRows = t.raw("criteria.recommendRows") as CriteriaRow[];
  const requiredCheckRows = t.raw("criteria.requiredCheckRows") as CriteriaRow[];
  const recommendCheckRows = t.raw("criteria.recommendCheckRows") as CriteriaRow[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription} style={{ whiteSpace: "pre-line" }}>
        {t("hero.desc")}
      </p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/modal/Anatomy.png" alt="Modal Anatomy" />
      </div>
      <p className={s.caption} style={{ whiteSpace: "pre-line" }}>
        {t("anatomy.caption")}
      </p>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("buttons.title")}</h3>
      <p className={s.sectionSubtext}>{t("buttons.desc")}</p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>{buttonsHeaders.property}</td>
            <td className={s.propsCell}>{buttonsHeaders.values}</td>
            <td className={s.propsCell}>{buttonsHeaders.default}</td>
          </tr>
          {buttonsRows.map((row) => (
            <tr key={row.prop} className={s.propsRow3col}>
              <td className={s.propsCell}>{row.prop}</td>
              <td className={s.propsCell}>{row.values}</td>
              <td className={s.propsCell}>{row.default}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className={s.sectionHeading}>{t("criteria.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("criteria.desc")}
      </p>

      <h4 className={s.typeHeading}>{t("criteria.criteriaTitle")}</h4>

      <h4 className={s.typeHeading} style={{ fontSize: 16 }}>
        {t("criteria.requiredTitle")}
      </h4>
      <table className={s.propsTable}>
        <tbody>
          {requiredRows.map((row) => (
            <tr key={row.key} className={s.propsRow2col}>
              <td className={s.propsCell} style={{ fontWeight: 600 }}>
                {row.label}
              </td>
              <td className={s.propsCell}>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className={s.typeHeading} style={{ fontSize: 16 }}>
        {t("criteria.recommendTitle")}
      </h4>
      <table className={s.propsTable}>
        <tbody>
          {recommendRows.map((row) => (
            <tr key={row.key} className={s.propsRow2col}>
              <td className={s.propsCell} style={{ fontWeight: 600 }}>
                {row.label}
              </td>
              <td className={s.propsCell}>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className={s.typeHeading}>{t("criteria.checklistTitle")}</h4>

      <h4 className={s.typeHeading} style={{ fontSize: 16 }}>
        {t("criteria.requiredTitle")}
      </h4>
      <table className={s.propsTable}>
        <tbody>
          {requiredCheckRows.map((row) => (
            <tr key={row.key} className={s.propsRow3colCheck}>
              <td className={s.propsCell} style={{ fontWeight: 600 }}>
                {row.label}
              </td>
              <td className={s.propsCell}>{row.desc}</td>
              <td className={s.propsCell}>
                <div className={s.checkIcon}>✓</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className={s.typeHeading} style={{ fontSize: 16 }}>
        {t("criteria.recommendTitle")}
      </h4>
      <table className={s.propsTable}>
        <tbody>
          {recommendCheckRows.map((row) => (
            <tr key={row.key} className={s.propsRow3colCheck}>
              <td className={s.propsCell} style={{ fontWeight: 600 }}>
                {row.label}
              </td>
              <td className={s.propsCell}>{row.desc}</td>
              <td className={s.propsCell}>
                <div className={s.checkIcon}>✓</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className={s.sectionHeading}>{t("scrim.title")}</h3>
      <p className={s.sectionSubtext}>{t("scrim.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/modal/Scrim Area (Overlay).png" alt="Scrim Area" />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("spacing.title")}</h3>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/modal/Spacing.png" alt="Spacing" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("spacing.spacing.title")}</p>
          <p className={s.ruleText}>{t("spacing.spacing.desc")}</p>
        </div>
      </div>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/modal/Font.png" alt="Font" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("spacing.font.title")}</p>
          <p className={s.ruleText}>{t("spacing.font.desc")}</p>
        </div>
      </div>

      <h3 className={s.sectionHeading}>{t("contentAction.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("contentAction.desc")}
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/modal/Content & Action Area.png" alt="Content & Action Area" />
      </div>
    </div>
  );
}
