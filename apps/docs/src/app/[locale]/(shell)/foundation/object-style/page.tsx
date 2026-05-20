import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import styles from "./page.module.css";

const ROUNDING_DATA = [
  { size: 40, radius: 6 },
  { size: 36, radius: 4 },
  { size: 32, radius: 4 },
  { size: 28, radius: 3 },
  { size: 24, radius: 3 },
  { size: 20, radius: 3 },
  { size: 18, radius: 3 },
  { size: 16, radius: 2 },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.foundation-object-style.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/foundation/object-style`,
      languages: {
        "en-US": "/en/foundation/object-style",
        "ko-KR": "/ko/foundation/object-style",
        "x-default": "/en/foundation/object-style",
      },
    },
  };
}

export default async function ObjectStylePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.foundation-object-style",
  });

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.pageTitle}>{t("hero.title")}</h1>
        <p className={styles.pageDescription}>{t("hero.desc")}</p>
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <div className={styles.roundingHeader}>
          <h2 className={styles.sectionTitle}>{t("rounding.title")}</h2>
          <span className={styles.roundingNote}>{t("rounding.note")}</span>
        </div>

        <div className={styles.roundingDiagram}>
          {ROUNDING_DATA.map((item) => (
            <div key={item.size} className={styles.roundingItem}>
              <span className={styles.roundingSizeLabel}>w,h={item.size}px</span>
              <div className={styles.roundingShapeWrap}>
                <div
                  className={styles.roundingShape}
                  style={{
                    width: item.size,
                    height: item.size,
                    borderRadius: item.radius,
                  }}
                />
              </div>
              <span className={styles.roundingRadiusLabel}>r={item.radius}px</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
