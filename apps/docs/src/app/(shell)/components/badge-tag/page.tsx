import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function BadgeTagPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Badge</h1>
      <p className={s.pageDescription}>
        Badge는 상태나 수치에 대한 정보를 시각적으로 제공하는 역할로 사용 됩니다. Wind에서 Badge는 일반적으로 상태를 시각적 Color Mapping을 통해 직관적으로 판단할때 주로 사용 됩니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h2 className={s.sectionHeading}>Anatomy</h2>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/badge-tag/Anatomy.png" alt="Anatomy" />
        <p className={styles.previewBoxCompactLabel}>
          1. Badge Container<br />
          2. Text Label<br />
          3. Icon Btn<br />
          4. Badge Box<br />
          5. Extra Label
        </p>
      </div>

      <div className={s.sectionGap} />

      {/* ── Usage ── */}
      <h2 className={s.sectionHeading}>Usage</h2>
      <p className={s.sectionSubtext}>
        Badge는 보여주고자 하는 정보의 특성에 따라서 6가지로 분류됩니다.
        <br /><br />
        1. Box Badge<br />
        2. Contained Badge<br />
        &nbsp;&nbsp;&nbsp;&nbsp;a. Text Type<br />
        &nbsp;&nbsp;&nbsp;&nbsp;b. Number Type<br />
        3. Count Badge<br />
        4. Severity Badge<br />
        5. Button Badge<br />
        6. Text Badge
        <br /><br />
        Box Badge와 Label Badge는 Progress 혹은 Status를 Color mapping하여 사용자에게 시각적으로 정보를 표출 할때 주로 사용되며, Count Badge는 해당 영역 내에서 전체적인 갯수를 표출할때 주로 사용됩니다. 대표적으로 사용되는 3가지 타입와 더불어 Severity Badge, Button Badge, Text Badge 의 타입도 추가적으로 사용됩니다.
      </p>
      <div className={s.grid3col}>
        <div className={s.gridCard}>
          <div className={styles.gridCardPreview}>
            <img src="/images/components/badge-tag/1. Box Badge.png" alt="Box Badge" />
          </div>
          <p className={s.gridCardTitle}>1. Box Badge</p>
          <p className={s.gridCardDesc}>
            Box의 형태로 Badge내부에 별도의 Label 정보를 제공하지 않고, 색상만으로 정보를 제공할때 사용됩니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={styles.gridCardPreview}>
            <img src="/images/components/badge-tag/2. Contained Badge.png" alt="Contained Badge" />
          </div>
          <p className={s.gridCardTitle}>2. Contained Badge</p>
          <p className={s.gridCardDesc}>
            Label에 해당되는 정보는 Text와 Number가 있으며, Text Type의 경우 외부 Label과 함께 활용되기도 합니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={styles.gridCardPreview}>
            <img src="/images/components/badge-tag/3. Count Badge.png" alt="Count Badge" />
          </div>
          <p className={s.gridCardTitle}>3. Count Badge</p>
          <p className={s.gridCardDesc}>
            전반적인 수치를 개별적으로 단일하게 나타낼때 사용이 됩니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={styles.gridCardPreview}>
            <img src="/images/components/badge-tag/4. Severity Badge.png" alt="Severity Badge" />
          </div>
          <p className={s.gridCardTitle}>4. Severity Badge</p>
          <p className={s.gridCardDesc}>
            Zoomable에서 결함의 5단계와 미확인 결함의 6가지의 단계를 표기해주는 역할을 합니다. Box형태의 Badge에 결함의 단계를 Text로 표기하여 함께 사용 됩니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={styles.gridCardPreview}>
            <img src="/images/components/badge-tag/5. Button Badge.png" alt="Button Badge" />
          </div>
          <p className={s.gridCardTitle}>5. Button Badge</p>
          <p className={s.gridCardDesc}>
            Button Badge의 경우 Badge를 클릭하였을때 특정 Action을 수행 할 수 있는 것이 특징이다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={styles.gridCardPreview}>
            <img src="/images/components/badge-tag/6. Text Badge.png" alt="Text Badge" />
          </div>
          <p className={s.gridCardTitle}>6. Text Badge</p>
          <p className={s.gridCardDesc}>
            Text Badge의 경우 Badge를 클릭하였을때 특정 Action을 수행 할 수 있는 것이 특징이다.
          </p>
        </div>
      </div>

      <div className={s.sectionGap} />

      {/* ── Semantic Variants ── */}
      <h2 className={s.sectionHeading}>Semantic Variants</h2>
      <p className={s.sectionSubtext}>
        Severity Badge의 경우 6+1개의 색상 분류를 활용하여 단계별 심각도를 각각의 색상으로 구상하였습니다. Box Badge의 경우 4가지 색상분류를 사용하여 Progress를 나타내는 단계를 구성을 하였습니다.
      </p>
      <div className={s.previewRow}>
        <div className={styles.previewBoxPadded}>
          <img src="/images/components/badge-tag/Semantic Variants 01.png" alt="Semantic Variants - Box Badge" />
        </div>
        <div className={styles.previewBoxPadded}>
          <img src="/images/components/badge-tag/Semantic Variants 02.png" alt="Semantic Variants - Severity Badge" />
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Contents ── */}
      <h2 className={s.sectionHeading}>Contents</h2>
      <p className={s.sectionSubtext}>
        각 Badge에는 Color Mapping이라는 특징으로 인해 텍스트 이외의 정보를 각 영역에 매핑하여 나타내는 것으로 표기가 되기때문에 Text와 Color가 되기까지 사용자는 것을 원칙으로 하고 있습니다.
        <br /><br />
        Badge에서 사용되는 Contents는 Container 영역내에 text label이 포함되거나 외부에 Extra Label의 형식으로 이름과 같이 Text Type 만 포함 가능합니다. Badge의 타입에 따라 Count Badge와 Severity Badge의 경우에는 포함되는 Text Label의 Contents Type이 숫자로만 한정되어 사용 됩니다. Box Badge에 Extra Label이 함께 사용되어지는 경우는 특정 Progress에 대한 Label로, 변동가능한 Text가 사용되는 것이 아닌 고정되어진 Text로 변경이 불가능 한 것이 특징입니다.
      </p>
      <div className={s.previewRow}>
        <div className={s.previewBox}>
          <img src="/images/components/badge-tag/Contents 01.png" alt="Contents 01" />
        </div>
        <div className={s.previewBox}>
          <img src="/images/components/badge-tag/Contents 02.png" alt="Contents 02" />
        </div>
      </div>

      <div className={s.sectionGap} />

      {/* ── Sizing ── */}
      <h2 className={s.sectionHeading}>Sizing</h2>
      <p className={s.sectionSubtext}>
        Badge의 사이즈는 일반적으로 Large, Medium, Small로 총 세가지를 사용이 되며 각각은 Height의 값에 의해서 사이즈가 결정 되어지며 Contained, Count, Severity Badge의 Height 변경에 따라 Text와 관계없이 Text의 글자수 나이카나 빠를때 검증합니다. 선택에 맞게 Width의 Height를 동일하게 하는 방법과 최소 크기를 통한 Padding 규칙적으로 적용되어서 Auto와 같이 적용합니다.
      </p>
      <div className={s.previewRow}>
        <div className={styles.previewBoxPadded}>
          <img src="/images/components/badge-tag/Textual Badge.png" alt="Textual Badge" />
        </div>
        <div className={styles.previewBoxPadded}>
          <img src="/images/components/badge-tag/Box Badge.png" alt="Box Badge" />
        </div>
      </div>

      {/* Text Character = 1 */}
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/badge-tag/Text Character = 1.png" alt="Text Character = 1" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>1. Text Character = 1</p>
          <p className={s.ruleText}>
            Text의 속성인 Badge의 최고의 상기 Padding을 동일하게 사용하고 Height와의 비율 값으로 해당 라인의 Badge를 맞추는 것이 원칙이며 Auto는 Height를 사용되지 않고 사용됩니다.
          </p>
        </div>
      </div>

      {/* Text Characters > 1 */}
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0, minHeight: "auto" }}>
          <img src="/images/components/badge-tag/Text Characters _ 1.png" alt="Text Characters > 1" style={{ objectFit: "contain", height: "auto" }} />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>2. Text Characters &gt; 1</p>
          <p className={s.ruleText}>
            글자가 1개가 아닌 Text가 Badge 내에 두개이상의 경우에 전반적으로 동일 Padding 값을 기준으로 사용이 됩니다. Text Level 변경에서 사이즈가 변동 되지 않는 것이 특징이며, Text 1 Line 글자에 따라서만 활용하는 가변 Width에 있어서 단어 이상은 활용되지 않는 것이 특징입니다. (Single Words: Medium, Only) 사이즈 필수 값은 것으로 합니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Variants ── */}
      <h2 className={s.sectionHeading}>Variants</h2>

      {/* Table: Textual Badge */}
      <p className={s.typeHeading}>Table of Properties - Textual Badge</p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Size</td>
            <td className={s.propsCell}>Large, Medium</td>
            <td className={s.propsCell}>Medium</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Type</td>
            <td className={s.propsCell}>Green, Mint, Red, Yellow, Gray</td>
            <td className={s.propsCell}>-</td>
          </tr>
        </tbody>
      </table>

      {/* Table: Box Badge */}
      <p className={s.typeHeading}>Table of Properties - Box Badge</p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Size</td>
            <td className={s.propsCell}>Large, Medium, Small</td>
            <td className={s.propsCell}>Medium</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Status</td>
            <td className={s.propsCell}>To Do, In Progress, In Review, Done</td>
            <td className={s.propsCell}>-</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Text</td>
            <td className={s.propsCell}>False, True</td>
            <td className={s.propsCell}>True</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Outline</td>
            <td className={s.propsCell}>Unoutline, Outline, None</td>
            <td className={s.propsCell}>Unoutline</td>
          </tr>
        </tbody>
      </table>

      {/* Table: Severity Badge */}
      <p className={s.typeHeading}>Table of Properties - Severity Badge</p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Item Number</td>
            <td className={s.propsCell}>1, 2, 3, 4, 5, ?</td>
            <td className={s.propsCell}>-</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Text</td>
            <td className={s.propsCell}>False, True</td>
            <td className={s.propsCell}>False</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
