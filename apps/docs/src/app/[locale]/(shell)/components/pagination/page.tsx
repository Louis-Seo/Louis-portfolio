import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";

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
    namespace: "ds.components-pagination.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/pagination`,
      languages: {
        "en-US": "/en/components/pagination",
        "ko-KR": "/ko/components/pagination",
        "x-default": "/en/components/pagination",
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

export default async function PaginationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-pagination",
  });

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/pagination/Anatomy.png" alt="Pagination Anatomy" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("paginationProps.title")}</h3>
      <PropsTable
        headers={t.raw("paginationProps.headers") as PropsHeaders}
        rows={t.raw("paginationProps.rows") as PropsRow[]}
      />

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("item.title")}</h3>
      <p className={s.sectionSubtext}>{t("item.desc")}</p>

      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/pagination/Alignment.png" alt="Pagination Alignment" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("item.alignment.title")}</h4>
          <p className={s.ruleText}>{t("item.alignment.text")}</p>
        </div>
      </div>

      <h3 className={s.typeHeading}>{t("item.props.title")}</h3>
      <PropsTable
        headers={t.raw("item.props.headers") as PropsHeaders}
        rows={t.raw("item.props.rows") as PropsRow[]}
      />

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("useCase.title")}</h3>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/pagination/Use Case.png" alt="Pagination Use Case" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("useCase.itemState.title")}</h4>
          <p className={s.ruleText}>{t("useCase.itemState.text")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("prevNext.title")}</h3>
      <p className={s.sectionSubtext}>{t("prevNext.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/pagination/Previous Next Icon Button.png"
          alt="Previous / Next Icon Button"
        />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("pageNumber.title")}</h3>
      <p className={s.sectionSubtext}>{t("pageNumber.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/pagination/Page Number.png" alt="Page Number" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("spec.title")}</h3>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/pagination/Spacing.png" alt="Pagination Spacing" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("spec.spacing.title")}</h4>
          <p className={s.ruleText}>{t("spec.spacing.text")}</p>
        </div>
      </div>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/pagination/Size.png" alt="Pagination Size" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("spec.size.title")}</h4>
          <p className={s.ruleText}>{t("spec.size.text")}</p>
        </div>
      </div>
    </div>
  );
}
