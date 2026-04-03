import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function FeedbackMessagePage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Feedback Message</h1>
      <p className={s.pageDescription}>
        Feedback Message는 사용자에게 시스템 변화에 대한 정보를 전달하는 도구로서 사용되어지며, 시스템의 DB의 변화 여부에 따라 Alert와 Toast로 나뉘어 사용되어 집니다.
      </p>

      <hr className={s.divider} />

      {/* ── Components ── */}
      <h2 className={s.sectionHeading}>Components</h2>
      <p className={s.sectionSubtext}>
        Selection Control은 하나 이상 &amp; 다중 선택이 가능한 Checkbox, 여러 선택 사항 중 하나만 선택이 가능한 Radio Button, 그리고 즉각적인 상황 변화를 일으켜 on/off 기능을 하는 Toggle Switch로 구성되어 있습니다. 각 쓰임새에 따라 적절한 Selection Control을 사용하시면 됩니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Components.png" alt="Components" />
      </div>
      <p className={s.caption}>
        A. Alert<br />
        B. Toast
      </p>

      <div className={s.sectionGap} />

      {/* ── Message Contents Criteria ── */}
      <h2 className={s.sectionHeading}>Message Contents Criteria</h2>
      <p className={s.sectionSubtext}>
        Feedback Message의 콘텐츠를 작성 하는 데 있어서 필요한 문장적인 요소에 대한 기준으로 해당 부분은 유동적으로 변경 되어 질 수 있으나 최대한 지향하는 것을 목표로 합니다.
      </p>

      <table className={s.propsTable}>
        <tbody>
          <tr className={styles.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>문장의 간결성</td>
            <td className={s.propsCell}>
              Message는 한문장으로 끝나는 것을 기본 원칙으로 합니다.
              <br />
              Message의 조건문을 하나만 갖는 것을 지향합니다.
            </td>
          </tr>
          <tr className={styles.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>정보 전달의 명확성</td>
            <td className={s.propsCell}>
              Message는 전달하고자 하는 정보 (Information, Success, Warning)의 원인에 해당하는 &apos;키워드&apos;를 명확히 표함하고 있어야 합니다.
              <br />
              Message는 단어의 조합으로 이루어지는 것이 아닌 &apos;동사&apos;와 함께 사용하며 명확한 정보를 전달을 통한 사용자의 직업수행을 달성하는데 도움을 주는 것을 목표로 합니다.
            </td>
          </tr>
        </tbody>
      </table>

      {/* ── Feedback Message Table ── */}
      <h2 className={s.sectionHeading}>Feedback Message</h2>

      <table className={s.propsTable}>
        <tbody>
          <tr className={`${styles.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}></td>
            <td className={s.propsCell}>Alert</td>
            <td className={s.propsCell}>Toast</td>
          </tr>
          <tr className={styles.propsRow3col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>Duration</td>
            <td className={s.propsCell}>Till Completion Task</td>
            <td className={s.propsCell}>3 Sec</td>
          </tr>
          <tr className={styles.propsRow3col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>Message Type</td>
            <td className={s.propsCell}>3 (Error / Warning, Success, Information)</td>
            <td className={s.propsCell}>3 (Warning, Success, Information)</td>
          </tr>
          <tr className={styles.propsRow3col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>Expression Standard</td>
            <td className={s.propsCell}>Error / Warning</td>
            <td className={s.propsCell}>Success</td>
          </tr>
          <tr className={styles.propsRow3col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>
              Relation btw<br />Other Options
              <div className={s.propsCellSub}>(Expression)</div>
            </td>
            <td className={s.propsCell}>
              Mutually Exclusive
              <div className={s.propsCellSub}>(특정 요소 그룹과 상호베타적인 관계)</div>
            </td>
            <td className={s.propsCell}>
              Independent of Each Other
              <div className={s.propsCellSub}>(다른 요소들로 부터 독립적인 관계)</div>
            </td>
          </tr>
        </tbody>
      </table>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Alert
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Alert</h2>
      <p className={s.sectionSubtext}>
        Alerts는 사용자가 반드시 수행해야 하는 동작이 있을시에, 동작 수행에 대한 정보를 제공해 동작 수행을 완료 하도록 가이드 하는 역할을 합니다.
      </p>

      {/* Anatomy */}
      <h3 className={s.typeHeading}>Anatomy</h3>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Alert Anatomy.png" alt="Alert Anatomy" />
      </div>
      <p className={s.caption}>
        1. Icon<br />
        2. Header<br />
        3. Description Text<br />
        4. Container
      </p>

      <div className={s.sectionGap} />

      {/* Component */}
      <h3 className={s.typeHeading}>Component</h3>
      <p className={s.typeSubtext}>
        Alert는 사용되는 위치 및 시각적 형태에 따라서 특정 Component와 밀접하게 연관되어 사용하는 Text Alert와 Container로 둘러쌓여져서 사용되는 Container Alert의 두가지 종류의 타입을 가집니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Alert Component.png" alt="Alert Component" />
      </div>

      <div className={s.sectionGap} />

      {/* Message Type */}
      <h3 className={s.typeHeading}>Message Type</h3>
      <p className={s.typeSubtext}>
        Alert는 정보의 유형에 따라 3가지로 나뉩니다. 동작 수행에 대한 간결한 피드백 정보를 제공하는 Information Type, 동작수행을 성공적으로 수행 하였을 경우에 대한 피드백 정보를 제공하는 Success Type, 그리고 동작수행을 수행하지 못하였을 경우에 대한 피드백 정보를 제공하는 Warning Type으로 사용됩니다. Success Type의 Alert의 경우 잠정적으로 사용하지 않는 것으로 합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Alert Message Type.png" alt="Alert Message Type" />
      </div>

      <div className={s.sectionGap} />

      {/* Table of Figma Properties */}
      <h3 className={s.typeHeading}>Table of Figma Properties</h3>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Type</td>
            <td className={s.propsCell}>Warning, Information, Success</td>
            <td className={s.propsCell}>None</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Size</td>
            <td className={s.propsCell}>Large, Medium</td>
            <td className={s.propsCell}>None</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Container</td>
            <td className={s.propsCell}>True, False</td>
            <td className={s.propsCell}>None</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Description</td>
            <td className={s.propsCell}>True, False</td>
            <td className={s.propsCell}>False</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Icon</td>
            <td className={s.propsCell}>True, False</td>
            <td className={s.propsCell}>True</td>
          </tr>
        </tbody>
      </table>

      {/* Placement */}
      <h3 className={s.typeHeading}>Placement</h3>
      <p className={s.typeSubtext}>
        Alert는 사용자에게 상태, 오류, 안내, 또는 처리 결과를 즉시 전달하기 위해 사용되며, 컴포넌트의 구조와 메시지의 범위에 따라 Contained Type, Floating Type, Inline Text Type으로 구분하여 배치할 수 있습니다. 동일한 Alert라도 적용 대상이 개별 컴포넌트인지, 컴포넌트 그룹 전체인지, 또는 인라인 수준의 보조 메시지인지에 따라 적절한 Placement 방식을 선택해야 합니다.
      </p>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/feedback-message/Alert Contained Type.png" alt="Contained Type" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Contained Type</p>
          <p className={s.ruleText}>
            관련된 Component가 시각적으로 하나의 그룹으로 구성되어 있는 경우, 해당 그룹 전체에 대한 상태나 오류를 전달하기 위해 사용합니다.
            Alert는 Component Group과 동일한 너비 기준 안에서 배치되며, 그룹 내 여러 요소에 공통으로 적용되는 메시지를 한 번에 전달하는 데 적합합니다.
            <br /><br />
            주로 하나의 섹션 또는 묶음 단위로 검증 결과를 보여주어야 하는 경우에 사용하며, 사용자는 이를 통해 어떤 범위에 대한 안내인지 명확하게 인지할 수 있습니다.
            (e.g. Change Tag, Swap Tag)
          </p>
        </div>
      </div>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/feedback-message/Alert Floating Type.png" alt="Floating Type" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Floating Type</p>
          <p className={s.ruleText}>
            Floating Type은 특정 Component Group 또는 단일 Component 상단에 독립적으로 배치되어, 보다 강조된 상태 메시지를 전달할 때 사용합니다. 기본 레이아웃과 분리된 레이어처럼 인지되며, 즉시 확인이 필요한 오류, 성공, 또는 안내 메시지를 우선적으로 보여주는 데 적합합니다.
          </p>
        </div>
      </div>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/feedback-message/Alert Inline Text Type.png" alt="Inline Text Type" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Inline Text Type</p>
          <p className={s.ruleText}>
            Inline Text Type은 단일 입력 필드 또는 개별 컴포넌트와 직접 연결된 보조 메시지를 표시할 때 사용합니다. 주로 필드 단위의 검증 결과나 입력 가이드를 전달하는 용도로 사용되며, 해당 컴포넌트 바로 아래에 인라인으로 배치하여 메시지의 대상이 무엇인지 즉시 이해할 수 있도록 합니다.
          </p>
        </div>
      </div>

      {/* Spacing */}
      <h3 className={s.typeHeading}>Spacing</h3>
      <p className={s.typeSubtext}>
        Alert의 내부 여백은 메시지의 가독성과 아이콘·텍스트 간 균형을 유지할 수 있도록 크기별 규칙에 따라 정의됩니다. 모든 사이즈는 좌우 12px Padding을 기본으로 사용하며, 세로 Padding은 Alert의 크기에 따라 다르게 적용됩니다. Large Size는 상하 10px Padding을, Medium Size는 상하 8px Padding을 사용합니다. 이를 통해 동일한 구조 안에서도 크기별 밀도를 조절하면서, 텍스트 가독성과 정보 전달력을 일관되게 유지할 수 있습니다.
      </p>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/feedback-message/Alert Padding Rule.png" alt="Padding Rule" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Padding Rule</p>
          <p className={s.ruleText}>
            Alert는 Large, Medium 사이즈 모두 좌우 12px Padding을 기본으로 사용합니다. 세로 Padding은 Large 10px, Medium 8px 기준을 적용하여 크기별 밀도를 조절합니다.
          </p>
        </div>
      </div>
      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Toast
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Toast</h2>
      <p className={s.sectionSubtext}>
        Toast는 사용자의 작업 결과나 상태 변화를 짧고 명확하게 전달하기 위한 비차단형 피드백 컴포넌트입니다. 주로 저장, 복사, 생성, 삭제와 같은 액션 직후 표시되며, 화면 흐름을 방해하지 않으면서도 결과를 빠르게 인지할 수 있도록 돕습니다.
      </p>

      {/* Anatomy */}
      <h3 className={s.typeHeading}>Anatomy</h3>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Toast Anatomy.png" alt="Toast Anatomy" />
      </div>
      <p className={s.caption}>
        1. Icon<br />
        2. Header<br />
        3. Description Text<br />
        4. Container<br />
        5. Close Icon Button
      </p>

      <div className={s.sectionGap} />

      {/* Component */}
      <h3 className={s.typeHeading}>Component</h3>
      <p className={s.typeSubtext}>
        Toast의 경우 표출방식이 모두 Floating 형식으로 Container로 둘러쌓여져서 사용되는 Container Toast의 한가지 종류의 타입을 가지는 것이 특징입니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Toast Component.png" alt="Toast Component" />
      </div>

      <div className={s.sectionGap} />

      {/* Message Type */}
      <h3 className={s.typeHeading}>Message Type</h3>
      <p className={s.typeSubtext}>
        Toast는 정보의 유형에 따라 3가지로 나뉩니다. 동작수행에 대한 간결한 피드백 정보를 제공하는 Information Type, 동작수행을 성공적으로 수행 하였을 경우에 대한 피드백 정보를 제공하는 Success Type, 그리고 동작수행을 수행하지 못하였을 경우에 대한 피드백 정보를 제공하는 Warning Type으로 사용됩니다. 대부분의 Toast의 경우 Success Type으로 사용되어 집니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/feedback-message/Toast Message Type.png" alt="Toast Message Type" />
      </div>

      <div className={s.sectionGap} />

      {/* Table of Figma Properties */}
      <h3 className={s.typeHeading}>Table of Figma Properties</h3>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Type</td>
            <td className={s.propsCell}>Warning, Information, Success</td>
            <td className={s.propsCell}>None</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Size</td>
            <td className={s.propsCell}>Large, Medium</td>
            <td className={s.propsCell}>None</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Container</td>
            <td className={s.propsCell}>True, False</td>
            <td className={s.propsCell}>None</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Description</td>
            <td className={s.propsCell}>True, False</td>
            <td className={s.propsCell}>False</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Icon</td>
            <td className={s.propsCell}>True, False</td>
            <td className={s.propsCell}>True</td>
          </tr>
        </tbody>
      </table>

      {/* Placement */}
      <h3 className={s.typeHeading}>Placement</h3>
      <p className={s.typeSubtext}>
        Toast는 작업 결과를 짧고 명확하게 전달하기 위한 피드백 컴포넌트로, 메시지의 성격과 사용자 맥락에 따라 Bottom Center, Top, Nearby Component 위치에 배치할 수 있습니다. 각 Placement는 동일한 Toast 구조를 사용하되, 메시지의 우선도, 발생 맥락, 사용자 시선 흐름에 따라 적절한 위치를 선택하는 것이 중요합니다.
      </p>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/feedback-message/Toast Bottom Center.png" alt="Bottom Center" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Bottom Center</p>
          <p className={s.ruleText}>
            Bottom Center는 생성, 삭제, 저장 완료와 같이 작업 결과를 전역적으로 안내해야 하는 경우에 사용하는 기본 Placement입니다. 일반적으로 사용자의 주요 작업이 완료된 직후 화면 하단 중앙에 짧은 시간 동안 표시되며, 화면 흐름을 크게 방해하지 않으면서도 결과를 명확하게 전달할 수 있습니다.
            <br /><br />
            페이지 전체에 대한 성공 또는 완료 피드백이 필요한 경우에 적합합니다.
          </p>
        </div>
      </div>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/feedback-message/Toast Top.png" alt="Top" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Top</p>
          <p className={s.ruleText}>
            Top Placement는 Auto saved와 같이 비교적 자주 발생하지만 방해가 적어야 하는 상태성 피드백을 전달할 때 사용합니다. 주요 콘텐츠 영역을 가리지 않도록 상단의 고정된 위치에 표시하며, 사용자는 작업을 이어가면서도 현재 상태를 자연스럽게 인지할 수 있습니다.
            <br /><br />
            반복적으로 발생하는 시스템 상태 안내나 지속성이 짧은 정보성 메시지에 적합합니다.
          </p>
        </div>
      </div>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/feedback-message/Toast Nearby Component.png" alt="Nearby Component" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Nearby Component</p>
          <p className={s.ruleText}>
            Nearby Component는 특정 버튼이나 액션 아이콘과 직접 연결된 작업 결과를, 해당 컴포넌트 인근에서 즉시 전달하기 위해 사용합니다. 전역적인 성공 메시지보다 더 맥락적인 피드백이 필요한 경우에 적합하며, 사용자는 어떤 동작에 대한 결과인지 별도의 해석 없이 바로 이해할 수 있습니다.
            <br /><br />
            주로 Link copied, Shared, Added, Moved와 같이 단일 액션에 대한 짧은 성공 피드백에 사용하며, 관련 UI 요소와 가까운 위치에 잠시 표시된 후 자동으로 사라지는 것을 기본 원칙으로 합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
