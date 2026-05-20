import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type PropsRow = { prop: string; values: string };
type PropsHeaders = { property: string; values: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-slider.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/slider`,
      languages: {
        "en-US": "/en/components/slider",
        "ko-KR": "/ko/components/slider",
        "x-default": "/en/components/slider",
      },
    },
  };
}

function PropsTable2Col({ headers, rows }: { headers: PropsHeaders; rows: PropsRow[] }) {
  return (
    <div className={s.propsTable}>
      <div className={`${s.propsRow2col} ${s.propsHeader}`}>
        <div className={s.propsCell}>{headers.property}</div>
        <div className={s.propsCell}>{headers.values}</div>
      </div>
      {rows.map((row) => (
        <div key={row.prop} className={s.propsRow2col}>
          <div className={s.propsCell}>{row.prop}</div>
          <div className={s.propsCell}>{row.values}</div>
        </div>
      ))}
    </div>
  );
}

export default async function SliderPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-slider",
  });

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/slider/Anatomy.png" alt="Slider Anatomy" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("usage.title")}</h3>
      <p className={s.sectionSubtext}>{t("usage.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/slider/Usage.png" alt="Slider Usage" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>

      <h4 className={s.typeHeading}>{t("components.single.title")}</h4>
      <p className={styles.typeDescription}>{t("components.single.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/slider/Single Value Slider.png" alt="Single Value Slider" />
      </div>

      <h4 className={s.typeHeading}>{t("components.range.title")}</h4>
      <p className={styles.typeDescription}>{t("components.range.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/slider/Range Slider.png" alt="Range Slider" />
      </div>

      <h4 className={s.typeHeading}>{t("components.popup.title")}</h4>
      <p className={styles.typeDescription} style={{ whiteSpace: "pre-line" }}>
        {t("components.popup.desc")}
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/slider/Pop-up Slider.png" alt="Pop-up Slider" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("state.title")}</h3>
      <p className={s.sectionSubtext}>{t("state.desc")}</p>

      <h4 className={s.typeHeading}>{t("state.handleProps.title")}</h4>
      <PropsTable2Col
        headers={t.raw("state.handleProps.headers") as PropsHeaders}
        rows={t.raw("state.handleProps.rows") as PropsRow[]}
      />

      <h4 className={s.typeHeading}>{t("state.sliderProps.title")}</h4>
      <PropsTable2Col
        headers={t.raw("state.sliderProps.headers") as PropsHeaders}
        rows={t.raw("state.sliderProps.rows") as PropsRow[]}
      />

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("userCase.title")}</h3>

      <div className={s.previewBox}>
        <img src="/images/components/slider/State.png" alt="User Case State" />
      </div>
      <h4 className={s.typeHeading}>{t("userCase.state.title")}</h4>
      <p className={styles.typeDescription}>{t("userCase.state.desc")}</p>

      <div className={s.sectionGap} />

      <div className={s.previewBox}>
        <img src="/images/components/slider/Handle.png" alt="User Case Handle" />
      </div>
      <h4 className={s.typeHeading}>{t("userCase.handle.title")}</h4>
      <p className={styles.typeDescription}>{t("userCase.handle.desc")}</p>
    </div>
  );
}
