"use client";

import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

/* ═══════════════════════════════════════════
   NL Icon SVG (from Figma)
   ═══════════════════════════════════════════ */

function NLIcon({ size = 16, color = "#0FBA7F" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.66699 13.2012L5.43366 12.4846C5.28921 12.0623 5.16421 11.6346 5.05866 11.2012C4.9531 10.7679 4.86144 10.329 4.78366 9.88457L3.66699 10.6346V13.2012ZM6.43366 12.3346H9.56699C9.81144 11.679 10.0003 11.0262 10.1337 10.3762C10.267 9.72624 10.3337 9.15679 10.3337 8.6679C10.3337 7.39013 10.1503 6.2679 9.78366 5.30124C9.41699 4.33457 8.82255 3.4179 8.00033 2.55124C7.1781 3.4179 6.58366 4.33457 6.21699 5.30124C5.85033 6.2679 5.66699 7.39013 5.66699 8.6679C5.66699 9.15679 5.73366 9.72624 5.86699 10.3762C6.00033 11.0262 6.18921 11.679 6.43366 12.3346ZM8.00033 8.50124C7.6781 8.50124 7.4031 8.38735 7.17533 8.15957C6.94755 7.93179 6.83366 7.65679 6.83366 7.33457C6.83366 7.01235 6.94755 6.73735 7.17533 6.50957C7.4031 6.28179 7.6781 6.1679 8.00033 6.1679C8.32255 6.1679 8.59755 6.28179 8.82533 6.50957C9.0531 6.73735 9.16699 7.01235 9.16699 7.33457C9.16699 7.65679 9.0531 7.93179 8.82533 8.15957C8.59755 8.38735 8.32255 8.50124 8.00033 8.50124ZM12.3337 13.2012V10.6346L11.217 9.88457C11.1392 10.329 11.0475 10.7679 10.942 11.2012C10.8364 11.6346 10.7114 12.0623 10.567 12.4846L12.3337 13.2012ZM8.00033 1.18457C9.13366 2.18457 9.97255 3.2929 10.517 4.50957C11.0614 5.72624 11.3337 7.11235 11.3337 8.6679V8.75124L12.8837 9.80124C13.0281 9.89013 13.1392 10.0068 13.217 10.1512C13.2948 10.2957 13.3337 10.4512 13.3337 10.6179V14.6679L10.0003 13.3346H6.00033L2.66699 14.6679V10.6179C2.66699 10.4512 2.70588 10.2957 2.78366 10.1512C2.86144 10.0068 2.97255 9.89013 3.11699 9.80124L4.66699 8.75124V8.6679C4.66699 7.11235 4.93921 5.72624 5.48366 4.50957C6.0281 3.2929 6.86699 2.18457 8.00033 1.18457Z"
        fill={color}
      />
    </svg>
  );
}

function SpinnerIcon({ size = 20, color = "#FAFAFA" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   Page
   ═══════════════════════════════════════════ */

export default function ButtonPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h1 className={s.pageTitle}>Button Compoments</h1>
      <p className={s.pageDescription}>
        Button은 사용자의 성공적 작업 수행을 위해 Button에 따른 시각적 계층 구조에 차이가
        있습니다. 계층 구조에 따른 스타일 가이드를 유의하며, 임의 스타일 추가 및 사용은
        제한합니다. 어떠한 Action을 수행하거나 다른 위치로 이동할때 (navigate to another
        page) 사용됩니다.
      </p>

      <hr className={s.divider} />

      {/* ── Components ── */}
      <h2 className={s.sectionHeading}>Components</h2>
      <p className={s.sectionSubtext}>
        Button은 스타일 및 쓰임새에 따라 Primary Button, Secondary Button, Tertiary
        Button, Extra Button 4가지로 분류되는데, 그 안에서도 Icon의 유무 혹은 사용되는
        방식에 따른 Background Color의 분류에 따라 세부항목으로 분리되어 사용되어집니다.
        Extra Type을 제외한 3가지 Type은 주요하게 사용되는 Main Type입니다.
      </p>

      {/* ── 1. Main Type ── */}
      <h3 className={s.typeHeading}>
        1. Main Type (Primary, Secondary, Tertiary Type)
      </h3>
      <p className={styles.typeDescription}>
        Primary Type은 가장 흔하게 사용되는 타입으로, Text Label 만 사용되는 경우와 Icon과
        함께 사용되는 경우 두가지로 크게 사용되어 집니다. Secondary Type의 경우 Primary와
        거의 동일한 형태이되, Color Type이 다른 경우로 두번째 위계의 Button의 동작에
        사용되어 집니다. 마지막으로 Tertiary Type의 경우 Icon으로만 구성된 Icon Button으로
        동작의 위계에 따라 Icon Button 내에서도 Primary, Secondary로 나뉘어 사용되어
        집니다.
      </p>

      <div className={styles.cardGrid3}>
        {/* Card A – Primary */}
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
          <p className={styles.cardLabel}>
            A. Primary Button Type (Contained Button)
          </p>
        </div>

        {/* Card B – Secondary */}
        <div className={styles.card}>
          <span className={styles.badge}>B</span>
          <div className={styles.cardContent}>
            <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`} type="button">
              Button
            </button>
            <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`} type="button">
              <NLIcon size={16} color="#0FBA7F" />
              Button
            </button>
          </div>
          <p className={styles.cardLabel}>
            B. Secondary Button Type (Outlined Button)
          </p>
        </div>

        {/* Card C – Tertiary (Icon Button) */}
        <div className={styles.card}>
          <span className={styles.badge}>C</span>
          <div className={styles.cardContent}>
            <button className={`${styles.iconBtn} ${styles.iconBtnPrimary} ${styles.iconBtnLg}`} type="button">
              <NLIcon size={20} color="#FAFAFA" />
            </button>
            <button className={`${styles.iconBtn} ${styles.iconBtnSecondary} ${styles.iconBtnLg}`} type="button">
              <NLIcon size={20} color="#9E9E9E" />
            </button>
            <button className={`${styles.iconBtn} ${styles.iconBtnTertiary} ${styles.iconBtnLg}`} type="button">
              <NLIcon size={20} color="#9E9E9E" />
            </button>
            <button className={`${styles.iconBtn} ${styles.iconBtnTertiary} ${styles.iconBtnLg}`} type="button">
              <NLIcon size={20} color="#9E9E9E" />
            </button>
          </div>
          <p className={styles.cardLabel}>
            C. Tertiary Button Type (Icon Button)
          </p>
        </div>
      </div>

      {/* ── 2. Extra Type ── */}
      <h3 className={s.typeHeading}>2. Extra Type</h3>
      <p className={styles.typeDescription}>
        Extra Button Type (Segment Button, Progreess Status Button, Text Button, Combo
        Button)은 주요하게 사용되지는 않으나 Zoomable내에서 잦은 빈도 수로 사용되는
        Button의 Type들 입니다. 각각이 기능이나 목적에 따라 다양하게 구성되어져 있는것이
        특징입니다.
      </p>

      <div className={styles.cardGrid4}>
        {/* D-1 – Text Button */}
        <div className={styles.card}>
          <span className={styles.badge}>D-1</span>
          <div className={styles.cardContentCol}>
            <span className={styles.textBtn}>Button</span>
            <span className={`${styles.textBtn} ${styles.textBtnBlack}`}>Button</span>
          </div>
          <p className={styles.cardLabel}>
            D-1. Extra Button Type - Text Button
          </p>
        </div>

        {/* D-2 – Segment Button */}
        <div className={styles.card}>
          <span className={styles.badge}>D-2</span>
          <div className={styles.cardContentCol}>
            <div className={styles.segmentBtn}>
              <span className={`${styles.segmentItem} ${styles.segmentItemSelected}`}>
                Blade A
              </span>
              <span className={styles.segmentItem}>Blade B</span>
            </div>
            <div className={`${styles.segmentBtn} ${styles.segmentBtnFloating}`}>
              <span className={`${styles.segmentItem} ${styles.segmentItemSelected}`}>
                Weeks
              </span>
              <span className={styles.segmentItem}>Months</span>
            </div>
          </div>
          <p className={styles.cardLabel}>
            D-2. Extra Button Type - Segment Button
          </p>
        </div>

        {/* D-3 – Progress Status */}
        <div className={styles.card}>
          <span className={styles.badge}>D-3</span>
          <div className={styles.cardContentCol}>
            <span className={styles.progressApproved}>Approved</span>
            <span className={styles.progressInReview}>In Review</span>
          </div>
          <p className={styles.cardLabel}>
            D-3. Extra Button Type - Progress Status
          </p>
        </div>

        {/* D-4 – Combo Button */}
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
          <p className={styles.cardLabel}>
            D-4. Extra Button Type - Combo Button
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Primary & Secondary Button
         ═══════════════════════════════════════════ */}

      <h2 className={s.pageTitle}>Primary &amp; Secondary Button</h2>
      <p className={s.pageDescription}>
        Button은 사용자의 성공적 작업 수행을 위해 Button에 따른 시각적 계층 구조에 차이가
        있습니다. 계층 구조에 따른 스타일 가이드를 유의하며, 임의 스타일 추가 및 사용은
        제한합니다. 어떠한 Action을 수행하거나 다른 위치로 이동할때 (navigate to another
        page) 사용됩니다.
      </p>

      <hr className={s.divider} />

      {/* ── Button ── */}
      <h3 className={s.sectionHeading}>Button</h3>
      <p className={s.sectionSubtext}>
        Button은 가장 기본적인 Button으로 중요도와 쓰임새에 따라 세부 속성을 변경해
        사용합니다. 자세한 내용은 Variants와 Table of Figma Properties를 참고합니다.
      </p>

      <div className={styles.previewBox}>
        <div className={styles.dialogCard}>
          <h4 className={styles.dialogTitle}>Delete Task</h4>
          <p className={styles.dialogText}>
            Are you sure you want to delete the &quot;AWZ 1호기 수리&quot;?
          </p>
          <div className={styles.dialogActions}>
            <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`} type="button">
              Button
            </button>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`} type="button">
              Button
            </button>
          </div>
        </div>
      </div>
      <p className={styles.previewCaption}>
        Button 기본 케이스인 Primary 와 Secondary 버튼 조합 적용 예시입니다.
      </p>

      {/* ── Anatomy ── */}
      <h3 className={s.sectionHeading}>Anatomy</h3>
      <div className={styles.anatomyBox}>
        <div className={styles.anatomyDiagram}>
          {/* Badge 2 (top) → Text Label */}
          <div className={styles.anatomyTopGroup}>
            <span className={styles.anatomyBadge}>2</span>
            <div className={styles.anatomyConnectorV} />
          </div>

          {/* Middle row: Badge 1 (left) → Container, Button, Badge 3 (bottom) */}
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

          {/* Badge 3 (bottom) → Icon */}
          <div className={styles.anatomyBottomGroup}>
            <div className={styles.anatomyConnectorV} />
            <span className={styles.anatomyBadge}>3</span>
          </div>
        </div>
      </div>
      <div className={styles.anatomyLabels}>
        <div className={styles.anatomyLabelItem}>
          <span className={styles.anatomyLabelBadge}>1</span>
          <span>Button Container</span>
        </div>
        <div className={styles.anatomyLabelItem}>
          <span className={styles.anatomyLabelBadge}>2</span>
          <span>Text Label</span>
        </div>
        <div className={styles.anatomyLabelItem}>
          <span className={styles.anatomyLabelBadge}>3</span>
          <span>Icon</span>
        </div>
      </div>

      {/* ── Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={styles.variantGrid}>
        {/* Primary */}
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <div className={styles.variantBoxInner}>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`} type="button">
                Button
              </button>
            </div>
          </div>
          <h4 className={styles.variantColHeading}>Primary</h4>
          <p className={styles.variantColDesc}>
            주요 버튼(Primary Buttons)은 페이지 키 액션에 사용하는 Button으로 한 페이지에
            한 번만 사용합니다. 대표적인 예시로 로그인 페이지 내 &apos;로그인&apos; Button과
            Image Quality Check 페이지 내 &apos;Start or Done&apos; Button으로 사용됩니다.
          </p>
        </div>

        {/* Secondary */}
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <div className={styles.variantBoxInner}>
              <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLg}`} type="button">
                Button
              </button>
            </div>
          </div>
          <h4 className={styles.variantColHeading}>Secondary</h4>
          <p className={styles.variantColDesc}>
            보조 버튼(Secondary Button)은 Primary Buttons의 보조로 사용합니다. 대표적인
            예시로 로그인 페이지 내 &apos;Back to Login Button&apos;과 OSD Viewer 페이지 내
            &apos;Reset All Button&apos;에서 사용됩니다.
          </p>
        </div>

        {/* Size */}
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients.png?v=2"
              alt="Button Sizes"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.6)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Size</h4>
          <p className={styles.variantColDesc}>
            사이즈는 높이 기준으로 Large, Medium, Small, xSmall, 2xSmall을 사용합니다.
            사이즈에 따라 폰트 크기, 아이콘 사이즈, 레디어스, 패딩은 상이합니다. 이외
            최소 높이 28 미만(Tiny)은 최소 터치 영역 확보 이슈로 사용을 지양합니다.
          </p>
        </div>
      </div>

      {/* ── Table of Figma Properties ── */}
      <h3 className={s.sectionHeading}>Table of Figma Properties</h3>

      <div className={s.propsTable}>
        <div className={`${styles.propsRow} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>Primary, Secondary</div>
          <div className={s.propsCell}>Primary</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>Size</div>
          <div className={s.propsCell}>Large, Medium, Small, xSmall, 2xSmall</div>
          <div className={s.propsCell}>Medium</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>Default, Hovered, Clicked, Disabled</div>
          <div className={s.propsCell}>Default</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>Icon</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>False</div>
        </div>
      </div>

      {/* ── Spec ── */}
      <h3 className={s.sectionHeading}>Spec</h3>

      <div className={styles.specImageWrap}>
        <img
          src="/images/components/button/Button:Specs.png"
          alt="Button Specs"
          className={styles.specImage}
        />
      </div>

      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>Sizes</h4>
          <p className={styles.variantColDesc}>
            사이즈는 높이 기준으로 Large(48px), Medium(40px), Small(32px), xSmall(28px),
            2xSmall(24px)을 사용합니다. 사이즈에 따라 폰트 크기, 아이콘 사이즈, 레디어스,
            패딩은 상이합니다. 이외 최소 높이 28 미만(Tiny)은 최소 터치 영역 확보 이슈로
            사용을 지양합니다.
          </p>
        </div>

        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>Minimum Width</h4>
          <p className={styles.variantColDesc}>
            Button은 레이블 2글자 이상으로 패딩을 최소 16을 사용합니다. 해당 미만의 값은
            Button의 최소 크기를 준수하지 못하므로 제한합니다. 또한 모달을 제외한 페이지에
            나와있는 버튼은 최소 Width 80px 이상을 사용하는것을 원칙으로 합니다.
          </p>
        </div>

        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>Full Width Buttons</h4>
          <p className={styles.variantColDesc}>
            스크롤 시 Button 위치 값이 고정된 Full Width Button은 버튼을 포함하고 있는
            프레임에따라 패딩값을 결정합니다. OSD Viewer 사용되어지는 Case의 경우 주로
            상하좌우 16px을 사용하고 있는 것이 특징입니다.
          </p>
        </div>
      </div>

      {/* ── Usage & Placement ── */}
      <h3 className={s.sectionHeading}>Usage &amp; Placement</h3>

      {/* Usage Row 1: Rule for Full Width Buttons */}
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img
            src="/images/components/button/Usage & Placement 01.png"
            alt="Rule for Full Width Buttons"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Rule for Full Width Buttons</h4>
          <p className={s.ruleText}>
            일반적으로 사용 되는 버튼의 Width의 최소값(64px, 71px, 80px, 90px)보다 작은
            Width 값을 가지는 경우를 제외하고는 Text Label의 Width 값에 Hug한 상태로 맞춰
            사용되어지는것이 일반적입니다. 예외적으로 위치한 Container의 Remained Width
            값이 사용된 버튼의 Width 값 보다 작은 경우에 Container의 Width 값을 동일하게
            n등분한 값을 Width 값으로 가지는 것으로 합니다. 버튼이 하나 존재 하는 경우에도
            Full Width Button 방식으로 사용될 수 있으며 통일성을 위해 사용되거나 목적성에
            따라 채워 사용 될 수 있습니다.
          </p>
          <p className={styles.ruleSubtext}>(e.g. OSD Viewer, Login)</p>
        </div>
      </div>

      {/* Usage Row 2: Placement of Button Group */}
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img
            src="/images/components/button/Usage & Placement 02.png"
            alt="Placement of Button Group"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Placement of Button Group</h4>
          <p className={s.ruleText}>
            Button의 Width 값은 Text Label의 값에 Hug한 상태로 맞춰 사용되어지는 것이
            일반적입니다. &apos;Rule of Full Width Buttons&apos;의 경우를 만족시키는 영역내에서
            사용되는 Button 혹은 Button Group은 우측 기준으로 정렬되어 사용되어집니다.
            일반적으로 Modal 내에서 많이 사용되어 집니다.
          </p>
        </div>
      </div>

      {/* ── Requirement Feedback ── */}
      <h3 className={s.sectionHeading}>Requirement Feedback</h3>

      {/* Feedback Row 1: Rule for Button Activation */}
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img
            src="/images/components/button/Requirement Feedback 01.png"
            alt="Rule for Button Activation"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Rule for Button Activation</h4>
          <p className={s.ruleText}>
            일반적으로 Modal 내에 사용되어지는 Button은 필수요건을 모두 충족하지 않더라도
            모두 활성화 시키는 것을 기본으로 합니다. 해당 경우 필수요건을 미충족된 상태에서
            Button을 동작시, 미충족 상태에 대한 Alert를 통해 정보를 전달하는 것이
            특징입니다.
          </p>
        </div>
      </div>

      {/* Feedback Row 2: Exception Case of Button Disabled */}
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img
            src="/images/components/button/Requirement Feedback 02.png"
            alt="Exception Case of Button Disabled"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Exception Case of Button Disabled</h4>
          <p className={s.ruleText}>
            Modal 내에 사용되어지는 버튼중 활성화가 아닌 비활성화로 두는 예외 케이스로,
            Button의 동작이 의미하는 Action에 해당하는 Task가 Modal 내에서 명확히 들어나는
            경우로 Export PDF 에서 파일이 Export 되는 Process 중이거나 Remove List 에서
            Checkbox를 선택하지 않은 경우로 현재 두가지로 사용되어 집니다.
          </p>
        </div>
      </div>

      {/* ── Loading Status ── */}
      <h3 className={s.sectionHeading}>Loading Status</h3>

      {/* Loading Row 1: Loading Type */}
      <div className={styles.usageRow}>
        <div className={styles.usageCard}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%" }}>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <span className={styles.loadingStateLabel}>State = Default</span>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`} style={{ width: 80 }} type="button">
                Button
              </button>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`} style={{ width: 100 }} type="button">
                <NLIcon size={16} color="#FAFAFA" />
                Button
              </button>
              <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`} style={{ width: 80 }} type="button">
                Button
              </button>
              <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`} style={{ width: 100 }} type="button">
                <NLIcon size={16} color="#0FBA7F" />
                Button
              </button>
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <span className={styles.loadingStateLabel}>State = Loading</span>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`} style={{ width: 80 }} type="button">
                <span className={styles.spinner}>
                  <SpinnerIcon size={20} color="#FAFAFA" />
                </span>
              </button>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMd}`} style={{ width: 100 }} type="button">
                <span className={styles.spinner}>
                  <SpinnerIcon size={20} color="#FAFAFA" />
                </span>
              </button>
              <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`} style={{ width: 80 }} type="button">
                <span className={styles.spinner}>
                  <SpinnerIcon size={20} color="#0FBA7F" />
                </span>
              </button>
              <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMd}`} style={{ width: 100 }} type="button">
                <span className={styles.spinner}>
                  <SpinnerIcon size={20} color="#0FBA7F" />
                </span>
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 120 }}>
              <span className={styles.loadingTypeLabel}>Type A</span>
              <span className={styles.loadingTypeLabel}>Type B</span>
            </div>
          </div>
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Loading Type</h4>
          <p className={s.ruleText}>
            Loading의 Type의 경우 Primary, Secondary Type에 따라서 다르게 사용이 되며,
            Button 내의 Icon의 여부에 관계없이 Container를 기준으로 동일하게 사용되어
            집니다. Primary Type에서는 Green500 Color의 Container의 위에, Secondary
            Type의 경우는 White Color의 Container 위에 표출됩니다.
          </p>
        </div>
      </div>

      {/* Loading Row 2: Loading Spinner Size */}
      <div className={styles.usageRow}>
        <div className={styles.usageImageCard}>
          <img
            src="/images/components/button/Loading Status.png"
            alt="Loading Spinner Size"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Loading Spinner Size</h4>
          <p className={s.ruleText}>
            Button 내에서 표출되는 Spinner의 경우에 기존 버튼 사이즈 내의 Text Height와
            동일하게 맞춰 표출 되는 것이 특징입니다. Loading 표출시에 Width 값의 경우
            Loading 발생시점 직전에 사용되는 Width와 동일하게 사용하는 것이 특징입니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Tertiary Button (Icon Button)
         ═══════════════════════════════════════════ */}

      <h2 className={s.pageTitle}>Tertiary Button (Icon Button)</h2>
      <p className={s.pageDescription}>
        Icon Button은 별도의 Text Label 없이 Icon으로만 이루어진 버튼입니다.
      </p>

      <hr className={s.divider} />

      {/* ── Icon Button ── */}
      <h2 className={s.sectionHeading}>Icon Button</h2>
      <p className={s.sectionSubtext}>
        Icon Button은 별도의 Text Label 없이 Icon으로만 이루어진 버튼입니다. 가능한
        직관적으로 이해가 가능한 동작에 대한 Text를 포함한 버튼을 사용하는 것을 지향
        하되, 공간이 부족하거나 Icon의 시각적 요소가 사용자가 이해할 수 있을 정도로
        직관적인 경우 아이콘 버튼을 레이블 없이 사용할 수 있습니다. 또한 아이콘 버튼은
        선택 (On) 또는 선택 취소 (OFF)의 액션으로도 사용될수 있습니다. Icon Button은
        Tooltip의 표출을 반드시 하는 것을 원칙으로 합니다.
      </p>

      {/* Preview: Icon Button example image */}
      <div className={s.previewBox}>
        <img
          src="/images/components/button/Icon Button.png"
          alt="Icon Button Preview"
        />
      </div>
      {/* ── Anatomy ── */}
      <h3 className={s.sectionHeading}>Anatomy</h3>
      <div className={s.previewBox}>
        <img
          src="/images/components/button/Anatomy.png"
          alt="Icon Button Anatomy"
        />
      </div>

      {/* ── Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      {/* Type: 3-column grid */}
      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 01.png"
              alt="Primary Type"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Primary Type</h4>
          <p className={styles.variantColDesc}>
            Icon Button은 Primary, Secondary, Tertiary 3 가지로 나뉘어 사용되며
            컨텐츠 별 각 유형을 유동적으로 사용하게 됩니다. Primary Icon Button은
            각 페이지에 중복되어 사용될수 없으며 한 페이지에 하나만 사용하는것을
            지향 합니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 02.png"
              alt="Secondary Type"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Secondary Type</h4>
          <p className={styles.variantColDesc}>
            Icon Button은 Primary, Secondary, Tertiary 3 가지로 나뉘어 사용되며
            컨텐츠 별 각 유형을 유동적으로 사용하게 됩니다. Primary Icon Button은
            각 페이지에 중복되어 사용될수 없으며 한 페이지에 하나만 사용하는것을
            지향 합니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 03.png"
              alt="Tertiary Type"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Tertiary Type</h4>
          <p className={styles.variantColDesc}>
            Tertiary Type Icon Button은 Container, Outlined을 모두 가지고 있지
            않으며 외부 BG Color에 따라 다르게 사용 되어 집니다. 3 가지로 나뉘어
            사용되며 컨텐츠 별 각 유형을 유동적으로 사용하게 됩니다. Primary Icon
            Button은 각 페이지에 중복되어 사용될수 없으며 한 페이지에 하나만
            사용하는것을 지향 합니다.
          </p>
        </div>
      </div>

      {/* State & Size: 2-column grid */}
      <div className={styles.ibVariantGrid2}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 04.png"
              alt="Icon Button State"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            아이콘 버튼의 기본 State는 4가지 (Default, Hover, Clicked, Disabled)로
            구성됩니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Varients 05.png"
              alt="Icon Button Size"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Size</h4>
          <p className={styles.variantColDesc}>
            사이즈는 높이 기준으로 Large, Medium, Small, xSmall, 2xSmall, 3xSmall,
            4xSmall을 사용합니다. 사이즈에 따라 컨테이너 크기, 아이콘 사이즈,
            레디어스, 패딩은 상이합니다.
          </p>
        </div>
      </div>

      {/* ── Table of Figma Properties ── */}
      <h3 className={s.sectionHeading}>Table of Figma Properties</h3>

      <div className={s.propsTable}>
        <div className={`${styles.propsRow} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>Primary, Secondary, Tertiary</div>
          <div className={s.propsCell}>Primary</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>Size</div>
          <div className={s.propsCell}>Large, Medium, Small, xSmall, 2xSmall, 3xSmall, 4xSmall</div>
          <div className={s.propsCell}>Medium</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>Default, Hovered, Clicked, Disabled</div>
          <div className={s.propsCell}>Default</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
         Icon Button in Table
         ═══════════════════════════════════════════ */}

      <h2 className={s.sectionHeading}>Icon Button in Table</h2>
      <p className={s.sectionSubtext}>
        아이콘 버튼 간의 간격은 4px or 8px 로 하며 리스트내에서 헤더와 같이 사용될
        경우 항상 마진에 유의에서 사용하도록 합니다. Tabel 내에서 Icon Button의 조합이
        사용되어지는 경우에는 각 Row에 대한 동작을 수행하고자 할때 사용이 되어지며
        해당 경우 우측을 기준으로 정렬되어 지는 것이 측징입니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/button/Icon Button in Table.png"
          alt="Icon Button in Table"
        />
      </div>

      {/* ═══════════════════════════════════════════
         Popup Tooltip
         ═══════════════════════════════════════════ */}

      <h2 className={s.sectionHeading}>Popup Tooltip</h2>
      <p className={s.sectionSubtext}>
        Popup Tooltip을 표출하기 위한 Information Icon을 포함한 형태의 버튼은 Tertiary
        Type의 Icon Button을 사용하도록 합니다. Status 를 동일하게 가져가며 Header와
        함께 사용되어지는 것이 특징입니다. 해당 Button의 동작 (Action)의 결과는 특정
        부가 설명에 해당하는 Tooltip이 표출 되는 것이며, 해당 동작을 멈추기 위해서는
        Button을 다시 클릭 하거나 다른 영역을 클릭하는 것을 동작해제 (Tooltip이
        사라지는 것) 가 되는 것이 특징입니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/button/Popup Tooltip.png"
          alt="Popup Tooltip"
        />
      </div>

      {/* ═══════════════════════════════════════════
         Usage & Placement (Icon Button)
         ═══════════════════════════════════════════ */}

      <h2 className={s.sectionHeading}>Usage &amp; Placement</h2>

      <div className={styles.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Icon Button : Usage & Placement.png"
            alt="Icon Button Usage & Placement"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Header with Icon</h4>
          <p className={s.ruleText}>
            Header와 함께 사용 되어 지는 Icon으로, Header를 포함한 전체 영역을 Touch
            Point Area로 사용하며, 해당 영역에 대한 동작에 대한 것은 Icon으로 표출하여
            보여줍니다. 해당 경우 Status를 지난 Icon Button을 사용하지 않는 것이
            특징이며, 별도의 Hover, Clicked Status가 없이 Clickable하게 사용됩니다.
          </p>
          <p className={styles.ruleSubtext}>
            (e.g. Item List - Expand Icon, OSD Viewer Panel - Expand Icon)
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Extra Button (Text, Segment, Progress Status, Combo Button)
         ═══════════════════════════════════════════ */}

      <h2 className={s.pageTitle}>Extra Button (Text, Segment, Progress Status, Combo Button)</h2>
      <p className={s.pageDescription}>
        Extra Button Type은 주요하게 사용되지는 않으나 Zoomable내에서 잦은 빈도 수로 사용
        되는 Button의 Type들 입니다. 각각이 기능이나 목적에 따라 Segment Button, Progress
        Status Button, Text Button, Combo Button등으로 다양하게 구성되어져 있는것이
        특징입니다.
      </p>

      <hr className={s.divider} />

      {/* ── Text Button ── */}
      <h3 className={s.sectionHeading}>Text Button</h3>
      <p className={s.sectionSubtext}>
        Text Button은 별도의 Container 및 Outlined 없이 사용되는 버튼으로 Inline
        Button으로 폼을 제외해 Text (Label) 또는 Linked 형태의 언더라인을 같이 결합해
        사용되어지는 것이 특징입니다. 문장의 일부 혹은 단독적으로 사용되며 다른 페이지로
        안내하거나 현재 페이지에서의 이동, 추가적인 정보 표출 등의 용도로 사용됩니다.
      </p>

      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Text Button 01.png"
            alt="Text Button Example"
          />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Text Button 02.png"
            alt="Text Button Label Underline"
          />
        </div>
      </div>

      {/* ── Text Button Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Text Button Varients 01.png"
              alt="Text Button Type"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Type</h4>
          <p className={styles.variantColDesc}>
            Text Button은 Label (Primary, Secondary)와 Link 형태의 2가지로 나뉘어
            사용되며 컨텐츠 별 각 유형을 콘텐츠에 맞게 유동적으로 사용하게 됩니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Text Button Varients 02.png"
              alt="Text Button State"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            텍스트 버튼의 기본 State는 4가지 (Default, Hover, Clicked, Disabled)로
            구성됩니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Text Button Varients 03.png"
              alt="Text Button Size"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Size</h4>
          <p className={styles.variantColDesc}>
            Text Button은 본문과 동일하게 사이즈 기준 Medium, Small, Xsmall을
            사용합니다. 네비게이션 상 이동 (자세히 보기) 목적으로 사용 시 본문과 동일한
            폰트 크기를 사용합니다.
          </p>
        </div>
      </div>

      {/* ── Text Button Table of Figma Properties ── */}
      <h3 className={s.sectionHeading}>Table of Figma Properties</h3>

      <div className={s.propsTable}>
        <div className={`${styles.propsRow} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>Label, Link</div>
          <div className={s.propsCell}>Label</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>Size</div>
          <div className={s.propsCell}>Medium, Small, Xsmall</div>
          <div className={s.propsCell}>Xsmall</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>Default, Hovered, Clicked, Disabled</div>
          <div className={s.propsCell}>Default</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Segment Button ── */}
      <h3 className={s.sectionHeading}>Segment Button</h3>
      <p className={s.sectionSubtext}>
        Segment Button은 페이지 내 유사한 콘텐츠를 그룹화하여 섹션 간 이동시 사용합니다.
        해당 페이지를 벗어나지 않고 섹션별 같은 위계의 콘텐츠 둘러보기가 가능합니다.
        Selected 상태로 사용자 위치를 쉽고 빠르게 나타내므로 시각적 일관성이 필요합니다.
        Segment Button은 Select가 없는 상태가 없으며, 한개의 Item은 항상 Selected 되어
        있는 것이 특징입니다.
      </p>

      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Segment Button 01.png"
            alt="Segment Button Example"
          />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Segment Button 02.png"
            alt="Segment Button Anatomy"
          />
        </div>
      </div>

      {/* ── Segment Button Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Segment Button Varients 01.png"
              alt="Segment Button Type"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Type</h4>
          <p className={styles.variantColDesc}>
            Segment Button은 형태에 따라 Label, Icon의 형태 2가지로 나뉘며, 위치하는
            방식에 따라 Floating=true, Floating=false 의 두가지 방식으로 사용되어 집니다.
            콘텐츠, 해상도에 맞게 유동적으로 사용하게 됩니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Segment Button Varients 02.png"
              alt="Segment Button State"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            Segment Button의 기본 State는 2가지 (Clicked, Unclicked)로 구성됩니다.
            Clicked 상태일 경우 폰트의 weight와 color는 Inter/Medium, Green 500로
            구성됩니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Segment Button Varients 03.png"
              alt="Segment Button Size"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Size</h4>
          <p className={styles.variantColDesc}>
            Segment Button의 Size는 Large, Medium로 2가지로 구성됩니다. 일반적인
            버튼에서 사용하는 Large의 Height의 경우에는 40px로 사용되어지나, Segment
            Button의 경우 36px로 사용됩니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Progress Status Button ── */}
      <h3 className={s.sectionHeading}>Progress Status Button</h3>
      <p className={s.sectionSubtext}>
        Progress Status Button은 사용자의 성공적 작업 수행을 위해 단계별 Button에 따른
        시각적 계층 구조에 차이가 있습니다. 계층 구조에 따른 스타일 가이드를 유의하며, 임의
        스타일 추가 및 사용은 제한합니다. Wind OSD Viewer 화면의 Progress Status에서 상태
        및 작업 흐름에 대한 Workflow에 따른 시각적 버튼을 사용합니다.
      </p>

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

      {/* ── Progress Status Button Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={styles.variantGrid}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Progress Status Button Varients 01.png"
              alt="Progress Status Button Type"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Type</h4>
          <p className={styles.variantColDesc}>
            Progress Status Button은 Approved, In Review 2가지 형태로 나뉘어 사용되며
            진행단계 및 상황 위계에 맞게 각 유형을 유동적으로 사용하게 됩니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Progress Status Button Varients 02.png"
              alt="Progress Status Button State"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            Progress Status Button은 Default, Hover 2가지 상태로 구성됩니다. 진행상황
            단계에 맞게 알맞는 상태를 사용합니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Progress Status Button Varients 03.png"
              alt="Progress Status Button Size"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Size</h4>
          <p className={styles.variantColDesc}>
            Progress Status Button의 Size는 여러 사이즈로 분리가 되지 않으며, 한가지
            Type의 사이즈만 사용되어집니다. Width = 58px, Height = 18px로 고정하여
            사용되어집니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Combo Button ── */}
      <h3 className={s.sectionHeading}>Combo Button</h3>
      <p className={s.sectionSubtext}>
        Dropdown List를 가지는 Button으로 연관된 동작에 대한 Button이 다중으로 제공되어야
        할때 사용 되어 집니다. Wind Do Task 화면에서 여러 종류(Export PDF, CSV, AI Hub)의
        Export를 지원하고자 하는 목적으로 사용 되는 버튼 입니다. Icon을 포함한 Primary
        Button을 사용합니다.
      </p>

      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Combo Button 01.png"
            alt="Combo Button Example"
          />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Combo Button 02.png"
            alt="Combo Button Anatomy"
          />
        </div>
      </div>

      {/* ── Combo Button Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Combo Button Varients 01.png"
              alt="Combo Button Type"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>Type</h4>
          <p className={styles.variantColDesc}>
            Combo Button은 현재 한가지 Type으로 사용되어지고 있으며, 경우에 따라
            Secondary Type의 Combo Button을 구성하여 사용되어 질 수 있습니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.variantBox}>
            <img
              src="/images/components/button/Combo Button Varients 02.png"
              alt="Combo Button State"
              style={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.4)" }}
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            Combo Button은 Default, Hover, Clicked, Disable의 4가지 상태로 구성됩니다.
            Dropdown이 가지는 State와 동일한 상태 값들을 가지는 것이 특징입니다.
          </p>
        </div>
      </div>

      <div className={styles.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/button/Combo Button Menu.png"
            alt="Combo Button Menu"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Combo Button Menu</h4>
          <p className={s.ruleText}>
            Combo Button의 선택시 표출되는 Menu의 경우 Dropdown Menu의 경우 동일한 사이즈의
            Dropdown Menu Component가 사용되어 집니다. Menu내에서 제공되어지는 Item들의 경우
            Button의 Width와 동일한 Width를 가지는 것이 특징입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
