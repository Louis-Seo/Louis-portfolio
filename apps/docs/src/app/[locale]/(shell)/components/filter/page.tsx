import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type DataEntryItem = { key: string; title: string; desc: string };
type PropsHeaders = { property: string; values: string; default: string };
type PropsRow = { prop: string; values: string; default: string };

const DATA_ENTRY_IMAGES: Record<string, string> = {
  dropdown: "/images/components/filter/Dropdown.png",
  input: "/images/components/filter/Input.png",
  "filter-chip": "/images/components/filter/Filter Chip.png",
  "check-box": "/images/components/filter/Check Box.png",
  toggle: "/images/components/filter/Toggle.png",
  slider: "/images/components/filter/Slider.png",
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
    namespace: "ds.components-filter.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/filter`,
      languages: {
        "en-US": "/en/components/filter",
        "ko-KR": "/ko/components/filter",
        "x-default": "/en/components/filter",
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
          <tr key={row.prop + row.values} className={s.propsRow3col}>
            <td className={s.propsCell}>{row.prop}</td>
            <td className={s.propsCell}>{row.values}</td>
            <td className={s.propsCell}>{row.default}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default async function FilterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-filter",
  });

  const dataEntryItems = t.raw("dataEntry.items") as DataEntryItem[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>

      <h4 className={s.typeHeading}>{t("components.exposed.title")}</h4>
      <p className={s.typeSubtext}>{t("components.exposed.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Exposed Filter.png" alt="Exposed Filter" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("components.hidden.title")}</h4>
      <p className={s.typeSubtext}>{t("components.hidden.desc1")}</p>
      <p className={s.typeSubtext}>{t("components.hidden.desc2")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Hidden Filter.png" alt="Hidden Filter" />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("dataEntry.title")}</h3>
      <p className={s.sectionSubtext}>{t("dataEntry.desc")}</p>

      <div className={styles.dataEntryGrid}>
        {dataEntryItems.map((item) => (
          <div key={item.key} className={styles.dataEntryCard}>
            <div className={s.previewBox}>
              <img src={DATA_ENTRY_IMAGES[item.key]} alt={item.title} />
            </div>
            <p className={styles.dataEntryTitle}>{item.title}</p>
            <p className={styles.dataEntryDesc}>{item.desc}</p>
          </div>
        ))}
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("exposedDetail.title")}</h3>
      <p className={s.sectionSubtext}>{t("exposedDetail.desc")}</p>

      <h4 className={s.typeHeading}>{t("exposedDetail.filterBar.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.filterBar.desc")}</p>

      <h4 className={s.typeHeading}>{t("exposedDetail.filterBar.primary.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.filterBar.primary.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Primary Type.png" alt="Primary Type" />
      </div>

      <p className={s.typeHeading} style={{ marginTop: 48 }}>
        {t("exposedDetail.filterBar.primaryTable.title")}
      </p>
      <PropsTable
        headers={t.raw("exposedDetail.filterBar.primaryTable.headers") as PropsHeaders}
        rows={t.raw("exposedDetail.filterBar.primaryTable.rows") as PropsRow[]}
      />

      <h4 className={s.typeHeading}>{t("exposedDetail.filterBar.secondary.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.filterBar.secondary.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Secondary Type.png" alt="Secondary Type" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("exposedDetail.filterBar.spacing.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.filterBar.spacing.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Spacing.png" alt="Filter Bar Spacing" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("exposedDetail.filterBar.position.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.filterBar.position.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Position.png" alt="Filter Bar Position" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("exposedDetail.filterBar.selection.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.filterBar.selection.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/filter/Single Multi-Selection.png"
          alt="Single / Multi-Selection"
        />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("exposedDetail.filterBar.arrangement.title")}</h4>
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img
            src="/images/components/filter/Contents Arrangement.png"
            alt="Contents Arrangement"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("exposedDetail.filterBar.arrangement.ruleTitle")}</p>
          <p className={s.ruleText}>{t("exposedDetail.filterBar.arrangement.ruleText")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h4 className={s.typeHeading}>{t("exposedDetail.sideBar.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.sideBar.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Exposed Filter Side Bar.png" alt="Side Bar" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("exposedDetail.sideBar.spacing.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.sideBar.spacing.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Exposed Filter Spacing.png" alt="Side Bar Spacing" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("exposedDetail.sideBar.position.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.sideBar.position.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Exposed Filter Position.png" alt="Side Bar Position" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("exposedDetail.sideBar.selected.title")}</h4>
      <p className={s.typeSubtext}>{t("exposedDetail.sideBar.selected.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/filter/Exposed Filter Selected Filter.png"
          alt="Selected Filter"
        />
      </div>

      <p className={s.typeHeading} style={{ marginTop: 48 }}>
        {t("exposedDetail.sideBar.selectedTable.title")}
      </p>
      <PropsTable
        headers={t.raw("exposedDetail.sideBar.selectedTable.headers") as PropsHeaders}
        rows={t.raw("exposedDetail.sideBar.selectedTable.rows") as PropsRow[]}
      />

      <h4 className={s.typeHeading}>{t("exposedDetail.sideBar.useCase.title")}</h4>
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/filter/Exposed Filter Use Case.png" alt="Use Case" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("exposedDetail.sideBar.useCase.ruleTitle")}</p>
          <p className={s.ruleText}>{t("exposedDetail.sideBar.useCase.ruleText")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("hidden.title")}</h3>
      <p className={s.sectionSubtext}>{t("hidden.desc")}</p>

      <h4 className={s.typeHeading}>{t("hidden.modal.title")}</h4>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Modal Filter.png" alt="Modal Filter" />
      </div>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("hidden.useCase.title")}</h4>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img
            src="/images/components/filter/Table Settings - Hidden:Show Toggle.png"
            alt="Table Settings"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("hidden.useCase.tableSettings.title")}</p>
          <p className={s.ruleText}>{t("hidden.useCase.tableSettings.desc")}</p>
        </div>
      </div>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img
            src="/images/components/filter/Management Settings - Hidden:Show(Off:On) Toggle.png"
            alt="Management Settings"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>{t("hidden.useCase.management.title")}</p>
          <p className={s.ruleText}>{t("hidden.useCase.management.desc")}</p>
        </div>
      </div>
    </div>
  );
}
