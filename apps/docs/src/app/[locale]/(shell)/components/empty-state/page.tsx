import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type TypeItem = { key: string; title: string; desc: string };

const TYPE_IMAGES: Record<string, string> = {
  ies: "/images/components/empty-state/Illust Type (IES).png",
  ides: "/images/components/empty-state/Illust with Description Type (IDES).png",
  esc: "/images/components/empty-state/Illust with CTA Type (ESC).png",
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
    namespace: "ds.components-empty-state.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/empty-state`,
      languages: {
        "en-US": "/en/components/empty-state",
        "ko-KR": "/ko/components/empty-state",
        "x-default": "/en/components/empty-state",
      },
    },
  };
}

export default async function EmptyStatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-empty-state",
  });

  const anatomyLabels = t.raw("anatomy.labels") as string[];
  const typeItems = t.raw("types.items") as TypeItem[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/empty-state/Anatomy.png" alt="Empty State Anatomy" />
        <p className={styles.previewBoxCompactLabel}>
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
      <p className={s.sectionSubtext}>{t("usage.desc")}</p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBox}>
            <img src="/images/components/empty-state/Header.png" alt="Header" />
          </div>
          <h4 className={s.typeHeading}>{t("usage.header.title")}</h4>
          <p className={s.typeSubtext}>{t("usage.header.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBox}>
            <img src="/images/components/empty-state/Description.png" alt="Description" />
          </div>
          <h4 className={s.typeHeading}>{t("usage.description.title")}</h4>
          <p className={s.typeSubtext}>{t("usage.description.desc")}</p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBox}>
            <img src="/images/components/empty-state/Illustration.png" alt="Illustration" />
          </div>
          <h4 className={s.typeHeading}>{t("usage.illustration.title")}</h4>
          <p className={s.typeSubtext}>{t("usage.illustration.desc")}</p>
        </div>
        <div>
          <div className={styles.previewBox}>
            <img src="/images/components/empty-state/CTA Button (optional).png" alt="CTA Button" />
          </div>
          <h4 className={s.typeHeading}>{t("usage.cta.title")}</h4>
          <p className={s.typeSubtext}>{t("usage.cta.desc")}</p>
        </div>
      </div>
      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("types.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("types.desc")}
      </p>

      <div className={s.grid3col}>
        {typeItems.map((item) => (
          <div key={item.key} className={s.gridCard}>
            <div className={styles.gridCardPreview}>
              <img src={TYPE_IMAGES[item.key]} alt={item.title} />
            </div>
            <p className={s.gridCardTitle}>{item.title}</p>
            <p className={s.gridCardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("illustrationTypes.title")}</h3>
      <p className={s.sectionSubtext}>{t("illustrationTypes.desc")}</p>

      <div className={styles.previewBoxSmall}>
        <img
          src="/images/components/empty-state/Main Illustration Types.png"
          alt="Main Illustration Types"
        />
      </div>
      <p className={styles.imageLabel}>{t("illustrationTypes.mainLabel")}</p>

      <div className={styles.previewBoxSmall}>
        <img
          src="/images/components/empty-state/Extra Illustration Type (Optional).png"
          alt="Extra Illustration Type (Optional)"
          style={{ maxWidth: "80%" }}
        />
      </div>
      <p className={styles.imageLabel}>{t("illustrationTypes.extraLabel")}</p>
    </div>
  );
}
