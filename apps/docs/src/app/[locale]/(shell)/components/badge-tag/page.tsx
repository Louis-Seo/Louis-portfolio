import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type UsageItem = { key: string; title: string; desc: string };
type SizingRule = { key: string; title: string; desc: string };
type PropsHeaders = { property: string; values: string; default: string };
type PropsRow = { prop: string; values: string; default: string };

const USAGE_IMAGES: Record<string, string> = {
  box: "/images/components/badge-tag/1. Box Badge.png",
  contained: "/images/components/badge-tag/2. Contained Badge.png",
  count: "/images/components/badge-tag/3. Count Badge.png",
  severity: "/images/components/badge-tag/4. Severity Badge.png",
  button: "/images/components/badge-tag/5. Button Badge.png",
  text: "/images/components/badge-tag/6. Text Badge.png",
};

const SIZING_RULES: Record<string, { src: string; styleObj?: React.CSSProperties }> = {
  "char-one": {
    src: "/images/components/badge-tag/Text Character = 1.png",
  },
  "char-many": {
    src: "/images/components/badge-tag/Text Characters _ 1.png",
    styleObj: { objectFit: "contain", height: "auto" },
  },
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
    namespace: "ds.components-badge-tag.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/badge-tag`,
      languages: {
        "en-US": "/en/components/badge-tag",
        "ko-KR": "/ko/components/badge-tag",
        "x-default": "/en/components/badge-tag",
      },
    },
  };
}

function PropsTable({ headers, rows }: { headers: PropsHeaders; rows: PropsRow[] }) {
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

export default async function BadgeTagPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-badge-tag",
  });

  const anatomyLabels = t.raw("anatomy.labels") as string[];
  const usageList = t.raw("usage.list") as string[];
  const usageItems = t.raw("usage.items") as UsageItem[];
  const sizingRules = t.raw("sizing.rules") as SizingRule[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/badge-tag/Anatomy.png" alt="Badge Anatomy" />
        <p className={s.gridCardDesc}>
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
      <p className={s.sectionSubtext}>
        {t("usage.desc1")}
        <br />
        <br />
        {usageList.map((line) => (
          <span key={line}>
            {line.startsWith("    ") ? <>&nbsp;&nbsp;&nbsp;&nbsp;{line.slice(4)}</> : line}
            <br />
          </span>
        ))}
        <br />
        {t("usage.desc2")}
      </p>
      <div className={s.grid3col}>
        {usageItems.map((item) => (
          <div key={item.key} className={s.gridCard}>
            <div className={styles.gridCardPreview}>
              <img src={USAGE_IMAGES[item.key]} alt={item.title} />
            </div>
            <p className={s.gridCardTitle}>{item.title}</p>
            <p className={s.gridCardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("semanticVariants.title")}</h3>
      <p className={s.sectionSubtext}>{t("semanticVariants.desc")}</p>
      <div className={s.previewRow}>
        <div className={styles.previewBoxPadded}>
          <img
            src="/images/components/badge-tag/Semantic Variants 01.png"
            alt="Semantic Variants - Box Badge"
          />
        </div>
        <div className={styles.previewBoxPadded}>
          <img
            src="/images/components/badge-tag/Semantic Variants 02.png"
            alt="Semantic Variants - Severity Badge"
          />
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("contents.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("contents.desc")}
      </p>
      <div className={s.previewRow}>
        <div className={s.previewBox}>
          <img src="/images/components/badge-tag/Contents 01.png" alt="Contents 01" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/badge-tag/Contents 02.png" alt="Contents 02" />
        </div>
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("sizing.title")}</h3>
      <p className={s.sectionSubtext}>{t("sizing.desc")}</p>
      <div className={s.previewRow}>
        <div className={styles.previewBoxPadded}>
          <img src="/images/components/badge-tag/Textual Badge.png" alt="Textual Badge" />
        </div>
        <div className={styles.previewBoxPadded}>
          <img src="/images/components/badge-tag/Box Badge.png" alt="Box Badge" />
        </div>
      </div>

      {sizingRules.map((rule) => {
        const cfg = SIZING_RULES[rule.key];
        const boxStyle: React.CSSProperties =
          rule.key === "char-many" ? { marginBottom: 0, minHeight: "auto" } : { marginBottom: 0 };
        return (
          <div key={rule.key} className={s.usageRow}>
            <div className={s.previewBox} style={boxStyle}>
              <img src={cfg.src} alt={rule.title} style={cfg.styleObj} />
            </div>
            <div className={s.ruleCardBottom}>
              <p className={s.ruleTitle}>{rule.title}</p>
              <p className={s.ruleText}>{rule.desc}</p>
            </div>
          </div>
        );
      })}

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("variants.title")}</h3>

      <p className={s.typeHeading}>{t("variants.textual.title")}</p>
      <PropsTable
        headers={t.raw("variants.textual.headers") as PropsHeaders}
        rows={t.raw("variants.textual.rows") as PropsRow[]}
      />

      <p className={s.typeHeading}>{t("variants.box.title")}</p>
      <PropsTable
        headers={t.raw("variants.box.headers") as PropsHeaders}
        rows={t.raw("variants.box.rows") as PropsRow[]}
      />

      <p className={s.typeHeading}>{t("variants.severity.title")}</p>
      <PropsTable
        headers={t.raw("variants.severity.headers") as PropsHeaders}
        rows={t.raw("variants.severity.rows") as PropsRow[]}
      />
    </div>
  );
}
