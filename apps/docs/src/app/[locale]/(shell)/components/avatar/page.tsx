import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type UsageHeaders = { component: string; type: string; usage: string; used: string };
type UsageRow = { type: string; usage: string; used: string };
type SpecHeaders = { property: string; values: string; default: string };
type SpecRow = { prop: string; values: string; default: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-avatar.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/avatar`,
      languages: {
        "en-US": "/en/components/avatar",
        "ko-KR": "/ko/components/avatar",
        "x-default": "/en/components/avatar",
      },
    },
  };
}

export default async function AvatarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-avatar",
  });

  const anatomyLabels = t.raw("anatomy.labels") as string[];
  const usageHeaders = t.raw("usage.table.headers") as UsageHeaders;
  const usageRows = t.raw("usage.table.rows") as UsageRow[];
  const specHeaders = t.raw("spec.headers") as SpecHeaders;
  const specRows = t.raw("spec.rows") as SpecRow[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/avatar/Anatomy.png" alt="Avatar Anatomy" />
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
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${styles.propsRow4col} ${s.propsHeader}`}>
            <td className={s.propsCell}>{usageHeaders.component}</td>
            <td className={s.propsCell}>{usageHeaders.type}</td>
            <td className={s.propsCell}>{usageHeaders.usage}</td>
            <td className={s.propsCell}>{usageHeaders.used}</td>
          </tr>
          {usageRows.map((row) => (
            <tr key={row.type} className={styles.propsRow4col}>
              <td className={s.propsCell}>
                {row.type === "Square" ? (
                  <div className={styles.avatarSquare}>D</div>
                ) : (
                  <div className={styles.avatarCircle}>A</div>
                )}
              </td>
              <td className={s.propsCell}>{row.type}</td>
              <td className={s.propsCell}>{row.usage}</td>
              <td className={s.propsCell}>{row.used}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className={s.sectionHeading}>{t("spec.title")}</h3>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>{specHeaders.property}</td>
            <td className={s.propsCell}>{specHeaders.values}</td>
            <td className={s.propsCell}>{specHeaders.default}</td>
          </tr>
          {specRows.map((row) => (
            <tr key={row.prop} className={s.propsRow3col}>
              <td className={s.propsCell}>{row.prop}</td>
              <td className={s.propsCell}>{row.values}</td>
              <td className={s.propsCell}>{row.default}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("size.title")}</h3>
      <p className={s.sectionSubtext}>{t("size.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/avatar/Size.png" alt="Avatar Size" />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("color.title")}</h3>
      <p className={s.sectionSubtext}>{t("color.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/avatar/Color.png" alt="Avatar Color" />
      </div>
    </div>
  );
}
