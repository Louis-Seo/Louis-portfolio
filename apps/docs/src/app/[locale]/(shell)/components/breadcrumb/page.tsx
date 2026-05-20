import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
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
    namespace: "ds.components-breadcrumb.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/breadcrumb`,
      languages: {
        "en-US": "/en/components/breadcrumb",
        "ko-KR": "/ko/components/breadcrumb",
        "x-default": "/en/components/breadcrumb",
      },
    },
  };
}

export default async function BreadcrumbPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-breadcrumb",
  });

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/breadcrumb/Anatomy.png" alt="Breadcrumb Anatomy" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("spec.title")}</h3>
      <p className={s.sectionSubtext}>{t("spec.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/breadcrumb/Spec.png" alt="Breadcrumb Spec" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("itemStatus.title")}</h3>
      <p className={s.sectionSubtext}>{t("itemStatus.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/breadcrumb/Item Status.png" alt="Breadcrumb Item Status" />
      </div>

      <hr className={s.divider} />

      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/breadcrumb/State.png" alt="Breadcrumb State" />
          </div>
          <h4 className={styles.variantColHeading}>{t("state.title")}</h4>
          <p className={styles.variantColDesc}>{t("state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/breadcrumb/Page Iink.png" alt="Breadcrumb Page Link" />
          </div>
          <h4 className={styles.variantColHeading}>{t("pageLink.title")}</h4>
          <p className={styles.variantColDesc}>{t("pageLink.desc")}</p>
        </div>
      </div>
    </div>
  );
}
