import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

type PropsRow = { prop: string; values: string; default: string };
type PropsHeaders = { property: string; values: string; default: string };
type CompHeaders = { checkbox: string; radio: string; toggle: string };
type CompRow = {
  label: string;
  checkbox: string;
  radio: string;
  toggle: string;
  checkboxSub?: string;
  radioSub?: string;
  toggleSub?: string;
};
type MobileRow = {
  label: string;
  checkbox: string;
  radio: string;
  toggle: string;
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
    namespace: "ds.components-toggle-radio-checkbox.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/toggle-radio-checkbox`,
      languages: {
        "en-US": "/en/components/toggle-radio-checkbox",
        "ko-KR": "/ko/components/toggle-radio-checkbox",
        "x-default": "/en/components/toggle-radio-checkbox",
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

export default async function ToggleRadioCheckboxPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-toggle-radio-checkbox",
  });

  const compHeaders = t.raw("compTable.headers") as CompHeaders;
  const compRows = t.raw("compTable.rows") as CompRow[];
  const mobileLabels = t.raw("compTable.mobileLabels") as CompHeaders;
  const mobileRows = t.raw("compTable.mobileRows") as MobileRow[];
  const checkboxAnatomy = t.raw("checkbox.anatomy.items") as string[];
  const radioAnatomy = t.raw("radio.anatomy.items") as string[];
  const toggleAnatomy = t.raw("toggle.anatomy.items") as string[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>
      <div className={s.previewBox}>
        <img
          src="/images/components/toggle-radio-checkbox/Components.png"
          alt="Selection Controls"
        />
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("group.title")}</h3>
      <p className={s.sectionSubtext}>{t("group.desc")}</p>
      <div className={styles.groupRow}>
        {(["checkbox", "radio", "toggle"] as const).map((key) => (
          <div key={key} className={styles.groupCol}>
            <div className={s.previewBox}>
              <img
                src={(() => {
                  const map: Record<typeof key, string> = {
                    checkbox: "/images/components/toggle-radio-checkbox/Checkboxes Group.png",
                    radio: "/images/components/toggle-radio-checkbox/Radio Buttons Group.png",
                    toggle: "/images/components/toggle-radio-checkbox/Toggle-Switches Group.png",
                  };
                  return map[key];
                })()}
                alt={t(`group.${key}.title`)}
              />
            </div>
            <h4 className={styles.groupColHeading}>{t(`group.${key}.title`)}</h4>
            <p className={styles.groupColDesc}>{t(`group.${key}.desc`)}</p>
            {(() => {
              try {
                return <p className={styles.groupColExample}>{t(`group.${key}.example`)}</p>;
              } catch {
                return null;
              }
            })()}
          </div>
        ))}
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("compTable.title")}</h3>

      {/* Desktop comparison table */}
      <div className={styles.compTableDesktop}>
        <div className={`${styles.propsRow} ${s.propsHeader}`}>
          <div className={s.propsCell} />
          <div className={s.propsCell}>{compHeaders.checkbox}</div>
          <div className={s.propsCell}>{compHeaders.radio}</div>
          <div className={s.propsCell}>{compHeaders.toggle}</div>
        </div>
        {compRows.map((row) => (
          <div key={row.label} className={styles.propsRow}>
            <div className={s.propsCell} style={{ fontWeight: 600 }}>
              {row.label}
            </div>
            <div className={s.propsCell}>
              {row.checkbox}
              {row.checkboxSub && (
                <>
                  <br />
                  <span style={{ fontSize: 12, color: "var(--gray-500)" }}>{row.checkboxSub}</span>
                </>
              )}
            </div>
            <div className={s.propsCell}>
              {row.radio}
              {row.radioSub && (
                <>
                  <br />
                  <span style={{ fontSize: 12, color: "var(--gray-500)" }}>{row.radioSub}</span>
                </>
              )}
            </div>
            <div className={s.propsCell}>
              {row.toggle}
              {row.toggleSub && (
                <>
                  <br />
                  <span style={{ fontSize: 12, color: "var(--gray-500)" }}>{row.toggleSub}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile comparison cards */}
      <div className={styles.compCardsMobile}>
        {mobileRows.map((row) => (
          <div key={row.label} className={styles.compCard}>
            <div className={styles.compCardLabel}>{row.label}</div>
            <div className={styles.compCardValues}>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>{mobileLabels.checkbox}</span>
                <span className={styles.compCardVal}>{row.checkbox}</span>
              </div>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>{mobileLabels.radio}</span>
                <span className={styles.compCardVal}>{row.radio}</span>
              </div>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>{mobileLabels.toggle}</span>
                <span className={styles.compCardVal}>{row.toggle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className={s.divider} />

      {/* ════════════ Checkbox ════════════ */}
      <h2 className={s.sectionHeading}>{t("checkbox.title")}</h2>
      <p className={s.sectionSubtext}>{t("checkbox.desc")}</p>
      <div className={s.previewBox} style={{ marginBottom: 0 }}>
        <img src="/images/components/toggle-radio-checkbox/Checkbox.png" alt="Checkbox" />
      </div>
      <p className={styles.previewCaption}>{t("checkbox.previewCaption")}</p>

      <h3 className={s.sectionHeading}>{t("checkbox.anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/toggle-radio-checkbox/Anatomy.png" alt="Checkbox Anatomy" />
      </div>
      <ul className={styles.anatomyList}>
        {checkboxAnatomy.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("checkbox.variantsTitle")}</h3>
      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/toggle-radio-checkbox/State.png" alt="Checkbox State" />
          </div>
          <h4 className={styles.groupColHeading}>{t("checkbox.state.title")}</h4>
          <p className={styles.groupColDesc}>{t("checkbox.state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img src="/images/components/toggle-radio-checkbox/Size.png" alt="Checkbox Size" />
          </div>
          <h4 className={styles.groupColHeading}>{t("checkbox.size.title")}</h4>
          <p className={styles.groupColDesc}>{t("checkbox.size.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("checkbox.props.title")}</h3>
      <PropsTable
        headers={t.raw("checkbox.props.headers") as PropsHeaders}
        rows={t.raw("checkbox.props.rows") as PropsRow[]}
      />

      <hr className={s.divider} />

      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/toggle-radio-checkbox/Spacing.png" alt="Checkbox Spacing" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("checkbox.spacing.title")}</h4>
          <p className={s.ruleText}>{t("checkbox.spacing.text")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("checkbox.usecase.title")}</h3>
      <div className={styles.groupRow}>
        {(["side", "task", "sync"] as const).map((key) => (
          <div key={key} className={styles.groupCol}>
            <div className={s.previewBox}>
              <img
                src={(() => {
                  const map: Record<typeof key, string> = {
                    side: "/images/components/toggle-radio-checkbox/Side Panel Filter (Statistics, Defects).png",
                    task: "/images/components/toggle-radio-checkbox/Task Settings Farm Selection.png",
                    sync: "/images/components/toggle-radio-checkbox/Sync User name Data.png",
                  };
                  return map[key];
                })()}
                alt={t(`checkbox.usecase.${key}.title`)}
              />
            </div>
            <h4 className={styles.groupColHeading}>{t(`checkbox.usecase.${key}.title`)}</h4>
            <p className={styles.groupColDesc}>{t(`checkbox.usecase.${key}.desc`)}</p>
          </div>
        ))}
      </div>

      {(["multiple", "arrangement", "indeterminate"] as const).map((key) => (
        <div key={key} className={s.usageRow}>
          <div className={s.previewBox}>
            <img
              src={(() => {
                const map: Record<typeof key, string> = {
                  multiple: "/images/components/toggle-radio-checkbox/Multiple Select Option.png",
                  arrangement:
                    "/images/components/toggle-radio-checkbox/Right and Left Arrangement.png",
                  indeterminate: "/images/components/toggle-radio-checkbox/Indeterminate State.png",
                };
                return map[key];
              })()}
              alt={t(`checkbox.usecase.${key}.title`)}
            />
          </div>
          <div className={s.ruleCardBottom}>
            <h4 className={s.ruleTitle}>{t(`checkbox.usecase.${key}.title`)}</h4>
            <p className={s.ruleText}>{t(`checkbox.usecase.${key}.text`)}</p>
          </div>
        </div>
      ))}

      <hr className={s.divider} />

      {/* ════════════ Radio Button ════════════ */}
      <h2 className={s.sectionHeading}>{t("radio.title")}</h2>
      <p className={s.sectionSubtext}>{t("radio.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/toggle-radio-checkbox/Radio Button.png" alt="Radio Button" />
      </div>
      <p className={styles.previewCaption}>{t("radio.previewCaption")}</p>

      <h3 className={s.sectionHeading}>{t("radio.anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img
          src="/images/components/toggle-radio-checkbox/Radio Button Anatomy.png"
          alt="Radio Button Anatomy"
        />
      </div>
      <ul className={styles.anatomyList}>
        {radioAnatomy.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("radio.variantsTitle")}</h3>
      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Radio Button State.png"
              alt="Radio Button State"
            />
          </div>
          <h4 className={styles.groupColHeading}>{t("radio.state.title")}</h4>
          <p className={styles.groupColDesc}>{t("radio.state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Radio Button Size.png"
              alt="Radio Button Size"
            />
          </div>
          <h4 className={styles.groupColHeading}>{t("radio.size.title")}</h4>
          <p className={styles.groupColDesc}>{t("radio.size.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("radio.props.title")}</h3>
      <PropsTable
        headers={t.raw("radio.props.headers") as PropsHeaders}
        rows={t.raw("radio.props.rows") as PropsRow[]}
      />

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("radio.spacingTitle")}</h3>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Radio Button Spacing.png"
            alt="Radio Button Spacing"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("radio.spacing.title")}</h4>
          <p className={s.ruleText}>{t("radio.spacing.text")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("radio.usecaseTitle")}</h3>
      {(["exactlyOne", "mutuallyExclusive"] as const).map((key) => (
        <div key={key} className={s.usageRow}>
          <div className={s.previewBox}>
            <img
              src={(() => {
                const map: Record<typeof key, string> = {
                  exactlyOne:
                    "/images/components/toggle-radio-checkbox/Radio Button Select Exactly One.png",
                  mutuallyExclusive:
                    "/images/components/toggle-radio-checkbox/Radio Button Mutually Exclusive Options.png",
                };
                return map[key];
              })()}
              alt={t(`radio.usecase.${key}.title`)}
            />
          </div>
          <div className={s.ruleCardBottom}>
            <h4 className={s.ruleTitle}>{t(`radio.usecase.${key}.title`)}</h4>
            <p className={s.ruleText}>{t(`radio.usecase.${key}.text`)}</p>
          </div>
        </div>
      ))}

      <hr className={s.divider} />

      {/* ════════════ Toggle Switch ════════════ */}
      <h2 className={s.sectionHeading}>{t("toggle.title")}</h2>
      <p className={s.sectionSubtext}>{t("toggle.desc")}</p>
      <div className={s.previewBox} style={{ marginBottom: 0 }}>
        <img src="/images/components/toggle-radio-checkbox/Toggle-Switch.png" alt="Toggle-Switch" />
      </div>
      <p className={styles.previewCaption}>{t("toggle.previewCaption")}</p>

      <h3 className={s.sectionHeading}>{t("toggle.anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img
          src="/images/components/toggle-radio-checkbox/Toggle-Switch Anatomy.png"
          alt="Toggle-Switch Anatomy"
        />
      </div>
      <ul className={styles.anatomyList}>
        {toggleAnatomy.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("toggle.variantsTitle")}</h3>
      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Toggle-Switch State.png"
              alt="Toggle-Switch State"
            />
          </div>
          <h4 className={styles.groupColHeading}>{t("toggle.state.title")}</h4>
          <p className={styles.groupColDesc}>{t("toggle.state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Toggle-Switch Size.png"
              alt="Toggle-Switch Size"
            />
          </div>
          <h4 className={styles.groupColHeading}>{t("toggle.size.title")}</h4>
          <p className={styles.groupColDesc}>{t("toggle.size.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("toggle.props.title")}</h3>
      <PropsTable
        headers={t.raw("toggle.props.headers") as PropsHeaders}
        rows={t.raw("toggle.props.rows") as PropsRow[]}
      />

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("toggle.spacingTitle")}</h3>
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Toggle Switch Toggle Alignment and Spacing.png"
            alt="Toggle-Switch Spacing"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("toggle.spacing.title")}</h4>
          <p className={s.ruleText}>{t("toggle.spacing.text")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("toggle.usecaseTitle")}</h3>
      <div className={styles.groupRow}>
        {(["management", "filter", "tableSettings"] as const).map((key) => (
          <div key={key} className={styles.groupCol}>
            <div className={s.previewBox}>
              <img
                src={(() => {
                  const map: Record<typeof key, string> = {
                    management:
                      "/images/components/toggle-radio-checkbox/Toggle-Switch Management View Settings.png",
                    filter:
                      "/images/components/toggle-radio-checkbox/Toggle-Switch Filter Settings (Statistics).png",
                    tableSettings:
                      "/images/components/toggle-radio-checkbox/Toggle-Switch Table Settings (Defects).png",
                  };
                  return map[key];
                })()}
                alt={t(`toggle.usecase.${key}.title`)}
              />
            </div>
            <h4 className={styles.groupColHeading}>{t(`toggle.usecase.${key}.title`)}</h4>
            <p className={styles.groupColDesc}>{t(`toggle.usecase.${key}.desc`)}</p>
          </div>
        ))}
      </div>

      {(["withLabel", "group"] as const).map((key) => (
        <div key={key} className={s.usageRow}>
          <div className={s.previewBox}>
            <img
              src={(() => {
                const map: Record<typeof key, string> = {
                  withLabel:
                    "/images/components/toggle-radio-checkbox/Toggle Switch with Label.png",
                  group: "/images/components/toggle-radio-checkbox/Toggle Switch Group.png",
                };
                return map[key];
              })()}
              alt={t(`toggle.usecase.${key}.title`)}
            />
          </div>
          <div className={s.ruleCardBottom}>
            <h4 className={s.ruleTitle}>{t(`toggle.usecase.${key}.title`)}</h4>
            <p className={s.ruleText}>{t(`toggle.usecase.${key}.text`)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
