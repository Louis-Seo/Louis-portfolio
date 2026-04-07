import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function ToggleRadioCheckboxPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Selection Controls</h2>
      <p className={s.pageDescription}>
        셀렉션 컨트롤(Selection Controls)은 사용자가 선택 옵션들을 제어할 수
        있도록 돕는 컴포넌트입니다. 다중선택을 위한 체크 박스, 다수의 옵션 중
        하나의 선택을 위한 라디오 버튼, 효과 전환을 위한 토글 스위치로 나뉩니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Components
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Components</h3>
      <p className={s.sectionSubtext}>
        Selection Control은 하나 이상 &amp; 다중 선택이 가능한 Checkbox, 여러
        선택 사항 중 하나만 선택이 가능한 Radio Button, 그리고 즉각적인 상황
        변화를 일으켜 on/off 기능을 하는 Toggle Switch로 구성되어 있습니다. 각
        쓰임새에 따라 적절한 Selection Control을 사용하시면 됩니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toggle-radio-checkbox/Components.png"
          alt="Components - Checkbox, Radio Button, Toggle Switch"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Selection Control Group
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Selection Control Group</h3>
      <p className={s.sectionSubtext}>
        Selection Control의 경우 단일하게 사용되어 지기도 하지만 하나의 목적의
        Group 내에서 같은 종류의 여러개로 구성되어 묶여 사용되어지기도 합니다.
        해당 묶음 내에서 여러개의 Selection Control 은 서로 상호 베타적인관계 혹은
        독립적인 관계를 형성가능 합니다.
      </p>

      <div className={styles.groupRow}>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Checkboxes Group.png"
              alt="Checkboxes Group"
            />
          </div>
          <h4 className={styles.groupColHeading}>Checkboxes Group</h4>
          <p className={styles.groupColDesc}>
            Checkboxes Group의 경우 단일 혹은 다중선택 가능하도록 하는 요소들을
            묶어 선택지로 제공하고자 할때 사용되어지는 것이 특징입니다. 주로 다중
            필터의 목적을 사용 됩니다.
          </p>
          <p className={styles.groupColExample}>
            (e.g. Statistics and Defects Side Filter, Task Settings )
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Radio Buttons Group.png"
              alt="Radio Buttons Group"
            />
          </div>
          <h4 className={styles.groupColHeading}>Radio Buttons Group</h4>
          <p className={styles.groupColDesc}>
            Radio Buttons Group의 경우 여러 선택지 중 하나의 선택만 가능할때
            사용되어지는 것이 특징입니다. 현재 Zoomable Wind 내에서 Radio Buttons
            Group으로 사용되어 지는 부분은 존재하지 않습니다.
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Toggle-Switches Group.png"
              alt="Toggle-Switches Group"
            />
          </div>
          <h4 className={styles.groupColHeading}>Toggle-Switches Group</h4>
          <p className={styles.groupColDesc}>
            Toggle-Switches의 경우 하나의 Component가 Checked / Unchecked
            (On/Off)의 역할을 이미 수행하고 있으며, 단일개로 사용되어 지는 것이
            보편적인 특징이나 Group으로 사용되어지는 경우는 유사한 역할을 수행하는
            각각의 Label을 포함한 Toggle-Switches를 함께 배치하여 사용되어지는
            것이 특징입니다.
          </p>
          <p className={styles.groupColExample}>
            (e.g. Management Settings, Table Settings )
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Selection Control Table
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Selection Control</h3>

      {/* Desktop: 4-column comparison table */}
      <div className={styles.compTableDesktop}>
        <div className={`${styles.propsRow} ${s.propsHeader}`}>
          <div className={s.propsCell} />
          <div className={s.propsCell}>Checkboxes Group</div>
          <div className={s.propsCell}>Radio Button</div>
          <div className={s.propsCell}>Toggle-Switch</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>
            Options
          </div>
          <div className={s.propsCell}>Multiple</div>
          <div className={s.propsCell}>Multiple</div>
          <div className={s.propsCell}>Single</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>
            Selection Case
          </div>
          <div className={s.propsCell}>0 - all (Multiple)</div>
          <div className={s.propsCell}>1 (Single)</div>
          <div className={s.propsCell}>2 (On / Off)</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>
            Default Option
          </div>
          <div className={s.propsCell}>All Unselected</div>
          <div className={s.propsCell}>1 (Single)</div>
          <div className={s.propsCell}>Checked (On)</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>
            Relation btw Other Options
          </div>
          <div className={s.propsCell}>
            Independent of Each Other
            <br />
            <span style={{ fontSize: 12, color: "var(--gray-500)" }}>
              (각각의 요소들이 독립적인 관계)
            </span>
          </div>
          <div className={s.propsCell}>
            Mutually Exclusive
            <br />
            <span style={{ fontSize: 12, color: "var(--gray-500)" }}>
              (다른 요소들과 상호베타적인 관계)
            </span>
          </div>
          <div className={s.propsCell}>
            Independent of Each Other
            <br />
            <span style={{ fontSize: 12, color: "var(--gray-500)" }}>
              (각각의 요소들이 독립적인 관계)
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: row-based comparison cards */}
      <div className={styles.compCardsMobile}>
        {[
          { label: "Options", checkbox: "Multiple", radio: "Multiple", toggle: "Single" },
          { label: "Selection Case", checkbox: "0 - all (Multiple)", radio: "1 (Single)", toggle: "2 (On / Off)" },
          { label: "Default Option", checkbox: "All Unselected", radio: "1 (Single)", toggle: "Checked (On)" },
          { label: "Relation", checkbox: "Independent (독립적)", radio: "Mutually Exclusive (상호베타적)", toggle: "Independent (독립적)" },
        ].map((row) => (
          <div key={row.label} className={styles.compCard}>
            <div className={styles.compCardLabel}>{row.label}</div>
            <div className={styles.compCardValues}>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>Checkbox</span>
                <span className={styles.compCardVal}>{row.checkbox}</span>
              </div>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>Radio</span>
                <span className={styles.compCardVal}>{row.radio}</span>
              </div>
              <div className={styles.compCardItem}>
                <span className={styles.compCardType}>Toggle</span>
                <span className={styles.compCardVal}>{row.toggle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Checkbox
          ══════════════════════════════════════════ */}

      <h2 className={s.sectionHeading}>Checkbox</h2>
      <p className={s.sectionSubtext}>
        Checkbox는 한 개 또는 다수의 독립적인 옵션들이 있어서 사용자의 의사에
        따라 선택하지 않을 수 있고, 하나 또는 여러 개를 선택할 수 있을 때
        사용됩니다. Checkbox가 한 개인 경우 기능을 on/off 하는 용도로 사용할 수
        있습니다.
      </p>

      <div className={s.previewBox} style={{ marginBottom: 0 }}>
        <img
          src="/images/components/toggle-radio-checkbox/Checkbox.png"
          alt="Checkbox"
        />
      </div>
      <p className={styles.previewCaption}>Unchecked / Checked</p>

      {/* ── Anatomy ── */}
      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/toggle-radio-checkbox/Anatomy.png"
          alt="Checkbox Anatomy"
        />
      </div>
      <ul className={styles.anatomyList}>
        <li>1. Container</li>
        <li>2. Label</li>
      </ul>

      <hr className={s.divider} />

      {/* ── Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/State.png"
              alt="Checkbox State"
            />
          </div>
          <h4 className={styles.groupColHeading}>State</h4>
          <p className={styles.groupColDesc}>
            Checkbox는 Checked / Unchecked에 따라 Default, Active, Disabled로
            분류됩니다. 셀렉션 컨트롤 내에서의 Active는 hover 기능으로 간주되어
            사용자에게 최종적으로 보여지는 형상은 Default와 Disabled 상태입니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Size.png"
              alt="Checkbox Size"
            />
          </div>
          <h4 className={styles.groupColHeading}>Size</h4>
          <p className={styles.groupColDesc}>
            Checkbox의 경우 Large, Medium, Small, Xsmall 4가지 사이즈가 있으며
            16x16 사이즈가 디폴트 입니다. 상황에 따라, 요소간의 계층 차이를 두기
            위해 각기 다른 사이즈를 사용할수 있습니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Table of Figma Properties ── */}
      <h3 className={s.sectionHeading}>Table of Figma Properties</h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>Unchecked, Checked</div>
          <div className={s.propsCell}>Unchecked</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>Default, Active, Disabled</div>
          <div className={s.propsCell}>Default</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Spacing ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Spacing.png"
            alt="Checkbox Spacing"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Spacing</h4>
          <p className={s.ruleText}>
            체크박스와 레이블은 Large, Medium, sMedium은 8의 마진값을 가지며
            Small은 4px의 마진값을 가집니다. 선택 시 서로 간섭으로 인한 오류가
            일어나지 않도록 리스트 내 12px의 패딩을 갖습니다. 또한 일반적으로
            Checkbox의 경우 Text와 함께 쓰여지는 경우 Check 아이콘이 왼쪽에
            배치되지만 레이아웃 및 공간적인 이유로 오른쪽 배치또한 가능합니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Usecase ── */}
      <h3 className={s.sectionHeading}>Usecase</h3>

      <div className={styles.groupRow}>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Side Panel Filter (Statistics, Defects).png"
              alt="Side Panel Filter"
            />
          </div>
          <h4 className={styles.groupColHeading}>
            Side Panel Filter (Statistics, Defects)
          </h4>
          <p className={styles.groupColDesc}>
            Data Table에서 사용자가 원하는 데이터를 보기 위한 Filter의 역할로서
            사용되어 집니다.
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Task Settings Farm Selection.png"
              alt="Task Settings Farm Selection"
            />
          </div>
          <h4 className={styles.groupColHeading}>
            Task Settings Farm Selection
          </h4>
          <p className={styles.groupColDesc}>
            동일한 특성을 가진 항목을 다중으로 선택 가능하도록 사용 되어 집니다.
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Sync User name Data.png"
              alt="Sync User name Data"
            />
          </div>
          <h4 className={styles.groupColHeading}>Sync User name Data</h4>
          <p className={styles.groupColDesc}>
            Data Sync에 대한 유무를 선택 하도록 단일 하게 사용되어 집니다.
          </p>
        </div>
      </div>

      {/* ── Multiple Select Option ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Multiple Select Option.png"
            alt="Multiple Select Option"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Multiple Select Option</h4>
          <p className={s.ruleText}>
            다중으로 여러개가 함께 표출되는 Checkbox Group에서 단일 혹은 다중으로
            모두 Selection (Checked)로 표출 가능합니다.
          </p>
        </div>
      </div>

      {/* ── Right and Left Arrangement ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Right and Left Arrangement.png"
            alt="Right and Left Arrangement"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Right and Left Arrangement</h4>
          <p className={s.ruleText}>
            일반적으로 다중으로 Item을 그룹화 하여 사용할때 Checkbox와 Text
            Label의 정렬에 있어서 Checkbox를 좌측에 두어 Item List의 Text 배열을
            동일하게 하여 사용 되어 집니다. Checkbox를 우측에 두어 정렬하는 경우는
            Item List로서 사용되는 경우가 아닌 데이터를 불러오는 경우와 같이
            Opitional 한 Filter로서 단일하게 사용 되어 집니다.
          </p>
        </div>
      </div>

      {/* ── Indeterminate State ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Indeterminate State.png"
            alt="Indeterminate State"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Indeterminate State</h4>
          <p className={s.ruleText}>
            Indeterminate State의 경우 Checkbox의 하위 항목에 대한 값이
            Unchecked와 Checked가 함께 존재할 시에 사용이 되어지며, 상위항목에서의
            Checked State는 모든 하위 항목이 Checked된 경우, Unchecked의 경우
            모든 하위 항목이 Unchecked일 경우 사용되어 집니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Radio Button
          ══════════════════════════════════════════ */}

      <h2 className={s.sectionHeading}>Radio Button</h2>
      <p className={s.sectionSubtext}>
        Radio Button은 상호 간에 베타적인 두 개 이상의 옵션이 있어서 그 중
        하나만을 선택할 수 있을 경우 사용합니다. ※디폴트로 하나는 무조건 선택되어
        있어야 합니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toggle-radio-checkbox/Radio Button.png"
          alt="Radio Button"
        />
      </div>
      <p className={styles.previewCaption}>Unselected / Selected</p>

      {/* ── Anatomy ── */}
      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/toggle-radio-checkbox/Radio Button Anatomy.png"
          alt="Radio Button Anatomy"
        />
      </div>
      <ul className={styles.anatomyList}>
        <li>1. Radio Button</li>
        <li>2. Label</li>
      </ul>

      <hr className={s.divider} />

      {/* ── Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Radio Button State.png"
              alt="Radio Button State"
            />
          </div>
          <h4 className={styles.groupColHeading}>State</h4>
          <p className={styles.groupColDesc}>
            Radio Button은 Selected/Unselected에 따라 Default, Active,
            Disabled로 분류됩니다. Active는 hover 기능으로 간주되어 사용자에게
            최종적으로 보여지는 상태는 Default와 Disabled 입니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Radio Button Size.png"
              alt="Radio Button Size"
            />
          </div>
          <h4 className={styles.groupColHeading}>Size</h4>
          <p className={styles.groupColDesc}>
            Radio Button의 Size는 총 2가지로 Small과 Medium으로 분류가 됩니다.
            함께 사용되는 Label의 사이즈에 따라서 사용 되어지는 Radio Button의
            사이즈가 선택이 됩니다. 16x16px가 디폴트입니다. 하지만 상황에 따라,
            요소간의 계층 차이를 두기 위해 Small 사이즈 사용을 허용합니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Table of Figma Properties ── */}
      <h3 className={s.sectionHeading}>Table of Figma Properties</h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>Unchecked, Checked</div>
          <div className={s.propsCell}>Unchecked</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>Default, Active, Disabled</div>
          <div className={s.propsCell}>Default</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Spacing ── */}
      <h3 className={s.sectionHeading}>Spacing</h3>

      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Radio Button Spacing.png"
            alt="Radio Button Spacing"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Control and Label Spacing</h4>
          <p className={s.ruleText}>
            Radio Button은 컨트롤 아이콘과 레이블 사이에 8px 간격을
            사용합니다. 각 옵션 항목은 선택 시 오인식이나 인접 선택 오류가
            발생하지 않도록 리스트 내 12px 간격을 유지합니다. 기본적으로 Radio
            Button 아이콘은 레이블의 왼쪽에 배치되지만, 레이아웃 및 공간 제약에
            따라 오른쪽 배치 또한 가능합니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Usecase ── */}
      <h3 className={s.sectionHeading}>Usecase</h3>

      {/* ── Select Exactly One ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Radio Button Select Exactly One.png"
            alt="Select Exactly One"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Select Exactly One</h4>
          <p className={s.ruleText}>
            다중으로 여러개가 함께 표출되는 하나의 Radio Button Group 내에서는
            오직 하나의 Radio Button 만이 Selection (Checked State)로 표출
            가능합니다.
          </p>
        </div>
      </div>

      {/* ── Mutually Exclusive Options ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Radio Button Mutually Exclusive Options.png"
            alt="Mutually Exclusive Options"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Mutually Exclusive Options</h4>
          <p className={s.ruleText}>
            Radio Buttons의 경우 상호 베타적인 선택지로 단일 선택만 가능하도록
            제공하기 때문에 제공되는 Radio Button Item List의 경우 포함하는
            Label의 콘텐츠 또한 상호 베타적으로 제공되는 것을 지향합니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Toggle-Switch
          ══════════════════════════════════════════ */}

      <h2 className={s.sectionHeading}>Toggle-Switch</h2>
      <p className={s.sectionSubtext}>
        Toggle-Switch는 상호간에 베타적인 옵션이 있어 각 선택에 따른 효과 전환이
        필요한 경우 사용합니다.
      </p>

      <div className={s.previewBox} style={{ marginBottom: 0 }}>
        <img
          src="/images/components/toggle-radio-checkbox/Toggle-Switch.png"
          alt="Toggle-Switch"
        />
      </div>
      <p className={styles.previewCaption}>Unchecked / Checked</p>

      {/* ── Anatomy ── */}
      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/toggle-radio-checkbox/Toggle-Switch Anatomy.png"
          alt="Toggle-Switch Anatomy"
        />
      </div>
      <ul className={styles.anatomyList}>
        <li>1. Track</li>
        <li>2. Thumb</li>
      </ul>

      <hr className={s.divider} />

      {/* ── Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Toggle-Switch State.png"
              alt="Toggle-Switch State"
            />
          </div>
          <h4 className={styles.groupColHeading}>State</h4>
          <p className={styles.groupColDesc}>
            Toggle Switch의 상태는 총 3가지로 Default, Active, Disabled로 분류가
            되며, Checked / Unchecked (On/Off) 여부에 따라서도 해당 상태를 모두
            가지고 있습니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Toggle-Switch Size.png"
              alt="Toggle-Switch Size"
            />
          </div>
          <h4 className={styles.groupColHeading}>Size</h4>
          <p className={styles.groupColDesc}>
            Toggle Switch의 Size는 총 2가지로 Small과 Medium으로 분류가 됩니다.
            함께 사용되는 Label의 위계와 사이즈에 따라서 사용되어지는 Toggle
            Switch의 사이즈가 선택이 되며, 동일한 Label의 Font Size를 지니더라도
            위계에 따라 사용되는 Toggle Switch의 사이즈가 달라질 수 있습니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Table of Figma Properties ── */}
      <h3 className={s.sectionHeading}>Table of Figma Properties</h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>Off, On</div>
          <div className={s.propsCell}>Off</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>Default, Active, Disabled</div>
          <div className={s.propsCell}>Default</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Spacing ── */}
      <h3 className={s.sectionHeading}>Spacing</h3>

      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Toggle Switch Toggle Alignment and Spacing.png"
            alt="Toggle-Switch Spacing"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Control and Label Spacing</h4>
          <p className={s.ruleText}>
            주로 리스트 내 우측에 위치 하며, Right Padding은 사용되어지는
            Container의 영역과 사이즈에 따라 다르게 사용하며, 일반적으로 Toggle
            Size Medium의 경우 16px, Small의 경우 12px로 두어 사용하는 것을
            지향합니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Usecase ── */}
      <h3 className={s.sectionHeading}>Usecase</h3>

      <div className={styles.groupRow}>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Toggle-Switch Management View Settings.png"
              alt="Management View Settings"
            />
          </div>
          <h4 className={styles.groupColHeading}>Management View Settings</h4>
          <p className={styles.groupColDesc}>
            View Setting에서 각 항목에 해당하는 조건을 on/off 할 것인지 선택하도록
            합니다.
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Toggle-Switch Filter Settings (Statistics).png"
              alt="Filter Settings (Statistics)"
            />
          </div>
          <h4 className={styles.groupColHeading}>
            Filter Settings (Statistics)
          </h4>
          <p className={styles.groupColDesc}>
            보여지는 Table의 Column을 각각의 항목별로 on/off 할 것인지 선택하도록
            합니다.
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toggle-radio-checkbox/Toggle-Switch Table Settings (Defects).png"
              alt="Table Settings (Defects)"
            />
          </div>
          <h4 className={styles.groupColHeading}>
            Table Settings (Defects)
          </h4>
          <p className={styles.groupColDesc}>
            보여지는 Table의 Column을 각각의 항목별로 on/off 할 것인지 선택하도록
            합니다.
          </p>
        </div>
      </div>

      {/* ── Toggle Switch with Label ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Toggle Switch with Label.png"
            alt="Toggle Switch with Label"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Toggle Switch with Label</h4>
          <p className={s.ruleText}>
            일반적으로 해당 Toggle의 수행하는 역할에 대한 설명인 Label과 함께 주로
            사용이 되며 해당 경우 포함되어지는 Container의 영역에 따라서 좌/우를
            기준으로 위치 합니다. 주로 우측에 Toggle Switch를 두는 것이
            일반적입니다.
          </p>
        </div>
      </div>

      {/* ── Toggle Switch Group ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/toggle-radio-checkbox/Toggle Switch Group.png"
            alt="Toggle Switch Group"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Toggle Switch Group</h4>
          <p className={s.ruleText}>
            Toggle Switch의 경우 해당 되는 영역에 대한 On/Off의 기능을 수행하며
            함께 사용되어지는 Item의 요소들의 경우 같은 위계의 Item의 그룹들로
            이루어 지는 것이 특징입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
