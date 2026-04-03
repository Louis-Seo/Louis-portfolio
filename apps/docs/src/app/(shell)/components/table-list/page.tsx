import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function TableListPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Table</h1>
      <p className={s.pageDescription}>
        Table은 행과 열을 가진 그리드 형태의 정보 시각화 방식으로, 데이터를 정렬하여 정보를 시각화 하여 줍니다. 많은 정보를 사용자가 빠르게 스캔 하여 정보에 대한 패턴과 인사이트를 확인 할 수 있도록 도와주는 디자인 요소 입니다. (table helps users scan, read, and parse through data)
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h2 className={s.sectionHeading}>Anatomy</h2>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Anatomy.png" alt="Anatomy" />
      </div>

      <div className={s.sectionGap} />

      {/* ── Usage ── */}
      <h2 className={s.sectionHeading}>Usage</h2>
      <p className={s.sectionSubtext}>
        Table의 기능적인 특성에 따라서 Stable Type과 Editable Type으로서 2가지로 분류될 수 있습니다.
      </p>

      <div className={s.previewBox}>
        <img src="/images/components/table-list/Usage 01.png" alt="Stable Type and Editable Type" />
      </div>

      <div className={s.sectionGap} />

      <p className={s.sectionSubtext}>
        Table의 Container 형태적인 특성에 따라서 Fixed Type과 Flexible Type으로서 2가지로 분류 될 수 있습니다.
      </p>

      <div className={s.previewBox}>
        <img src="/images/components/table-list/Usage 02.png" alt="Fixed Type and Flexible Type" />
      </div>

      <hr className={s.divider} />

      {/* ── Table Style ── */}
      <h2 className={s.sectionHeading}>Table Style</h2>
      <p className={s.sectionSubtext}>
        Table의 Style은 Table Data의 종류에 따라 다르게 사용이 되며, Wind와 Wind Admin의 경우 시각적 차이를 위한 방식으로 별개로 사용이 되고 있으며, 색상을 제외한 Table의 시각화 규칙은 함께 적용 되는 것으로 합니다.
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/table-list/Wind Page Header.png" alt="Wind Page Header" />
          </div>
          <p className={styles.previewLabel}>Wind Page Header</p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/table-list/Wind Admin Page Header.png" alt="Wind Admin Page Header" />
          </div>
          <p className={styles.previewLabel}>Wind Admin Page Header</p>
        </div>
      </div>

      <div className={s.sectionGap} />

      {/* Typography */}
      <h3 className={s.typeHeading}>Typography</h3>
      <div className={styles.previewBoxNoBg}>
        <img src="/images/components/table-list/Typography.png" alt="Typography" />
      </div>

      <div className={s.sectionGap} />

      {/* Border */}
      <h3 className={s.typeHeading}>Border</h3>
      <p className={s.typeSubtext}>
        Table에 사용되는 Border는 Background와 구분을 목적으로 하는 Outline, 각 Row를 구분을 위한 목적의 Horizontal Line, 그리고 Header Row내의 Header를 분리하기 위한 목적의 Vertical Line으로 총 3가지의 분류로 사용 됩니다.
      </p>

      <div className={s.previewBox}>
        <img src="/images/components/table-list/Border 01.png" alt="Border" />
      </div>

      <div style={{ marginBottom: 24 }} />

      <p className={s.typeSubtext}>
        제공되어야 하는 Column의 갯수가 늘어날시, Table의 가로스크롤 발생으로 정보를 제공하게 되는데, 좌측 주요 정보를 고정하는 목적으로 Divider를 Vertical의 형태로 사용되기도 합니다.
      </p>

      <div className={s.previewBox}>
        <img src="/images/components/table-list/Border 02.png" alt="Border Pinned Column" />
      </div>

      <div className={s.sectionGap} />

      {/* Visual Cue */}
      <h3 className={s.typeHeading}>Visual Cue</h3>
      <p className={s.typeSubtext}>
        Table Item의 expanded 기능표출 혹은 특정 &apos;Pinned Column / Row&apos; 시에 사용 되는 것으로 한다. Zebra Stripe
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Visual Cue.png" alt="Visual Cue" />
      </div>

      <hr className={s.divider} />

      {/* ── Content Data Alignment ── */}
      <h2 className={s.sectionHeading}>Content Data Alignment</h2>
      <p className={s.sectionSubtext}>
        데이터의 종류와 Table 내에서의 위치에 따라서 Header와 Contents의 정렬 방식 다르게 적용 됩니다.
      </p>

      <h4 className={s.typeHeading}>Left Align</h4>
      <p className={s.typeSubtext}>
        수치적인 정보가 아닌 Textual Data 및 Content Cell 내부에 들어가는 Component Data (e.g. Avatar, Badge...) 등을 정보들은 왼쪽으로 정렬하는 것을 지향 합니다. 수치적 정보의 경우 기본적으로 우측정렬로 배치되는 것을 지향하지만, 한 Column의 표출되는 Data의 Contents 타입이 복합적으로 표출 되는 경우 Numerical Data는 Textual Data와 함께 좌측 정렬으로 통일하는 것을 원칙으로 합니다.
      </p>

      <h4 className={s.typeHeading}>Right Align</h4>
      <p className={s.typeSubtext}>
        Numerical Data는 수치적인 비교에 용이하기 위한 목적으로 오른쪽 정렬을 하는 것을 지향합니다. Component Data의 경우 Table Column의 우측가장자리에 Hover Action시 표출되는 Button Icon의 경우 우측 정렬을 하는 것을 원칙으로 합니다.
      </p>

      <h4 className={s.typeHeading}>Middle Align</h4>
      <p className={s.typeSubtext}>
        Textual, Component, 그리고 Numerical data의 세가지 타입 모두 heading의 배열이 &apos;3. Selection with Filter&apos; Type의 경우에 중간 정렬로 배치하는 것으로 합니다.
      </p>

      <hr className={s.divider} />

      {/* ── Interaction ── */}
      <h2 className={s.sectionHeading}>Interaction</h2>
      <p className={s.sectionSubtext}>
        Table에서 제공하는 Interaction은 크게 4가지 분류되며 각각의 특성은 개별적으로 만 쓰이지 않으며 복합적으로 함께 사용 될 수 있습니다.
      </p>

      {/* Sorting (Header) */}
      <h3 className={s.typeHeading}>Sorting (Header)</h3>
      <p className={s.typeSubtext}>
        Sorting의 경우 각 Header의 Sorter Button Icon에 종속된 Column의 정렬을 바꾸어 줍니다. Header Title과 함께 사용되며 icon sort형태로 제공되는 sort 방식은 세 가지 방식(초기값, 오름차순, 내림차순)을 제공 합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Sorting (Header).png" alt="Sorting Header" />
      </div>

      <div className={s.sectionGap} />

      {/* Maintain Column or Row when Scrolling */}
      <h3 className={s.typeHeading}>Maintain Column or Row when Scrolling</h3>
      <p className={s.typeSubtext}>
        Table의 Contents는 기본적으로 Pagenation이 아닌 Scroll 방식으로 표출하는 것을 기본으로 하되, 기능적으로 Content의 Data를 이해하는데 있어서 필요한 정보를 고정 하여 표출 합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Maintain Column or Row when Scrolling.png" alt="Maintain Column or Row when Scrolling" />
      </div>

      <hr className={s.divider} />

      {/* ── State ── */}
      <h2 className={s.sectionHeading}>State</h2>
      <p className={s.sectionSubtext}>
        Table 내의 State는 크게 3가지 (Main, Pinned, Empty) State로 분류되며, 각 종류의 Feedback을 통해서 상태변화 하게 됩니다.
      </p>

      <h3 className={s.typeHeading}>Main Table Contents State</h3>
      <div className={styles.previewBoxNoBg}>
        <img src="/images/components/table-list/Main Table Contents State.png" alt="Main Table Contents State" />
      </div>

      <div className={s.sectionGap} />

      <h3 className={s.typeHeading}>Sub Table Contents State</h3>
      <div className={styles.previewBoxNoBg}>
        <img src="/images/components/table-list/Sub Table Contents State.png" alt="Sub Table Contents State" />
      </div>

      <div className={s.sectionGap} />

      {/* ── Table Empty State ── */}
      <h2 className={s.sectionHeading}>Table Empty State</h2>
      <p className={s.sectionSubtext}>
        데이터가 없는 경우 특정한 Table의 Content가 비어있을 때 Empty State를 데이터가 없다는 것을 알려 나타내며 데이터가 아직 준비 중이라는 것을 표현 할 수 있습니다. Table의 특성에 따라 Empty State를 적용해 사용할 수 있으며, 필요한 경우 이미지와 CTA 등의 Empty State를 자유롭게 적용하여 사용할 수 있습니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Table Empty State.png" alt="Table Empty State" />
      </div>

      <hr className={s.divider} />

      {/* ── Sizing ── */}
      <h2 className={s.sectionHeading}>Sizing</h2>
      <p className={s.sectionSubtext}>
        Table의 크기는 Column의 경우에, 각 Header Row와 Contents Row로 구성되며 Row의 높이(세로 영역)를 사전에정의하는 것이며, 가로(Row Height)는 32px, 40px, 48px, 56px의 4단계를 기본적으로 사용합니다. 데이터 밀도와 사용 목적에 따라, Height를 지정하여 각 행의 높이가 달라 지는것이며, 각 열의 너비는 콘텐츠 종류와 상하 관계에 맞추어 배분하며, 최소 너비와 셀 내부 여백, Cell 패딩 16px (좌우) 값의 규칙의 적용은 모든 Cell에 동일하게 적용하여, 읽기 쾌적한 그리드 밀도를 유지합니다. Column은 Contents에 포함되어지는 Component의 Size와 함께 Height를 맞추는 것을 원칙으로 합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/table-list/Sizing.png" alt="Sizing" />
      </div>

      <hr className={s.divider} />

      {/* ── Header Style ── */}
      <h2 className={s.sectionHeading}>Header Style</h2>
      <p className={s.sectionSubtext}>
        Table Header는 각 Column의 의미를 명확하게 전달하고, 필요에 따라 선택 및 정렬과 같은 보조 기능을 함께 제공하기 위해 사용됩니다. 기본적으로 Text Label Type을 기준으로 구성되며, 테이블의 목적과 인터랙션 수준에 따라 Filter 또는 Selection 요소를 포함한 형태로 확장할 수 있습니다.
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Text Label Type.png" alt="Text Label Type" />
          </div>
          <h4 className={s.typeHeading}>1. Text Label Type</h4>
          <p className={s.typeSubtext}>
            가장 기본적인 Header 형태로, Column의 이름이나 데이터 속성을 텍스트 중심으로 명확하게 전달할 때 사용합니다. 정렬이나 선택과 같은 추가 인터랙션이 필요하지 않은 읽기 중심의 Table에 적합합니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Text with Filter Type.png" alt="Text with Filter Type" />
          </div>
          <h4 className={s.typeHeading}>2. Text with Filter Type</h4>
          <p className={s.typeSubtext}>
            텍스트 Label과 함께 정렬 또는 필터와 같은 보조 액션이 필요한 경우에 사용하는 Header 형태입니다. 사용자는 Header 영역에서 직접 데이터의 순서나 조건을 조정할 수 있습니다.
          </p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Selection with Filter Type.png" alt="Selection with Filter Type" />
          </div>
          <h4 className={s.typeHeading}>3. Selection with Filter Type</h4>
          <p className={s.typeSubtext}>
            선택 기능과 필터 기능이 동시에 필요한 경우에 사용하는 Header 형태입니다. 주로 다중 선택이 가능한 테이블에서 전체 선택과 컬럼 기준 정렬/필터를 함께 제공해야 할 때 적합합니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Selection Type.png" alt="Selection Type" />
          </div>
          <h4 className={s.typeHeading}>4. Selection Type</h4>
          <p className={s.typeSubtext}>
            Header에 Selection Control만 포함된 형태로, Row 선택 기능을 제공하기 위해 사용됩니다. 주로 체크박스를 통한 다중 선택 테이블에서 전체 선택 상태를 제어하는 용도로 사용됩니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Table Contents Style ── */}
      <h2 className={s.sectionHeading}>Table Contents Style</h2>
      <p className={s.sectionSubtext}>
        Table Cell내의 Contents의 Padding은 기본적으로 좌우 16px을 기본으로 Editable State인 상태에서는 Dropdown 혹은 Input의 Container를 기준으로 좌우 4px를 가져가는 것으로 합니다.
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Checkbox Type.png" alt="Checkbox Type" />
          </div>
          <h4 className={s.typeHeading}>1. Checkbox Type</h4>
          <p className={s.typeSubtext}>
            Checkbox가 포함된 Type의 Width의 경우, 좌우 Padding을 12px로 둔 값으로 정의 합니다. Checkbox Type은 일반적으로 Table Row의 가장 좌측에 위치하는 것을 원칙으로 합니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Text Label Type-1.png" alt="Contents Text Label Type" />
          </div>
          <h4 className={s.typeHeading}>2. Text Label Type</h4>
          <p className={s.typeSubtext}>
            Text Label Type은 텍스트 기반 데이터를 표시하기 위한 가장 기본적인 Table Content 형태입니다. Default 상태에서는 읽기 중심의 정보를 안정적으로 전달하며, Editable 상태에서는 Input을 통해 직접 수정 가능한 구조로 확장할 수 있습니다.
          </p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Badge Type.png" alt="Badge Type" />
          </div>
          <h4 className={s.typeHeading}>3. Badge Type</h4>
          <p className={s.typeSubtext}>
            Table Cell 내의 Badge가 포함되는 경우, Table내에서 수정이 가능한 Editable Case와, 수정이 불가능한 Stable Case로 나뉘어 다른 Sizing으로 표출 되는 것으로 합니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Hover Action Icon Type.png" alt="Hover Action Icon Type" />
          </div>
          <h4 className={s.typeHeading}>4. Hover Action Icon Type</h4>
          <p className={s.typeSubtext}>
            Table Cell 내의 Button Icon의 경우, Table Row 우측 끝에 위치하는 것으로 합니다. Height=56px 및 48px인 경우에 모두 사용이 가능 하며 Width의 최소 값은 Button Icon Group의 좌우 Padding 16px인 경우로 정의 합니다.
          </p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Avatar Type.png" alt="Avatar Type" />
          </div>
          <h4 className={s.typeHeading}>5. Avatar Type</h4>
          <p className={s.typeSubtext}>
            Avatar Type은 사용자 또는 객체 식별이 필요한 정보를 표현하기 위해 Avatar와 텍스트를 함께 사용하는 형태입니다. 이름, 담당자, 소유자와 같이 빠른 인지와 구분이 필요한 데이터에 적합합니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBoxNoBg}>
            <img src="/images/components/table-list/Expand Type.png" alt="Expand Type" />
          </div>
          <h4 className={s.typeHeading}>6. Expand Type</h4>
          <p className={s.typeSubtext}>
            Expand Type은 메인 정보와 하위 정보를 함께 표시하여 데이터 간의 위계와 관계를 전달하는 형태입니다. 부가 설명이나 하위 정보를 함께 제공해야 하는 경우에 사용되며, Main과 Sub 간의 구조적 구분을 통해 정보 이해를 돕습니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Usage Guidelines ── */}
      <h2 className={s.sectionHeading}>Usage Guidelines</h2>

      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/table-list/Do 01.png" alt="Do 01" />
          </div>
          <h4 className={s.typeHeading}>Do : 텍스트 정보는 반복 유형을 기준으로 한다.</h4>
          <p className={s.typeSubtext}>
            Textual Data의 경우 반복, Numerical Data의 수치적 상황을 하는 것을 지향합니다. 두 가지 Data의 혼합이 올때에는 별도의 분리가 가능할시, Numerical Data를 별도 Column으로 가져가는 것을 지향합니다.
          </p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/table-list/Dont 01.png" alt="Dont 01" />
          </div>
          <h4 className={s.typeHeading}>Don&apos;t : Zebra Stripes의 사용을 지양합니다.</h4>
          <p className={s.typeSubtext}>
            Zoomable Design System의 Table은 Zebra Stripe의 사용이 없으며 Row에 대한 구분을 Divider를 활용하여 하는 것을 기본으로 합니다.
          </p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/table-list/Do 02.png" alt="Do 02" />
          </div>
          <h4 className={s.typeHeading}>Do : 데이터의 상태에 따라 다른 방식으로 표출 합니다.</h4>
          <p className={s.typeSubtext}>
            데이터가 없는 경우: 수정이 불가한 경우 gray 100, country info
          </p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/table-list/Dont 02.png" alt="Dont 02" />
          </div>
          <h4 className={s.typeHeading}>Don&apos;t : Header의 타입을 다중으로 사용하는 것을 지양합니다.</h4>
          <p className={s.typeSubtext}>
            사이즈 Separation 타입의 경우 다양한 타입의 Header를 제한하여 사용하며, 2개를 넘지않는 것이 좋습니다. 같은 타입의 Header의 경우 이해를 위한 시각적으로 분리되어 보이지 않도록 단일한 Header Style로 사용해 주는 것을 지향합니다.
          </p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/table-list/Do 03.png" alt="Do 03" />
          </div>
          <h4 className={s.typeHeading}>Do : 다른 맥락적 의미의 데이터는 시각적으로 분리한다.</h4>
          <p className={s.typeSubtext}>
            주어진 정보 내 동일하게 같은 위계에서 다른(다른 종류의) Datasource의 표출들은 서로 같은 위계의 타입이면 같은 Row의 크기/구조를 사용해야하는 것은 같은 것이 맞으나 시각적으로 구분 지을 수 있어야 합니다.
          </p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/table-list/Dont 03.png" alt="Dont 03" />
          </div>
          <h4 className={s.typeHeading}>Don&apos;t : Contents 내의 Vertical Line 사용을 지양합니다.</h4>
          <p className={s.typeSubtext}>
            Table Header의 Column을 분리하기 위한 목적의 Vertical Line이 사용 되었으나, Wind Design System에서는 Table의 Contents Line은 Header에만 적용되어지는 것이 특징입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
