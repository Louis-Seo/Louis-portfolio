import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function TreeViewPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Tree</h1>
      <p className={s.pageDescription}>
        Tree는 사용자가 중첩된 두 가지 항목들을 탐색 보도록 해주기는 컴포넌트 입니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h2 className={s.sectionHeading}>Anatomy</h2>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/tree-view/Anatomy.png" alt="Anatomy" />
        <p className={styles.previewBoxCompactLabel}>
          1. Expand and Collapse Icon<br />
          2. Checkbox<br />
          3. Branch Item<br />
          4. Leaf Item<br />
          5. Text Label
        </p>
      </div>

      <div className={s.sectionGap} />

      {/* ── Usage ── */}
      <h2 className={s.sectionHeading}>Usage</h2>
      <p className={s.sectionSubtext}>
        Tree View는 사용 목적에 따라 Text Type과 Checkbox Type의 두 가지 형태로 구분됩니다. 두 타입 모두 계층 구조를 시각적으로 표현한다는 공통점을 가지지만, 각 Item과 상호작용하는 방식과 선택의 목적에서 차이가 있습니다.
        <br /><br />
        Text Type은 특정 Node를 선택하여 상세 화면으로 이동하거나 개별 액션을 수행하는 데 적합하며, Checkbox Type은 여러 Node를 동시에 선택한 뒤 일괄 액션을 수행하는 데 적합합니다.
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Text Type.png" alt="Text Type" />
          </div>
          <h4 className={s.typeHeading}>1. Text Type</h4>
          <p className={s.typeSubtext}>
            Text Type은 각 Node를 텍스트 기반 리스트 형태로 표현하여 트리 구조의 계층 관계를 보여주는 방식입니다. 각 Item은 개별적으로 선택 가능한 Label 역할을 하며, 사용자는 특정 Node를 클릭하여 상세 정보 확인, 화면 전환, 또는 개별 액션을 수행할 수 있습니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Checkbox Type.png" alt="Checkbox Type" />
          </div>
          <h4 className={s.typeHeading}>2. Checkbox Type</h4>
          <p className={s.typeSubtext}>
            Checkbox Type은 각 Leaf 또는 Branch Item에 Checkbox를 포함하여 다수의 항목을 동시에 선택할 수 있도록 하는 방식입니다. 주로 여러 Node를 선택한 뒤 일괄 처리나 공통 액션을 수행해야 하는 경우에 사용되며, Text Type보다 선택 관리 중심의 사용 맥락에 적합합니다.
          </p>
        </div>
      </div>

      {/* ── Spacing ── */}
      <h2 className={s.sectionHeading}>Spacing</h2>
      <p className={s.sectionSubtext}>
        Tree View의 Spacing은 각 Node의 계층 구조와 Depth에 따라 정렬 규칙이 달라지도록 설계됩니다. Text Type과 Checkbox Type 모두 동일한 간격 체계를 사용하며, 계층 간 위계가 명확하게 인지될 수 있도록 들여쓰기와 세로 간격을 일관되게 유지합니다.
        <br /><br />
        기본적으로 Leaf Item 간에는 별도의 추가 Gap을 두지 않으며, Branch Item과 하위 Item 그룹 사이에는 8px 간격을 적용합니다. 이를 통해 트리 구조 내 정보의 연속성을 유지하면서도, 상·하위 관계를 자연스럽게 구분할 수 있습니다.
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Text Type Sizing.png" alt="Text Type Sizing" />
          </div>
          <h4 className={s.typeHeading}>Text Type</h4>
          <p className={s.typeSubtext}>
            Text Type은 Branch와 Leaf가 동일한 간격 규칙 안에서 정렬되며, Depth에 따라 들여쓰기만 달라지는 구조를 사용합니다. 각 Leaf Item은 추가 Gap 없이 연속적으로 배치하여 목록 구조가 자연스럽게 이어지도록 합니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Checkbox Type Sizing.png" alt="Checkbox Type Sizing" />
          </div>
          <h4 className={s.typeHeading}>Checkbox Type</h4>
          <p className={s.typeSubtext}>
            Checkbox Type은 Text Type과 동일한 계층 및 간격 규칙을 따르며, Checkbox가 포함되더라도 전체 정렬 구조는 동일하게 유지됩니다. Branch와 Leaf 간의 위계는 들여쓰기와 그룹 간 간격을 통해 명확하게 구분됩니다.
          </p>
        </div>
      </div>

      {/* ── Variants ── */}
      <h2 className={s.sectionHeading}>Variants</h2>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Leaf Item.png" alt="Leaf Item" />
          </div>
          <h4 className={s.typeHeading}>Leaf Item</h4>
          <p className={s.typeSubtext}>
            Leaf Item은 State가 5가지 (Disabled, Default, Hover, Selected, Select Hover) 를 가지게 됩니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBoxFixed}>
            <img src="/images/components/tree-view/Branch Item.png" alt="Branch Item" />
          </div>
          <h4 className={s.typeHeading}>Branch Item</h4>
          <p className={s.typeSubtext}>
            Branch Item은 State가 2가지 (Disabled, Default)로 사용되며 있으며 그 형태의 Expansion State가 반영되어 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
