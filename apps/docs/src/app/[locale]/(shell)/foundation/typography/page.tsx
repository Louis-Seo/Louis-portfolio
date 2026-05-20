import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import styles from "./page.module.css";

/* ── Typography Scale Data ── */

type TypeRowData = {
  name: string;
  typeface: string;
  size: number;
  weight: string;
  weightNum: number;
  lineHeightPx: number;
};

const TYPE_USAGE_ROWS: TypeRowData[] = [
  {
    name: "H1",
    typeface: "Noto Sans Display",
    size: 32,
    weight: "Semi Bold",
    weightNum: 600,
    lineHeightPx: 40,
  },
  {
    name: "H2",
    typeface: "Noto Sans Display",
    size: 24,
    weight: "Semi Bold",
    weightNum: 600,
    lineHeightPx: 30,
  },
  {
    name: "H3",
    typeface: "Noto Sans Display",
    size: 20,
    weight: "Semi Bold",
    weightNum: 600,
    lineHeightPx: 24,
  },
  {
    name: "H4",
    typeface: "Noto Sans Display",
    size: 18,
    weight: "Semi Bold",
    weightNum: 600,
    lineHeightPx: 22,
  },
  {
    name: "H5",
    typeface: "Noto Sans Display",
    size: 16,
    weight: "Semi Bold",
    weightNum: 600,
    lineHeightPx: 22,
  },
  {
    name: "Subtitle 1 (+btn1)",
    typeface: "Noto Sans Display",
    size: 16,
    weight: "Medium",
    weightNum: 500,
    lineHeightPx: 22,
  },
  {
    name: "Subtitle 2",
    typeface: "Noto Sans Display",
    size: 14,
    weight: "Semi Bold",
    weightNum: 600,
    lineHeightPx: 20,
  },
  {
    name: "Subtitle 3 (+btn2)",
    typeface: "Noto Sans Display",
    size: 14,
    weight: "Medium",
    weightNum: 500,
    lineHeightPx: 20,
  },
  {
    name: "Subtitle 4",
    typeface: "Noto Sans Display",
    size: 12,
    weight: "Semi Bold",
    weightNum: 600,
    lineHeightPx: 16,
  },
  {
    name: "Subtitle 5 (+btn3)",
    typeface: "Noto Sans Display",
    size: 12,
    weight: "Medium",
    weightNum: 500,
    lineHeightPx: 16,
  },
  {
    name: "Body 1",
    typeface: "Noto Sans Display",
    size: 16,
    weight: "Regular",
    weightNum: 400,
    lineHeightPx: 22,
  },
  {
    name: "Body 2",
    typeface: "Noto Sans Display",
    size: 14,
    weight: "Regular",
    weightNum: 400,
    lineHeightPx: 20,
  },
  {
    name: "Body 3",
    typeface: "Noto Sans Display",
    size: 12,
    weight: "Medium",
    weightNum: 500,
    lineHeightPx: 16,
  },
  {
    name: "Body 4",
    typeface: "Noto Sans Display",
    size: 12,
    weight: "Regular",
    weightNum: 400,
    lineHeightPx: 16,
  },
  {
    name: "Body 5",
    typeface: "Noto Sans Display",
    size: 10,
    weight: "Medium",
    weightNum: 500,
    lineHeightPx: 14,
  },
  {
    name: "Body 6",
    typeface: "Noto Sans Display",
    size: 10,
    weight: "Regular",
    weightNum: 400,
    lineHeightPx: 14,
  },
];

const SCALE_LOGIC_ROWS = [
  { n: 1, calc: "Initial Value 12px", increment: "-", result: 12 },
  { n: 2, calc: "12 + (INT[0/4]+1) x2 = 12+2", increment: "2", result: 14 },
  { n: 3, calc: "14 + (INT[1/4]+1) x2 = 14+2", increment: "2", result: 16 },
  { n: 4, calc: "16 + (INT[2/4]+1) x2 = 16+2", increment: "2", result: 18 },
  { n: 5, calc: "18 + (INT[3/4]+1) x2 = 18+2", increment: "2", result: 20 },
  { n: 6, calc: "20 + (INT[4/4]+1) x2 = 20+4", increment: "4", result: 24 },
  { n: 7, calc: "24 + (INT[5/4]+1) x2 = 14+4", increment: "4", result: 28 },
  { n: 8, calc: "28 + (INT[6/4]+1) x2 = 28+4", increment: "4", result: 32 },
  { n: 9, calc: "32 + (INT[7/4]+1) x2 = 32+2", increment: "4", result: 36 },
  { n: 10, calc: "36 + (INT[8/4]+1) x2 = 36+6", increment: "6", result: 42 },
  { n: 11, calc: "42 + (INT[9/4]+1) x2 = 42+6", increment: "6", result: 48 },
  { n: 12, calc: "48 + (INT[10/4]+1) x2 = 48+6", increment: "6", result: 54 },
];

const SPECIMEN_TEXT =
  'NEAR, EARTH, LABORATORY\nABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890~!@#$%^&*()[]{};’",.&lt;&gt;/?';

const WEIGHT_CARDS = [
  { num: 1, label: "PRETENDARD REGULAR", weight: 400 },
  { num: 2, label: "PRETENDARD MEDIUM", weight: 500 },
  { num: 3, label: "PRETENDARD SEMI BOLD", weight: 600 },
];

const HEADING_ROWS = TYPE_USAGE_ROWS.filter((r) => r.name.startsWith("H")).map((r) => ({
  name: r.name,
  size: r.size,
  weight: r.weight,
  weightNum: r.weightNum,
  lineHeight: `${r.lineHeightPx}px`,
}));
const SUBTITLE_ROWS = TYPE_USAGE_ROWS.filter((r) => r.name.startsWith("Subtitle")).map((r) => ({
  name: r.name,
  size: r.size,
  weight: r.weight,
  weightNum: r.weightNum,
  lineHeight: `${r.lineHeightPx}px`,
}));
const BODY_ROWS = TYPE_USAGE_ROWS.filter((r) => r.name.startsWith("Body")).map((r) => ({
  name: r.name,
  size: r.size,
  weight: r.weight,
  weightNum: r.weightNum,
  lineHeight: `${r.lineHeightPx}px`,
}));

const SCALE_GROUPS = [
  { key: "heading", rows: HEADING_ROWS.filter((r) => r.name !== "H5") },
  { key: "subtitle", rows: SUBTITLE_ROWS },
  { key: "body", rows: BODY_ROWS },
] as const;

const CONTEXT_MOCKUPS: Record<string, React.ReactNode> = {
  heading: (
    <>
      <img
        src="/images/typography/heading-scale.png"
        alt="Navigation & Dashboard UI"
        className={`${styles.scaleImage} ${styles.scaleImageLight}`}
      />
      <img
        src="/images/typography/heading-scale-dark.png"
        alt="Navigation & Dashboard UI"
        className={`${styles.scaleImage} ${styles.scaleImageDark}`}
      />
    </>
  ),
  subtitle: (
    <>
      <img
        src="/images/typography/subtitle-scale.png"
        alt="Form & Detail Panel UI"
        className={`${styles.scaleImage} ${styles.scaleImageLight}`}
      />
      <img
        src="/images/typography/subtitle-scale-dark.png"
        alt="Form & Detail Panel UI"
        className={`${styles.scaleImage} ${styles.scaleImageDark}`}
      />
    </>
  ),
  body: (
    <>
      <img
        src="/images/typography/body-scale.png"
        alt="Data Table UI"
        className={`${styles.scaleImage} ${styles.scaleImageLight}`}
      />
      <img
        src="/images/typography/body-scale-dark.png"
        alt="Data Table UI"
        className={`${styles.scaleImage} ${styles.scaleImageDark}`}
      />
    </>
  ),
};

function TypeUsageRow({ row }: { row: TypeRowData }) {
  const rem = +(row.size / 14).toFixed(3);
  const unitless = +(row.lineHeightPx / row.size).toFixed(
    row.lineHeightPx % row.size === 0 ? 0 : 2,
  );

  return (
    <tr className={styles.tableRow}>
      <td className={styles.cellName}>
        <span
          style={{
            fontSize: `${row.size}px`,
            fontWeight: row.weightNum,
            lineHeight: `${row.lineHeightPx}px`,
          }}
        >
          {row.name}
        </span>
      </td>
      <td className={styles.cellTypeface}>{row.typeface}</td>
      <td className={styles.cellWeight}>{row.weight}</td>
      <td className={styles.cellSize}>{row.size}</td>
      <td className={styles.cellRem}>{rem}</td>
      <td className={styles.cellLineHeight}>{row.lineHeightPx}</td>
      <td className={styles.cellUnitless}>{unitless}</td>
    </tr>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.foundation-typography.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/foundation/typography`,
      languages: {
        "en-US": "/en/foundation/typography",
        "ko-KR": "/ko/foundation/typography",
        "x-default": "/en/foundation/typography",
      },
    },
  };
}

type WeightRow = { weight: string; desc: string };
type UsageNote = { label: string; text: string };

export default async function TypographyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.foundation-typography",
  });
  const weightRows = t.raw("weightUsage.rows") as WeightRow[];
  const usageItems = t.raw("usageNotes.items") as UsageNote[];

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.pageTitle}>{t("hero.title")}</h1>
        <p className={styles.pageDescription}>{t("hero.desc")}</p>
      </div>

      <hr className={styles.divider} />

      {/* ── Type Usage ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("typeUsage.title")}</h2>
        <p className={styles.sectionDescription}>
          {t("typeUsage.descLine1")}
          <br />
          {t("typeUsage.descLine2")}
        </p>
        <p className={styles.sectionDescription} style={{ marginTop: 12 }}>
          {t("typeUsage.noteBelow12")}
        </p>

        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeaderRow}>
              <th className={styles.thName}>{t("typeUsage.table.scale")}</th>
              <th className={styles.thTypeface}>{t("typeUsage.table.typeface")}</th>
              <th className={styles.thWeight}>{t("typeUsage.table.weight")}</th>
              <th className={styles.thSize}>{t("typeUsage.table.size")}</th>
              <th className={styles.thRem}>{t("typeUsage.table.rem")}</th>
              <th className={styles.thLineHeight}>{t("typeUsage.table.lineHeight")}</th>
              <th className={styles.thUnitless}>{t("typeUsage.table.unitless")}</th>
            </tr>
          </thead>
          <tbody>
            {TYPE_USAGE_ROWS.map((row) => (
              <TypeUsageRow key={row.name} row={row} />
            ))}
          </tbody>
        </table>
      </section>

      <hr className={styles.divider} />

      {/* ── Type Scale Logic ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("scaleLogic.title")}</h2>
        <p className={styles.sectionDescription}>
          {t("scaleLogic.descLine1")}
          <br />
          {t("scaleLogic.descLine2")}
        </p>
        <p className={styles.sectionDescription} style={{ marginTop: 12 }}>
          {t("scaleLogic.formula")}
          <br />
          {t("scaleLogic.formulaSub")}
        </p>

        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeaderRow}>
              <th style={{ width: "10%" }}>{t("scaleLogic.table.n")}</th>
              <th style={{ width: "40%" }}>{t("scaleLogic.table.calc")}</th>
              <th style={{ width: "20%" }}>{t("scaleLogic.table.increment")}</th>
              <th style={{ width: "30%", textAlign: "right" }}>{t("scaleLogic.table.result")}</th>
            </tr>
          </thead>
          <tbody>
            {SCALE_LOGIC_ROWS.map((row) => (
              <tr key={row.n} className={styles.tableRow}>
                <td className={styles.cellSize}>{row.n}</td>
                <td className={styles.cellTypeface}>{row.calc}</td>
                <td className={styles.cellSize}>{row.increment}</td>
                <td className={styles.cellSize} style={{ textAlign: "right" }}>
                  {row.result}px
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr className={styles.divider} />

      {/* ── Type Weight ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("typeWeight.title")}</h2>
        <p className={styles.sectionDescription}>{t("typeWeight.desc")}</p>

        <div className={styles.weightCards}>
          {WEIGHT_CARDS.map((item) => (
            <div key={item.label} className={styles.weightCard}>
              <div className={styles.weightCardNum}>{item.num}</div>
              <p className={styles.weightCardTitle} style={{ fontWeight: item.weight }}>
                {item.label}
              </p>
              <p className={styles.weightCardSpecimen} style={{ fontWeight: item.weight }}>
                {SPECIMEN_TEXT}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── Type Scale ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("typeScale.title")}</h2>
        <p className={styles.sectionDescription}>{t("typeScale.desc")}</p>

        <div className={styles.scaleGroups}>
          {SCALE_GROUPS.map((group) => (
            <div key={group.key} className={styles.scaleCard}>
              <div className={styles.scaleCardInner}>
                <div className={styles.scaleLeft}>
                  <div className={styles.scaleLeftContent}>
                    {group.rows.map((row) => (
                      <span
                        key={row.name}
                        className={styles.scalePreview}
                        style={{
                          fontSize: `${row.size}px`,
                          fontWeight: row.weightNum,
                          lineHeight: row.lineHeight,
                        }}
                      >
                        {row.name}
                      </span>
                    ))}
                  </div>
                  <div className={styles.scaleMeta}>
                    <span className={styles.scaleMetaText}>
                      {t(`scaleGroups.${group.key}.meta`)}
                      {"\n"}
                      {t(`scaleGroups.${group.key}.metaWeight`)}
                    </span>
                  </div>
                </div>

                <div className={styles.scaleRight}>
                  {CONTEXT_MOCKUPS[group.key] ?? (
                    <div className={styles.scaleContextPlaceholder}>
                      <span className={styles.scaleContextLabel}>
                        {t(`scaleGroups.${group.key}.contextLabel`)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── Weight Usage ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("weightUsage.title")}</h2>

        <div className={styles.weightUsageTable}>
          {weightRows.map((item) => (
            <div key={item.weight} className={styles.weightUsageRow}>
              <span className={styles.weightUsageLabel}>{item.weight}</span>
              <span className={styles.weightUsageDesc}>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── Usage Notes ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("usageNotes.title")}</h2>

        <div className={styles.notesList}>
          {usageItems.map((item) => (
            <div key={item.label} className={styles.noteItem}>
              <span className={styles.noteLabel}>{item.label}</span>
              <p className={styles.noteText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
