import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function DropdownPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Dropdown</h2>
      <p className={s.pageDescription}>
        Dropdown은 특정 옵션을 선택하거나 페이지 내 정보를 필터링하거나 정렬하는 데 사용
        됩니다. 선택 가능한 옵션을 표출하는 Dropdown Menu와 각 구성요소인 Item으로 구성
        되어져 있습니다. Dropdown Menu를 열 수 있음을 나타내는 Icon과 함께 사용됩니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h3 className={s.sectionHeading}>Anatomy</h3>

      {/* 이미지: Anatomy.png */}
      <div className={s.previewBox}>
        <img
          src="/images/components/dropdown/Anatomy.png"
          alt="Dropdown Anatomy"
        />
      </div>

      <ul className={styles.anatomyList}>
        <li>1. Dropdown Container</li>
        <li>2. Dropdown Field</li>
        <li>3. Arrow Icon</li>
        <li>4. Dropdown Button</li>
        <li>5. Dropdown Menu</li>
        <li>6. Menu Item</li>
        <li>7. Selected Item Field</li>
      </ul>

      {/* ── 2. Extra Type ── */}
      <h3 className={s.typeHeading}>Extra Type</h3>
      <p className={styles.typeDescription}>
        Dropdown은 구성요소인 Menu Item을 사용하여 페이지의 콘텐츠를 필터링하거나 정렬을
        하기 위해서 사용됩니다. 해당 컴포넌트는 Dropdown Button의 유형에 따라 Primary Type
        (Label Dropdown), Secondary Type (Avatar and Badge Dropdown) 그리고 Tertiary Type
        (Non-Outlined Dropdown)으로 3가지로 분류합니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/dropdown/Extra Type.png"
          alt="Dropdown Extra Type"
        />
      </div>

      {/* ── Comparison Table ── */}
      <div className={s.propsTable}>
        <div className={`${styles.propsRow} ${s.propsHeader}`}>
          <div className={s.propsCell} />
          <div className={s.propsCell}>Primary Type</div>
          <div className={s.propsCell}>Secondary Type</div>
          <div className={s.propsCell}>Tertiary Type</div>
          <div className={s.propsCell}>Extra Type</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>Field Type</div>
          <div className={s.propsCell}>Text</div>
          <div className={s.propsCell}>Avatar with Text, Badge</div>
          <div className={s.propsCell}>Text, Avatar with Text, Badge</div>
          <div className={s.propsCell}>Icon</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>Selected Item</div>
          <div className={s.propsCell}>Single Selected</div>
          <div className={s.propsCell}>Multi/Single Selected</div>
          <div className={s.propsCell}>Multi/Single Selected</div>
          <div className={s.propsCell}>Single Selected</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>Extra Composition</div>
          <div className={s.propsCell}>x</div>
          <div className={s.propsCell}>Multi Selected Count Badge</div>
          <div className={s.propsCell}>Multi Selected Count Badge</div>
          <div className={s.propsCell}>x</div>
        </div>
        <div className={styles.propsRow}>
          <div className={s.propsCell} style={{ fontWeight: 600 }}>Characteristics</div>
          <div className={s.propsCell}>
            가장 일반적으로 사용 되는 타입으로, 표출되는 Item의 형태가 Text 혹은 Icon으로
            구성되어져 있습니다.
          </div>
          <div className={s.propsCell}>
            Field에 포함되는 Item의 형태가 Text Type가 아닌 다양한 컴포넌트로 구성된 형태로
            Avatar 및 Badge가 대표적으로 사용 됩니다.
          </div>
          <div className={s.propsCell}>
            Default 상태의 Dropdown Container의 Outline이 없는 형태로, 내부 Field만 표출이
            되는 형태로 Table 혹은 List의 형태에서 사용되어 집니다.
          </div>
          <div className={s.propsCell}>
            Dropdown Button의 형태가 Icon Button으로 제공이 되는 타입이며, Menu의 경우 기존의
            Primary, Secondary에서 사용되는 Menu의 형태가 사용 됩니다.
          </div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Components
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Components</h3>
      <p className={s.sectionSubtext}>
        Dropdown은 스타일, 쓰임새 그리고 채워지는 Field의 형태에 따라서 Primary Type (Label
        Dropdown), Secondary Type (Avatar and Badge Dropdown), Tertiary Type (Non-Outlined
        Dropdown) 그리고 Extra Type으로 분류되어 사용됩니다.
      </p>

      {/* ── Primary Type ── */}
      <h3 className={s.typeHeading}>Primary Type</h3>
      <p className={styles.typeDescription}>
        Primary Type은 가장 흔하게 사용되는 타입으로, Field의 값이 Text로만 구성되어진 Label
        Dropdown과 Icon과 Text가 함께 Field값으로 사용되는 Label with Icon Dropdown으로
        구성되어집니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/dropdown/Primary Type.png"
          alt="Primary Type"
        />
      </div>

      {/* ── Secondary Type ── */}
      <h3 className={s.typeHeading}>Secondary Type</h3>
      <p className={styles.typeDescription}>
        Secondary Type은 Field의 값에 Text가 아닌 별도의 Component가 사용되는 경우이며,
        Avatar와 Badge가 주로 함께 사용 됩니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/dropdown/Secondary Type.png"
          alt="Secondary Type"
        />
      </div>

      {/* ── Tertiary Type ── */}
      <h3 className={s.typeHeading}>Tertiary Type</h3>
      <p className={styles.typeDescription}>
        Tertiary Type은 Dropdown의 Outline이 표출이 되지 않는 상태로 Clicked 상태가 되었을때
        Secondary Type의 Dropdown 형태가 사용되는 타입입니다. Table Dropdown과 List
        Dropdown으로 2가지로 분류가 되며, 각각의 Field에 사용되는 Component가 다르게
        사용됩니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/dropdown/Table Dropdown.png"
          alt="Table Dropdown"
        />
      </div>
      <div className={s.previewBox}>
        <img
          src="/images/components/dropdown/List Dropdown.png"
          alt="List Dropdown"
        />
      </div>

      {/* ── Extra Type ── */}
      <h3 className={s.typeHeading}>Extra Type</h3>
      <p className={styles.typeDescription}>
        Extra Type은 컴포넌트가 사용되는 기능적 혹은 형태적 목적에 따라서 변경되어 사용되는
        Dropdown의 Usecase로 Icon Dropdown, Inspection Selector, Fleet Selector가 있습니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/dropdown/Component Extra Type.png"
          alt="Extra Type"
        />
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Varients
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Varients</h3>

      {/* 이미지: State.png, Size.png */}
      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/dropdown/Varients State.png"
              alt="Dropdown State"
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            Dropdown Button의 State는 8가지 (Disabled, Default, Hover, Clicked, Select
            Disabled, Selected, Select Hover, Select Clicked)로 구성이되며, Menu Item의
            경우 4가지 (Default, Hover, Selected, Select Hover)로 구성됩니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/dropdown/Varients Size.png"
              alt="Dropdown Size"
            />
          </div>
          <h4 className={styles.variantColHeading}>Size</h4>
          <p className={styles.variantColDesc}>
            사이즈는 Height를 기준으로 Large, Medium, Small을 사용합니다. Width의 경우는
            유동적입니다.
          </p>
        </div>
      </div>

      {/* ── Menu Item ── */}
      <div className={s.previewBox}>
        <img
          src="/images/components/dropdown/Menu Item.png"
          alt="Menu Item"
        />
      </div>
      <h4 className={styles.variantColHeading}>Menu Item</h4>
      <p className={styles.variantColDesc} style={{ marginBottom: 48 }}>
        Dropdown Item의 Field를 구성하는 Components는 다양하게 사용이 되며 주요 요소는
        Text, Avatar, Badge가 있으며 부가적으로 함께 사용되는 요소에는 Toggle, Icon이
        있습니다. 이외에도 Dropdown Button의 높이와 동일한 Search Input이 사용됩니다.
      </p>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Table of Dropdown Component
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Table of Dropdown Component</h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Component</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell} style={{ borderLeft: "none" }} />
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Dropdown Button</div>
          <div className={s.propsCell}>Primary, Secondary, Tertiary</div>
          <div className={s.propsCell} style={{ borderLeft: "none" }} />
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Menu List</div>
          <div className={s.propsCell}>List, Date Picker</div>
          <div className={s.propsCell} style={{ borderLeft: "none" }} />
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Menu Item</div>
          <div className={s.propsCell}>Text, Avatar, Badge</div>
          <div className={s.propsCell} style={{ borderLeft: "none" }} />
        </div>
      </div>

      {/* ── Table of Properties - Dropdown Button ── */}
      <h3 className={s.typeHeading}>Table of Properties - Dropdown Button</h3>

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
          <div className={s.propsCell}>Disabled, Default, Hover, Clicked, Select Disabled, Selected, Select Hover, Select Clicked</div>
          <div className={s.propsCell}>Default</div>
        </div>
      </div>

      {/* ── Table of Properties - Menu Item ── */}
      <h3 className={s.typeHeading}>Table of Properties - Menu Item</h3>

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
          <div className={s.propsCell}>Default, Hover, Selected, Select Hover</div>
          <div className={s.propsCell}>Default</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Icon</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>False</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Toggle</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>False</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Color
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Color</h3>
      <p className={s.sectionSubtext}>
        Dropdown Component의 색상은 State에 따라서 다르게 가져갑니다. Field에 채워진
        Contents의 색상은 상태에 따라서 동일하게 유지 하는 것으로 하며, Outline과 Container의
        색상이 상태별로 다르게 사용 됩니다.
      </p>

      {/* ── Dropdown Button Color ── */}
      <h3 className={s.typeHeading}>Dropdown Button Color</h3>

      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Dropdown Button Color.png" alt="Dropdown Button Color" />
      </div>

      {/* ── Menu Item Color ── */}
      <h3 className={s.typeHeading}>Menu Item Color</h3>

      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Menu Item Color.png" alt="Menu Item Color" />
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Spacing
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Spacing</h3>
      <p className={s.sectionSubtext}>
        Dropdown의 Menu Item의 Contents의 Text의 길이가 2줄 이상으로 길어지는 경우 Text를
        제외한 다른 요소 (Icon, Avatar 등) 함께 사용되는 경우에 다음과 같이 사용됩니다. 더불어
        Single 혹은 Multi-Selection의 경우에 따라서도 다르게 사용됩니다.
      </p>

      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Spacing.png" alt="Spacing" />
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Contents
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Contents</h3>
      <p className={s.sectionSubtext}>
        Dropdown의 Menu Item은 최대 4.5개를 표출하는 것을 지향하며, Menu Item이 5개 이상이
        포함될 경우 Scrollbar를 사용하여 4.5개를 표출하여 보여지는 것이 특징입니다.
      </p>

      {/* ── Table / List Empty State (Placeholder) ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Table List Empty State (Placeholder).png" alt="Table / List Empty State" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Table / List Empty State (Placeholder)</h4>
          <p className={s.ruleText}>
            앞서 설명된 일반적으로 사용 되는 Dropdown의 Placeholder 방식과 다르게 Tertiary
            Type의 Table 및 List의 Placeholder는 문구의 형식을 가져가는 것이 아닌
            &apos;-&apos;로 사용됩니다. 여러 데이터들이 한 곳에서 표기 되는 Table 및 List의
            방식에서 데이터가 비어 있는 구간과 아닌 구간을 구분하기 위함입니다.
          </p>
        </div>
      </div>

      {/* ── Type of Field ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Contents Type of Field.png" alt="Type of Field" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Type of Field</h4>
          <p className={s.ruleText}>
            Dropdown Field에 속하는 값은 기본적으로 Text를 포함하는 Label Dropdown으로
            구성되어 있으나, 다른 컴포넌트 요소가 사용되기도 합니다. 대표적으로는 Badge,
            Avatar가 있으며, 경우에 따라 다양한 형태의 Component가 함께 사용 될 수 있습니다.
          </p>
        </div>
      </div>

      {/* ── Menu Item List ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Contents Menu Item List.png" alt="Menu Item List" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Menu Item List</h4>
          <p className={s.ruleText}>
            Dropdown Menu에서 Item이 표출되는 갯수는 최대 4개를 기본으로 제공하며, Item
            List가 4개를 넘어가는 경우에는 Over-Flow를 적용하여 스크롤이 되도록 합니다.
            단 예외적으로 4개의 기본 표출이 사용성의 측면에서 충분치 않다고 판단되는 경우에
            Menu Height의 최댓값을 상황에 따라 변경 할 수 있습니다.
          </p>
        </div>
      </div>

      {/* ── Single-Selection ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Contents Single-Selection.png" alt="Single-Selection" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Single-Selection</h4>
          <p className={s.ruleText}>
            Dropdown의 Menu Item중 단일 선택만 가능한 형태이며, Dropdown에서 가장 많이 사용
            되어지는 형태입니다. 단일 입력 선택 값에서 해당 항목이 필수값일 경우 별도의 Close
            (Clear All) Btn을 표출 하지 않으며, 해당 항목의 입력 값이 선택적 옵션일 경우
            Close Btn을 함께 제공하는 방식입니다.
          </p>
        </div>
      </div>

      {/* ── Multi-Selection ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Contents Multi-Selection.png" alt="Multi-Selection" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Multi-Selection</h4>
          <p className={s.ruleText}>
            Dropdown의 Menu Item을 단일 혹은 다수의 항목을 선택 가능하며 선택된 Item이
            표출 되는 방식은 Badge를 활용하여 추가되는 Item 항목의 갯수를 표출해주는 방식과
            선택된 Item 항목의 Contents 값을 모두 표출 해주는 방식으로 두가지가 있습니다.
          </p>
        </div>
      </div>

      {/* ── Minimum Width ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Contents Minimum Width.png" alt="Minimum Width" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Minimum Width</h4>
          <p className={s.ruleText}>
            Width의 경우 일반적으로 들어가는 영역에 따라서 Flexible하게 구성이 되어 지며
            Minimum Width는 120px를 최소값으로 가집니다.
          </p>
        </div>
      </div>

      {/* ── Flexible Width ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Contents Flexible Width.png" alt="Flexible Width" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Flexible Width</h4>
          <p className={s.ruleText}>
            Dropdown의 경우 Flexible하게 사용되어지며 Menu Item에 표출되어지는 Item의
            Contents를 적절히 고려하여 Width를 설정 하는 것이 특징입니다. 특정 Parent 요소의
            Container 내에 사용될 경우 해당 영역에서 정의된 Padding을 지키는 것을 원칙으로
            합니다.
          </p>
        </div>
      </div>

      {/* ── Text Overflow ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Contents Text Overflow.png" alt="Text Overflow" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Text Overflow</h4>
          <p className={s.ruleText}>
            Dropdown Button의 Field 내의 text의 값이 넘치는 경우 horizontal의 영역
            지워지는 text값을 &apos;...&apos;으로 표현하여 축약되는 것이 특징입니다.
            Dropdown의 Menu Item의 경우에는 컨텐츠를 축약하지 않고 줄바꿈하여 모두
            보여주는 것이 특징입니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Usage & Placement
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Usage &amp; Placement</h3>
      <p className={s.sectionSubtext}>
        Dropdown의 경우 Form의 입력 형식에서 Label과 함께 많이 사용이 되며, Text Input과 함께
        주로 사용되어 집니다. 해당 경우의 형식에서 필요에 따라서 여러 요소들이 복합적으로
        사용되어 사용자에게 정보를 전달 합니다.
      </p>

      <div className={s.previewBox}>
        <img src="/images/components/dropdown/Usage & Placement.png" alt="Usage & Placement" />
      </div>

      {/* ── Label ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Label.png" alt="Label" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label</h4>
          <p className={s.ruleText}>
            Dropdown이 포함된 입력 Form의 형태에서 Dropdown 항목에 대한 Label이 함께
            사용됩니다. Subtitle 3 (Inter, Medium, 14px)가 함께 사용 되며 해당 Required,
            Error, 그리고 부가적인 정보가 필요한 Information의 형태로 사용 가능 합니다.
            <br /><br />
            Label을 포함한 Dropdown 및 Input의 조합은 여러개가 함께 사용되는 경우가
            많습니다. Label과 Dropdown 사이의 간격은 8px, 각 요소 사이의 간격을 가로
            배열시 24px, 세로 배열시 32px 두고 배열하여 사용됩니다.
          </p>
        </div>
      </div>

      {/* ── Label: Information ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Label_ Information.png" alt="Label Information" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label: Information</h4>
          <p className={s.ruleText}>
            해당 입력 값에 대한 부가적인 정보를 사용자에게 제공하고자 할때 사용됩니다.
          </p>
        </div>
      </div>

      {/* ── Label: Required ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Label_ Required.png" alt="Label Required" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label: Required</h4>
          <p className={s.ruleText}>
            해당 입력 값이 필수 값인 경우를 표기하기 위해서 사용 됩니다. Label과 4px 간격을
            두고 표기하는 것이 특징이며 필수 값에는 &apos;*&apos;을 표기하고, 필수가 아닌
            선택값일 경우에는 별도의 표기 없이 Label만 사용하는 것이 특징입니다.
            <br /><br />
            &apos;*&apos;의 값은 Body 2 (Inter, Regular, 14px)를 사용하며 Text의 사이즈는
            보통 Label의 값과 동일하게 가져가는 것이 특징입니다.
          </p>
        </div>
      </div>

      {/* ── Label: Error(Alert) ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Label_ Error(Alert).png" alt="Label Error" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label: Error (Alert)</h4>
          <p className={s.ruleText}>
            해당 입력 값에 대한 에러(alert)를 띄우는 경우로, 입력값에 대한 필수 요건에 대한
            설명을 표출해 주는 것이 특징입니다. 별도의 Action (e.g. Confirm Button)후에
            표출되는 것이 특징이며 Dropdown Button의 Outline의 색상과 함께 Text Alert을
            함께 표출 해주는 것이 특징입니다.
            <br /><br />
            Error 상태의 Dropdown Button Outlined Color: Red500을 사용하며, Medium 사이즈의
            Alert를 사용합니다.
          </p>
        </div>
      </div>

      {/* ── Label Size ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Label Size.png" alt="Label Size" />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Label Size</h4>
          <p className={s.ruleText}>
            해당 패턴은 Dropdown 컴포넌트의 높이와 정보 밀도에 맞춰 Label의 크기를 일관되게
            정의하기 위해 사용됩니다. 입력 필드의 크기가 달라질 경우 Label 역시 동일한 비율
            체계 안에서 조정되어야 하며, 이를 통해 컴포넌트 전체의 균형감과 가독성을 유지할
            수 있습니다.
            <br /><br />
            Medium 사이즈 Dropdown에는 Subtitle 3 (Inter, Medium, 14px)를 사용하고, Large
            사이즈 Dropdown에는 Subtitle 1 (Inter, Medium, 16px)를 적용합니다. 이 규칙은
            Label과 Input Field 사이의 시각적 위계를 명확하게 만들고, 서로 다른 크기의 Form
            요소가 함께 배치되더라도 일관된 리듬을 유지하도록 돕습니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Loading Status
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Loading Status</h3>

      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Loading Type.png" alt="Loading Type" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Loading Spinner Size.png" alt="Loading Spinner Size" />
        </div>
      </div>

      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>Loading Type</h4>
          <p className={styles.variantColDesc}>
            Loading의 Type의 경우 한가지 형태의 Spinner Type이 사용이 되어지며, 기본적으로
            Dropdown에 사용되는 Arrow를 함께 표출하는 것이 특징이며 영역내의 Item이 표출되는
            영역 내에서 가운데지점에 표출되는 것이 특징입니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>Loading Spinner Size</h4>
          <p className={styles.variantColDesc}>
            Dropdown Container 내에서 표출되는 Spinner의 경우에 Dropdown 내의 Item으로
            표출되는 Text의 Height와 동일하게 맞춰 표출 되는 것이 특징입니다. Loading
            표출시에 Width 값의 경우 Loading 발생시점 직전에 사용되는 Width과 동일하게
            사용하는 것이 특징입니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Menu Placement
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Menu Placement</h3>
      <p className={s.sectionSubtext}>
        Dropdown의 Menu의 표출 위치는 사용자가 Action을 수행하기 시작한 지점의 해당
        화면상에 컴포넌트의 위치에 따라 결정이 되며, 가장 최 상단으로 Positioning 하는 것을
        원칙으로 하되, 화면상에 디자인되는 최소 Padding인 32px를 기준으로 넘지 않는 선에서
        Positioning 하는 것을 원칙으로 합니다.
      </p>

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

      {/* ═══════════════════════════════════════════
         Menu Items
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Menu Items</h3>
      <p className={s.sectionSubtext}>
        Dropdown의 Menu내의 아이템의 갯수의 Boundary에 따라서 Height가 Flexible 하게 다르게
        적용되는 구간과 Height가 Fixed되어 사용되는 지점 두가지로 분류 되어 집니다. 해당
        지점의 기준이 되는 Item의 값은 4개로, 4보다 작거나 같은 경우, 4보다 많은 Item을
        Menu 상에 표출 하게 됩니다.
      </p>

      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Menu Item ≤ 4.png" alt="Menu Item ≤ 4" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Menu Item > 4 (with Scroll).png" alt="Menu Item > 4" />
        </div>
      </div>

      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>1. Menu Item ≤ 4</h4>
          <p className={styles.variantColDesc}>
            Item의 갯수가 4개보다 같거나 적을 경우에 Dropdown의 표출되는 Menu의 Height는
            Item의 Height의 총합에 4*2px (Menu의 상하 Padding)을 더한 값으로 Flexible하게
            갯수마다 다르게 맞춰 변형 되는 것이 특징입니다. Dropdown Menu의 Item이 1개가
            되는 것은 지양합니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>2. Menu Item &gt; 4 (with Scroll)</h4>
          <p className={styles.variantColDesc}>
            Item의 갯수가 4개보다 큰 경우에 Dropdown의 표출되는 Menu의 Height는 Item의
            4.5개의 Height의 총합에 4*2px (Menu의 상하 Padding)을 더한 값으로 Item이
            포함하고 있는 콘텐츠의 양에 따른 값이 변할시에 다르게 맞춰 변형 되는 것이
            특징입니다. 0.5개 표출되는 4개의 마지막 Item의 절반이 보이도록 표출됩니다.
          </p>
        </div>
      </div>

      <div className={s.usageRowEqual}>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Menu Item Text Line ≤ 4.png" alt="Menu Item Text Line ≤ 4" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/dropdown/Menu Item Text Line > 4 (with Scroll).png" alt="Menu Item Text Line > 4" />
        </div>
      </div>

      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>3. Menu Item Text Line ≤ 4</h4>
          <p className={styles.variantColDesc}>
            Menu Item에 표출되는 Text 정보는 Dropdown Button에 Height가 고정되어 일부
            &apos;...&apos;으로 표출되는 것과 달리 최대 4 Line까지 표출 되는 것이
            특징입니다. 1 - 4 Line의 경우 까지의 Height가 Flexible하게 사용되어 집니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>4. Menu Item Text Line &gt; 4 (with Scroll)</h4>
          <p className={styles.variantColDesc}>
            Menu Item의 최대 표출 갯수는 기본적으로 4.5개로 정의되지만, 각 Item의 Height는
            Text Contents에 따라 유동적이기 때문에 전체 Menu Height의 길이 또한 최대 Text
            Line의 최대로 표출되어 보여주는 것은 4 Line이며 이 이상이 될시에
            &apos;...&apos;으로 처리하여 표기하는 것을 원칙으로 합니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ═══════════════════════════════════════════
         Item List Contents Arrangement
         ═══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Item List Contents Arrangement</h3>
      <p className={s.sectionSubtext}>
        Dropdown Menu Item List의 표출되어지는 콘텐츠의 순서는 기본적으로 A-Z로 나열이 되며,
        특정 Sequence를 지닌 Item의 조합의 경우 해당 Sequence에 따라 나열 되는 것이
        특징입니다.
      </p>

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
          <h4 className={styles.variantColHeading}>1. Default Item List</h4>
          <p className={styles.variantColDesc}>
            Text를 포함하고 있는 모든 Item 콘텐츠에 해당이 되며 Sequence Item List의 경우를
            제외한 모든 Menu Item List의 배열 방식은 알파벳 순으로 배열 하는 것을 기본
            원칙으로 합니다. Primary, Secondary, Tertiary 그리고 Extra Type 까지 모두 해당
            원칙을 따릅니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <h4 className={styles.variantColHeading}>2. Sequence Item List</h4>
          <p className={styles.variantColDesc}>
            사용자가 인지하는 어떠한 Task에 의미가 부여된 Sequence로 서비스내에서 사용되어
            이미 인지하고 있는 Sequence에 해당합니다. (e.g. Roadmap - Priority and Status
            Filter Dropdown)
          </p>
        </div>
      </div>
    </div>
  );
}
