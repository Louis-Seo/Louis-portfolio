import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type PropsRow = { prop: string; values: string; default: string };
type PropsHeaders = { property: string; values: string; default: string };
type CompTHeaders = { primary: string; secondary: string; extra: string };
type CompTRow = {
  label: string;
  primary: string;
  secondary: string;
  extra: string;
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
    namespace: "ds.components-input.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/input`,
      languages: {
        "en-US": "/en/components/input",
        "ko-KR": "/ko/components/input",
        "x-default": "/en/components/input",
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

export default async function InputPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-input",
  });

  const compHeaders = t.raw("dropdownType.tableHeaders") as CompTHeaders;
  const compRows = t.raw("dropdownType.rows") as CompTRow[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/input/Anatomy.png" alt="Input Anatomy" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("dropdownType.title")}</h3>
      <p className={s.sectionSubtext}>{t("dropdownType.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/input/Dropdown Type .png" alt="Input Dropdown Type" />
      </div>

      <div className={s.propsTable}>
        <div className={`${styles.propsRow} ${s.propsHeader}`}>
          <div className={s.propsCell} />
          <div className={s.propsCell}>{compHeaders.primary}</div>
          <div className={s.propsCell}>{compHeaders.secondary}</div>
          <div className={s.propsCell}>{compHeaders.extra}</div>
        </div>
        {compRows.map((row) => (
          <div key={row.label} className={styles.propsRow}>
            <div className={s.propsCell} style={{ fontWeight: 600 }}>
              {row.label}
            </div>
            <div className={s.propsCell}>{row.primary}</div>
            <div className={s.propsCell}>{row.secondary}</div>
            <div className={s.propsCell}>{row.extra}</div>
          </div>
        ))}
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>

      <h3 className={s.typeHeading}>{t("textWithIcon.title")}</h3>
      <p className={s.sectionSubtext}>{t("textWithIcon.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/input/Primary Type.png" alt="Primary Type" />
      </div>

      <h3 className={s.typeHeading}>{t("secondary.title")}</h3>
      <p className={s.sectionSubtext}>{t("secondary.desc")}</p>
      <div className={s.previewRow}>
        <div className={s.previewBox}>
          <img src="/images/components/input/Table Input.png" alt="Table Input" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/input/List Input.png" alt="List Input" />
        </div>
      </div>

      <h3 className={s.typeHeading}>{t("extra.title")}</h3>
      <p className={s.sectionSubtext}>{t("extra.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/input/Extra Type.png" alt="Extra Type" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("variants.title")}</h3>
      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/input/State.png" alt="Input State" />
          </div>
          <h4 className={styles.variantColHeading}>{t("variants.state.title")}</h4>
          <p className={styles.variantColDesc}>{t("variants.state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/input/Size.png" alt="Input Size" />
          </div>
          <h4 className={styles.variantColHeading}>{t("variants.size.title")}</h4>
          <p className={styles.variantColDesc}>{t("variants.size.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("sizing.title")}</h3>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/input/Minimum Width.png" alt="Minimum Width" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("sizing.minWidth.title")}</h4>
          <p className={s.ruleText}>{t("sizing.minWidth.text")}</p>
        </div>
      </div>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/input/Text Overflow.png" alt="Text Overflow" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("sizing.overflow.title")}</h4>
          <p className={s.ruleText}>{t("sizing.overflow.text")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("props.title")}</h3>
      <PropsTable
        headers={t.raw("props.headers") as PropsHeaders}
        rows={t.raw("props.rows") as PropsRow[]}
      />

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("search.title")}</h3>
      <p className={s.sectionSubtext}>{t("search.desc")}</p>
      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Text Input with Field Label.png"
              alt="Text Input with Field Label"
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("search.withLabel.title")}</h4>
          <p className={styles.variantColDesc}>{t("search.withLabel.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Text Input without Field Label.png"
              alt="Text Input without Field Label"
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("search.withoutLabel.title")}</h4>
          <p className={styles.variantColDesc}>{t("search.withoutLabel.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("textIconSection.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("textIconSection.desc")}
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/input/Text Input with Label.png" alt="Text Input with Label" />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("tableList.title")}</h3>
      <p className={s.sectionSubtext}>{t("tableList.desc")}</p>
      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/input/Text Input in Table.png" alt="Text Input in Table" />
          </div>
          <h4 className={styles.variantColHeading}>{t("tableList.table.title")}</h4>
          <p className={styles.variantColDesc}>{t("tableList.table.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/input/Text Input in List.png" alt="Text Input in List" />
          </div>
          <h4 className={styles.variantColHeading}>{t("tableList.list.title")}</h4>
          <p className={styles.variantColDesc}>{t("tableList.list.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("numerical.title")}</h3>
      <p className={s.sectionSubtext}>{t("numerical.desc")}</p>
      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Numerical Input with unit.png"
              alt="Numerical Input with unit"
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("numerical.withUnit.title")}</h4>
          <p className={styles.variantColDesc}>{t("numerical.withUnit.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/State of Numerical Input.png"
              alt="State of Numerical Input"
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("numerical.state.title")}</h4>
          <p className={styles.variantColDesc}>{t("numerical.state.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("description.title")}</h3>
      <p className={s.sectionSubtext} style={{ whiteSpace: "pre-line" }}>
        {t("description.desc")}
      </p>
      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Description Text Area.png"
              alt="Description Text Area"
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("description.descArea.title")}</h4>
          <p className={styles.variantColDesc}>{t("description.descArea.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Description Text Input.png"
              alt="Description Text Input"
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("description.descInput.title")}</h4>
          <p className={styles.variantColDesc}>{t("description.descInput.desc")}</p>
        </div>
      </div>
      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/input/Comment Text Area .png" alt="Comment Text Area" />
          </div>
          <h4 className={styles.variantColHeading}>{t("description.commentArea.title")}</h4>
          <p className={styles.variantColDesc}>{t("description.commentArea.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/input/Commnet Text Input .png" alt="Comment Text Input" />
          </div>
          <h4 className={styles.variantColHeading}>{t("description.commentInput.title")}</h4>
          <p className={styles.variantColDesc}>{t("description.commentInput.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("usage.title")}</h3>
      <p className={s.sectionSubtext}>{t("usage.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/input/Usage & Placement.png" alt="Usage & Placement" />
      </div>

      {(["label", "sync", "information", "required", "error", "labelSize", "unit"] as const).map(
        (key) => (
          <div key={key} className={s.usageRow}>
            <div className={s.previewBox}>
              <img
                src={(() => {
                  const map: Record<typeof key, string> = {
                    label: "/images/components/input/Usage & Placement Label.png",
                    sync: "/images/components/input/Usage & Placement Label- Sync.png",
                    information:
                      "/images/components/input/Usage & Placement Label- Information.png",
                    required: "/images/components/input/Usage & Placement Label_ Required.png",
                    error: "/images/components/input/Usage & Placement Label_ Error(Alert).png",
                    labelSize: "/images/components/input/Usage & Placement Label Size.png",
                    unit: "/images/components/input/Usage & Placement Unit.png",
                  };
                  return map[key];
                })()}
                alt={t(`usage.${key}.title`)}
              />
            </div>
            <div className={s.ruleCardBottom}>
              <h4 className={s.ruleTitle}>{t(`usage.${key}.title`)}</h4>
              <p className={s.ruleText}>{t(`usage.${key}.text`)}</p>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
