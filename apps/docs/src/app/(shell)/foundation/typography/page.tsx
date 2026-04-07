"use client";

import styles from "./page.module.css";

/* ── Typography Scale Data ── */

type TypeRowData = {
  name: string;
  typeface: string;
  size: number;
  weight: string;
  weightNum: number;
  lineHeightPx: number;
};

const TYPE_USAGE_ROWS: TypeRowData[] = [
  { name: "H1", typeface: "Noto Sans Display", size: 32, weight: "Semi Bold", weightNum: 600, lineHeightPx: 40 },
  { name: "H2", typeface: "Noto Sans Display", size: 24, weight: "Semi Bold", weightNum: 600, lineHeightPx: 30 },
  { name: "H3", typeface: "Noto Sans Display", size: 20, weight: "Semi Bold", weightNum: 600, lineHeightPx: 24 },
  { name: "H4", typeface: "Noto Sans Display", size: 18, weight: "Semi Bold", weightNum: 600, lineHeightPx: 22 },
  { name: "H5", typeface: "Noto Sans Display", size: 16, weight: "Semi Bold", weightNum: 600, lineHeightPx: 22 },
  { name: "Subtitle 1 (+btn1)", typeface: "Noto Sans Display", size: 16, weight: "Medium", weightNum: 500, lineHeightPx: 22 },
  { name: "Subtitle 2", typeface: "Noto Sans Display", size: 14, weight: "Semi Bold", weightNum: 600, lineHeightPx: 20 },
  { name: "Subtitle 3 (+btn2)", typeface: "Noto Sans Display", size: 14, weight: "Medium", weightNum: 500, lineHeightPx: 20 },
  { name: "Subtitle 4", typeface: "Noto Sans Display", size: 12, weight: "Semi Bold", weightNum: 600, lineHeightPx: 16 },
  { name: "Subtitle 5 (+btn3)", typeface: "Noto Sans Display", size: 12, weight: "Medium", weightNum: 500, lineHeightPx: 16 },
  { name: "Body 1", typeface: "Noto Sans Display", size: 16, weight: "Regular", weightNum: 400, lineHeightPx: 22 },
  { name: "Body 2", typeface: "Noto Sans Display", size: 14, weight: "Regular", weightNum: 400, lineHeightPx: 20 },
  { name: "Body 3", typeface: "Noto Sans Display", size: 12, weight: "Medium", weightNum: 500, lineHeightPx: 16 },
  { name: "Body 4", typeface: "Noto Sans Display", size: 12, weight: "Regular", weightNum: 400, lineHeightPx: 16 },
  { name: "Body 5", typeface: "Noto Sans Display", size: 10, weight: "Medium", weightNum: 500, lineHeightPx: 14 },
  { name: "Body 6", typeface: "Noto Sans Display", size: 10, weight: "Regular", weightNum: 400, lineHeightPx: 14 },
];


const SCALE_LOGIC_ROWS = [
  { n: 1, calc: "Initial Value 12px", increment: "-", result: 12 },
  { n: 2, calc: "12 + (INT[0/4]+1) x2 = 12+2", increment: "2", result: 14 },
  { n: 3, calc: "14 + (INT[1/4]+1) x2 = 14+2", increment: "2", result: 16 },
  { n: 4, calc: "16 + (INT[2/4]+1) x2 = 16+2", increment: "2", result: 18 },
  { n: 5, calc: "18 + (INT[3/4]+1) x2 = 18+2", increment: "2", result: 20 },
  { n: 6, calc: "20 + (INT[4/4]+1) x2 = 20+4", increment: "4", result: 24 },
  { n: 7, calc: "24 + (INT[5/4]+1) x2 = 14+4", increment: "4", result: 28 },
  { n: 8, calc: "28 + (INT[6/4]+1) x2 = 28+4", increment: "4", result: 32 },
  { n: 9, calc: "32 + (INT[7/4]+1) x2 = 32+2", increment: "4", result: 36 },
  { n: 10, calc: "36 + (INT[8/4]+1) x2 = 36+6", increment: "6", result: 42 },
  { n: 11, calc: "42 + (INT[9/4]+1) x2 = 42+6", increment: "6", result: 48 },
  { n: 12, calc: "48 + (INT[10/4]+1) x2 = 48+6", increment: "6", result: 54 },
];

const WEIGHT_DESCRIPTIONS = [
  { weight: "Semi Bold", description: "헤딩에 사용" },
  { weight: "Medium", description: "일반적인 타이틀 / 내부 강조 / 버튼" },
  { weight: "Regular", description: "일반 바디 텍스트" },
  { weight: "Light", description: "Regular 보다 강조가 안되는 일반 바디 텍스트" },
];

const SPECIMEN_TEXT =
  "NEAR, EARTH, LABORATORY\nABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890~!@#$%^&*()[]{};\u2019\",.&lt;&gt;/?";

const WEIGHT_CARDS = [
  { num: 1, label: "PRETENDARD REGULAR", weight: 400 },
  { num: 2, label: "PRETENDARD MEDIUM", weight: 500 },
  { num: 3, label: "PRETENDARD SEMI BOLD", weight: 600 },
];

const HEADING_ROWS = TYPE_USAGE_ROWS.filter((r) => r.name.startsWith("H")).map((r) => ({
  name: r.name, size: r.size, weight: r.weight, weightNum: r.weightNum, lineHeight: `${r.lineHeightPx}px`,
}));
const SUBTITLE_ROWS = TYPE_USAGE_ROWS.filter((r) => r.name.startsWith("Subtitle")).map((r) => ({
  name: r.name, size: r.size, weight: r.weight, weightNum: r.weightNum, lineHeight: `${r.lineHeightPx}px`,
}));
const BODY_ROWS = TYPE_USAGE_ROWS.filter((r) => r.name.startsWith("Body")).map((r) => ({
  name: r.name, size: r.size, weight: r.weight, weightNum: r.weightNum, lineHeight: `${r.lineHeightPx}px`,
}));

const SCALE_GROUPS = [
  {
    title: "Heading",
    meta: "Pretendard\nSemi Bold - 16px",
    rows: HEADING_ROWS.filter((r) => r.name !== "H5"),
    contextLabel: "Navigation & Dashboard UI",
  },
  {
    title: "Subtitle",
    meta: "Pretendard\nMedium - 14px",
    rows: SUBTITLE_ROWS,
    contextLabel: "Form & Detail Panel UI",
  },
  {
    title: "Body",
    meta: "Pretendard\nRegular - 14px",
    rows: BODY_ROWS,
    contextLabel: "Data Table UI",
  },
];

/* ── UI Context Images ── */

const CONTEXT_MOCKUPS: Record<string, React.ReactNode> = {
  Heading: (
    <>
      <img src="/images/typography/heading-scale.png" alt="Navigation & Dashboard UI" className={`${styles.scaleImage} ${styles.scaleImageLight}`} />
      <img src="/images/typography/heading-scale-dark.png" alt="Navigation & Dashboard UI" className={`${styles.scaleImage} ${styles.scaleImageDark}`} />
    </>
  ),
  Subtitle: (
    <>
      <img src="/images/typography/subtitle-scale.png" alt="Form & Detail Panel UI" className={`${styles.scaleImage} ${styles.scaleImageLight}`} />
      <img src="/images/typography/subtitle-scale-dark.png" alt="Form & Detail Panel UI" className={`${styles.scaleImage} ${styles.scaleImageDark}`} />
    </>
  ),
  Body: (
    <>
      <img src="/images/typography/body-scale.png" alt="Data Table UI" className={`${styles.scaleImage} ${styles.scaleImageLight}`} />
      <img src="/images/typography/body-scale-dark.png" alt="Data Table UI" className={`${styles.scaleImage} ${styles.scaleImageDark}`} />
    </>
  ),
};

/* ── Table Row Component ── */

function TypeUsageRow({ row }: { row: TypeRowData }) {
  const rem = +(row.size / 14).toFixed(3);
  const unitless = +(row.lineHeightPx / row.size).toFixed(row.lineHeightPx % row.size === 0 ? 0 : 2);

  return (
    <tr className={styles.tableRow}>
      <td className={styles.cellName}>
        <span
          style={{
            fontSize: `${row.size}px`,
            fontWeight: row.weightNum,
            lineHeight: `${row.lineHeightPx}px`,
          }}
        >
          {row.name}
        </span>
      </td>
      <td className={styles.cellTypeface}>{row.typeface}</td>
      <td className={styles.cellWeight}>{row.weight}</td>
      <td className={styles.cellSize}>{row.size}</td>
      <td className={styles.cellRem}>{rem}</td>
      <td className={styles.cellLineHeight}>{row.lineHeightPx}</td>
      <td className={styles.cellUnitless}>{unitless}</td>
    </tr>
  );
}


/* ── Main Page ── */

export default function TypographyPage() {
  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <h1 className={styles.pageTitle}>Typography</h1>
        <p className={styles.pageDescription}>
          타이포그래피(Typography)는 서비스와 사용자가 커뮤니케이션하는 주요 요소입니다.
          정의된 타입 스케일과 컬러를 고려하여 적용된 타이포그래피는 콘텐츠의 중요한 정도를
          구분하고, 텍스트 전체의 밸런스를 맞추어 사용자의 프로덕트 경험을 향상시킵니다.
          텍스트 목적과 기능에 따라 서체 및 스타일을 유의해 사용합니다.
        </p>
      </div>

      <hr className={styles.divider} />

      {/* ── Section: Type Usage ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Type Usage</h2>
        <p className={styles.sectionDescription}>
          정의된 스케일은 엄격한 제약이 아닌 권장 가이드라인으로 제공됩니다.
          <br />
          타입 스케일을 지정하면 디자인의 유연성이 제한될 수 있으므로, 이 시스템은 권장 폰트 크기와 굵기를 제안하며 디자이너가 필요에 따라 자유롭게 조합할 수 있도록 합니다.
        </p>
        <p className={styles.sectionDescription} style={{ marginTop: 12 }}>
          다만, 가독성과 접근성을 보장하기 위해 12pt 미만의 폰트 크기는 사용하지 않는 것을 권장합니다.
        </p>

        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeaderRow}>
              <th className={styles.thName}>Scale Category</th>
              <th className={styles.thTypeface}>Typeface</th>
              <th className={styles.thWeight}>Weight</th>
              <th className={styles.thSize}>Font Size (px)</th>
              <th className={styles.thRem}>REM</th>
              <th className={styles.thLineHeight}>Line Height(px)</th>
              <th className={styles.thUnitless}>Unitless Line Height (LH ÷ FS)</th>
            </tr>
          </thead>
          <tbody>
            {TYPE_USAGE_ROWS.map((row) => (
              <TypeUsageRow key={row.name} row={row} />
            ))}
          </tbody>
        </table>
      </section>

      <hr className={styles.divider} />

      {/* ── Section: Type Scale Logic ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Type Scale Logic</h2>
        <p className={styles.sectionDescription}>
          이 타입 스케일은 12px를 시작점으로, 4단계마다 증가 폭이 확장되는 규칙을 기반으로 구성됩니다.
          <br />
          작은 본문 텍스트부터 강조 텍스트와 헤드라인까지 자연스러운 위계를 만들 수 있도록 설계되었으며, 단계가 높아질수록 더 분명한 시각적 대비를 형성하는 것이 특징입니다.
        </p>
        <p className={styles.sectionDescription} style={{ marginTop: 12 }}>
          스케일 계산은 X<sub>n</sub> = X<sub>n-1</sub> + {"{"} INT[(n-2)/4] + 1 {"}"} × 2 공식을 기준으로 하며, 초기 구간은 2px 단위, 중간 구간은 4px 단위, 상위 구간은 6px 단위로 증가합니다.
          <br />
          이를 통해 낮은 단계에서는 미세한 차이로 가독성을 유지하고, 높은 단계에서는 더 강한 강조를 통해 구조적 위계를 명확하게 전달할 수 있습니다.
        </p>

        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeaderRow}>
              <th style={{ width: "10%" }}>n</th>
              <th style={{ width: "40%" }}>Calculation</th>
              <th style={{ width: "20%" }}>Increment</th>
              <th style={{ width: "30%", textAlign: "right" }}>Final Font Size (X<sub>n</sub>)</th>
            </tr>
          </thead>
          <tbody>
            {SCALE_LOGIC_ROWS.map((row) => (
              <tr key={row.n} className={styles.tableRow}>
                <td className={styles.cellSize}>{row.n}</td>
                <td className={styles.cellTypeface}>{row.calc}</td>
                <td className={styles.cellSize}>{row.increment}</td>
                <td className={styles.cellSize} style={{ textAlign: "right" }}>{row.result}px</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr className={styles.divider} />

      {/* ── Section: Type Weight ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Type Weight</h2>
        <p className={styles.sectionDescription}>
          기준 영문 서체는 Pretendard Family Typeface를 사용하고 Type Weight는 Regular(400), Medium(500), Semi Bold(600)으로 사용합니다
        </p>

        <div className={styles.weightCards}>
          {WEIGHT_CARDS.map((item) => (
            <div key={item.label} className={styles.weightCard}>
              <div className={styles.weightCardNum}>{item.num}</div>
              <p
                className={styles.weightCardTitle}
                style={{ fontWeight: item.weight }}
              >
                {item.label}
              </p>
              <p
                className={styles.weightCardSpecimen}
                style={{ fontWeight: item.weight }}
              >
                {SPECIMEN_TEXT}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── Section: Type Scale ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Type Scale</h2>
        <p className={styles.sectionDescription}>
          정의된 스케일을 사용해 화면 내 기본 위계 뿐만 아니라 컴포넌트 내의 위계 또한 구성할 수 있습니다.
        </p>

        <div className={styles.scaleGroups}>
          {SCALE_GROUPS.map((group) => (
            <div key={group.title} className={styles.scaleCard}>
              <div className={styles.scaleCardInner}>
                {/* Left: Type scale preview (hidden on mobile) */}
                <div className={styles.scaleLeft}>
                  <div className={styles.scaleLeftContent}>
                    {group.rows.map((row) => (
                      <span
                        key={row.name}
                        className={styles.scalePreview}
                        style={{
                          fontSize: `${row.size}px`,
                          fontWeight: row.weightNum,
                          lineHeight: row.lineHeight,
                        }}
                      >
                        {row.name}
                      </span>
                    ))}
                  </div>
                  <div className={styles.scaleMeta}>
                    <span className={styles.scaleMetaText}>{group.meta}</span>
                  </div>
                </div>

                {/* Right: UI Context Mockup */}
                <div className={styles.scaleRight}>
                  {CONTEXT_MOCKUPS[group.title] ?? (
                    <div className={styles.scaleContextPlaceholder}>
                      <span className={styles.scaleContextLabel}>
                        {group.contextLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── Section: Weight Usage ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Weight Usage</h2>

        <div className={styles.weightUsageTable}>
          {WEIGHT_DESCRIPTIONS.map((item) => (
            <div key={item.weight} className={styles.weightUsageRow}>
              <span className={styles.weightUsageLabel}>{item.weight}</span>
              <span className={styles.weightUsageDesc}>{item.description}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── Section: Usage Notes ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Usage Notes</h2>

        <div className={styles.notesList}>
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>네비게이션 바 (예외 케이스)</span>
            <p className={styles.noteText}>
              메인 네비게이션 바 Subtitle 1, Body 1 사용 (Letter Spacing - 0.5%)
            </p>
          </div>
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>Subtitle, Body Text (예외 케이스)</span>
            <p className={styles.noteText}>
              서브 타이틀, 바디 텍스트 사용시 두줄 처리되는 경우{" "}
              <br />
              12px - Line Height 120% / 14, 16px - Line Height 140%
            </p>
          </div>
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>모달 (Modal)</span>
            <p className={styles.noteText}>
              Header 24, Subtitle Medium 14, Info Text Regular 14
            </p>
          </div>
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>툴팁 (Tooltip)</span>
            <p className={styles.noteText}>
              보통 10px으로 사용
            </p>
          </div>
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>알럿 (Alert)</span>
            <p className={styles.noteText}>
              Title - 14px / Medium &nbsp;|&nbsp; Body - 12px / Regular
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
