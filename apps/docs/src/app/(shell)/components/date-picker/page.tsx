import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function DatePickerPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Date Picker</h2>
      <p className={s.pageDescription}>
        Date와 Time을 선택하는 Date &amp; Time Picker는 사용자가 단일 혹은
        일정 기간에 대한 날짜(Date), 년도(Year) 시간(Time)을 선택 가능하도록
        합니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Anatomy
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/date-picker/Anatomy.png"
          alt="Date Picker Anatomy"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Components
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Components</h3>
      <p className={s.sectionSubtext}>
        Date Picker는 특정 날짜를 선택하는 Date Picker, 특정 년도를 선택하는
        Year Picker, 그리고 날짜와 구체적인 시간을 선택하는 Date and Time
        Picker로 구성되어져 있습니다. 일반적으로 Schedule Icon을 포함한
        Dropdown의 Menu 항목으로 표출됩니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/date-picker/Components.png"
          alt="Date Picker Components"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Table of Figma Properties
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>
        Table of Figma Properties - Date Picker with Dropdown
      </h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>
            Default, Hover, Clicked, Disabled, Selected, Selet Hover, Select
            Disabled, Select Clicked
          </div>
          <div className={s.propsCell}>Default</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Size</div>
          <div className={s.propsCell}>Large, Medium, Small</div>
          <div className={s.propsCell}>-</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Open</div>
          <div className={s.propsCell}>True, False</div>
          <div className={s.propsCell}>False</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Menu Type</div>
          <div className={s.propsCell}>Date, Year, Date and Time</div>
          <div className={s.propsCell}>-</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Sizing
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Sizing</h3>

      {/* ── Width & Padding ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/date-picker/Width & Padding.png"
            alt="Width & Padding"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Width &amp; Padding</h4>
          <p className={s.ruleText}>
            Date Picker는 일반적인 Dropdown Menu와 달리 콘텐츠 길이에 따라
            가변적으로 확장되지 않고, 고정된 Width를 기준으로 사용됩니다. 외곽
            영역은 12px Padding을 기준으로 구성되며, 이를 통해 내부 Calendar
            Grid와 Header 영역이 안정적인 간격 안에서 배치되도록 합니다.
          </p>
        </div>
      </div>

      {/* ── Internal Spacing ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/date-picker/Internal Spacing.png"
            alt="Internal Spacing"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Internal Spacing</h4>
          <p className={s.ruleText}>
            Date Picker 내부 요소는 Header, Navigation Control, Calendar Cell
            간의 간격 규칙에 따라 정렬됩니다. 상단 Header 영역과 본문 Grid는
            명확한 간격 체계를 유지하며, 각 Cell 사이의 간격 또한 일관된 Spacing
            Rule을 따릅니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Alignment
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Alignment</h3>
      <p className={s.sectionSubtext}>
        기본이 되는 정렬 상태는 Dropdown의 왼쪽을 기준으로 정렬하는 것이며,
        화면상의 Barrier가 있는 시에는 우측 정렬을 하는 것으로 합니다. 우측
        정렬에 해당하는 Barrier가 적용되는 상태는 Dropdown Width가 Date Picker
        Width 보다 작은 경우에 해당되며 Dropdown의 Position이 화면의 우측
        가장자리에 위치하여 Date Picker의 영역에 방해가 되는 경우 우측으로
        정렬되어 집니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/date-picker/Alignment.png"
          alt="Date Picker Alignment"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Picker
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Picker</h3>

      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={styles.previewBoxTransparent}>
            <img
              src="/images/components/date-picker/Type.png"
              alt="Picker Type"
            />
          </div>
          <h4 className={styles.variantColHeading}>Type</h4>
          <p className={styles.variantColDesc}>
            Date Picker에는 Time, Day 그리고 Year를 선택하기 위한 3가지 타입이
            있으며 Time 그리고 Day의 경우 별도의 Picker Component를 정의해
            사용되어지며, Year의 경우 Design System 내의 Chip Component를 그대로
            사용하는 것이 특징입니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={styles.previewBoxTransparent}>
            <img
              src="/images/components/date-picker/State.png"
              alt="Picker State"
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            Date Picker에 사용되는 Time, Day 그리고 Year의 Picker중 Year의 경우
            Chip으로 사용되며, Chip에서 정의 되어지는 상태와 동일하게 사용이
            되어 집니다. Day의 경우 Placeholder, Default, Hover, Current, 그리고
            Selected로 5가지로 사용이 되어지며, Time의 경우 Day의 5가지 상태 중
            Current 상태를 제외한 4가지로 사용 되어 집니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Usecase
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Usecase</h3>

      <div className={styles.variantsRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/date-picker/Usecase 01.png"
            alt="Create Project / Task (Modal)"
          />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/date-picker/Usecase 02.png"
            alt="Project / Task Detail (Drawer)"
          />
        </div>
      </div>
    </div>
  );
}
