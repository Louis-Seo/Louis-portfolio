import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type CriteriaRow = { key: string; label: string; desc: string };
type ComparisonRow = {
  key: string;
  label: string;
  labelSub?: string;
  alert: string;
  alertSub?: string;
  toast: string;
  toastSub?: string;
};
type PropsHeaders = { property: string; values: string; default: string };
type PropsRow = { prop: string; values: string; default: string };
type PlacementItem = { key: string; title: string; desc: string };

const ALERT_PLACEMENT_IMAGES: Record<string, string> = {
  contained: "/images/components/feedback-message/Alert Contained Type.png",
  floating: "/images/components/feedback-message/Alert Floating Type.png",
  inline: "/images/components/feedback-message/Alert Inline Text Type.png",
};

const TOAST_PLACEMENT_IMAGES: Record<string, string> = {
  "bottom-center": "/images/components/feedback-message/Toast Bottom Center.png",
  top: "/images/components/feedback-message/Toast Top.png",
  nearby: "/images/components/feedback-message/Toast Nearby Component.png",
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
    namespace: "ds.components-feedback-message.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/feedback-message`,
      languages: {
        "en-US": "/en/components/feedback-message",
        "ko-KR": "/ko/components/feedback-message",
        "x-default": "/en/components/feedback-message",
      },
    },
  };
}

function PropsTable({ headers, rows }: { headers: PropsHeaders; rows: PropsRow[] }) {
  return (
    <table className={s.propsTable}>
      <tbody>
        <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
          <td className={s.propsCell}>{headers.property}</td>
          <td className={s.propsCell}>{headers.values}</td>
          <td className={s.propsCell}>{headers.default}</td>
        </tr>
        {rows.map((row) => (
          <tr key={row.prop} className={s.propsRow3col}>
            <td className={s.propsCell}>{row.prop}</td>
            <td className={s.propsCell}>{row.values}</td>
            <td className={s.propsCell}>{row.default}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default async function FeedbackMessagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-feedback-message",
  });

  const criteriaRows = t.raw("criteria.rows") as CriteriaRow[];
  const comparisonRows = t.raw("table.rows") as ComparisonRow[];
  const alertPlacement = t.raw("alert.placement.items") as PlacementItem[];
  const toastPlacement = t.raw("toast.placement.items") as PlacementItem[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/feedback-message/Components.png"
          alt="Feedback Message Components"
        />
      </div>
      <p className={s.caption} style={{ whiteSpace: "pre-line" }}>
        {t("components.caption")}
      </p>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("criteria.title")}</h3>
      <p className={s.sectionSubtext}>{t("criteria.desc")}</p>

      <table className={s.propsTable}>
        <tbody>
          {criteriaRows.map((row) => (
            <tr key={row.key} className={styles.propsRow2col}>
              <td className={s.propsCell} style={{ fontWeight: 600 }}>
                {row.label}
              </td>
              <td className={s.propsCell} style={{ whiteSpace: "pre-line" }}>
                {row.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className={s.sectionHeading}>{t("table.title")}</h3>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${styles.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}></td>
            <td className={s.propsCell}>{t("table.headerAlert")}</td>
            <td className={s.propsCell}>{t("table.headerToast")}</td>
          </tr>
          {comparisonRows.map((row) => (
            <tr key={row.key} className={styles.propsRow3col}>
              <td className={s.propsCell} style={{ fontWeight: 600 }}>
                <span style={{ whiteSpace: "pre-line" }}>{row.label}</span>
                {row.labelSub && <div className={s.propsCellSub}>{row.labelSub}</div>}
              </td>
              <td className={s.propsCell}>
                {row.alert}
                {row.alertSub && <div className={s.propsCellSub}>{row.alertSub}</div>}
              </td>
              <td className={s.propsCell}>
                {row.toast}
                {row.toastSub && <div className={s.propsCellSub}>{row.toastSub}</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className={s.divider} />

      {/* ── Alert ── */}
      <h3 className={s.sectionHeading}>{t("alert.title")}</h3>
      <p className={s.sectionSubtext}>{t("alert.desc")}</p>

      <h4 className={s.typeHeading}>{t("alert.anatomy.title")}</h4>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Alert Anatomy.png" alt="Alert Anatomy" />
      </div>
      <p className={s.caption} style={{ whiteSpace: "pre-line" }}>
        {t("alert.anatomy.caption")}
      </p>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("alert.component.title")}</h4>
      <p className={s.typeSubtext}>{t("alert.component.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Alert Component.png" alt="Alert Component" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("alert.messageType.title")}</h4>
      <p className={s.typeSubtext}>{t("alert.messageType.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/feedback-message/Alert Message Type.png"
          alt="Alert Message Type"
        />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("alert.props.title")}</h4>
      <PropsTable
        headers={t.raw("alert.props.headers") as PropsHeaders}
        rows={t.raw("alert.props.rows") as PropsRow[]}
      />

      <h4 className={s.typeHeading}>{t("alert.placement.title")}</h4>
      <p className={s.typeSubtext}>{t("alert.placement.desc")}</p>

      {alertPlacement.map((item) => (
        <div key={item.key} className={s.usageRow}>
          <div className={s.previewBox} style={{ marginBottom: 0 }}>
            <img src={ALERT_PLACEMENT_IMAGES[item.key]} alt={item.title} />
          </div>
          <div className={s.ruleCardBottom}>
            <p className={s.ruleTitle}>{item.title}</p>
            <p className={s.ruleText} style={{ whiteSpace: "pre-line" }}>
              {item.desc}
            </p>
          </div>
        </div>
      ))}

      <h4 className={s.typeHeading}>{t("alert.spacing.title")}</h4>
      <p className={s.typeSubtext}>{t("alert.spacing.desc")}</p>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img
            src="/images/components/feedback-message/Alert Padding Rule.png"
            alt="Alert Padding Rule"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("alert.spacing.ruleTitle")}</p>
          <p className={s.ruleText}>{t("alert.spacing.ruleText")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Toast ── */}
      <h3 className={s.sectionHeading}>{t("toast.title")}</h3>
      <p className={s.sectionSubtext}>{t("toast.desc")}</p>

      <h4 className={s.typeHeading}>{t("toast.anatomy.title")}</h4>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Toast Anatomy.png" alt="Toast Anatomy" />
      </div>
      <p className={s.caption} style={{ whiteSpace: "pre-line" }}>
        {t("toast.anatomy.caption")}
      </p>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("toast.component.title")}</h4>
      <p className={s.typeSubtext}>{t("toast.component.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Toast Component.png" alt="Toast Component" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("toast.messageType.title")}</h4>
      <p className={s.typeSubtext}>{t("toast.messageType.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/feedback-message/Toast Message Type.png"
          alt="Toast Message Type"
        />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("toast.props.title")}</h4>
      <PropsTable
        headers={t.raw("toast.props.headers") as PropsHeaders}
        rows={t.raw("toast.props.rows") as PropsRow[]}
      />

      <h4 className={s.typeHeading}>{t("toast.placement.title")}</h4>
      <p className={s.typeSubtext}>{t("toast.placement.desc")}</p>

      {toastPlacement.map((item) => (
        <div key={item.key} className={s.usageRow}>
          <div className={s.previewBox} style={{ marginBottom: 0 }}>
            <img src={TOAST_PLACEMENT_IMAGES[item.key]} alt={item.title} />
          </div>
          <div className={s.ruleCardBottom}>
            <p className={s.ruleTitle}>{item.title}</p>
            <p className={s.ruleText} style={{ whiteSpace: "pre-line" }}>
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
