import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type UsageItem = { key: string; title: string; desc: string };
type StatusItem = { key: string; title: string; desc: string };

const USAGE_IMAGES: Record<string, { src: string; box: "bg" | "outline" }> = {
  default: { src: "/images/components/image-gallery/Default Image.png", box: "bg" },
  severity: { src: "/images/components/image-gallery/Image with Severity.png", box: "bg" },
  "no-data": { src: "/images/components/image-gallery/No Data.png", box: "outline" },
  empty: { src: "/images/components/image-gallery/Image Empty.png", box: "outline" },
};

const STATUS_IMAGES: Record<string, string> = {
  default: "/images/components/image-gallery/Default.png",
  focused: "/images/components/image-gallery/Focused.png",
  unfocused: "/images/components/image-gallery/Unfocused.png",
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
    namespace: "ds.components-image-gallery.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/image-gallery`,
      languages: {
        "en-US": "/en/components/image-gallery",
        "ko-KR": "/ko/components/image-gallery",
        "x-default": "/en/components/image-gallery",
      },
    },
  };
}

export default async function ImageGalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-image-gallery",
  });

  const anatomyLabels = t.raw("anatomy.labels") as string[];
  const usageItems = t.raw("usage.items") as UsageItem[];
  const statusItems = t.raw("status.items") as StatusItem[];

  // Group usage items into pairs for previewRow rendering
  const usagePairs: UsageItem[][] = [];
  for (let i = 0; i < usageItems.length; i += 2) {
    usagePairs.push(usageItems.slice(i, i + 2));
  }

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/image-gallery/Anatomy.png" alt="Image Gallery Anatomy" />
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
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("usage.desc")}
      </p>

      {usagePairs.map((pair, idx) => (
        <div key={idx} className={s.previewRow}>
          {pair.map((item) => {
            const img = USAGE_IMAGES[item.key];
            return (
              <div key={item.key}>
                <div className={img.box === "bg" ? s.previewBoxBg : styles.previewBoxOutline}>
                  <img src={img.src} alt={item.title} />
                </div>
                <h4 className={s.typeHeading}>{item.title}</h4>
                <p className={s.typeSubtext}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      ))}

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("status.title")}</h3>
      <p className={s.sectionSubtext}>{t("status.desc")}</p>

      <div className={s.grid3col}>
        {statusItems.map((item) => (
          <div key={item.key} className={s.gridCard}>
            <div className={s.previewBoxBg}>
              <img src={STATUS_IMAGES[item.key]} alt={item.title} />
            </div>
            <p className={s.gridCardTitle}>{item.title}</p>
            <p className={s.gridCardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>

      <h3 className={s.sectionHeading}>{t("spacing.title")}</h3>
      <p className={s.sectionSubtext}>{t("spacing.desc")}</p>
      <div className={s.previewBoxBg}>
        <img src="/images/components/image-gallery/Spacing.png" alt="Image Gallery Spacing" />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("contents.title")}</h3>

      <div className={s.usageRow}>
        <div className={s.previewBoxBg} style={{ marginBottom: 0 }}>
          <img src="/images/components/image-gallery/Severity Group.png" alt="Severity Group" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("contents.severityGroup.title")}</p>
          <p className={s.ruleText}>{t("contents.severityGroup.desc")}</p>
        </div>
      </div>

      <div className={s.usageRow}>
        <div className={s.previewBoxBg} style={{ marginBottom: 0 }}>
          <img
            src="/images/components/image-gallery/Text Label.png"
            alt="Text Label"
            style={{ maxWidth: "50%" }}
          />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("contents.textLabel.title")}</p>
          <p className={s.ruleText}>{t("contents.textLabel.desc")}</p>
        </div>
      </div>
    </div>
  );
}
