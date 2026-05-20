import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";

type UsageItem = { key: string; title: string; desc: string };
type GuidelineRow = {
  key: string;
  dont: { title: string; desc: string };
  do: { title: string; desc: string };
};

const USAGE_IMAGES: Record<string, string> = {
  "icon-button": "/images/components/tooltip/Composition of Words (Icon Button).png",
  "short-sentence": "/images/components/tooltip/Short Sentence.png",
  "tool-explanation": "/images/components/tooltip/Explanation of Tool.png",
  "info-icon": "/images/components/tooltip/Information Icon.png",
  "no-tooltip": "/images/components/tooltip/Do Not Use Tooltip.png",
};

const GUIDELINE_IMAGES: Record<string, { dont: string; do: string }> = {
  policy: {
    dont: "/images/components/tooltip/Dont 01.png",
    do: "/images/components/tooltip/Do 01.png",
  },
  anchor: {
    dont: "/images/components/tooltip/Dont 02.png",
    do: "/images/components/tooltip/Do 02.png",
  },
  duplicate: {
    dont: "/images/components/tooltip/Dont 03.png",
    do: "/images/components/tooltip/Do 03.png",
  },
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
    namespace: "ds.components-tooltip.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/tooltip`,
      languages: {
        "en-US": "/en/components/tooltip",
        "ko-KR": "/ko/components/tooltip",
        "x-default": "/en/components/tooltip",
      },
    },
  };
}

function renderMarkdownBold(text: string) {
  // Replace **bold** with <strong>bold</strong>
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default async function TooltipPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-tooltip",
  });

  const usageItems = t.raw("componentsUsage.items") as UsageItem[];
  const guidelineRows = t.raw("guidelines.rows") as GuidelineRow[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription} style={{ whiteSpace: "pre-line" }}>
        {t("hero.desc")}
      </p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Anatomy.png" alt="Tooltip Anatomy" />
      </div>
      <p className={s.caption} style={{ whiteSpace: "pre-line" }}>
        {t("anatomy.caption")}
      </p>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("usage.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("usage.desc")}
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Usage.png" alt="Tooltip Usage" />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("spec.title")}</h3>

      <h4 className={s.typeHeading}>{t("spec.spacing.title")}</h4>
      <p className={s.typeSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("spec.spacing.desc")}
      </p>
      <div className={s.previewBox}>
        <img
          src="/images/components/tooltip/Spacing, Offset & Maximum Width.png"
          alt="Spacing, Offset & Maximum Width"
        />
      </div>

      <div style={{ marginBottom: 32 }} />

      <h4 className={s.typeHeading}>{t("spec.toolbar.title")}</h4>
      <p className={s.typeSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("spec.toolbar.desc")}
      </p>
      <div className={s.previewBox}>
        <img
          src="/images/components/tooltip/Toolbar Tooltip Spacing.png"
          alt="Toolbar Tooltip Spacing"
        />
      </div>

      <div style={{ marginBottom: 32 }} />

      <h4 className={s.typeHeading}>{t("spec.placement.title")}</h4>
      <p className={s.typeSubtext}>{t("spec.placement.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Placement System.png" alt="Placement System" />
      </div>

      <div style={{ marginBottom: 32 }} />

      <h4 className={s.typeHeading}>{t("spec.middleSpace.title")}</h4>
      <p className={s.typeSubtext}>{t("spec.middleSpace.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/tooltip/Middle Space Placement Priority.png"
          alt="Middle Space Placement Priority"
        />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("contents.title")}</h3>

      <h4 className={s.typeHeading}>{t("contents.priority.title")}</h4>
      <p className={s.typeSubtext} style={{ whiteSpace: "pre-line" }}>
        {renderMarkdownBold(t("contents.priority.desc"))}
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Contents Priority.png" alt="Contents Priority" />
      </div>

      <div style={{ marginBottom: 32 }} />

      <h4 className={s.typeHeading}>{t("contents.boundary.title")}</h4>
      <p className={s.typeSubtext}>{t("contents.boundary.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Boundary of Contents.png" alt="Boundary of Contents" />
      </div>

      <div style={{ marginBottom: 32 }} />

      <h4 className={s.typeHeading}>{t("contents.shortcut.title")}</h4>
      <p className={s.typeSubtext}>{t("contents.shortcut.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/tooltip/Tooltip Contained Shortcut.png"
          alt="Tooltip Contained Shortcut"
        />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("popupTips.title")}</h3>
      <p className={s.sectionSubtext}>{t("popupTips.desc")}</p>

      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Tooltip.png" alt="Tooltip" />
          </div>
          <h4 className={s.typeHeading}>{t("popupTips.tooltip.title")}</h4>
          <p className={s.typeSubtext} style={{ whiteSpace: "pre-line" }}>
            {t("popupTips.tooltip.desc")}
          </p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Popup Tip.png" alt="Popup Tip" />
          </div>
          <h4 className={s.typeHeading}>{t("popupTips.popupTip.title")}</h4>
          <p className={s.typeSubtext}>{t("popupTips.popupTip.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("interaction.title")}</h3>

      <h4 className={s.typeHeading}>{t("interaction.exposure.title")}</h4>
      <p className={s.typeSubtext}>{t("interaction.exposure.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Exposure Rules.png" alt="Exposure Rules" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("interaction.tooltipRules.title")}</h4>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow2col} ${s.propsHeader}`}>
            <td className={s.propsCell}></td>
            <td className={s.propsCell}>{t("interaction.tooltipRules.headerLabel")}</td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>
              {t("interaction.tooltipRules.exposureLabel")}
            </td>
            <td className={s.propsCell} style={{ whiteSpace: "pre-line" }}>
              {renderMarkdownBold(t("interaction.tooltipRules.exposureDesc"))}
            </td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>
              {t("interaction.tooltipRules.disappearLabel")}
            </td>
            <td className={s.propsCell}>{t("interaction.tooltipRules.disappearDesc")}</td>
          </tr>
        </tbody>
      </table>

      <h4 className={s.typeHeading}>{t("interaction.popupRules.title")}</h4>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow2col} ${s.propsHeader}`}>
            <td className={s.propsCell}></td>
            <td className={s.propsCell}>{t("interaction.popupRules.headerLabel")}</td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>
              {t("interaction.popupRules.exposureLabel")}
            </td>
            <td className={s.propsCell}>
              {renderMarkdownBold(t("interaction.popupRules.exposureDesc"))}
            </td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>
              {t("interaction.popupRules.disappearLabel")}
            </td>
            <td className={s.propsCell}>{t("interaction.popupRules.disappearDesc")}</td>
          </tr>
        </tbody>
      </table>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("componentsUsage.title")}</h3>

      {usageItems.map((item) => (
        <div key={item.key} className={s.usageRow}>
          <div className={s.previewBox} style={{ marginBottom: 0 }}>
            <img src={USAGE_IMAGES[item.key]} alt={item.title} />
          </div>
          <div className={s.ruleCardBottom}>
            <p className={s.ruleTitle}>{item.title}</p>
            <p className={s.ruleText} style={{ whiteSpace: "pre-line" }}>
              {item.desc}
            </p>
          </div>
        </div>
      ))}

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("guidelines.title")}</h3>

      {guidelineRows.map((row) => {
        const imgs = GUIDELINE_IMAGES[row.key];
        return (
          <div key={row.key} className={s.previewRow}>
            <div>
              <div className={s.previewBox}>
                <img src={imgs.dont} alt={row.dont.title} />
              </div>
              <h4 className={s.typeHeading}>{row.dont.title}</h4>
              <p className={s.typeSubtext}>{row.dont.desc}</p>
            </div>
            <div>
              <div className={s.previewBox}>
                <img src={imgs.do} alt={row.do.title} />
              </div>
              <h4 className={s.typeHeading}>{row.do.title}</h4>
              <p className={s.typeSubtext}>{row.do.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
