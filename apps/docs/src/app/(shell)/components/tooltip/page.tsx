import s from "@/styles/docs.module.css";

export default function TooltipPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Tooltip</h1>
      <p className={s.pageDescription}>
        Tooltip은 특정 UI 요소에 대한 부가 설명을 짧고 직관적으로 전달하기 위해 사용하는 메시지 컴포넌트입니다. 주로 익숙하지 않은 기능, 아이콘 버튼, 또는 특정 컨텍스트에 대한 보충 정보를 제공할 때 사용되며, 사용자가 현재 보고 있는 요소의 의미와 동작을 빠르게 이해할 수 있도록 돕습니다.
        <br /><br />
        Tooltip은 기본적으로 대상 요소와 직접 연결된 짧은 설명을 제공하는 데 목적이 있으며, 표시되는 정보는 가능한 한 간결하게 유지하는 것을 원칙으로 합니다. 보다 길거나 복수의 정보를 전달해야 하는 경우에는 Tooltip 대신 Popup Tip을 사용하여 정보의 밀도와 인터랙션 방식을 구분합니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h2 className={s.sectionHeading}>Anatomy</h2>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Anatomy.png" alt="Anatomy" />
      </div>
      <p className={s.caption}>
        1. Label txt<br />
        2. Container<br />
        3. Tip
      </p>

      <div className={s.sectionGap} />

      {/* ── Usage ── */}
      <h2 className={s.sectionHeading}>Usage</h2>
      <p className={s.sectionSubtext}>
        Tooltip의 텍스트는 가능한 한 최소한으로 요약된 설명이어야 하며, 주 콘텐츠를 대체하기보다 보충하는 역할에 집중해야 합니다. 특히 아이콘 버튼이나 기능 중심의 액션을 설명하는 용도에 적합하며, 사용자가 의사결정을 더 쉽게 이해하도록 돕는 보조 정보로 사용하는 것이 좋습니다.
        <br /><br />
        Tooltip은 다음과 같은 경우에 적합합니다.
        <br /><br />
        · 아이콘 버튼의 의미를 설명해야 하는 경우
        <br />
        · 특정 기능 또는 액션의 목적을 짧게 보충해야 하는 경우
        <br />
        · Element 또는 Context에 대한 추가 설명이 필요한 경우
        <br />
        · Toolbar 내 툴의 역할과 shortcut을 함께 안내해야 하는 경우
        <br /><br />
        반대로, 컴포넌트 내부의 부가 요소나 드롭다운 아이템 내부 아이콘처럼 이미 맥락이 충분한 경우에는 별도의 Tooltip 사용을 지양합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Usage.png" alt="Usage" />
      </div>

      <div className={s.sectionGap} />

      {/* ── Spec ── */}
      <h2 className={s.sectionHeading}>Spec</h2>

      <h3 className={s.typeHeading}>1. Spacing, Offset &amp; Maximum Width</h3>
      <p className={s.typeSubtext}>
        기본 Tooltip은 Label Text를 기준으로 좌우 12px, 상하 8px의 내부 Padding을 사용합니다. 설명 대상이 되는 UI 요소와 Tooltip 사이에는 8px의 Offset을 두어, 요소와 메시지가 시각적으로 명확하게 분리되도록 합니다.
        <br /><br />
        Tooltip의 최대 너비는 280px로 제한하며, 높이는 콘텐츠 길이에 따라 가변적으로 확장됩니다. 가독성과 정보 전달 효율을 위해 Description은 3줄을 넘지 않도록 구성하는 것을 권장합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Spacing, Offset & Maximum Width.png" alt="Spacing, Offset & Maximum Width" />
      </div>

      <div style={{ marginBottom: 32 }} />

      <h3 className={s.typeHeading}>2. Toolbar Tooltip Spacing</h3>
      <p className={s.typeSubtext}>
        Toolbar Tooltip은 Header, Shortcut, Description과 같이 복수의 정보 요소를 포함하는 확장형 Tooltip입니다. 기본 Tooltip과 동일한 좌우 12px 기준을 유지하되, 내부 요소 간 간격은 정보 위계에 따라 별도로 정의합니다.
        <br /><br />
        Header와 Description 사이에는 4px 간격을 두며, Description 하단에는 8px 여백을 적용합니다. Shortcut은 일반적으로 Tooltip Contents의 우측에 배치하며, Header가 함께 포함되는 경우에는 Header 우측에 정렬하는 것을 원칙으로 합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Toolbar Tooltip Spacing.png" alt="Toolbar Tooltip Spacing" />
      </div>

      <div style={{ marginBottom: 32 }} />

      {/* Placement System */}
      <h3 className={s.typeHeading}>3. Placement System</h3>
      <p className={s.typeSubtext}>
        Tooltip은 Browser Window 기준 32px 안쪽 영역에서 배치되며, 대상 요소와 Tooltip Tip의 중심 정렬을 기준으로 12가지 Placement를 사용합니다. 화면 외곽에서는 경계를 넘지 않도록 위치를 조정하고, Middle Space에서는 Bottom Placement를 기본 우선값으로 적용합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Placement System.png" alt="Placement System" />
      </div>

      <div style={{ marginBottom: 32 }} />

      {/* Middle Space Placement Priority */}
      <h3 className={s.typeHeading}>4. Middle Space Placement Priority</h3>
      <p className={s.typeSubtext}>
        Middle Space에서는 Tooltip이 주변 핵심 콘텐츠를 가리지 않도록 배치해야 합니다. 동일한 그룹에서는 방향의 일관성을 유지하며, 콘텐츠를 가리지 않는 조건에서 Horizontal보다 Vertical, Start/End보다 Center 정렬을 우선적으로 사용합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Middle Space Placement Priority.png" alt="Middle Space Placement Priority" />
      </div>

      <div className={s.sectionGap} />

      {/* ── Contents ── */}
      <h2 className={s.sectionHeading}>Contents</h2>

      {/* 1. Contents Priority */}
      <h3 className={s.typeHeading}>1. Contents Priority</h3>
      <p className={s.typeSubtext}>
        Tooltip이 표출이 되는데 있어서 Contents를 최대한 가리지 않는 것을 기본으로 하되, Contents의 중요도에 위계를 두어 해당 순으로 가리는 것을 원칙으로 합니다.
        <br /><br />
        · <strong>Contents Priority: GNB&gt;CTA button&gt;filter/search bar&gt;그외 콘텐츠</strong>
        <br />
        · <strong>&apos;가리지 않는다&apos;라는 의미는 Container 내의 콘텐츠 자체를 안 가리는 것으로 한다.</strong>
        <br /><br />
        해당 Priority의 기준에 따라 가리지 우선순위가 높은 Contents가 가려지지 않는 선에서 Tooltip이 표출되는 것을 원칙으로 합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Contents Priority.png" alt="Contents Priority" />
      </div>

      <div style={{ marginBottom: 32 }} />

      {/* 2. Boundary of Contents */}
      <h3 className={s.typeHeading}>2. Boundary of Contents</h3>
      <p className={s.typeSubtext}>
        각 요소 영역이 가지고 있는 Contents의 기준을 Container 내의 정보를 담고있는 최소한의 Elements로 정의 하는 것으로 합니다. Tooltip은 아래에 정의 된 Contents 영역을 가리지 않고 표출되는 것을 원칙으로 합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Boundary of Contents.png" alt="Boundary of Contents" />
      </div>

      <div style={{ marginBottom: 32 }} />

      {/* 3. Tooltip Contained Shortcut */}
      <h3 className={s.typeHeading}>3. Tooltip Contained Shortcut</h3>
      <p className={s.typeSubtext}>
        Toolbar의 영역과 같이 어떤 작업을 수행하는데 있어서 Shortcut에 대한 정보를 함께 표출할 필요가 있는 경우 사용되어 집니다. Tooltip Contents의 우측에 위치하는 것이 보편적이며, Header와 세부 Contents가 함께 사용되는 경우에는 Header의 우측에 위치하는 것이 특징입니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Tooltip Contained Shortcut.png" alt="Tooltip Contained Shortcut" />
      </div>

      <hr className={s.divider} />

      {/* ── Tooltips & Popup Tips ── */}
      <h2 className={s.sectionHeading}>Tooltips &amp; Popup Tips</h2>
      <p className={s.sectionSubtext}>
        부가적인 정보를 제공하는 Tip은 총 두가지로 사용되어 집니다. 설명을 제공하고자 하는 컴포넌트에 직접적으로 인터렉션해서 정보를 표출하는 Tooltip과 설명이 필요한 컴포넌트에 부가적인 요소인 Information Icon을 활용하여 표출하는 경우로 나뉘어 집니다. Tooltip의 경우 해당 컴포넌트가 수행하는 Action에 영향을 주지 않기 위해 Hover Interaction에서 표출하며 Popup Tip의 경우 정보가 다중 혹은 긴 경우로 Clicked Interaction으로 좀더 집중하여 해당 정보를 습득 할 수 있도록 하는 것이 특징입니다.
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Tooltip.png" alt="Tooltip" />
          </div>
          <h4 className={s.typeHeading}>Tooltip</h4>
          <p className={s.typeSubtext}>
            Tooltip에는 하나의 콘텐츠에 대한 설명만을 포함하며 1문장을 넘지 않는 것을 원칙으로 한다. 단, 하나의 콘텐츠에 대한 설명이나 단계적인 설명이 필요한 경우 (e.g. Toolbar)에는 Bullet Point를 활용하여 표출 하는 것으로 한다.
            <br /><br />
            일반적으로 모든 Icon Button에는 Tooltip을 띄우는 것으로 한다.
          </p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Popup Tip.png" alt="Popup Tip" />
          </div>
          <h4 className={s.typeHeading}>Popup Tip</h4>
          <p className={s.typeSubtext}>
            하나 혹은 여러 정보를 포함하고 있으며 Information Icon을 활용하여 표출 하는 방식으로 1문장이상의 세부적인 설명 혹은 두가지 이상의 콘텐츠를 포함하는 경우 사용 한다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Interaction ── */}
      <h2 className={s.sectionHeading}>Interaction</h2>

      {/* 1. Exposure Rules */}
      <h3 className={s.typeHeading}>1. Exposure Rules</h3>
      <p className={s.typeSubtext}>
        Tooltip은 Hover Action을 통해 표출이 되고, Pop-up Tooltip은 Click Action을 통해 표출되어 지는 것이 특징 입니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/tooltip/Exposure Rules.png" alt="Exposure Rules" />
      </div>

      <div className={s.sectionGap} />

      {/* Tooltips Exposure Rules */}
      <h3 className={s.typeHeading}>Tooltips Exposure Rules</h3>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow2col} ${s.propsHeader}`}>
            <td className={s.propsCell}></td>
            <td className={s.propsCell}>Action: Hover</td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>Exposure Rules</td>
            <td className={s.propsCell}>
              일반적으로 Tooltip은 해당 컴포넌트에 <strong>Hover Interaction</strong>을 했을시에 표출되는 것으로 한다.
              <br />
              (Hover시로 명명되나, Cursor의 Focused 상태에서 부터 Out Focused 되기 직전까지 표출되는 것으로 한다.)
            </td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>Disappear Rules</td>
            <td className={s.propsCell}>
              Cursor가 해당 컴포넌트 및 표출된 Tooltip의 영역을 벗어났을 시에 사라지는 것으로 한다.
            </td>
          </tr>
        </tbody>
      </table>

      {/* Pop-up Tooltips Exposure Rules */}
      <h3 className={s.typeHeading}>Pop-up Tooltips Exposure Rules</h3>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow2col} ${s.propsHeader}`}>
            <td className={s.propsCell}></td>
            <td className={s.propsCell}>Action: Clicked</td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>Exposure Rules</td>
            <td className={s.propsCell}>
              일반적으로 Popup Tip은 해당 컴포넌트에 <strong>Clicked Interaction</strong>을 했을시에 표출되는 것으로 한다.
            </td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>Disappear Rules</td>
            <td className={s.propsCell}>
              Cursor가 해당 컴포넌트 및 표출된 Popup tip의 영역을 벗어난 다른 지점에 Action (Click) 할때 사라지는 것으로 한다.
            </td>
          </tr>
        </tbody>
      </table>

      <hr className={s.divider} />

      {/* ── Components ── */}
      <h2 className={s.sectionHeading}>Components</h2>

      {/* Composition of Words */}
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/tooltip/Composition of Words (Icon Button).png" alt="Composition of Words" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Composition of Words (Icon Button)</p>
          <p className={s.ruleText}>
            특정 Action을 수행 하는 Icon Button을 설명하는 경우로 사용 되어 집니다.
            <br />
            (e.g. Segment (Icon) Button, More Icon Button)
          </p>
        </div>
      </div>

      {/* Short Sentence */}
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/tooltip/Short Sentence.png" alt="Short Sentence" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Short Sentence</p>
          <p className={s.ruleText}>
            특정 콘텐츠를 간략한 문장으로 설명하는 경우로 사용 되어 집니다.
            <br />
            (e.g. Unfold/Fold the Crack Panel)
          </p>
        </div>
      </div>

      {/* Explanation of Tool */}
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/tooltip/Explanation of Tool.png" alt="Explanation of Tool" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Explanation of Tool</p>
          <p className={s.ruleText}>
            특정 Tool의 설명을 표출하는 경우로 사용 되어 지며, Toolbar Type Tooltip을 사용하여 Header, Keyboard Shortcut, 그리고 Explanation의 조합으로 표현하는 것이 특징입니다.
            <br />
            (e.g. OSD Viewer Toolbar)
          </p>
        </div>
      </div>

      {/* Information Icon */}
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/tooltip/Information Icon.png" alt="Information Icon" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Information Icon Button (Pop-up Tooltip)</p>
          <p className={s.ruleText}>
            세부적인 설명이 필요한 요소의 경우 Information Icon을 활용하여 설명하는 것으로 합니다. 대표적으로 Create Project/Task에서 Project와 Task와 같이 사용자에게 부가적으로 설명이 필요한 요소에 사용됩니다.
          </p>
        </div>
      </div>

      {/* Do Not Use Tooltip */}
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/tooltip/Do Not Use Tooltip.png" alt="Do Not Use Tooltip" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Sub-Element of Components</p>
          <p className={s.ruleText}>
            컴포넌트 내에 속하는 부가적인 요소 내에 생기는 Icon Button에는 Tooltip을 띄우지 않는 것으로 하며 Icon Button이 아니더라도 설명을 위한 Tooltip을 띄우는 것을 지양한다.
            <br />
            (e.g. Dropdown Menu Item / Icon Button)
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Usage Guidelines ── */}
      <h2 className={s.sectionHeading}>Usage Guidelines</h2>

      {/* 1. 툴팁 표출 정책 */}
      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Dont 01.png" alt="Dont 01" />
          </div>
          <h4 className={s.typeHeading}>Don&apos;t : 툴팁 표출 정책</h4>
          <p className={s.typeSubtext}>
            툴팁은 툴팁 스스로가 가르키고 있는 콘텐츠를 가리지 않는 것을 원칙으로 합니다. 또한 툴팁의 표출 우선순위는 수직 방향 툴팁을 띄우는 것을 우선시 합니다.
          </p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Do 01.png" alt="Do 01" />
          </div>
          <h4 className={s.typeHeading}>Do : 툴팁 표출 정책</h4>
          <p className={s.typeSubtext}>
            툴팁은 툴팁 스스로가 가르키고 있는 콘텐츠를 가리지 않는 것을 원칙으로 합니다. 또한 툴팁의 표출 우선순위는 수직 방향 툴팁을 띄우는 것을 우선시 합니다.
          </p>
        </div>
      </div>

      {/* 2. 툴팁 표출 위치 기준점 */}
      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Dont 02.png" alt="Dont 02" />
          </div>
          <h4 className={s.typeHeading}>Don&apos;t : 툴팁 표출 위치 기준점</h4>
          <p className={s.typeSubtext}>
            수직 방향으로 툴팁을 표출했을 때, 툴팁 스스로가 가르키고 있는 콘텐츠의 주변 콘텐츠를 툴팁이 가리게 될 경우에는 수평 방향으로 Tooltip의 띄우는 것을 원칙으로 합니다. 또한 해당 콘텐츠의 호버 영역을 가리지 않는 곳을 우선시합니다.
          </p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Do 02.png" alt="Do 02" />
          </div>
          <h4 className={s.typeHeading}>Do : 툴팁 표출 위치 기준점</h4>
          <p className={s.typeSubtext}>
            수직 방향으로 툴팁을 표출했을 때, 툴팁 스스로가 가르키고 있는 콘텐츠의 주변 콘텐츠를 툴팁이 가리게 될 경우에는 수평 방향으로 Tooltip의 띄는 것을 원칙으로 합니다. 또한 해당 콘텐츠의 호버 영역을 가리지 않는 곳을 우선시합니다.
          </p>
        </div>
      </div>

      {/* 3. Header와 중복되는 Wording */}
      <div className={s.previewRow}>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Dont 03.png" alt="Dont 03" />
          </div>
          <h4 className={s.typeHeading}>Don&apos;t : Header와 중복되는 Wording의 표현 지양</h4>
          <p className={s.typeSubtext}>
            Header와 함께 사용 되는 Component에 Tooltip을 사용할 경우, 해당 Tooltip에 사용되는 문구가 Header에 포함되는 정보와 중복되지 않도록 사용합니다. (e.g. Upload Attachment)
          </p>
        </div>
        <div>
          <div className={s.previewBox}>
            <img src="/images/components/tooltip/Do 03.png" alt="Do 03" />
          </div>
          <h4 className={s.typeHeading}>Do : Header와 중복되는 Wording의 생략</h4>
          <p className={s.typeSubtext}>
            Header와 함께 사용 되는 Component에 Tooltip을 사용할 경우, 해당 Tooltip에 사용되는 문구가 Header에 포함되는 정보와 중복되지 않도록 사용합니다. (e.g. Upload Attachment)
          </p>
        </div>
      </div>
    </div>
  );
}
