import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

/* ═══════════════════════════════════════════
   Color Data
   ═══════════════════════════════════════════ */

type Shade = { name: string; hex: string };

const GREEN: Shade[] = [
  { name: "900", hex: "#114F53" },
  { name: "800", hex: "#0F6E60" },
  { name: "700", hex: "#008F60" },
  { name: "600", hex: "#05AA73" },
  { name: "500", hex: "#0FBA7F" },
  { name: "400", hex: "#54C694" },
  { name: "300", hex: "#8BD6B2" },
  { name: "200", hex: "#C2EAD7" },
  { name: "100", hex: "#D2F2E6" },
  { name: "50", hex: "#E6F7EF" },
];

const GRAY: Shade[] = [
  { name: "900", hex: "#212121" },
  { name: "800", hex: "#424242" },
  { name: "700", hex: "#616161" },
  { name: "600", hex: "#757575" },
  { name: "500", hex: "#9E9E9E" },
  { name: "400", hex: "#BDBDBD" },
  { name: "300", hex: "#E0E0E0" },
  { name: "200", hex: "#EEEEEE" },
  { name: "100", hex: "#F5F5F5" },
  { name: "50", hex: "#FAFAFA" },
];

type TableRow = { name: string; usage: string; hex: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.foundation-color.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/foundation/color`,
      languages: {
        "en-US": "/en/foundation/color",
        "ko-KR": "/ko/foundation/color",
        "x-default": "/en/foundation/color",
      },
    },
  };
}

function ColorTable({
  headers,
  rows,
}: {
  headers: { name: string; usage: string; hex: string };
  rows: TableRow[];
}) {
  return (
    <table className={s.propsTable}>
      <tbody>
        <tr className={`${styles.tableRow} ${styles.tableHeader}`}>
          <td className={s.propsCell}>{headers.name}</td>
          <td className={s.propsCell}>{headers.usage}</td>
          <td className={s.propsCell}>{headers.hex}</td>
        </tr>
        {rows.map((row) => (
          <tr key={row.name} className={styles.tableRow}>
            <td className={s.propsCell}>{row.name}</td>
            <td className={s.propsCell}>{row.usage}</td>
            <td className={s.propsCell}>{row.hex}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default async function ColorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.foundation-color",
  });

  const guidelineItems = t.raw("guidelines.items") as string[];
  const textHeaders = t.raw("textColor.tableHeaders") as {
    name: string;
    usage: string;
    hex: string;
  };
  const textRows = t.raw("textColor.rows") as TableRow[];
  const bgHeaders = t.raw("backgroundDepth.tableHeaders") as typeof textHeaders;
  const bgRows = t.raw("backgroundDepth.rows") as TableRow[];
  const selHeaders = t.raw("selectedColor.tableHeaders") as typeof textHeaders;
  const selRows = t.raw("selectedColor.rows") as TableRow[];
  const borderHeaders = t.raw("borderColor.tableHeaders") as typeof textHeaders;
  const borderRows = t.raw("borderColor.rows") as TableRow[];

  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>{t("hero.title")}</h1>
      <p className={s.pageDescription}>
        {t("hero.descLine1")}
        <br />
        {t("hero.descLine2")}
      </p>

      <hr className={s.divider} />

      {/* ── Color Usage Guidelines ── */}
      <h2 className={s.sectionHeading}>{t("guidelines.title")}</h2>
      <ul className={styles.guidelineList}>
        {guidelineItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className={s.sectionGap} />

      {/* ── Brand Colors ── */}
      <h2 className={s.sectionHeading}>{t("brandColors.title")}</h2>
      <p className={s.sectionSubtext}>
        {t("brandColors.descLine1")}
        <br />
        {t("brandColors.descLine2")}
        <br />
        <br />
        {t("brandColors.noteLine1")}
        <br />
        {t("brandColors.noteLine2")}
      </p>

      <div className={styles.previewBox}>
        <img src="/images/color/Brand Colors.png" alt={t("brandColors.imageAlt")} />
      </div>

      {/* ── Main Green Colour Variation ── */}
      <h2 className={s.sectionHeading}>{t("greenVariation.title")}</h2>
      <p className={s.sectionSubtext}>{t("greenVariation.desc")}</p>

      <div className={styles.paletteRow}>
        {GREEN.map((shade) => (
          <div key={shade.name} className={styles.paletteItem}>
            <div className={styles.paletteSwatch} style={{ background: shade.hex }} />
            <span className={styles.paletteName}>Green {shade.name}</span>
            <span className={styles.paletteHex}>{shade.hex}</span>
          </div>
        ))}
      </div>

      {/* ── Text Colour ── */}
      <h2 className={s.sectionHeading}>{t("textColor.title")}</h2>
      <p className={s.sectionSubtext}>{t("textColor.desc")}</p>

      <div className={styles.paletteRow}>
        {GRAY.map((shade) => (
          <div key={shade.name} className={styles.paletteItem}>
            <div className={styles.paletteSwatch} style={{ background: shade.hex }} />
            <span className={styles.paletteName}>Gray {shade.name}</span>
            <span className={styles.paletteHex}>{shade.hex}</span>
          </div>
        ))}
      </div>

      <div className={styles.previewBox}>
        <img src="/images/color/Text Colour.png" alt={t("textColor.imageAlt")} />
      </div>

      <ColorTable headers={textHeaders} rows={textRows} />

      {/* ── Background Depth ── */}
      <h2 className={s.sectionHeading}>{t("backgroundDepth.title")}</h2>
      <p className={s.sectionSubtext}>{t("backgroundDepth.desc")}</p>

      <div className={styles.previewBox}>
        <img src="/images/color/Background Depth.png" alt={t("backgroundDepth.imageAlt")} />
      </div>

      <ColorTable headers={bgHeaders} rows={bgRows} />

      {/* ── Selected Color ── */}
      <h2 className={s.sectionHeading}>{t("selectedColor.title")}</h2>
      <p className={s.sectionSubtext}>{t("selectedColor.desc")}</p>

      <div className={styles.previewBox}>
        <img src="/images/color/selected-color-example.svg" alt={t("selectedColor.imageAlt")} />
      </div>

      <ColorTable headers={selHeaders} rows={selRows} />

      {/* ── Border Colour ── */}
      <h2 className={s.sectionHeading}>{t("borderColor.title")}</h2>
      <p className={s.sectionSubtext}>{t("borderColor.desc")}</p>

      <div className={styles.previewBox}>
        <img src="/images/color/Border Colour.png" alt={t("borderColor.imageAlt")} />
      </div>

      <ColorTable headers={borderHeaders} rows={borderRows} />

      {/* ── Secondary & Extra Colours ── */}
      <h2 className={s.sectionHeading}>{t("secondaryExtra.title")}</h2>
      <p className={s.sectionSubtext}>{t("secondaryExtra.desc")}</p>

      <div className={styles.previewBox}>
        <img src="/images/color/Secondary & Extra Colours.png" alt={t("secondaryExtra.imageAlt")} />
      </div>
    </div>
  );
}
