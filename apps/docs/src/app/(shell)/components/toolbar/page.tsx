import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function ToolbarPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Toolbar</h2>
      <p className={s.pageDescription}>
        Toolbar는 특정 작업을 수행하기 위해 제공하는 Component 입니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Anatomy.png"
          alt="Toolbar Anatomy"
        />
      </div>

      <hr className={s.divider} />

      {/* ── Usage ── */}
      <h3 className={s.sectionHeading}>Usage</h3>
      <p className={s.sectionSubtext}>
        Toolbar는 Worker OSD Viewer에서 사용 되며, 표출되는 위치에 따라서 크게
        2가지로 사용 됩니다.
        <br /><br />
        &bull; Side Toolbar
        <br />
        &bull; Bottom Toolbar
        <br /><br />
        이외에도 Toolbar를 구성하는 요소인 Toolbar Button이 단일하게 Single
        Toolbar Button으로 사용되어 집니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Usage.png"
          alt="Toolbar Usage"
        />
      </div>

      <hr className={s.divider} />

      {/* ── Positioning ── */}
      <h3 className={s.sectionHeading}>Positioning</h3>
      <p className={s.sectionSubtext}>
        작업이 수행되는 특정 Section 위에 배치되어 사용되며, 작업 수행에 방해가
        되지 않는 위치인 Top / Bottom 혹은 Side에 위치하는 것을 원칙으로 합니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Positioning.png"
          alt="Toolbar Positioning"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Components
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Components</h3>
      <p className={s.sectionSubtext}>
        Toolbar는 특정 작업을 수행하기 위해 제공하는 Component 입니다.
      </p>

      {/* ── Side Toolbar ── */}
      <h4 className={s.typeHeading}>Side Toolbar</h4>
      <p className={styles.typeDescription}>
        Vertical의 형태로 Toolbar가 종속된 Workspace에서 좌측 혹은 우측 귀퉁이
        위치하며 목적에 따라서 Divider로 구분하여 요소들을 분리 할 수 있습니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Side Toolbar.png"
          alt="Side Toolbar"
        />
      </div>

      {/* ── Bottom Toolbar ── */}
      <h4 className={s.typeHeading}>Bottom Toolbar</h4>
      <p className={styles.typeDescription}>
        Horizontal의 형태로 Toolbar가 종속된 Workspace에서 하단 귀퉁이에
        위치하며 목적에 기능적으로 구분이 확연히 필요한 것들은 분리하여 8px
        간격을 두고 묶어 배치하는 것이 특징입니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Bottom Toolbar.png"
          alt="Bottom Toolbar"
        />
      </div>

      {/* ── Single Toolbar Button ── */}
      <h4 className={s.typeHeading}>Single Toolbar Button</h4>
      <p className={styles.typeDescription}>
        Side Toolbar, Bottom Toolbar에서 여러 조합의 요소들을 그룹화 하여
        사용하는 것과 달리 단일하게 사용되어지는 요소 입니다. 여러 역할로 사용이
        되며 종류도 다양하게 생성 될 수 있습니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Single Toolbar Button.png"
          alt="Single Toolbar Button"
        />
      </div>

      {/* ── Extra Case ── */}
      <h4 className={s.typeHeading}>Extra Case</h4>
      <p className={styles.typeDescription}>
        작업공간에서 다양한 목적에 따라서 Toolbar가 변형되어 사용 되어 질 수
        있습니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Extra Case.png"
          alt="Extra Case"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Varients
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Varients</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Varients 01.png"
          alt="Toolbar Varients - Side Toolbar Button"
        />
      </div>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Varients 02.png"
          alt="Toolbar Varients - Bottom Toolbar Button"
        />
      </div>

      {/* ── State ── */}
      <h4 className={s.typeHeading}>State</h4>
      <p className={styles.typeDescription}>
        Toolbar Button의 경우 5가지 (Default, Hover, Selected, Select Hover,
        Disabled)로 구성되어져 있습니다. 사용되는 목적에 따라서 Selected와
        Select Hover가 생략되어 사용되어 질 수 있습니다.
      </p>

      <div className={styles.variantsRow}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toolbar/Hover.png"
              alt="Hover"
            />
          </div>
          <h4 className={styles.variantColHeading}>Hover</h4>
          <p className={styles.variantColDesc}>
            Toolbar 내의 기능 요소들을 개별로 Hover 하였을때 작업툴에 대한
            설명의 Tooltip을 띄우는 것을 원칙으로 하되 경우에 따라 생략
            가능합니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/toolbar/Selected & Clicked.png"
              alt="Selected & Clicked"
            />
          </div>
          <h4 className={styles.variantColHeading}>Selected &amp; Clicked</h4>
          <p className={styles.variantColDesc}>
            특정 툴의 경우 Selected 상태에 별도의 Component의 표출이 필요한
            경우에는 Tooltip position 방식과 동일하게 위치 하는 것(4px) 으로
            합니다. Selected 된 상태에서 표출이 되는 경우와 다르게 선택이 되어진
            상태가 아닌 Clicked Action으로{" "}
            <span style={{ fontSize: 12, color: "var(--gray-500)" }}>
              (별도의 Clicked 상태의 Toolbar Btn은 따로 정의 되어지지 않았음)
            </span>{" "}
            표출 되어지는 경우 8px 간격을 두고 띄우는 것으로 합니다.
          </p>
        </div>
      </div>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Clicked & Change.png"
          alt="Clicked & Change"
        />
      </div>
      <h4 className={styles.variantColHeading}>Clicked &amp; Change</h4>
      <p className={styles.variantColDesc} style={{ marginBottom: 48 }}>
        일반적으로 Bottom Toolbar에서 사용되는 Button의 경우 선택시 해당 동작을
        수행할뿐 별도의 시각적 변화는 나타나지 않으나, Show / Hide의 기능의 경우
        현재의 Annotation Object 표출 상태에 대한 현재 Viewer 상태를 직접적으로
        나타내주어 직관적으로 알 수 있도록 표현 되는 것이 특징입니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Type of Toolbar
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Type of Toolbar</h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow1col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Type</div>
        </div>
        <div className={s.propsRow1col}>
          <div className={s.propsCell}>Toolbar / Side Toolbar</div>
        </div>
        <div className={s.propsRow1col}>
          <div className={s.propsCell}>Toolbar / Bottom Toolbar</div>
        </div>
        <div className={s.propsRow1col}>
          <div className={s.propsCell}>Toolbar / Fold Toolbar</div>
        </div>
        <div className={s.propsRow1col}>
          <div className={s.propsCell}>Toolbar / Toggle Filter</div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          State of Side Toolbar
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>State of Side Toolbar</h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow2col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>State</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Navigation</div>
          <div className={s.propsCell}>Default, Hover, Selected, Select Hover, Disabled</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Select</div>
          <div className={s.propsCell}>Default, Hover, Selected, Select Hover, Disabled</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Pen</div>
          <div className={s.propsCell}>Default, Hover, Selected, Select Hover, Disabled</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Rectangle</div>
          <div className={s.propsCell}>Default, Hover, Selected, Select Hover, Disabled</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Measurement</div>
          <div className={s.propsCell}>Default, Hover, Selected, Select Hover, Disabled</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Send to back</div>
          <div className={s.propsCell}>Default, Hover, Disabled</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Send to front</div>
          <div className={s.propsCell}>Default, Hover, Disabled</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Redo</div>
          <div className={s.propsCell}>Default, Hover, Disabled</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Undo</div>
          <div className={s.propsCell}>Default, Hover, Disabled</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Tool Guide
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Tool Guide</h3>

      {/* ── Tooltip ── */}
      <h4 className={s.typeHeading}>Tooltip</h4>
      <p className={styles.typeDescription}>
        Toolbar내에서 제공하는 Icon 형태의 Tool들에서의 설명을 Tooltip으로 띄우는
        것을 원칙으로 합니다. 해당 Tooltip 내에는 이름, 설명 가이드, 그리고
        단축키에 대한 정보를 제공하는 것이 일반적입니다. 작업 과정에서의 별도의
        설명이 필요하지 않는 직관적인 요소는 설명에 대한 생략이 가능하며, 이는
        단축키도 마찬가지로 종속된 작업공간에서의 작업과정에서 별도의 단축키가
        필요하지 않은 Tool의 경우 단축키에 대한 정보와 기능을 생략하는 것으로
        합니다.
        <br /><br />
        Tooltip의 표출은 Tooltip의 사용 정책과 동일하게, 요소를 Hover시 표출
        되는 것이 원칙입니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Tooltip.png"
          alt="Tooltip"
        />
      </div>

      {/* ── Cursor ── */}
      <h4 className={s.typeHeading}>Cursor</h4>
      <p className={styles.typeDescription}>
        Toolbar의 각각의 요소들이 제공하는 기능들은 다양합니다. 해당 Toolbar
        Button을 클릭 했을때, 제공하는 기능에 따라서 Cusor의 형태가 달라집니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/toolbar/Cursor.png"
          alt="Cursor"
        />
      </div>
    </div>
  );
}
