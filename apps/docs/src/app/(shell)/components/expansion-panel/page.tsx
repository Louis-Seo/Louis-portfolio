import s from "@/styles/docs.module.css";

export default function ExpansionPanelPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Expansion Panel</h1>
      <p className={s.pageDescription}>
        Expansion Panel은 페이지에서 쉽게 접었다 폈다 (Expanded &amp; Collapsed) 가능한 Panel의 형태 입니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h2 className={s.sectionHeading}>Anatomy</h2>
      <div className={s.previewBox}>
        <img src="/images/components/expansion-panel/Anatomy.png" alt="Anatomy" />
      </div>

      <div className={s.sectionGap} />

      {/* ── Usage ── */}
      <h2 className={s.sectionHeading}>Usage</h2>
      <p className={s.sectionSubtext}>
        Zoomable의 대표적인 Side Expansion Panel은 OSD Viewer의 작업시 사용되는 작업 패널로, Panel 내의 Contents는 목적에 따라서 다양한 Components의 조합으로 구성되어져 사용 될 수 있습니다. Side Expansion Panel의 경우 주로 페이지의 좌우 Side 중 한곳에 위치하는 것이 특징입니다.
      </p>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/expansion-panel/Usage.png" alt="Usage" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Side Expansion Panel</p>
          <p className={s.ruleText}>
            Vertical 형태로 Panel 영역 안에서 페이지에서 수행 할 수 있는 작업을 할 수 있는 영역으로 구성되어져 있습니다. 하단에 Button영역을 별도로 가지고 있는 것이 특징입니다.
          </p>
        </div>
      </div>

      {/* ── Variants ── */}
      <h2 className={s.sectionHeading}>Variants</h2>
      <p className={s.sectionSubtext}>
        Zoomable의 대표적인 Side Expansion Panel은 OSD Viewer의 작업시 사용되는 작업 패널로, Panel 내의 Contents는 목적에 따라서 다양한 Components의 조합으로 구성되어져 사용 될 수 있습니다. Side Expansion Panel의 경우 주로 페이지의 좌우 Side 중 한곳에 위치하는 것이 특징입니다.
      </p>

      <div className={s.usageRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/expansion-panel/Panel Fold.png" alt="Panel Fold" />
          </div>
          <h4 className={s.typeHeading}>Panel Fold</h4>
          <p className={s.typeSubtext}>
            Side Panel의 경우 사용의 용도에 따라 접었다 필 수 있으며, 해당 Action을 수행 할 수 있는 Icon Button의 경우 Panel 가장자리를 Hover시 표출 되는 것이 특징입니다. 해당 경우 GNB와 다르게 접혀진 형태가 아이콘 버튼 하나로 표출되는 것이 특징입니다.
          </p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/expansion-panel/Scroll Bar.png" alt="Scroll Bar" />
          </div>
          <h4 className={s.typeHeading}>Scroll Bar</h4>
          <p className={s.typeSubtext}>
            Panel에 표출되는 Item이 화면의 영역을 넘어 갈때, Scroll Bar가 생성되며, Item의 영역 기준으로 Scroll Area가 생성되는 것이 특징입니다.
          </p>
        </div>
      </div>

      {/* ── Table 1: Expansion Panel / OSD Viewer Panel ── */}
      <p className={s.typeHeading}>Table of Figma Properties - Expansion Panel / OSD Viewer Panel</p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Type</td>
            <td className={s.propsCell}>Defect Panel, Photo Panel</td>
            <td className={s.propsCell}>None</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Empty</td>
            <td className={s.propsCell}>False, True</td>
            <td className={s.propsCell}>False</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Position</td>
            <td className={s.propsCell}>Full, Screen</td>
            <td className={s.propsCell}>Screen</td>
          </tr>
        </tbody>
      </table>

      {/* ── Table 2: Entry Type ── */}
      <p className={s.typeHeading}>Table of Figma Properties - Expansion Panel / OSD Viewer Panel / Entry Type</p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Type</td>
            <td className={s.propsCell}>Dropdown, Severity Filter, Short Input, Slider with Input, Toggle with Input, Checkbox, Range, Slider with Input (Reset)</td>
            <td className={s.propsCell}>None</td>
          </tr>
        </tbody>
      </table>

      {/* ── Table 3: List ── */}
      <p className={s.typeHeading}>Table of Figma Properties - Expansion Panel / OSD Viewer Panel / List</p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>State</td>
            <td className={s.propsCell}>Default, Hover, Selected, Select Hover</td>
            <td className={s.propsCell}>Default</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
