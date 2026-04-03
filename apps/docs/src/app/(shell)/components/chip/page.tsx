import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function ChipPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Chips</h2>
      <p className={s.pageDescription}>
        Chip은 사용자로 하여금 정보를 입력하거나 특정 값을 선택하는 목적으로
        사용 됩니다. 개별의 Chip에 대하여 On / Off의 목적으로 사용 가능하며
        여러개의 Chip이 함께 사용 될때 단일 선택으로 사용 하는 것이 특징입니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Anatomy
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/chip/Anatomy.png"
          alt="Chip Anatomy"
        />
      </div>
      <ul className={styles.anatomyList}>
        <li>1. Filter Container</li>
        <li>2. Text Label</li>
      </ul>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Components
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Components</h3>
      <p className={s.sectionSubtext}>
        Chips는 칩 중 하나를 선택할 경우 즉각적으로 반영된 액션과 데이터가
        나타납니다. Basic Filter/Severity Chips는 최소 두 가지 옵션이 있는 경우
        필터링을 목적으로 사용합니다. Filter Chip은 Label의 종류와 상관없이 동일한
        Action의 Color를 표출하며, Severity Chip은 Label에 정의된 Severiry의
        종류에 따라서 다르게 정의된 Color로 Action에 대한 결과값을 상이하게
        표출하는 것이 특징입니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/chip/Components.png"
          alt="Chip Components"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Filter Chip
          ══════════════════════════════════════════ */}

      <h2 className={s.sectionHeading}>Filter Chip</h2>
      <p className={s.sectionSubtext}>
        Filter Chip Label의 Text는 변경가능하며, Wind에서는 여러개의 Filter Chip을
        Filter Bar의 형태로 사용합니다. 각각의 Chip Group에 부여된 Label Text는
        다른 필터값을 의미하며, 모든 Filter Chip의 Selected 상태의 색상은 동일하게
        사용됩니다.
      </p>

      <div className={styles.variantsRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/chip/Filter Chip 01.png"
            alt="Filter Chip"
          />
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Filter Chip 02.png"
              alt="Filter Chip Anatomy"
            />
          </div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Filter Chip State.png"
              alt="Filter Chip State"
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            Basic Filter Chips는 Selected/Unselected에 따라 Default, Hover,
            Selected, Disabled 상태로 분류됩니다. Selected는 Active된 상태로
            간주됩니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Filter Chip Size.png"
              alt="Filter Chip Size"
            />
          </div>
          <h4 className={styles.variantColHeading}>Size</h4>
          <p className={styles.variantColDesc}>
            사이즈는 Width값은 유동적이며 Height는 높이 기준으로 32px (Medium),
            20px (Small)을 사용합니다. 사이즈에 따라 폰트 크기, 아이콘 사이즈,
            레디어스, 패딩은 상이합니다. 이외 최소 높이 20 미만(Small)은 최소 터치
            영역 확보 이슈로 사용을 지양합니다.
          </p>
        </div>
      </div>

      {/* ── Table of Figma Properties ── */}
      <h3 className={s.sectionHeading}>Table of Figma Properties</h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Status</div>
          <div className={s.propsCell}>Selected, Unselected</div>
          <div className={s.propsCell}>Unselected</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>
            Default, Hover, Selected, Disabled
          </div>
          <div className={s.propsCell}>Default</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Size</div>
          <div className={s.propsCell}>Medium, Small</div>
          <div className={s.propsCell}>Medium</div>
        </div>
      </div>

      {/* ── Spec ── */}
      <h3 className={s.sectionHeading}>Spec</h3>

      <div className={styles.groupRow}>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Filter Chip Color.png"
              alt="Filter Chip Color"
            />
          </div>
          <h4 className={styles.groupColHeading}>Color</h4>
          <p className={styles.groupColDesc}>
            Active시 Filter Chips 컬러는 카테고리 색상이 적용됩니다.
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Text Byte.png"
              alt="Filter Chip Text Byte"
            />
          </div>
          <h4 className={styles.groupColHeading}>Text Byte</h4>
          <p className={styles.groupColDesc}>
            칩 하나 당 최대 글자 수는 10자(22byte, 공백 포함)로 제한됩니다. 최대
            글자 수를 넘어갈 경우 말줄임 처리되어 생략되며, Tooltip의 형태로
            축약된 정보를 제공합니다.
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Filter Chip Placement.png"
              alt="Filter Chip Placement"
            />
          </div>
          <h4 className={styles.groupColHeading}>Placement</h4>
          <p className={styles.groupColDesc}>
            Filter Bar의 형태에서 사용되는 Filter Chip의 경우, 좌측 정렬을
            기본으로, 두 줄 형 사용이 가능합니다. 좌우 마진은 16으로 고정이며
            Label과 칩간의 간격은 8을 적용합니다. 칩들의 그룹간 가격은 32로
            정의하며 행간의 간격은 16입니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Severity Chip
          ══════════════════════════════════════════ */}

      <h2 className={s.sectionHeading}>Severity Chip</h2>
      <p className={s.sectionSubtext}>
        Severity Chip은 상태 또는 결함의 심각도 수준을 단계별로 선택하기 위해
        사용됩니다. 각 Chip에 포함된 숫자 값은 고정된 Severity Level을 의미하며,
        사용자는 정해진 범위 내에서 하나의 값을 선택할 수 있습니다. 일반적인
        텍스트 기반 Chip과 달리, Severity Chip은 동일한 크기와 구조 안에서 숫자
        중심의 선택 경험을 제공하는 것이 특징입니다. 선택된 값은 시각적으로
        명확하게 강조되며, 필요에 따라 단계별 색상 체계를 함께 적용하여 현재
        심각도 수준을 빠르게 인지할 수 있도록 합니다.
      </p>

      <div className={styles.variantsRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/chip/Severity Chip 01.png"
            alt="Severity Chip"
          />
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Severity Chip 02.png"
              alt="Severity Chip Anatomy"
            />
          </div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Varients ── */}
      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Severity Chip State.png"
              alt="Severity Chip State"
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            Basic Filter Chips는 Selected/Unselected에 따라 Default, Hover,
            Selected, Disabled 상태로 분류됩니다. Selected는 Active된 상태로
            간주됩니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Severity Chip Size.png"
              alt="Severity Chip Size"
            />
          </div>
          <h4 className={styles.variantColHeading}>Size</h4>
          <p className={styles.variantColDesc}>
            Width값은 유동적이며 상황에 맞게 가로 폭 사이즈를 변경 할 수
            있습니다. Zoomable 사용 고객사의 Severity 값 분류 정책에 따라 색상과
            중요도 Order 또는 표출의 수는 변경될수 있으며 사용되어지는 공간의
            영역의 정도에 따라 Width 값은 유동적으로 변화되는 것이 특징입니다.
            일반적으로 Width의 값은 OSD Viewer내에 포함될시에 &#123;(포함
            영역)-12*(전체 Severity 갯수-1)&#125;/(전체 Severity 갯수)로
            사용되며, Modal에서의 경우 &#123;(포함 영역)-8*(전체 Severity
            갯수-1)&#125;/(전체 Severity 갯수)로 사용되어 집니다.
            <br /><br />
            일반적으로 Chip의 Width의 최소값을 Height를 넘지 않는 것을 원칙으로
            하나, Chip의 Group의 영역이 포함된 Container를 넘어가는 경우에 규칙의
            우선순위를 Container내에 포함시키는 것이 높은 우선순위를 가집니다.
          </p>
        </div>
      </div>

      {/* ── Table of Figma Properties ── */}
      <h3 className={s.sectionHeading}>Table of Figma Properties</h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Status</div>
          <div className={s.propsCell}>Selected, Unselected</div>
          <div className={s.propsCell}>Unselected</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>
            Default, Hover, Selected, Disabled
          </div>
          <div className={s.propsCell}>Default</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Size</div>
          <div className={s.propsCell}>Medium, Small</div>
          <div className={s.propsCell}>Medium</div>
        </div>
      </div>

      {/* ── Spec ── */}
      <h3 className={s.sectionHeading}>Spec</h3>

      <div className={styles.groupRow}>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Severity Chip Color.png"
              alt="Severity Chip Color"
            />
          </div>
          <h4 className={styles.groupColHeading}>Color</h4>
          <p className={styles.groupColDesc}>
            Active시 Severity FIlter Chips 컬러는 카테고리 색상이 적용됩니다.
            Zoomable을 사용하는 고객사에 따라 다르게 Severity 단계가 나눠 질 수
            있으며, 해당부분의 Severity 단계의 색상은 가장 양끝인 1과 5에서부터
            차례로 포함 시키는 것을 원칙으로 합니다.
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Severity Chip Text Byte.png"
              alt="Severity Chip Text Byte"
            />
          </div>
          <h4 className={styles.groupColHeading}>Text Byte</h4>
          <p className={styles.groupColDesc}>
            Severity Chip의 경우 부여된 Severity의 Number를 사용하는 것을
            원칙으로 하여, 일반적으로 2글자 이내의 숫자를 사용하는 것을 원칙으로
            합니다.
          </p>
        </div>
        <div className={styles.groupCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/chip/Severity Chip Placement.png"
              alt="Severity Chip Placement"
            />
          </div>
          <h4 className={styles.groupColHeading}>Placement</h4>
          <p className={styles.groupColDesc}>
            좌측 정렬을 기본으로, 두 줄 형 사용이 가능합니다. Label과 칩간의
            위아래 간격은 8을 적용합니다. 칩들의 그룹간 가격은 Medium-8, Small-12
            마진 간격입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
