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
    namespace: "ds.components-navigation.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/navigation`,
      languages: {
        "en-US": "/en/components/navigation",
        "ko-KR": "/ko/components/navigation",
        "x-default": "/en/components/navigation",
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

export default async function NavigationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-navigation",
  });

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      {/* Wind GNB */}
      <h3 className={s.sectionHeading}>{t("gnb.title")}</h3>
      <p className={s.sectionSubtext}>{t("gnb.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/navigation/Wind GNB.png" alt="Wind GNB" />
      </div>
      <p className={styles.previewCaption}>{t("gnb.caption")}</p>

      <hr className={s.divider} />

      {/* Anatomy */}
      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/navigation/Navigation Anatomy.png" alt="Navigation Anatomy" />
      </div>

      <hr className={s.divider} />

      {/* Variants */}
      <h3 className={s.sectionHeading}>{t("variants.title")}</h3>
      <p className={s.sectionSubtext}>{t("variants.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/navigation/Navigation Variants.png"
          alt="Navigation Variants"
        />
      </div>

      <hr className={s.divider} />

      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/navigation/GNB Fold.png" alt="GNB Fold" />
          </div>
          <h4 className={styles.variantColHeading}>{t("spec.fold.title")}</h4>
          <p className={styles.variantColDesc}>{t("spec.fold.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/navigation/Scroll Bar.png" alt="Scroll Bar" />
          </div>
          <h4 className={styles.variantColHeading}>{t("spec.scroll.title")}</h4>
          <p className={styles.variantColDesc}>{t("spec.scroll.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* Props Tables */}
      <h3 className={s.sectionHeading}>{t("gnbProps.title")}</h3>
      <PropsTable
        headers={t.raw("gnbProps.headers") as PropsHeaders}
        rows={t.raw("gnbProps.rows") as PropsRow[]}
      />

      <h3 className={s.typeHeading}>{t("gnbItemProps.title")}</h3>
      <PropsTable
        headers={t.raw("gnbItemProps.headers") as PropsHeaders}
        rows={t.raw("gnbItemProps.rows") as PropsRow[]}
      />

      <h3 className={s.typeHeading}>{t("itemProps.title")}</h3>
      <PropsTable
        headers={t.raw("itemProps.headers") as PropsHeaders}
        rows={t.raw("itemProps.rows") as PropsRow[]}
      />

      <h3 className={s.typeHeading}>{t("menuProps.title")}</h3>
      <PropsTable
        headers={t.raw("menuProps.headers") as PropsHeaders}
        rows={t.raw("menuProps.rows") as PropsRow[]}
      />

      <hr className={s.divider} />

      {/* GNB Dropdown */}
      <h3 className={s.sectionHeading}>{t("dropdown.title")}</h3>
      <p className={s.sectionSubtext}>{t("dropdown.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/navigation/GNB Dropdown.png" alt="GNB Dropdown" />
      </div>

      <hr className={s.divider} />

      {/* Spec — Spacing & Extended */}
      <h3 className={s.sectionHeading}>{t("spec.title")}</h3>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/navigation/Spacing.png" alt="Navigation Spacing" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("spec.spacing.title")}</h4>
          <p className={s.ruleText}>{t("spec.spacing.desc")}</p>
        </div>
      </div>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/navigation/Extended Structure.png"
            alt="Navigation Extended Structure"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("spec.extended.title")}</h4>
          <p className={s.ruleText}>{t("spec.extended.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* Usage Guidelines */}
      <h3 className={s.sectionHeading}>{t("usage.title")}</h3>
      <p className={s.sectionSubtext}>{t("usage.desc")}</p>

      <div className={styles.doDontRow}>
        <div className={styles.doDontCol}>
          <h4 className={styles.doDontHeading}>{t("usage.do.title")}</h4>
          <p className={styles.doDontDesc}>{t("usage.do.desc")}</p>
          <div className={styles.doDontPreview}>
            <img
              src="/images/components/navigation/Do.png"
              alt="Do"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.doDontCol}>
          <h4 className={styles.doDontHeading}>{t("usage.dont.title")}</h4>
          <p className={styles.doDontDesc}>{t("usage.dont.desc")}</p>
          <div className={styles.doDontPreview}>
            <img
              src="/images/components/navigation/Don't.png"
              alt="Don't"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
