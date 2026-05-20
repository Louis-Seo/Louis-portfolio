import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type StateRow = { type: string; state: string };
type StateHeaders = { type: string; state: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-toolbar.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/toolbar`,
      languages: {
        "en-US": "/en/components/toolbar",
        "ko-KR": "/ko/components/toolbar",
        "x-default": "/en/components/toolbar",
      },
    },
  };
}

export default async function ToolbarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-toolbar",
  });

  const typeValues = t.raw("types.values") as string[];
  const stateHeaders = t.raw("stateTable.headers") as StateHeaders;
  const stateRows = t.raw("stateTable.rows") as StateRow[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Anatomy.png" alt="Toolbar Anatomy" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("usage.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("usage.desc")}
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Usage.png" alt="Toolbar Usage" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("positioning.title")}</h3>
      <p className={s.sectionSubtext}>{t("positioning.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Positioning.png" alt="Toolbar Positioning" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>

      <h4 className={s.typeHeading}>{t("components.side.title")}</h4>
      <p className={styles.typeDescription}>{t("components.side.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Side Toolbar.png" alt="Side Toolbar" />
      </div>

      <h4 className={s.typeHeading}>{t("components.bottom.title")}</h4>
      <p className={styles.typeDescription}>{t("components.bottom.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Bottom Toolbar.png" alt="Bottom Toolbar" />
      </div>

      <h4 className={s.typeHeading}>{t("components.single.title")}</h4>
      <p className={styles.typeDescription}>{t("components.single.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Single Toolbar Button.png"
          alt="Single Toolbar Button"
        />
      </div>

      <h4 className={s.typeHeading}>{t("components.extra.title")}</h4>
      <p className={styles.typeDescription}>{t("components.extra.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Extra Case.png" alt="Extra Case" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("variants.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Varients 01.png" alt="Toolbar Variants - Side" />
      </div>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Varients 02.png" alt="Toolbar Variants - Bottom" />
      </div>

      <h4 className={s.typeHeading}>{t("variants.state.title")}</h4>
      <p className={styles.typeDescription}>{t("variants.state.desc")}</p>

      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/toolbar/Hover.png" alt="Hover" />
          </div>
          <h4 className={styles.variantColHeading}>{t("variants.hover.title")}</h4>
          <p className={styles.variantColDesc}>{t("variants.hover.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/toolbar/Selected & Clicked.png" alt="Selected & Clicked" />
          </div>
          <h4 className={styles.variantColHeading}>{t("variants.selected.title")}</h4>
          <p className={styles.variantColDesc}>{t("variants.selected.desc")}</p>
        </div>
      </div>

      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Clicked & Change.png" alt="Clicked & Change" />
      </div>
      <h4 className={styles.variantColHeading}>{t("variants.clicked.title")}</h4>
      <p className={styles.variantColDesc} style={{ marginBottom: 48 }}>
        {t("variants.clicked.desc")}
      </p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("types.title")}</h3>
      <div className={s.propsTable}>
        <div className={`${s.propsRow1col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Type</div>
        </div>
        {typeValues.map((v) => (
          <div key={v} className={s.propsRow1col}>
            <div className={s.propsCell}>{v}</div>
          </div>
        ))}
      </div>

      <h3 className={s.sectionHeading}>{t("stateTable.title")}</h3>
      <div className={s.propsTable}>
        <div className={`${s.propsRow2col} ${s.propsHeader}`}>
          <div className={s.propsCell}>{stateHeaders.type}</div>
          <div className={s.propsCell}>{stateHeaders.state}</div>
        </div>
        {stateRows.map((row) => (
          <div key={row.type} className={s.propsRow2col}>
            <div className={s.propsCell}>{row.type}</div>
            <div className={s.propsCell}>{row.state}</div>
          </div>
        ))}
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("toolGuide.title")}</h3>

      <h4 className={s.typeHeading}>{t("toolGuide.tooltip.title")}</h4>
      <p className={styles.typeDescription} style={{ whiteSpace: "pre-line" }}>
        {t("toolGuide.tooltip.desc")}
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Tooltip.png" alt="Tooltip" />
      </div>

      <h4 className={s.typeHeading}>{t("toolGuide.cursor.title")}</h4>
      <p className={styles.typeDescription}>{t("toolGuide.cursor.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/toolbar/Cursor.png" alt="Cursor" />
      </div>
    </div>
  );
}
