import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.foundation-icon.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/foundation/icon`,
      languages: {
        "en-US": "/en/foundation/icon",
        "ko-KR": "/ko/foundation/icon",
        "x-default": "/en/foundation/icon",
      },
    },
  };
}

const SECTIONS = [
  { key: "iconSize", img: "/images/Icon/Icon%20Size.svg" },
  { key: "layout", img: "/images/Icon/Layout%20Example.svg" },
  { key: "keyline", img: "/images/Icon/Keyline%20Shapes%20Example.svg" },
  { key: "stroke", img: "/images/Icon/Stroke%20Example.svg" },
  { key: "radius", img: "/images/Icon/Radius%20Example.svg" },
  { key: "styles", img: "/images/Icon/Styles%20Example.svg" },
  { key: "colors", img: "/images/Icon/Colors%20Example.svg" },
] as const;

export default async function IconPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.foundation-icon",
  });

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.pageTitle}>{t("hero.title")}</h1>
        <p className={styles.pageDescription}>{t("hero.desc")}</p>
      </div>

      <hr className={styles.divider} />

      {SECTIONS.map(({ key, img }, idx) => (
        <div key={key}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t(`${key}.title`)}</h2>
            <p className={styles.sectionDescription}>{t(`${key}.desc`)}</p>
            <img src={img} alt={t(`${key}.imageAlt`)} className={styles.sectionImage} />
          </section>
          {idx < SECTIONS.length - 1 && <hr className={styles.divider} />}
        </div>
      ))}
    </div>
  );
}
