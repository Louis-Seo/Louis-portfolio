import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function NavigationPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Navigation</h2>
      <p className={s.pageDescription}>
        Navigation은 사용자가 필요한 것을 찾도록 도와주며 현재 위치를 알려주는
        컴포넌트입니다. 제품 내에서 상위 수준 탐색에 사용되는 구성 요소로 동일한
        Hierarchy Level 화면 혹은 메뉴 사이를 이동할때 사용 됩니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Wind GNB
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Wind GNB</h3>
      <p className={s.sectionSubtext}>
        Wind GNB는 화면 좌측에 고정되어 노출되는 요소로 다른 페이지로 빠르게
        이동할 수 있게 해줍니다. 5가지의 아이콘을 탭하면 사용자는 해당 아이콘과
        연결된 최상위 네비게이션 대상으로 이동합니다. 언제 어디서든 직관적이고 예측
        가능해야 하며 스크롤시에도 좌측에 고정되어 노출합니다. GNB는 항상 Expand
        상태를 기본 상태로 정의합니다. Wind 에서 사용되는 GNB는 Wind, Wind Farm,
        그리고 Admin으로 크게 세가지로 분류 됩니다.
      </p>

      {/* Wind GNB Types: Wind / Wind Farm / Admin */}
      <div className={s.previewBox}>
        <img
          src="/images/components/navigation/Wind GNB.png"
          alt="Wind GNB - Wind, Wind Farm, Admin types"
        />
      </div>

      <p className={styles.previewCaption}>
        앱 진입 시 Main Navigaiton Bar의 &apos;DASHBOARD&apos;가 Active
        상태이며 기본값으로 계속해서 노출됩니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Anatomy
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/navigation/Navigation Anatomy.png"
          alt="Navigation Anatomy"
        />
      </div>


      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Variants
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Variants</h3>
      <p className={s.sectionSubtext}>
        Main GNB의 아이콘은 Active, Inactive (Selected, Unselected)로
        분류됩니다. 사용자 위치를 나타내므로 시각 일관성 고려를 위해 Active Icon
        Color는 Green-500, Inactive Icon Color는 Gray-500을 활용합니다. 기본
        설정값에서 네비게이션 아이콘 하나는 활성화된 상태로 설정하여 사용합니다.
        (e.g. 로그인하여 첫 디폴트 화면으로는 Dashboard가 선택된 화면으로 한다.)
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/navigation/Navigation Variants.png"
          alt="Navigation Variants"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          GNB Fold & Scroll Bar
          ══════════════════════════════════════════ */}

      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/navigation/GNB Fold.png"
              alt="GNB Fold"
            />
          </div>
          <h4 className={styles.variantColHeading}>GNB Fold</h4>
          <p className={styles.variantColDesc}>
            GNB의 경우 사용의 용도에 따라 접었다 필 수 있으며, 해당 Action을
            수행 할 수 있는 Icon Button의 경우 GNB 가장자리를 Hover시 표출 되는
            것이 특징입니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/navigation/Scroll Bar.png"
              alt="Scroll Bar"
            />
          </div>
          <h4 className={styles.variantColHeading}>Scroll Bar</h4>
          <p className={styles.variantColDesc}>
            GNB에 표출되는 Item이 화면의 영역을 넘어 갈때, Scroll Bar가
            생성되며, Item의 영역 기준으로 Scroll Area가 생성되는 것이
            특징입니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Table of Figma Properties - Wind GNB
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>
        Table of Figma Properties - Wind GNB
      </h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>Admin, Wind, WindFarm</div>
          <div className={s.propsCell}>Wind</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Fold</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>False</div>
        </div>
      </div>

      {/* ── Table of Figma Properties - Wind GNB / Item ── */}
      <h3 className={s.typeHeading}>
        Table of Figma Properties - Wind GNB / Item
      </h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>Wind, Admin</div>
          <div className={s.propsCell}>Expand</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Category</div>
          <div className={s.propsCell}>
            Management, Blades, Reports, History, User, Dashboard, Resources,
            Statistics, Wind Farm
          </div>
          <div className={s.propsCell}>Dashboard</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>
            Default, Hover, Selected, Selected Hover
          </div>
          <div className={s.propsCell}>Default</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Fold</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>True</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Expand</div>
          <div className={s.propsCell}>False, True</div>
          <div className={s.propsCell}>False</div>
        </div>
      </div>

      {/* ── Table of Figma Properties - Item ── */}
      <h3 className={s.typeHeading}>
        Table of Figma Properties - Item
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
            Default, Selected, Hover, Selected Hover
          </div>
          <div className={s.propsCell}>Default</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Dp</div>
          <div className={s.propsCell}>00, 01</div>
          <div className={s.propsCell}>00</div>
        </div>
      </div>

      {/* ── Table of Figma Properties - Menu ── */}
      <h3 className={s.typeHeading}>
        Table of Figma Properties - Menu
      </h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Open</div>
          <div className={s.propsCell}>True</div>
          <div className={s.propsCell}>True</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>ItemCount</div>
          <div className={s.propsCell}>1, 2, 3</div>
          <div className={s.propsCell}>None</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          GNB Dropdown
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>GNB Dropdown</h3>
      <p className={s.sectionSubtext}>
        GNB Dropdown은 옵션 리스트 중 하나의 옵션 선택 시 활용되는
        컴포넌트입니다. 선택 가능한 옵션 개수가 다수일 경우, 드롭다운 메뉴를
        사용해 값을 노출합니다. 드롭다운 아이템 리스트 탑색 옵션 선택 시 선택
        값에 해당하는 디스플레이 화면으로 전환됩니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/navigation/GNB Dropdown.png"
          alt="GNB Dropdown"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Spec
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Spec</h3>

      {/* ── Spacing ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/navigation/Spacing.png"
            alt="Navigation Spacing"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Spacing</h4>
          <p className={s.ruleText}>
            GNB의 영역은 각 컨테이너 높이 36px을 사용합니다. Dashboard 와
            Inspection간의 간격은 24px을 띄고 시작합니다. 또한 각 탭과 아이콘 별
            간격은 Container 기준 Center에서 높이 12px의 간격을 두고 사용합니다.
            아이콘과 레이블의 간격은 12px 입니다.
          </p>
        </div>
      </div>

      {/* ── Extended Structure ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/navigation/Extended Structure.png"
            alt="Navigation Extended Structure"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Extended Structure</h4>
          <p className={s.ruleText}>
            Wind Farm 화면에서 사용되는 GNB는 기본 구조에 비해 추가 요소가 포함된
            확장형 구조를 사용합니다. 상단에는 이전 화면으로 이동하는 Back Button이
            배치되며, Farm 전환을 위한 Dropdown Button이 함께 제공됩니다. 이를 통해
            사용자는 현재 컨텍스트를 유지한 상태에서 상위 화면으로 이동하거나 다른
            Farm으로 빠르게 전환할 수 있습니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Usage Guidelines (Do / Don't)
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Usage Guidelines</h3>
      <p className={s.sectionSubtext}>
        Main GNB의 아이콘은 Active, Inactive (Selected, Unselected)로
        분류됩니다. 사용자 위치를 나타내므로 시각 일관성 고려를 위해 Active Icon
        Color는 Green 500, Inactive Icon Color는 Gray 500을 활용합니다. 기본
        설정값에서 네비게이션 아이콘 하나는 활성화된 상태로 설정하여 사용합니다.
        (e.g. 로그인하여 첫 디폴트 화면으로는 Dashboard가 선택된 화면으로
        합니다.)
      </p>

      <div className={styles.doDontRow}>
        <div className={styles.doDontCol}>
          <h4 className={styles.doDontHeading}>
            Do : GNB의 Menu의 Item 경우 Icon을 사용하지 않음
          </h4>
          <p className={styles.doDontDesc}>
            같은 위계로 사용 되는 Item들의 경우에 묶어서 사용하되, 최상위 위계에
            해당하는 Item에만 Icon을 함께 사용하는 것을 원칙으로 합니다.
          </p>
          <div className={styles.doDontPreview}>
            <img
              src="/images/components/navigation/Do.png"
              alt="Do - Menu Item without Icon"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles.doDontCol}>
          <h4 className={styles.doDontHeading}>
            Don&apos;t : Active GNB Item의 상태는 단일하게 사용
          </h4>
          <p className={styles.doDontDesc}>
            Default의 상태로 정의되어진 색상이 아닌 다른 색상의 아이콘 및 Text
            Label의 색상으로 사용하지 않으며, GNB에서 Active 상태의 경우 중복되어
            사용 되는 것을 지양 합니다.
          </p>
          <div className={styles.doDontPreview}>
            <img
              src="/images/components/navigation/Don't.png"
              alt="Don't - Multiple active states"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
