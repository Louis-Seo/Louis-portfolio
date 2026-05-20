"use client";

import { useTranslations } from "next-intl";
import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

/* ═══════════════════════════════════════════
   Icons
   ═══════════════════════════════════════════ */

function NLIcon({ size = 16, color = "#0FBA7F" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.66699 13.2012L5.43366 12.4846C5.28921 12.0623 5.16421 11.6346 5.05866 11.2012C4.9531 10.7679 4.86144 10.329 4.78366 9.88457L3.66699 10.6346V13.2012ZM6.43366 12.3346H9.56699C9.81144 11.679 10.0003 11.0262 10.1337 10.3762C10.267 9.72624 10.3337 9.15679 10.3337 8.6679C10.3337 7.39013 10.1503 6.2679 9.78366 5.30124C9.41699 4.33457 8.82255 3.4179 8.00033 2.55124C7.1781 3.4179 6.58366 4.33457 6.21699 5.30124C5.85033 6.2679 5.66699 7.39013 5.66699 8.6679C5.66699 9.15679 5.73366 9.72624 5.86699 10.3762C6.00033 11.0262 6.18921 11.679 6.43366 12.3346ZM8.00033 8.50124C7.6781 8.50124 7.4031 8.38735 7.17533 8.15957C6.94755 7.93179 6.83366 7.65679 6.83366 7.33457C6.83366 7.01235 6.94755 6.73735 7.17533 6.50957C7.4031 6.28179 7.6781 6.1679 8.00033 6.1679C8.32255 6.1679 8.59755 6.28179 8.82533 6.50957C9.0531 6.73735 9.16699 7.01235 9.16699 7.33457C9.16699 7.65679 9.0531 7.93179 8.82533 8.15957C8.59755 8.38735 8.32255 8.50124 8.00033 8.50124ZM12.3337 13.2012V10.6346L11.217 9.88457C11.1392 10.329 11.0475 10.7679 10.942 11.2012C10.8364 11.6346 10.7114 12.0623 10.567 12.4846L12.3337 13.2012ZM8.00033 1.18457C9.13366 2.18457 9.97255 3.2929 10.517 4.50957C11.0614 5.72624 11.3337 7.11235 11.3337 8.6679V8.75124L12.8837 9.80124C13.0281 9.89013 13.1392 10.0068 13.217 10.1512C13.2948 10.2957 13.3337 10.4512 13.3337 10.6179V14.6679L10.0003 13.3346H6.00033L2.66699 14.6679V10.6179C2.66699 10.4512 2.70588 10.2957 2.78366 10.1512C2.86144 10.0068 2.97255 9.89013 3.11699 9.80124L4.66699 8.75124V8.6679C4.66699 7.11235 4.93921 5.72624 5.48366 4.50957C6.0281 3.2929 6.86699 2.18457 8.00033 1.18457Z"
        fill={color}
      />
    </svg>
  );
}

function SpinnerIcon({ size = 20, color = "#FAFAFA" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowDownIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PropsRow = { prop: string; values: string; default: string };
type PropsHeaders = { property: string; values: string; default: string };

function PropsTable({ headers, rows }: { headers: PropsHeaders; rows: PropsRow[] }) {
  return (
    <div className={s.propsTable}>
      <div className={`${styles.propsRow} ${s.propsHeader}`}>
        <div className={s.propsCell}>{headers.property}</div>
        <div className={s.propsCell}>{headers.values}</div>
        <div className={s.propsCell}>{headers.default}</div>
      </div>
      {rows.map((row) => (
        <div key={row.prop} className={styles.propsRow}>
          <div className={s.propsCell}>{row.prop}</div>
          <div className={s.propsCell}>{row.values}</div>
          <div className={s.propsCell}>{row.default}</div>
        </div>
      ))}
    </div>
  );
}

export default function ButtonClient() {
  const t = useTranslations("ds.components-button");

  const ps_rows = t.raw("primarySecondary.propsTable.rows") as PropsRow[];
  const ps_headers = t.raw("primarySecondary.propsTable.headers") as PropsHeaders;
  const t_rows = t.raw("tertiary.propsTable.rows") as PropsRow[];
  const t_headers = t.raw("tertiary.propsTable.headers") as PropsHeaders;
  const tx_rows = t.raw("extra.textPropsTable.rows") as PropsRow[];
  const tx_headers = t.raw("extra.textPropsTable.headers") as PropsHeaders;

  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h1 className={s.pageTitle}>{t("intro.title")}</h1>
      <p className={s.pageDescription}>{t("intro.desc")}</p>

      <hr className={s.divider} />

      {/* ── Components ── */}
      <h2 className={s.sectionHeading}>{t("components.title")}</h2>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>

      {/* 1. Main Type */}
      <h3 className={s.typeHeading}>{t("mainType.title")}</h3>
      <p className={styles.typeDescription}>{t("mainType.desc")}</p>

      <div className={styles.cardGrid3}>
        <div className={styles.card}>
          <span className={styles.badge}>A</span>
          <div className={styles.cardContent}>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`} type="button">
              Button
            </button>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`} type="button">
              <NLIcon size={16} color="#FAFAFA" />
              Button
            </button>
          </div>
          <p className={styles.cardLabel}>{t("mainType.cards.primary")}</p>
        </div>
        <div className={styles.card}>
          <span className={styles.badge}>B</span>
          <div className={styles.cardContent}>
            <button
              className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`}
              type="button"
            >
              Button
            </button>
            <button
              className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`}
              type="button"
            >
              <NLIcon size={16} color="#0FBA7F" />
              Button
            </button>
          </div>
          <p className={styles.cardLabel}>{t("mainType.cards.secondary")}</p>
        </div>
        <div className={styles.card}>
          <span className={styles.badge}>C</span>
          <div className={styles.cardContent}>
            <button
              className={`${styles.iconBtn} ${styles.iconBtnPrimary} ${styles.iconBtnLg}`}
              type="button"
            >
              <NLIcon size={20} color="#FAFAFA" />
            </button>
            <button
              className={`${styles.iconBtn} ${styles.iconBtnSecondary} ${styles.iconBtnLg}`}
              type="button"
            >
              <NLIcon size={20} color="#9E9E9E" />
            </button>
            <button
              className={`${styles.iconBtn} ${styles.iconBtnTertiary} ${styles.iconBtnLg}`}
              type="button"
            >
              <NLIcon size={20} color="#9E9E9E" />
            </button>
            <button
              className={`${styles.iconBtn} ${styles.iconBtnTertiary} ${styles.iconBtnLg}`}
              type="button"
            >
              <NLIcon size={20} color="#9E9E9E" />
            </button>
          </div>
          <p className={styles.cardLabel}>{t("mainType.cards.tertiary")}</p>
        </div>
      </div>

      {/* 2. Extra Type */}
      <h3 className={s.typeHeading}>{t("extraType.title")}</h3>
      <p className={styles.typeDescription}>{t("extraType.desc")}</p>

      <div className={styles.cardGrid4}>
        <div className={styles.card}>
          <span className={styles.badge}>D-1</span>
          <div className={styles.cardContentCol}>
            <span className={styles.textBtn}>Button</span>
            <span className={`${styles.textBtn} ${styles.textBtnBlack}`}>Button</span>
          </div>
          <p className={styles.cardLabel}>{t("extraType.cards.text")}</p>
        </div>
        <div className={styles.card}>
          <span className={styles.badge}>D-2</span>
          <div className={styles.cardContentCol}>
            <div className={styles.segmentBtn}>
              <span className={`${styles.segmentItem} ${styles.segmentItemSelected}`}>Blade A</span>
              <span className={styles.segmentItem}>Blade B</span>
            </div>
            <div className={`${styles.segmentBtn} ${styles.segmentBtnFloating}`}>
              <span className={`${styles.segmentItem} ${styles.segmentItemSelected}`}>Weeks</span>
              <span className={styles.segmentItem}>Months</span>
            </div>
          </div>
          <p className={styles.cardLabel}>{t("extraType.cards.segment")}</p>
        </div>
        <div className={styles.card}>
          <span className={styles.badge}>D-3</span>
          <div className={styles.cardContentCol}>
            <span className={styles.progressApproved}>Approved</span>
            <span className={styles.progressInReview}>In Review</span>
          </div>
          <p className={styles.cardLabel}>{t("extraType.cards.progress")}</p>
        </div>
        <div className={styles.card}>
          <span className={styles.badge}>D-4</span>
          <div className={styles.cardContentCol}>
            <div className={styles.comboWrapper}>
              <button className={styles.comboBtn} type="button">
                <span>Button</span>
                <ArrowDownIcon size={16} color="#FAFAFA" />
              </button>
              <div className={styles.comboMenu}>
                <div className={styles.comboMenuItem}>Action 1</div>
                <div className={styles.comboMenuItem}>Action 2</div>
                <div className={styles.comboMenuItem}>Action 3</div>
              </div>
            </div>
          </div>
          <p className={styles.cardLabel}>{t("extraType.cards.combo")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ════════════ Primary & Secondary ════════════ */}
      <h2 className={s.pageTitle}>{t("primarySecondary.title")}</h2>
      <p className={s.pageDescription}>{t("primarySecondary.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("primarySecondary.section.title")}</h3>
      <p className={s.sectionSubtext}>{t("primarySecondary.section.desc")}</p>

      <div className={styles.previewBox}>
        <div className={styles.dialogCard}>
          <h4 className={styles.dialogTitle}>{t("primarySecondary.dialog.title")}</h4>
          <p className={styles.dialogText}>{t("primarySecondary.dialog.text")}</p>
          <div className={styles.dialogActions}>
            <button
              className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`}
              type="button"
            >
              Button
            </button>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`} type="button">
              Button
            </button>
          </div>
        </div>
      </div>
      <p className={styles.previewCaption}>{t("primarySecondary.section.previewCaption")}</p>

      {/* Anatomy */}
      <h3 className={s.sectionHeading}>Anatomy</h3>
      <div className={styles.anatomyBox}>
        <div className={styles.anatomyDiagram}>
          <div className={styles.anatomyTopGroup}>
            <span className={styles.anatomyBadge}>2</span>
            <div className={styles.anatomyConnectorV} />
          </div>
          <div className={styles.anatomyMiddleRow}>
            <div className={styles.anatomyLeftGroup}>
              <span className={styles.anatomyBadge}>1</span>
              <div className={styles.anatomyConnectorH} />
              <div className={styles.anatomyBracket} />
            </div>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`} type="button">
              <NLIcon size={16} color="#FAFAFA" />
              Button
            </button>
          </div>
          <div className={styles.anatomyBottomGroup}>
            <div className={styles.anatomyConnectorV} />
            <span className={styles.anatomyBadge}>3</span>
          </div>
        </div>
      </div>
      <div className={styles.anatomyLabels}>
        <div className={styles.anatomyLabelItem}>
          <span className={styles.anatomyLabelBadge}>1</span>
          <span>{t("primarySecondary.anatomy.container")}</span>
        </div>
        <div className={styles.anatomyLabelItem}>
          <span className={styles.anatomyLabelBadge}>2</span>
          <span>{t("primarySecondary.anatomy.label")}</span>
        </div>
        <div className={styles.anatomyLabelItem}>
          <span className={styles.anatomyLabelBadge}>3</span>
          <span>{t("primarySecondary.anatomy.icon")}</span>
        </div>
      </div>

      {/* Variants */}
      <h3 className={s.sectionHeading}>Variants</h3>
      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <div className={styles.variantBoxInner}>
              <button
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}
                type="button"
              >
                Button
              </button>
            </div>
          </div>
          <h4 className={styles.variantColHeading}>
            {t("primarySecondary.variants.primary.title")}
          </h4>
          <p className={styles.variantColDesc}>{t("primarySecondary.variants.primary.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <div className={styles.variantBoxInner}>
              <button
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLg}`}
                type="button"
              >
                Button
              </button>
            </div>
          </div>
          <h4 className={styles.variantColHeading}>
            {t("primarySecondary.variants.secondary.title")}
          </h4>
          <p className={styles.variantColDesc}>{t("primarySecondary.variants.secondary.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients.png?v=2"
              alt="Button Sizes"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.6)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("primarySecondary.variants.size.title")}</h4>
          <p className={styles.variantColDesc}>{t("primarySecondary.variants.size.desc")}</p>
        </div>
      </div>

      {/* Table of Figma Properties */}
      <h3 className={s.sectionHeading}>{t("primarySecondary.propsTable.title")}</h3>
      <PropsTable headers={ps_headers} rows={ps_rows} />

      {/* Spec */}
      <h3 className={s.sectionHeading}>{t("primarySecondary.spec.title")}</h3>
      <div className={styles.specImageWrap}>
        <img
          src="/images/components/button/Button:Specs.png"
          alt="Button Specs"
          className={styles.specImage}
        />
      </div>
      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("primarySecondary.spec.sizes.title")}</h4>
          <p className={styles.variantColDesc}>{t("primarySecondary.spec.sizes.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("primarySecondary.spec.minWidth.title")}</h4>
          <p className={styles.variantColDesc}>{t("primarySecondary.spec.minWidth.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>{t("primarySecondary.spec.fullWidth.title")}</h4>
          <p className={styles.variantColDesc}>{t("primarySecondary.spec.fullWidth.desc")}</p>
        </div>
      </div>

      {/* Usage & Placement */}
      <h3 className={s.sectionHeading}>{t("primarySecondary.usage.title")}</h3>
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img
            src="/images/components/button/Usage & Placement 01.png"
            alt="Rule for Full Width Buttons"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("primarySecondary.usage.fullWidth.title")}</h4>
          <p className={s.ruleText}>{t("primarySecondary.usage.fullWidth.text")}</p>
          <p className={styles.ruleSubtext}>{t("primarySecondary.usage.fullWidth.sub")}</p>
        </div>
      </div>
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img
            src="/images/components/button/Usage & Placement 02.png"
            alt="Placement of Button Group"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("primarySecondary.usage.placement.title")}</h4>
          <p className={s.ruleText}>{t("primarySecondary.usage.placement.text")}</p>
        </div>
      </div>

      {/* Requirement Feedback */}
      <h3 className={s.sectionHeading}>{t("primarySecondary.requirement.title")}</h3>
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img
            src="/images/components/button/Requirement Feedback 01.png"
            alt="Rule for Button Activation"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("primarySecondary.requirement.activation.title")}</h4>
          <p className={s.ruleText}>{t("primarySecondary.requirement.activation.text")}</p>
        </div>
      </div>
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img
            src="/images/components/button/Requirement Feedback 02.png"
            alt="Exception Case of Button Disabled"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("primarySecondary.requirement.disabled.title")}</h4>
          <p className={s.ruleText}>{t("primarySecondary.requirement.disabled.text")}</p>
        </div>
      </div>

      {/* Loading Status */}
      <h3 className={s.sectionHeading}>{t("primarySecondary.loading.title")}</h3>
      <div className={styles.usageRow}>
        <div className={styles.usageCard}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%" }}>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <span className={styles.loadingStateLabel}>
                {t("primarySecondary.loading.stateLabels.default")}
              </span>
              <button
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`}
                style={{ width: 80 }}
                type="button"
              >
                Button
              </button>
              <button
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`}
                style={{ width: 100 }}
                type="button"
              >
                <NLIcon size={16} color="#FAFAFA" />
                Button
              </button>
              <button
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`}
                style={{ width: 80 }}
                type="button"
              >
                Button
              </button>
              <button
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`}
                style={{ width: 100 }}
                type="button"
              >
                <NLIcon size={16} color="#0FBA7F" />
                Button
              </button>
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <span className={styles.loadingStateLabel}>
                {t("primarySecondary.loading.stateLabels.loading")}
              </span>
              <button
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`}
                style={{ width: 80 }}
                type="button"
              >
                <span className={styles.spinner}>
                  <SpinnerIcon size={20} color="#FAFAFA" />
                </span>
              </button>
              <button
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`}
                style={{ width: 100 }}
                type="button"
              >
                <span className={styles.spinner}>
                  <SpinnerIcon size={20} color="#FAFAFA" />
                </span>
              </button>
              <button
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`}
                style={{ width: 80 }}
                type="button"
              >
                <span className={styles.spinner}>
                  <SpinnerIcon size={20} color="#0FBA7F" />
                </span>
              </button>
              <button
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`}
                style={{ width: 100 }}
                type="button"
              >
                <span className={styles.spinner}>
                  <SpinnerIcon size={20} color="#0FBA7F" />
                </span>
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 120 }}>
              <span className={styles.loadingTypeLabel}>
                {t("primarySecondary.loading.typeLabels.typeA")}
              </span>
              <span className={styles.loadingTypeLabel}>
                {t("primarySecondary.loading.typeLabels.typeB")}
              </span>
            </div>
          </div>
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("primarySecondary.loading.type.title")}</h4>
          <p className={s.ruleText}>{t("primarySecondary.loading.type.text")}</p>
        </div>
      </div>
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img src="/images/components/button/Loading Status.png" alt="Loading Spinner Size" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("primarySecondary.loading.spinner.title")}</h4>
          <p className={s.ruleText}>{t("primarySecondary.loading.spinner.text")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ════════════ Tertiary (Icon Button) ════════════ */}
      <h2 className={s.pageTitle}>{t("tertiary.title")}</h2>
      <p className={s.pageDescription}>{t("tertiary.desc")}</p>
      <hr className={s.divider} />

      <h2 className={s.sectionHeading}>{t("tertiary.section.title")}</h2>
      <p className={s.sectionSubtext}>{t("tertiary.section.desc")}</p>

      <div className={s.previewBox}>
        <img src="/images/components/button/Icon Button.png" alt="Icon Button Preview" />
      </div>

      <h3 className={s.sectionHeading}>{t("tertiary.anatomy.title")}</h3>
      <div className={s.previewBox}>
        <img src="/images/components/button/Anatomy.png" alt="Icon Button Anatomy" />
      </div>

      <h3 className={s.sectionHeading}>Variants</h3>
      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 01.png"
              alt="Primary Type"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("tertiary.variants.primary.title")}</h4>
          <p className={styles.variantColDesc}>{t("tertiary.variants.primary.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 02.png"
              alt="Secondary Type"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("tertiary.variants.secondary.title")}</h4>
          <p className={styles.variantColDesc}>{t("tertiary.variants.secondary.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 03.png"
              alt="Tertiary Type"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("tertiary.variants.tertiary.title")}</h4>
          <p className={styles.variantColDesc}>{t("tertiary.variants.tertiary.desc")}</p>
        </div>
      </div>
      <div className={styles.ibVariantGrid2}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 04.png"
              alt="Icon Button State"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("tertiary.variants.state.title")}</h4>
          <p className={styles.variantColDesc}>{t("tertiary.variants.state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 05.png"
              alt="Icon Button Size"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("tertiary.variants.size.title")}</h4>
          <p className={styles.variantColDesc}>{t("tertiary.variants.size.desc")}</p>
        </div>
      </div>

      <h3 className={s.sectionHeading}>{t("tertiary.propsTable.title")}</h3>
      <PropsTable headers={t_headers} rows={t_rows} />

      <h2 className={s.sectionHeading}>{t("tertiary.inTable.title")}</h2>
      <p className={s.sectionSubtext}>{t("tertiary.inTable.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/button/Icon Button in Table.png" alt="Icon Button in Table" />
      </div>

      <h2 className={s.sectionHeading}>{t("tertiary.popupTooltip.title")}</h2>
      <p className={s.sectionSubtext}>{t("tertiary.popupTooltip.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/button/Popup Tooltip.png" alt="Popup Tooltip" />
      </div>

      <h2 className={s.sectionHeading}>{t("tertiary.usage.title")}</h2>
      <div className={styles.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Icon Button : Usage & Placement.png"
            alt="Icon Button Usage & Placement"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("tertiary.usage.header.title")}</h4>
          <p className={s.ruleText}>{t("tertiary.usage.header.text")}</p>
          <p className={styles.ruleSubtext}>{t("tertiary.usage.header.sub")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ════════════ Extra Button ════════════ */}
      <h2 className={s.pageTitle}>{t("extra.title")}</h2>
      <p className={s.pageDescription}>{t("extra.desc")}</p>
      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("extra.text.title")}</h3>
      <p className={s.sectionSubtext}>{t("extra.text.desc")}</p>
      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img src="/images/components/button/Text Button 01.png" alt="Text Button Example" />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Text Button 02.png"
            alt="Text Button Label Underline"
          />
        </div>
      </div>

      <h3 className={s.sectionHeading}>Variants</h3>
      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Text Button Varients 01.png"
              alt="Text Button Type"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.textVariants.type.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.textVariants.type.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Text Button Varients 02.png"
              alt="Text Button State"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.textVariants.state.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.textVariants.state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Text Button Varients 03.png"
              alt="Text Button Size"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.textVariants.size.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.textVariants.size.desc")}</p>
        </div>
      </div>

      <h3 className={s.sectionHeading}>{t("extra.textPropsTable.title")}</h3>
      <PropsTable headers={tx_headers} rows={tx_rows} />

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("extra.segment.title")}</h3>
      <p className={s.sectionSubtext}>{t("extra.segment.desc")}</p>
      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img src="/images/components/button/Segment Button 01.png" alt="Segment Button Example" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/button/Segment Button 02.png" alt="Segment Button Anatomy" />
        </div>
      </div>

      <h3 className={s.sectionHeading}>Variants</h3>
      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Segment Button Varients 01.png"
              alt="Segment Button Type"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.segmentVariants.type.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.segmentVariants.type.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Segment Button Varients 02.png"
              alt="Segment Button State"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.segmentVariants.state.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.segmentVariants.state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Segment Button Varients 03.png"
              alt="Segment Button Size"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.segmentVariants.size.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.segmentVariants.size.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("extra.progress.title")}</h3>
      <p className={s.sectionSubtext}>{t("extra.progress.desc")}</p>
      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Progress Status Button 01.png"
            alt="Progress Status Button Example"
          />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Progress Status Button 02.png"
            alt="Progress Status Button Anatomy"
          />
        </div>
      </div>

      <h3 className={s.sectionHeading}>Variants</h3>
      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Progress Status Button Varients 01.png"
              alt="Progress Status Button Type"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.progressVariants.type.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.progressVariants.type.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Progress Status Button Varients 02.png"
              alt="Progress Status Button State"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.progressVariants.state.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.progressVariants.state.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Progress Status Button Varients 03.png"
              alt="Progress Status Button Size"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.progressVariants.size.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.progressVariants.size.desc")}</p>
        </div>
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("extra.combo.title")}</h3>
      <p className={s.sectionSubtext}>{t("extra.combo.desc")}</p>
      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img src="/images/components/button/Combo Button 01.png" alt="Combo Button Example" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/button/Combo Button 02.png" alt="Combo Button Anatomy" />
        </div>
      </div>

      <h3 className={s.sectionHeading}>Variants</h3>
      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Combo Button Varients 01.png"
              alt="Combo Button Type"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.comboVariants.type.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.comboVariants.type.desc")}</p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Combo Button Varients 02.png"
              alt="Combo Button State"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.4)",
              }}
            />
          </div>
          <h4 className={styles.variantColHeading}>{t("extra.comboVariants.state.title")}</h4>
          <p className={styles.variantColDesc}>{t("extra.comboVariants.state.desc")}</p>
        </div>
      </div>

      <div className={styles.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/button/Combo Button Menu.png" alt="Combo Button Menu" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>{t("extra.comboMenu.title")}</h4>
          <p className={s.ruleText}>{t("extra.comboMenu.text")}</p>
        </div>
      </div>
    </div>
  );
}
