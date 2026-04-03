import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function InputPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Input</h2>
      <p className={s.pageDescription}>
        Input은 Text를 입력하고 편집 할 수 있는 Component로 Text를 입력하는
        Text Input, Text Input with Icon 그리고 Text 입력을 통해서 특정 값을
        Search하는 역할을 하는 Search Input이 있습니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Anatomy
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/input/Anatomy.png"
          alt="Input Anatomy"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Dropdown Type
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Dropdown Type</h3>
      <p className={s.sectionSubtext}>
        Dropdown은 구성요소인 Menu Item을 사용하여 페이지의 콘텐츠를
        필터링하거나 정렬을 하기 위해서 사용됩니다. 해당 컴포넌트는 Dropdown
        Button의 유형에 따라 Primary Type (Label Dropdown), Secondary Type
        (Avatar and Badge Dropdown) 그리고 Tertiary Type (Non-Outlined
        Dropdown)으로 3가지로 분류합니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/input/Dropdown Type .png"
          alt="Input Dropdown Type"
        />
      </div>

      {/* ── Comparison Table ── */}
      <div className={s.propsTable}>
        <div className={`${styles.propsRow} ${s.propsHeader}`}>
          <div className={s.propsCell} />
          <div className={s.propsCell}>Primary Type</div>
          <div className={s.propsCell}>Secondary Type</div>
          <div className={s.propsCell}>Extra Type</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>
            Field Type
          </div>
          <div className={s.propsCell}>Text</div>
          <div className={s.propsCell}>Text</div>
          <div className={s.propsCell}>Text (Numerical Type)</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>
            Extra Composition
          </div>
          <div className={s.propsCell}>
            Leading Icon, Clear All Icon Button
          </div>
          <div className={s.propsCell}>-</div>
          <div className={s.propsCell}>-</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>
            Characteristics
          </div>
          <div className={s.propsCell}>
            Primary Type은 가장 흔하게 사용되는 형태로, Field의 값이 Text로만
            구성되어진 Label Dropdown과 Icon과 Text가 함께 Field값으로
            사용되는 Label with Icon Dropdown으로 구성되어집니다.
          </div>
          <div className={s.propsCell}>
            Input의 Outline이 표출이 되지 않는 상태로 Focused 상태가 되었을때
            Primary Type의 Text (with Icon) Input 형태가 사용되는 형태로
            Table 혹은 List의 형태에서 사용되어 집니다.
          </div>
          <div className={s.propsCell}>
            Primary와 Secondary 내에 포함되지 않는 형태로, Text Area, Comment
            Text Input, 그리고 Numerical Text Input가 주요하게 사용됩니다.
          </div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Components
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Components</h3>
      <p className={s.sectionSubtext}>
        Input은 스타일, 쓰임새 그리고 채워지는 Filed의 형태에 따라서 Primary
        Type, Secondary Type 2가지로 분류되는데, 그 안에서도 사용되는 방식에
        따라서 Text (with Icon) Input, Search Input 세부항목으로 분리되어
        사용됩니다.
      </p>

      {/* ── Text (with Icon) Input ── */}
      <h3 className={s.typeHeading}>Text (with Icon) Input</h3>
      <p className={s.sectionSubtext}>
        Primary Type은 가장 흔하게 사용되는 타입으로, Field의 값이 Text로만
        구성되어진 Label Dropdown과 Icon과 Text가 함께 Field값으로 사용되는
        Label with Icon Dropdown으로 구성되어집니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/input/Primary Type.png"
          alt="Primary Type"
        />
      </div>

      {/* ── Secondary Type ── */}
      <h3 className={s.typeHeading}>Secondary Type</h3>
      <p className={s.sectionSubtext}>
        Secondary Type은 Input의 Outline이 표출이 되지 않는 상태로 Focused
        상태가 되었을때 Primary Type의 Text (with Icon) Input 형태가 사용되는
        타입입니다. Table Input과 List Input으로 2가지로 분류하여 사용됩니다.
        Table Dropdown의 경우 해당 영역의 일정 부분 Padding이 제공된 상태에서
        Input 영역을 제공하는 것이 특징이며, List Input의 경우 List 한 Cell의
        영역을 모두 차지하여 (Padding=0) 사용하는 것이 특징입니다.
      </p>

      <div className={s.previewRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Table Input.png"
            alt="Table Input"
          />
        </div>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/List Input.png"
            alt="List Input"
          />
        </div>
      </div>

      {/* ── Extra Type ── */}
      <h3 className={s.typeHeading}>Extra Type</h3>
      <p className={s.sectionSubtext}>
        Extra Type은 Primary와 Secondary 내에 포함되지 않는 타입으로, 최대
        Height를 기준으로 작성되는 Input에 따라 Height가 유동적인 Description
        Text Area와 Height를 고정한 상태로 사용되는 Comment Text Input, 그리고
        Numerical Data 입력시에만 사용되는 Numerical Text Input이 있습니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/input/Extra Type.png"
          alt="Extra Type"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Varients
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/State.png"
              alt="Input State"
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            Input의 State는 4가지 (Disabled, Default, Hover, Focused)로 구성
            되어져 있습니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Size.png"
              alt="Input Size"
            />
          </div>
          <h4 className={styles.variantColHeading}>Size</h4>
          <p className={styles.variantColDesc}>
            사이즈는 Height를 기준으로 Large, Medium, Small을 사용합니다.
            Width의 경우는 유동적입니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Sizing
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Sizing</h3>

      {/* ── Minimum Width ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Minimum Width.png"
            alt="Minimum Width"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Minimum Width</h4>
          <p className={s.ruleText}>
            Width의 경우 일반적으로 들어가는 영역에 따라서 Flexible하게 구성이
            되어 지며 Minimum Width는 160px를 최소값으로 가집니다.
          </p>
        </div>
      </div>

      {/* ── Text Overflow ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Text Overflow.png"
            alt="Text Overflow"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Text Overflow</h4>
          <p className={s.ruleText}>
            Input에서 text의 값이 넘치는 경우 두가지 방식으로 표현 됩니다.
            height를 고정한 상태로 text를 &apos;...&apos;을 사용하여 축약하는
            방식, Input의 주어진 Width보다 넘치는 text 값을 줄바뀜하여
            표기해주는 방식으로 기능의 특징이나 목적에 따라서 선택적으로
            사용되게 됩니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Table of Figma Properties - Input
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>
        Table of Figma Properties - Input
      </h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>Primary, Secondary, Tertiary</div>
          <div className={s.propsCell}>Primary</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Size</div>
          <div className={s.propsCell}>Large, Medium, Small</div>
          <div className={s.propsCell}>Medium</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>
            Default, Hover, Focused, Disabled
          </div>
          <div className={s.propsCell}>Default</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Filled</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>False</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Search</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>False</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Clear All (Cancel Icon)</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>False</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Icon</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>False</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Search
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Search</h3>
      <p className={s.sectionSubtext}>
        Search Input을 Text의 입력을 통해서 원하는 정보를 찾을 수 있습니다.
        Search의 경우 다른 Input Component와 다르게 &apos;Fill=On&apos; 일 경우
        Cancle (Clear All) Icon Btn을 표출하는 것이 특징입니다.
      </p>

      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Text Input with Field Label.png"
              alt="Text Input with Field Label"
            />
          </div>
          <h4 className={styles.variantColHeading}>Text Input with Field Label</h4>
          <p className={styles.variantColDesc}>
            특정 페이지에서 항목 검색을 위해 사용되는 경우로 Container Outline을
            가지는 형태
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Text Input without Field Label.png"
              alt="Text Input without Field Label"
            />
          </div>
          <h4 className={styles.variantColHeading}>Text Input without Field Label</h4>
          <p className={styles.variantColDesc}>
            다른 컴포넌트 안에서의 아이템을 검색을 위해 사용 되는 경우로,
            Underline을 가지는 형태
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Text (with Icon) Input
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Text (with Icon) Input</h3>
      <p className={s.sectionSubtext}>
        사용자가 Text를 필드에 입력이 가능하도록 표시 됩니다. 일반적으로 Field
        Lable과 함께 사용이 됩니다.
        <br />
        (e.g. OSD Viewer Panel의 Status, Comment 등의 Text 입력, History
        Panel의 Text 입력, Login 부분의 입력)
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/input/Text Input with Label.png"
          alt="Text Input with Label"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Table / List Input
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Table / List Input</h3>
      <p className={s.sectionSubtext}>
        Table 혹은 List 내에서 즉각적으로 수정이 가능하도록 합니다. Table 및
        List에서 사용되는 Input의 경우 Hover, Focused 상태에서 기존 Primary
        Type의 Input과 동일한 상태로 표출 되는 것이 특징입니다.
      </p>

      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Text Input in Table.png"
              alt="Text Input in Table"
            />
          </div>
          <h4 className={styles.variantColHeading}>Text Input in Table</h4>
          <p className={styles.variantColDesc}>
            Table 내에서의 콘텐츠를 수정하기 위한 목적으로 사용되어 집니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Text Input in List.png"
              alt="Text Input in List"
            />
          </div>
          <h4 className={styles.variantColHeading}>Text Input in List</h4>
          <p className={styles.variantColDesc}>
            List 내에서의 콘텐츠를 수정하기 위한 목적으로 사용되어 집니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Numerical Input
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Numerical Input</h3>
      <p className={s.sectionSubtext}>
        Value 형태의 값만 입력이 가능한 Input으로 별도의 Label과 함께 사용되지
        않아 우측에 일정 간격을 둔채로 Unit과 함께 표출됩니다.
      </p>

      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Numerical Input with unit.png"
              alt="Numerical Input with unit"
            />
          </div>
          <h4 className={styles.variantColHeading}>Numerical Input with unit</h4>
          <p className={styles.variantColDesc}>
            단위와 함께 사용되는 형태로 별도의 다른 요소 (checkbox, slider,
            etc..)등과 함께 사용
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/State of Numerical Input.png"
              alt="State of Numerical Input"
            />
          </div>
          <h4 className={styles.variantColHeading}>State of Numerical Input</h4>
          <p className={styles.variantColDesc}>
            Disabled, Default, Hover, 그리고 Focused로 4가지 상태를 가지며 각
            상태별 Filled 그리고 Unfilled로 데이터가 차있는 경우와 아닌 2가지로
            존재하며 Unfilled일 경우에 표출 되는 Placeholder의 경우에 따라
            &apos;0&apos;, &apos;min&apos; 그리고 &apos;max&apos; 로 3가지 값을
            가집니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Description / Comment
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Description / Comment</h3>
      <p className={s.sectionSubtext}>
        Description 및 Comment 패턴은 텍스트 정보를 표시하거나 사용자의 의견을
        입력받는 상황에서 사용됩니다. 표현 목적에 따라 읽기 중심의 Text Area와
        입력 중심의 Text Input으로 구분되며, 사용 맥락에 따라 컨테이너 높이가
        유동적으로 확장되거나 고정된 높이 내에서 동작하도록 설계됩니다.
        <br /><br />
        이를 통해 동일한 텍스트 기반 컴포넌트라도 화면의 목적과 사용 흐름에 맞는
        일관된 입력 경험을 제공할 수 있습니다.
      </p>

      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Description Text Area.png"
              alt="Description Text Area"
            />
          </div>
          <h4 className={styles.variantColHeading}>Description Text Area</h4>
          <p className={styles.variantColDesc}>
            설명성 텍스트를 읽기 쉬운 형태로 전달하기 위해 사용됩니다. 주로 안내
            문구, 상태 설명, 부가 정보와 같이 읽기 중심의 콘텐츠에 활용되며,
            내용 길이에 따라 1줄 또는 2줄 이상의 형태로 확장하여 사용할 수
            있습니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Description Text Input.png"
              alt="Description Text Input"
            />
          </div>
          <h4 className={styles.variantColHeading}>Description Text Input</h4>
          <p className={styles.variantColDesc}>
            사용자가 설명이나 상세 내용을 직접 입력하는 경우에 사용됩니다. 특히
            History Panel과 같이 높이가 고정된 영역에서는 전체 패널 구조를 유지한
            상태에서 입력이 이루어지도록 설계되는 것이 특징입니다.
          </p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Comment Text Area .png"
              alt="Comment Text Area"
            />
          </div>
          <h4 className={styles.variantColHeading}>Comment Text Area</h4>
          <p className={styles.variantColDesc}>
            자유로운 길이의 의견이나 코멘트를 입력받기 위해 사용됩니다. 입력되는
            텍스트 양에 따라 컨테이너 높이가 함께 확장되며, 여러 줄의 내용을
            자연스럽게 수용할 수 있습니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/input/Commnet Text Input .png"
              alt="Comment Text Input"
            />
          </div>
          <h4 className={styles.variantColHeading}>Commnet Text Input</h4>
          <p className={styles.variantColDesc}>
            짧은 코멘트나 빠른 응답 입력에 사용됩니다. 입력 필드의 높이는
            고정되며, 제한된 영역 안에서 간결하고 효율적인 입력 경험을 제공하는
            것이 특징입니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Usage & Placement
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Usage &amp; Placement</h3>
      <p className={s.sectionSubtext}>
        Input의 경우 Form의 입력 형식에서 많이 사용이 되며, Dropdown과 함께 주로
        사용되어 집니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/input/Usage & Placement.png"
          alt="Usage & Placement"
        />
      </div>

      {/* ── Label ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Usage & Placement Label.png"
            alt="Label"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label</h4>
          <p className={s.ruleText}>
            Dropdown이 포함된 입력 Form의 형태에서 Dropdown 항목에 대한 Label이
            함께 사용됩니다. Subtitle 3 (Inter, Medium, 14px) 가 함께 사용 되며
            해당 Required, Error, 그리고 부가적인 정보가 필요한 Information의
            형태로 사용 가능 합니다. Label을 포함한 Dropdown 및 Input의 조합은
            여러개가 함께 사용되는 경우가 많습니다. Label과 Dropdown 사이의 간격은
            8px, 각 요소 사이의 간격을 가로 배열시 24px, 세로 배열시 32px로 두고
            배열하여 사용됩니다. 세로 형태로만 배열되는 형식일 경우 각 요소 사이의
            간격을 16px로 배열하는 것이 특징입니다.
          </p>
        </div>
      </div>

      {/* ── Label: Sync ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Usage & Placement Label- Sync.png"
            alt="Label Sync"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label: Sync</h4>
          <p className={s.ruleText}>
            Label의 우측에 위치하게 되는 Sync Checkbox의 경우 해당 Input에
            입력하게될 데이터 정보를 연동하여 자동으로 Sync 해주는 역할로
            사용됩니다.
          </p>
        </div>
      </div>

      {/* ── Label: Information ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Usage & Placement Label- Information.png"
            alt="Label Information"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label: Information</h4>
          <p className={s.ruleText}>
            해당 입력 값에 대한 부가적인 정보를 사용자에게 제공하고자 할때
            사용됩니다.
          </p>
        </div>
      </div>

      {/* ── Label: Required ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Usage & Placement Label_ Required.png"
            alt="Label Required"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label: Required</h4>
          <p className={s.ruleText}>
            해당 입력 값이 필수 값인 경우를 표기하기 위해서 사용 됩니다. Label과
            4px 간격을 두고 표기하는 것이 특징이며 필수 값에는
            &apos;*&apos;을 표기하고, 필수가 아닌 선택값일 경우에는 별도의 표기
            없이 Label만 사용하는 것이 특징입니다. &apos;*&apos;의 값은 Body
            2(Inter, Regular, 14px)를 사용하며 Text의 사이즈는 보통 Label의 값과
            동일하게 가져가는 것이 특징입니다.
          </p>
        </div>
      </div>

      {/* ── Label: Error(Alert) ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Usage & Placement Label_ Error(Alert).png"
            alt="Label Error"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label: Error(Alert)</h4>
          <p className={s.ruleText}>
            해당 입력 값에 대한 에러(alert)을 띄우는 경우로, 입력값에 대한 필수
            요건에 대한 설명을 표출해 주는 것이 특징입니다. 별도의 Action (e.g.
            Confrim Button)후에 표출되는 것이 특징이며 Dropdown Button의
            Outline의 색상과 함께 Text Alert을 함께 표출 해주는 것이
            특징입니다. Error 상태의 Dropdown Button Outlined Color: Red500을
            사용하며, Medium 사이즈의 Alert를 사용합니다.
          </p>
        </div>
      </div>

      {/* ── Label Size ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Usage & Placement Label Size.png"
            alt="Label Size"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label Size</h4>
          <p className={s.ruleText}>
            Form에 사용되는 Label이 포함된 Input의 경우 Large Size와 Medium
            Size의 Primary Type의 Text Input이 사용 되어 집니다. 각 사이즈별
            Label의 Typography를 다르게 사용하는 것이 특징입니다.
          </p>
        </div>
      </div>

      {/* ── Unit ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/input/Usage & Placement Unit.png"
            alt="Unit"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Unit</h4>
          <p className={s.ruleText}>
            Input의 들어가는 값이 Value일 경우, 해당 값의 단위 정보를 Label에
            표출하는 것을 원칙으로 합니다. 표출시 Label (Unit)의 방식으로 괄호를
            이용하여 표기 하는 것이 특징입니다. Numerical Input의 경우 별도의
            Label이 함께 사용되는 경우가 없기 때문에 해당 Input에 단위 표기가
            필요한 경우 우측 바깥쪽에 4px의 간격을 두고 위치 시키는 것이
            특징입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
