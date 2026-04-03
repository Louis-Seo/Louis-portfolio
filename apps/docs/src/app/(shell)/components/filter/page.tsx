import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function FilterPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Filter</h1>
      <p className={s.pageDescription}>
        Filter는 화면에서 보여지고 있는 데이터를 input을 통해 특정 기준점 받아 속아내는 기능을 할 수 있는 Data Entry의 집합입니다.
      </p>

      <hr className={s.divider} />

      {/* ── Components ── */}
      <h2 className={s.sectionHeading}>Components</h2>
      <p className={s.sectionSubtext}>
        Filter는 노출되는 방식으로 Exposed Filter 그리고 Hidden Filter 이렇게 2가지로 분류 됩니다. Exposed Filter는 기본적으로 화면에 데이터와 함께 노출되어 있는 필터로 정의 되고, Hidden Filter는 기본적으로 화면에서 숨겨진 상태로, 기능적으로 추가적인 Depth가 필요한 경우로 정의 됩니다.
      </p>

      {/* 1. Exposed Filter */}
      <h3 className={s.typeHeading}>1. Exposed Filter</h3>
      <p className={s.typeSubtext}>
        Exposed Filter는 데이터와 함께 표출되는 필터 형태로 Horizontal 형태의 Filter Bar 형식과 Vertical 형태의 Side Bar가 있습니다. Filter Bar의 경우 대표적으로 두가지 형태로 타입이 나뉘어 사용이 되어 지며, Container로 쌓여 사용되는 Primary Type과 Input, Dropdown의 조합으로 Container로 안쌓여 사용되는 Secondary Type이 있습니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Exposed Filter.png" alt="Exposed Filter" />
      </div>

      <div className={s.sectionGap} />

      {/* 2. Hidden Filter */}
      <h3 className={s.typeHeading}>2. Hidden Filter</h3>
      <p className={s.typeSubtext}>
        Hidden Filter는 기본적으로 화면에 직접적으로 데이터와 함께 표출되기 어려운 Filtering 요소들을 화면에서 숨겨진 Filter로, 주로 별도의 Action을 통해 Modal 형태로 표출이 되는 것이 특징입니다. 때문에 일반적인 Filter Type들과 비교 했을때 사용에 있어서 추가적인 Depth가 필요한 경우로 정의 됩니다. 숨김 필터는 특정 Action을 수행해야만 표출되는 필터로 Modal + extra (undefined) 으로 이루어져 있습니다.
      </p>
      <p className={s.typeSubtext}>
        특정 Action을 통해 Modal 형태로 표출 되는 것이 일반적으로 사용 됩니다. Table과 Filter가 같이 나오는 경우 Filter 와 Table 내에 heading과의 order Align 필요.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Hidden Filter.png" alt="Hidden Filter" />
      </div>

      <div className={s.sectionGap} />

      {/* ── Data Entry for Filter ── */}
      <h2 className={s.sectionHeading}>Data Entry for Filter</h2>
      <p className={s.sectionSubtext}>
        Filter는 Data를 Filtering을 할 수 있는 기준점을 잡아주는 Data Entry이 조합으로 구성되어져 있습니다. Zoomable 내 Filter에서 사용할 수 있는 Data Entry Components는 Dropdown, Chip Filter, Toggle, Check Box, Slider로 6가지로 구성 되어져 있습니다.
      </p>

      <div className={styles.dataEntryGrid}>
        <div className={styles.dataEntryCard}>
          <div className={s.previewBox}>
            <img src="/images/components/filter/Dropdown.png" alt="Dropdown" />
          </div>
          <p className={styles.dataEntryTitle}>Dropdown</p>
          <p className={styles.dataEntryDesc}>
            Sequence가 없는 경우, 사전 순으로 Menu Item을 정렬 하는 것을 원칙으로 하며, Sequence가 있는경우 Sequence에 맞게 정렬
          </p>
        </div>

        <div className={styles.dataEntryCard}>
          <div className={s.previewBox}>
            <img src="/images/components/filter/Input.png" alt="Input" />
          </div>
          <p className={styles.dataEntryTitle}>Input</p>
          <p className={styles.dataEntryDesc}>
            Text 입력을 통해 특정 항목을 Filtering 하는 용도로 사용
          </p>
        </div>

        <div className={styles.dataEntryCard}>
          <div className={s.previewBox}>
            <img src="/images/components/filter/Filter Chip.png" alt="Filter Chip" />
          </div>
          <p className={styles.dataEntryTitle}>Filter Chip</p>
          <p className={styles.dataEntryDesc}>
            특정 항목을 On/Off하는 용도로 사용
          </p>
        </div>

        <div className={styles.dataEntryCard}>
          <div className={s.previewBox}>
            <img src="/images/components/filter/Check Box.png" alt="Check Box" />
          </div>
          <p className={styles.dataEntryTitle}>Check Box</p>
          <p className={styles.dataEntryDesc}>
            특정 세부 항목에 대한 On/Off 하는 용도로 사용
          </p>
        </div>

        <div className={styles.dataEntryCard}>
          <div className={s.previewBox}>
            <img src="/images/components/filter/Toggle.png" alt="Toggle" />
          </div>
          <p className={styles.dataEntryTitle}>Toggle</p>
          <p className={styles.dataEntryDesc}>
            상호 베타적인 옵션 (On/Off)에 대한 데이터에 한정해서 사용할 것을 권장
          </p>
        </div>

        <div className={styles.dataEntryCard}>
          <div className={s.previewBox}>
            <img src="/images/components/filter/Slider.png" alt="Slider" />
          </div>
          <p className={styles.dataEntryTitle}>Slider</p>
          <p className={styles.dataEntryDesc}>
            정성적인 데이터에 한정해서 사용할 것을 권장
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Exposed Filter Detail ── */}
      <h2 className={s.sectionHeading}>Exposed Filter</h2>
      <p className={s.sectionSubtext}>
        Exposed Filter는 데이터와 함께 표출되는 필터 형태로 Horizontal 형태의 Filter Bar 형식과 Vertical 형태의 Side Bar가 있습니다.
      </p>

      {/* Filter Bar */}
      <h3 className={s.typeHeading}>Filter Bar</h3>
      <p className={s.typeSubtext}>
        Filter Bar의 경우 대표적으로 두 가지 형태로 타입이 나뉘어 사용이 되어 지며, Container로 쌓여 사용되는 Primary Type과 Input, Dropdown의 조합으로 Container로 안쌓여 사용되는 Secondary Type이 있습니다. 구성되어지는 요소는 대표적으로 Chip, Dropdown, Button의 조합으로 사용 되어 집니다. Chip을 Filter로서 사용시 해당 Chip의 Group에 대한 Label과 함께 구성되는 것이 특징입니다.
      </p>

      {/* 1. Primary Type */}
      <h4 className={s.typeHeading}>1. Primary Type</h4>
      <p className={s.typeSubtext}>
        Primary Type은 Data Entry Component 중 Chip 구성의 타입으로, Label에 따라 그룹핑 하여 사용되는 것이 특징입니다. Zoomable에서는 주로 사진을 사진 Filtering을 위한 목적으로 대표적으로 사용됩니다. Zoomable Wind 내에서는 Gallery View에서 사용이 되어지며 갤러리 이미지를 특정 요소기준으로 선별하여 볼때 사용되어 집니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Primary Type.png" alt="Primary Type" />
      </div>

      {/* Table of Figma Properties */}
      <p className={s.typeHeading} style={{ marginTop: 48 }}>Table of Figma Properties - Filter Bar (Primary)</p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Line</td>
            <td className={s.propsCell}>1, 2</td>
            <td className={s.propsCell}>1</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Size</td>
            <td className={s.propsCell}>Long, Short</td>
            <td className={s.propsCell}>Long</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Expansion</td>
            <td className={s.propsCell}>False, True</td>
            <td className={s.propsCell}>False</td>
          </tr>
        </tbody>
      </table>

      {/* 2. Secondary Type */}
      <h4 className={s.typeHeading}>2. Secondary Type</h4>
      <p className={s.typeSubtext}>
        Secondary Type은 Dropdown, Input, (Button Icon) 구성의 타입으로, Primary Type과 같이 특정 Container 내에 배치되는 것이 아닌 Components의 배열로만 구성되어지는 것이 특징입니다. 일반적으로 Height를 맞추어 배열 되어 사용합니다. 배열된 요소에 Filtering 역할을 하지 않는 타 구성요소를 함께 사용 할 수 있으며, 해당 경우 기능상의 분류를 위한 목적으로 Divider를 활용하여 분리하여 사용됩니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Secondary Type.png" alt="Secondary Type" />
      </div>

      <div className={s.sectionGap} />

      {/* Spacing */}
      <h3 className={s.typeHeading}>Spacing</h3>
      <p className={s.typeSubtext}>
        Container를 가진 Primary Type의 경우 16px의 상하좌우 Padding을 갖습니다. 설명을 포함한 Chip Group의 그룹간의 간격은 32px로 정의 되며, Label과 Chip간의 간격은 8px로 사용되어 집니다. Filtering이 가능한 Chip Group은 좌측부터 정렬이 되며, Filter 기능이 아닌 Action을 가지는 요소는 우측을 기준으로 정렬이 되어지는 것이 특징입니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Spacing.png" alt="Spacing" />
      </div>

      <div className={s.sectionGap} />

      {/* Position */}
      <h3 className={s.typeHeading}>Position</h3>
      <p className={s.typeSubtext}>
        Filter Bar의 경우 Data Set (e.g. Gallery)의 위측에 위치하며 Filter 후 하단에 Data (e.g. Image Gallery)가 표출 되는 것이 특징입니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Position.png" alt="Position" />
      </div>

      <div className={s.sectionGap} />

      {/* Single / Multi-Selection */}
      <h3 className={s.typeHeading}>Single / Multi-Selection</h3>
      <p className={s.typeSubtext}>
        Filter에 포함되는 Data Entry의 특징과 기능적인 목적에 따라서 Single-Selection과 Multi-Selection을 모두 포함하고 있습니다. 사용되어지는 Data Entry의 Component 요소들의 Group화 하여 사용 했을때 허용되는 Single / Multi-Selection에 대한 규칙을 모두 동일하게 포함하고 있으며 Data Entry에 포함되는 Component가 Group시 Multi-Selection을 허용한다면, Filter 내에서도 동일하게 사용되어 집니다. Filter Bar의 경우 Group 내에 사용되는 Component가 Chip을 Multi-Selection을 허용합니다. 모두 선택 안된 상태는, 모두 선택된 것과 동일한 Filtering 결과 값을 가집니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Single Multi-Selection.png" alt="Single / Multi-Selection" />
      </div>

      <div className={s.sectionGap} />

      {/* Contents Arrangement */}
      <h3 className={s.typeHeading}>Contents Arrangement</h3>
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/filter/Contents Arrangement.png" alt="Contents Arrangement" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Header Align with Filter Arrange</p>
          <p className={s.ruleText}>
            Secondary Type의 Filter Bar 사용시 Filtering 되는 정보의 경우 Table Column단위로 Filtering 되어지는 경우에 Table Column의 Header와 Filter Bar내의 표출 순서를 동일하게 가져가는 것을 원칙으로 합니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Side Bar (Side Panel) ── */}
      <h3 className={s.typeHeading}>Side Bar (Side Panel)</h3>
      <p className={s.typeSubtext}>
        Wind 에서만 사용되는 Filter로 사용되어지는 Filter 요소들이 많고 세부적인 항목에 대한 Filter를 Customizing 해서 사용 하는 경우에 사용 되는 것을 원칙으로 합니다. 해당 요소는 Side Panel로도 분류 됩니다. Filter Bar를 구성하는 요소는 대표적으로 Chip, Dropdown, Button의 조합으로 많이 사용되어 집니다. Chip을 Filter로서 사용시 해당 Chip의 Group에 대한 Label과 함께 구성되는 것이 특징입니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Exposed Filter Side Bar.png" alt="Side Bar" />
      </div>

      <div className={s.sectionGap} />

      {/* Spacing */}
      <h3 className={s.typeHeading}>Spacing</h3>
      <p className={s.typeSubtext}>
        Side Bar의 경우 Container의 상하좌우 Padding 16px의 값을 갖습니다. Filter 그룹사이에 Divider를 두어 구분하며, Divider와 16px Gap을 가집니다. Label과 Filtering 하는 Components의 그룹간의 간격은 12px로 사용되어 집니다. Filtering이 가능한 Group은 우측부터 정렬이 되는 것이 특징입니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Exposed Filter Spacing.png" alt="Side Bar Spacing" />
      </div>

      <div className={s.sectionGap} />

      {/* Position */}
      <h3 className={s.typeHeading}>Position</h3>
      <p className={s.typeSubtext}>
        Side Filter의 경우 Data Set (e.g. Table)의 좌측에 위치하여 사용의 시선의 흐름에 맞춰서 Filtering 후 우측에 Data (e.g. Table)이 표출 되는 것이 특징입니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Exposed Filter Position.png" alt="Side Bar Position" />
      </div>

      <div className={s.sectionGap} />

      {/* Selected Filter */}
      <h3 className={s.typeHeading}>Selected Filter</h3>
      <p className={s.typeSubtext}>
        Selected Filter의 경우 Side Bar에서 다수의 Filter 그룹이 존재 하는 경우 사용자가 선택한 필터 항목에 대하여 축약하여 보여주는 역할을 합니다. 해당 부분의 경우 일반적으로 Selected Filter에 포함되는 Filter 그룹들의 가장 위쪽에 위치하며 Fixed 되어 Side Panel 내에서 스크롤시에 항상 표출되어지는 것이 특징입니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Exposed Filter Selected Filter.png" alt="Selected Filter" />
      </div>

      {/* Table of Figma Properties - Selected Filters */}
      <p className={s.typeHeading} style={{ marginTop: 48 }}>Table of Figma Properties - Selected Filters</p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Item</td>
            <td className={s.propsCell}>0, 1, 2, 3, 4</td>
            <td className={s.propsCell}>0</td>
          </tr>
        </tbody>
      </table>

      {/* Use Case */}
      <h3 className={s.typeHeading}>Use Case</h3>
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/filter/Exposed Filter Use Case.png" alt="Use Case" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Fixed Area</p>
          <p className={s.ruleText}>
            Side Bar의 경우 Table의 보여지는 정보 외의 정보를 기반으로 Filtering 되어지며 Filtering을 위한 세부적이고 다양한 Data Entry가 사용 되어지는 것이 특징입니다. 다양한 종류의 Filter를 한번에 설정하기 때문에, Selection Filters를 두어 사용자가 Filtering 한 값에 대한 정보를 제공합니다. 일반적으로 Fixed 되어 사용되어 집니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Hidden Filter ── */}
      <h2 className={s.sectionHeading}>Hidden Filter</h2>
      <p className={s.sectionSubtext}>
        Hidden Filter는 기본적으로 화면에 직접적으로 데이터와 함께 표출되기 어려운 Filtering 요소들을 화면에서 숨겨진 Filter로, 주로 별도의 Action을 통해 Modal 형태로 표출이 되는 것이 특징입니다. 때문에 일반적인 Filter Type들과 비교 했을때 사용에 있어서 추가적인 Depth가 필요한 경우로 정의 됩니다. 숨김 필터는 특정 Action을 수행해야만 표출되는 필터로 Modal + extra (Now Undefined) 으로 이루어져 있습니다. 일반적 Action을 통해 Modal 형태로 표출 되는 것이 일반적으로 사용 됩니다.
      </p>

      {/* Modal Filter */}
      <h3 className={s.typeHeading}>Modal Filter</h3>
      <div className={s.previewBox}>
        <img src="/images/components/filter/Modal Filter.png" alt="Modal Filter" />
      </div>

      <div className={s.sectionGap} />

      {/* Use Case */}
      <h3 className={s.typeHeading}>Use Case</h3>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/filter/Table Settings - Hidden:Show Toggle.png" alt="Table Settings" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Table Settings - Hidden/Show Toggle</p>
          <p className={s.ruleText}>
            Hidden Filter의 경우 Modal로써 대부분 표출 되어지며, 특정 부분에 대한 Viewer를 On/Off 할 수 있도록 합니다. Table Setting Modal에서 사용될 경우, Hidden Filter로 분류 되어지는 경우는 Column에 대한 Viewer Toggle의 유무에 따라 결정 되어지는 것이 특징입니다.
          </p>
        </div>
      </div>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/filter/Management Settings - Hidden:Show(Off:On) Toggle.png" alt="Management Settings" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Management Settings - Hidden/Show(Off/On) Toggle</p>
          <p className={s.ruleText}>
            특정 정보를 포함한 데이터를 On/Off 하는 기능으로써 사용 되어 집니다.
          </p>
        </div>
      </div>
    </div>
  );
}
