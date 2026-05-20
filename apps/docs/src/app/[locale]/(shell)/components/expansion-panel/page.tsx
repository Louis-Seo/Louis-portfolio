import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";

type TableHeaders = { property: string; values: string; default: string };
type TableRow = { prop: string; values: string; default: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-expansion-panel.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/expansion-panel`,
      languages: {
        "en-US": "/en/components/expansion-panel",
        "ko-KR": "/ko/components/expansion-panel",
        "x-default": "/en/components/expansion-panel",
      },
    },
  };
}

function PropsTable({ headers, rows }: { headers: TableHeaders; rows: TableRow[] }) {
  return (
    <table className={s.propsTable}>
      <tbody>
        <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
          <td className={s.propsCell}>{headers.property}</td>
          <td className={s.propsCell}>{headers.values}</td>
          <td className={s.propsCell}>{headers.default}</td>
        </tr>
        {rows.map((row) => (
          <tr key={row.prop + row.values} className={s.propsRow3col}>
            <td className={s.propsCell}>{row.prop}</td>
            <td className={s.propsCell}>{row.values}</td>
            <td className={s.propsCell}>{row.default}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default async function ExpansionPanelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-expansion-panel",
  });

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/expansion-panel/Anatomy.png" alt="Expansion Panel Anatomy" />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("usage.title")}</h3>
      <p className={s.sectionSubtext}>{t("usage.desc")}</p>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/expansion-panel/Usage.png" alt="Expansion Panel Usage" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("usage.ruleTitle")}</p>
          <p className={s.ruleText}>{t("usage.ruleText")}</p>
        </div>
      </div>

      <h3 className={s.sectionHeading}>{t("variants.title")}</h3>
      <p className={s.sectionSubtext}>{t("variants.desc")}</p>

      <div className={s.usageRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/expansion-panel/Panel Fold.png" alt="Panel Fold" />
          </div>
          <h4 className={s.typeHeading}>{t("variants.fold.title")}</h4>
          <p className={s.typeSubtext}>{t("variants.fold.desc")}</p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/expansion-panel/Scroll Bar.png" alt="Scroll Bar" />
          </div>
          <h4 className={s.typeHeading}>{t("variants.scroll.title")}</h4>
          <p className={s.typeSubtext}>{t("variants.scroll.desc")}</p>
        </div>
      </div>

      <p className={s.typeHeading}>{t("tables.panel.title")}</p>
      <PropsTable
        headers={t.raw("tables.panel.headers") as TableHeaders}
        rows={t.raw("tables.panel.rows") as TableRow[]}
      />

      <p className={s.typeHeading}>{t("tables.entry.title")}</p>
      <PropsTable
        headers={t.raw("tables.entry.headers") as TableHeaders}
        rows={t.raw("tables.entry.rows") as TableRow[]}
      />

      <p className={s.typeHeading}>{t("tables.list.title")}</p>
      <PropsTable
        headers={t.raw("tables.list.headers") as TableHeaders}
        rows={t.raw("tables.list.rows") as TableRow[]}
      />
    </div>
  );
}
