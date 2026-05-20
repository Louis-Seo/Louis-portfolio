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
    namespace: "ds.components-chip.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/chip`,
      languages: {
        "en-US": "/en/components/chip",
        "ko-KR": "/ko/components/chip",
        "x-default": "/en/components/chip",
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

function ChipSection({
  t,
  kind,
}: {
  t: Awaited<ReturnType<typeof getTranslations>>;
  kind: "filter" | "severity";
}) {
  const titleImg =
    kind === "filter"
      ? ["/images/components/chip/Filter Chip 01.png", "/images/components/chip/Filter Chip 02.png"]
      : [
          "/images/components/chip/Severity Chip 01.png",
          "/images/components/chip/Severity Chip 02.png",
        ];
  const variantImgs =
    kind === "filter"
      ? [
          "/images/components/chip/Filter Chip State.png",
          "/images/components/chip/Filter Chip Size.png",
        ]
      : [
          "/images/components/chip/Severity Chip State.png",
          "/images/components/chip/Severity Chip Size.png",
        ];
  const specImgs =
    kind === "filter"
      ? [
          "/images/components/chip/Filter Chip Color.png",
          "/images/components/chip/Text Byte.png",
          "/images/components/chip/Filter Chip Placement.png",
        ]
      : [
          "/images/components/chip/Severity Chip Color.png",
          "/images/components/chip/Severity Chip Text Byte.png",
          "/images/components/chip/Severity Chip Placement.png",
        ];

  return (
    <>
      <h2 className={s.sectionHeading}>{t(`${kind}.title`)}</h2>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t(`${kind}.desc`)}
      </p>
      <div className={styles.variantsRow}>
        <div className={s.previewBox}>
          <img src={titleImg[0]} alt={t(`${kind}.title`)} />
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src={titleImg[1]} alt={`${t(`${kind}.title`)} Anatomy`} />
          </div>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>Variants</h3>
      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src={variantImgs[0]} alt={`${t(`${kind}.title`)} State`} />
          </div>
          <h4 className={styles.variantColHeading}>{t(`${kind}.state.title`)}</h4>
          <p className={styles.variantColDesc}>{t(`${kind}.state.desc`)}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src={variantImgs[1]} alt={`${t(`${kind}.title`)} Size`} />
          </div>
          <h4 className={styles.variantColHeading}>{t(`${kind}.size.title`)}</h4>
          <p className={styles.variantColDesc} style={{ whiteSpace: "pre-line" }}>
            {t(`${kind}.size.desc`)}
          </p>
        </div>
      </div>

      <h3 className={s.sectionHeading}>{t(`${kind}.props.title`)}</h3>
      <PropsTable
        headers={t.raw(`${kind}.props.headers`) as PropsHeaders}
        rows={t.raw(`${kind}.props.rows`) as PropsRow[]}
      />

      <h3 className={s.sectionHeading}>{t(`${kind}.spec.title`)}</h3>
      <div className={styles.groupRow}>
        {(["color", "textByte", "placement"] as const).map((subKey, idx) => (
          <div key={subKey} className={styles.groupCol}>
            <div className={s.previewBox}>
              <img src={specImgs[idx]} alt={t(`${kind}.spec.${subKey}.title`)} />
            </div>
            <h4 className={styles.groupColHeading}>{t(`${kind}.spec.${subKey}.title`)}</h4>
            <p className={styles.groupColDesc}>{t(`${kind}.spec.${subKey}.desc`)}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default async function ChipPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-chip",
  });

  const anatomyItems = t.raw("anatomy.items") as string[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/chip/Anatomy.png" alt="Chip Anatomy" />
      </div>
      <ul className={styles.anatomyList}>
        {anatomyItems.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/chip/Components.png" alt="Chip Components" />
      </div>

      <hr className={s.divider} />

      <ChipSection t={t} kind="filter" />

      <hr className={s.divider} />

      <ChipSection t={t} kind="severity" />
    </div>
  );
}
