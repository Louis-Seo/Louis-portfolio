import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type CompTableRow = {
  label: string;
  primary: string;
  secondary: string;
  tertiary: string;
  extra: string;
};
type CompTableHeaders = {
  primary: string;
  secondary: string;
  tertiary: string;
  extra: string;
};
type PropsRow = { prop: string; values: string; default: string };
type PropsHeaders = { property: string; values: string; default: string };
type CompTRow = { component: string; values: string };
type CompTHeaders = { component: string; values: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-dropdown.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/dropdown`,
      languages: {
        "en-US": "/en/components/dropdown",
        "ko-KR": "/ko/components/dropdown",
        "x-default": "/en/components/dropdown",
      },
    },
  };
}

function PropsTable({ headers, rows }: { headers: PropsHeaders; rows: PropsRow[] }) {
  return (
    <div className={s.propsTable}>
      <div className={`${s.propsRow3col} ${s.propsHeader}`}>
        <div className={s.propsCell}>{headers.property}</div>
        <div className={s.propsCell}>{headers.values}</div>
        <div className={s.propsCell}>{headers.default}</div>
      </div>
      {rows.map((row) => (
        <div key={row.prop} className={s.propsRow3col}>
          <div className={s.propsCell}>{row.prop}</div>
          <div className={s.propsCell}>{row.values}</div>
          <div className={s.propsCell}>{row.default}</div>
        </div>
      ))}
    </div>
  );
}

export default async function DropdownPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-dropdown",
  });

  const anatomyItems = t.raw("anatomy.items") as string[];
  const compHeaders = t.raw("compTable.headers") as CompTableHeaders;
  const compRows = t.raw("compTable.rows") as CompTableRow[];
  const mobileLabels = t.raw("compTable.mobileLabels") as CompTableHeaders;
  const mobileRows = t.raw("compTable.mobileShortRows") as CompTableRow[];
  const componentTableHeaders = t.raw("componentTable.headers") as CompTHeaders;
  const componentTableRows = t.raw("componentTable.rows") as CompTRow[];
  const buttonPropsHeaders = t.raw("buttonProps.headers") as PropsHeaders;
  const buttonPropsRows = t.raw("buttonProps.rows") as PropsRow[];
  const itemPropsHeaders = t.raw("itemProps.headers") as PropsHeaders;
  const itemPropsRows = t.raw("itemProps.rows") as PropsRow[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      {/* Anatomy */}
      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Anatomy.png" alt="Dropdown Anatomy" />
      </div>
      <ul className={styles.anatomyList}>
        {anatomyItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Extra Type Intro */}
      <h3 className={s.typeHeading}>{t("extraTypeIntro.title")}</h3>
      <p className={styles.typeDescription}>{t("extraTypeIntro.desc")}</p>

      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Extra Type.png" alt="Dropdown Extra Type" />
      </div>

      {/* Comparison Table (Desktop) */}
      <div className={styles.compTableDesktop}>
        <div className={`${styles.propsRow} ${s.propsHeader}`}>
          <div className={s.propsCell} />
          <div className={s.propsCell}>{compHeaders.primary}</div>
          <div className={s.propsCell}>{compHeaders.secondary}</div>
          <div className={s.propsCell}>{compHeaders.tertiary}</div>
          <div className={s.propsCell}>{compHeaders.extra}</div>
        </div>
        {compRows.map((row) => (
          <div key={row.label} className={styles.propsRow}>
            <div className={s.propsCell} style={{ fontWeight: 600 }}>
              {row.label}
            </div>
            <div className={s.propsCell}>{row.primary}</div>
            <div className={s.propsCell}>{row.secondary}</div>
            <div className={s.propsCell}>{row.tertiary}</div>
            <div className={s.propsCell}>{row.extra}</div>
          </div>
        ))}
      </div>

      {/* Comparison Cards (Mobile) */}
      <div className={styles.compCardsMobile}>
        {mobileRows.map((row) => (
          <div key={row.label} className={styles.compCard}>
            <div className={styles.compCardLabel}>{row.label}</div>
            <div className={styles.compCardValues}>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>{mobileLabels.primary}</span>
                <span className={styles.compCardVal}>{row.primary}</span>
              </div>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>{mobileLabels.secondary}</span>
                <span className={styles.compCardVal}>{row.secondary}</span>
              </div>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>{mobileLabels.tertiary}</span>
                <span className={styles.compCardVal}>{row.tertiary}</span>
              </div>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>{mobileLabels.extra}</span>
                <span className={styles.compCardVal}>{row.extra}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className={s.divider} />

      {/* Components */}
      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>

      <h3 className={s.typeHeading}>{t("primary.title")}</h3>
      <p className={styles.typeDescription}>{t("primary.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Primary Type.png" alt="Primary Type" />
      </div>

      <h3 className={s.typeHeading}>{t("secondary.title")}</h3>
      <p className={styles.typeDescription}>{t("secondary.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Secondary Type.png" alt="Secondary Type" />
      </div>

      <h3 className={s.typeHeading}>{t("tertiary.title")}</h3>
      <p className={styles.typeDescription}>{t("tertiary.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Table Dropdown.png" alt="Table Dropdown" />
      </div>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/List Dropdown.png" alt="List Dropdown" />
      </div>

      <h3 className={s.typeHeading}>{t("extraType.title")}</h3>
      <p className={styles.typeDescription}>{t("extraType.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Component Extra Type.png" alt="Extra Type" />
      </div>

      <hr className={s.divider} />

      {/* Variants */}
      <h3 className={s.sectionHeading}>{t("variants.title")}</h3>
      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/dropdown/Varients State.png" alt="Dropdown State" />
          </div>
          <h4 className={styles.variantColHeading}>{t("variants.state.title")}</h4>
          <p className={styles.variantColDesc}>{t("variants.state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/dropdown/Varients Size.png" alt="Dropdown Size" />
          </div>
          <h4 className={styles.variantColHeading}>{t("variants.size.title")}</h4>
          <p className={styles.variantColDesc}>{t("variants.size.desc")}</p>
        </div>
      </div>

      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Menu Item.png" alt="Menu Item" />
      </div>
      <h4 className={styles.variantColHeading}>{t("variants.menuItem.title")}</h4>
      <p className={styles.variantColDesc} style={{ marginBottom: 48 }}>
        {t("variants.menuItem.desc")}
      </p>

      <hr className={s.divider} />

      {/* Component Table */}
      <h3 className={s.sectionHeading}>{t("componentTable.title")}</h3>
      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>{componentTableHeaders.component}</div>
          <div className={s.propsCell}>{componentTableHeaders.values}</div>
          <div className={s.propsCell} style={{ borderLeft: "none" }} />
        </div>
        {componentTableRows.map((row) => (
          <div key={row.component} className={s.propsRow3col}>
            <div className={s.propsCell}>{row.component}</div>
            <div className={s.propsCell}>{row.values}</div>
            <div className={s.propsCell} style={{ borderLeft: "none" }} />
          </div>
        ))}
      </div>

      <h3 className={s.typeHeading}>{t("buttonProps.title")}</h3>
      <PropsTable headers={buttonPropsHeaders} rows={buttonPropsRows} />

      <h3 className={s.typeHeading}>{t("itemProps.title")}</h3>
      <PropsTable headers={itemPropsHeaders} rows={itemPropsRows} />

      <hr className={s.divider} />

      {/* Color */}
      <h3 className={s.sectionHeading}>{t("color.title")}</h3>
      <p className={s.sectionSubtext}>{t("color.desc")}</p>

      <h3 className={s.typeHeading}>{t("color.buttonColor")}</h3>
      <div className={s.previewBox}>
        <img
          src="/images/components/dropdown/Dropdown Button Color.png"
          alt="Dropdown Button Color"
        />
      </div>

      <h3 className={s.typeHeading}>{t("color.itemColor")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Menu Item Color.png" alt="Menu Item Color" />
      </div>

      <hr className={s.divider} />

      {/* Spacing */}
      <h3 className={s.sectionHeading}>{t("spacing.title")}</h3>
      <p className={s.sectionSubtext}>{t("spacing.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Spacing.png" alt="Spacing" />
      </div>

      <hr className={s.divider} />

      {/* Contents */}
      <h3 className={s.sectionHeading}>{t("contents.title")}</h3>
      <p className={s.sectionSubtext}>{t("contents.desc")}</p>

      {(
        [
          "empty",
          "fieldType",
          "itemList",
          "single",
          "multi",
          "minWidth",
          "flexibleWidth",
          "overflow",
        ] as const
      ).map((key) => (
        <div key={key} className={s.usageRow}>
          <div className={s.previewBox}>
            <img
              src={(() => {
                const map: Record<typeof key, string> = {
                  empty: "/images/components/dropdown/Table List Empty State (Placeholder).png",
                  fieldType: "/images/components/dropdown/Contents Type of Field.png",
                  itemList: "/images/components/dropdown/Contents Menu Item List.png",
                  single: "/images/components/dropdown/Contents Single-Selection.png",
                  multi: "/images/components/dropdown/Contents Multi-Selection.png",
                  minWidth: "/images/components/dropdown/Contents Minimum Width.png",
                  flexibleWidth: "/images/components/dropdown/Contents Flexible Width.png",
                  overflow: "/images/components/dropdown/Contents Text Overflow.png",
                };
                return map[key];
              })()}
              alt={t(`contents.${key}.title`)}
            />
          </div>
          <div className={s.ruleCardBottom}>
            <h4 className={s.ruleTitle}>{t(`contents.${key}.title`)}</h4>
            <p className={s.ruleText} style={{ whiteSpace: "pre-line" }}>
              {t(`contents.${key}.text`)}
            </p>
          </div>
        </div>
      ))}

      <hr className={s.divider} />

      {/* Usage & Placement */}
      <h3 className={s.sectionHeading}>{t("usage.title")}</h3>
      <p className={s.sectionSubtext}>{t("usage.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Usage & Placement.png" alt="Usage & Placement" />
      </div>

      {(["label", "information", "required", "error", "labelSize"] as const).map((key) => (
        <div key={key} className={s.usageRow}>
          <div className={s.previewBox}>
            <img
              src={(() => {
                const map: Record<typeof key, string> = {
                  label: "/images/components/dropdown/Label.png",
                  information: "/images/components/dropdown/Label_ Information.png",
                  required: "/images/components/dropdown/Label_ Required.png",
                  error: "/images/components/dropdown/Label_ Error(Alert).png",
                  labelSize: "/images/components/dropdown/Label Size.png",
                };
                return map[key];
              })()}
              alt={t(`usage.${key}.title`)}
            />
          </div>
          <div className={s.ruleCardBottom}>
            <h4 className={s.ruleTitle}>{t(`usage.${key}.title`)}</h4>
            <p className={s.ruleText} style={{ whiteSpace: "pre-line" }}>
              {t(`usage.${key}.text`)}
            </p>
          </div>
        </div>
      ))}

      <hr className={s.divider} />

      {/* Loading */}
      <h3 className={s.sectionHeading}>{t("loading.title")}</h3>
      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Loading Type.png" alt="Loading Type" />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/dropdown/Loading Spinner Size.png"
            alt="Loading Spinner Size"
          />
        </div>
      </div>
      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("loading.type.title")}</h4>
          <p className={styles.variantColDesc}>{t("loading.type.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("loading.spinner.title")}</h4>
          <p className={styles.variantColDesc}>{t("loading.spinner.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* Menu Placement */}
      <h3 className={s.sectionHeading}>{t("menuPlacement.title")}</h3>
      <p className={s.sectionSubtext}>{t("menuPlacement.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Menu Placement 01.png" alt="Menu Placement 01" />
      </div>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Menu Placement 02.png" alt="Menu Placement 02" />
      </div>
      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Menu Placement 03.png" alt="Menu Placement 03" />
      </div>

      <hr className={s.divider} />

      {/* Menu Items */}
      <h3 className={s.sectionHeading}>{t("menuItems.title")}</h3>
      <p className={s.sectionSubtext}>{t("menuItems.desc")}</p>

      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Menu Item ≤ 4.png" alt="Menu Item ≤ 4" />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/dropdown/Menu Item > 4 (with Scroll).png"
            alt="Menu Item > 4"
          />
        </div>
      </div>
      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("menuItems.le4.title")}</h4>
          <p className={styles.variantColDesc}>{t("menuItems.le4.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("menuItems.gt4.title")}</h4>
          <p className={styles.variantColDesc}>{t("menuItems.gt4.desc")}</p>
        </div>
      </div>

      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img
            src="/images/components/dropdown/Menu Item Text Line ≤ 4.png"
            alt="Menu Item Text Line ≤ 4"
          />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/dropdown/Menu Item Text Line > 4 (with Scroll).png"
            alt="Menu Item Text Line > 4"
          />
        </div>
      </div>
      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("menuItems.line4.title")}</h4>
          <p className={styles.variantColDesc}>{t("menuItems.line4.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("menuItems.lineGt4.title")}</h4>
          <p className={styles.variantColDesc}>{t("menuItems.lineGt4.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* Item List Contents Arrangement */}
      <h3 className={s.sectionHeading}>{t("arrangement.title")}</h3>
      <p className={s.sectionSubtext}>{t("arrangement.desc")}</p>

      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Default Item List.png" alt="Default Item List" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Sequence Item List.png" alt="Sequence Item List" />
        </div>
      </div>
      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("arrangement.default.title")}</h4>
          <p className={styles.variantColDesc}>{t("arrangement.default.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("arrangement.sequence.title")}</h4>
          <p className={styles.variantColDesc}>{t("arrangement.sequence.desc")}</p>
        </div>
      </div>
    </div>
  );
}
