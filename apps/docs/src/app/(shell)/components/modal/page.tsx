import s from "@/styles/docs.module.css";

export default function ModalPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Modal</h1>
      <p className={s.pageDescription}>
        Modal은 현재 작업과 관련된 정보를 제공하거나, 사용자의 확인 및 간단한 입력을 받기 위해 사용하는 오버레이 컴포넌트입니다. 사용자는 Modal에 제시된 정보와 액션을 먼저 처리해야 하며, 이를 통해 현재 과업에 집중할 수 있도록 합니다.
        <br /><br />
        Modal은 배경 화면과의 상호작용을 제한하는 Dim 레이어를 함께 사용하여, 사용자의 시선을 현재 작업에 집중시키는 것이 특징입니다. 이러한 특성 때문에 Modal은 짧고 명확한 과업에 사용하는 것이 적합하며, 복잡하거나 긴 흐름의 작업에는 사용을 지양합니다.
        <br /><br />
        콘텐츠의 양이 많거나 단계가 길어지는 경우에는 Modal보다 Drawer 또는 별도 페이지 구조를 사용하는 것을 권장합니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h2 className={s.sectionHeading}>Anatomy</h2>
      <div className={s.previewBox}>
        <img src="/images/components/modal/Anatomy.png" alt="Anatomy" />
      </div>
      <p className={s.caption}>
        1. Header<br />
        2. Text Description<br />
        3. Contents<br />
        4. Secondary Btn<br />
        5. Primary Btn
      </p>

      <div className={s.sectionGap} />

      {/* ── Buttons ── */}
      <h2 className={s.sectionHeading}>Buttons</h2>
      <p className={s.sectionSubtext}>
        Button 버튼은 최소 1개에서 최대 3개까지 사용 가능하며 기본적으로 2개를 사용하는 것을 권장합니다. 우선순위가 높은 버튼은 Text 컬러 Green-500을 적용하여 가장 위치 해야 합니다. 이전으로 돌아갈 수 있는 버튼을 반드시 포함해야 합니다.
      </p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default Value</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Buttons</td>
            <td className={s.propsCell}>1, 2, 3</td>
            <td className={s.propsCell}>2 Buttons</td>
          </tr>
        </tbody>
      </table>

      {/* ── Modality Criteria & Checklist ── */}
      <h2 className={s.sectionHeading}>Modality Criteria &amp; Checklist</h2>
      <p className={s.sectionSubtext}>
        모달 제공을 검토 할 때 사용할 수 있는 모달 사용 기준안과 체크리스트입니다. 기준안은 모달 사용 필수 기준과 모달 사용 권장 기준으로 나누어져있습니다. 필수 기준은 사용자의 집중을 필요로 하는 경우이므로 반드시 모달로 제공되어야합니다.
        <br />
        Modal in Modal : 모달에서 중복으로 모달을 노출하게 되면 사용자는 이전 화면을 찾아가는 것을 어려워하고 사용 맥락을 잃어버릴 수 있습니다. 따라서 모달에서 중복 모달 발생 시 필수 기준 외에는 노멀 뷰 제공을 우선 고려합니다.
        <br /><br />
        *작업성 모달, *확인성 모달
      </p>

      {/* Modality Criteria */}
      <h3 className={s.typeHeading}>Modality Criteria</h3>

      <h4 className={s.typeHeading} style={{ fontSize: 16 }}>Required</h4>
      <table className={s.propsTable}>
        <tbody>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>과제 지향성 / (몰입성)</td>
            <td className={s.propsCell}>모달 과업이 몰입형 컨텐츠인경우 (예외: 전체 화면이 필요한 경우)</td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>완결성</td>
            <td className={s.propsCell}>모달 과업이 명확한 시작점과 종료점이 있는 경우</td>
          </tr>
        </tbody>
      </table>

      <h4 className={s.typeHeading} style={{ fontSize: 16 }}>Recommend</h4>
      <table className={s.propsTable}>
        <tbody>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>맥락 불일치성</td>
            <td className={s.propsCell}>모달 과업이 기존 컨텍스트에서 벗어난 경우</td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>고립 필요성</td>
            <td className={s.propsCell}>모달 과업 진행 시 사용자가 다른 화면으로 이동하는 것을 제한 해야 하는 경우</td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>비 주요성</td>
            <td className={s.propsCell}>모달 과업이 기존 화면의 주요 과업과 관련이 없는 경우</td>
          </tr>
          <tr className={s.propsRow2col}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>회귀성</td>
            <td className={s.propsCell}>모달 과업 완료 후 기존 화면으로 반드시 복귀해야 하는 경우</td>
          </tr>
        </tbody>
      </table>

      {/* Modality Checklist */}
      <h3 className={s.typeHeading}>Modality Checklist</h3>

      <h4 className={s.typeHeading} style={{ fontSize: 16 }}>Required</h4>
      <table className={s.propsTable}>
        <tbody>
          <tr className={s.propsRow3colCheck}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>Immersion</td>
            <td className={s.propsCell}>과제를 수행하기 위해서 충분한 몰입을 제공한 상태 입니까?</td>
            <td className={s.propsCell}><div className={s.checkIcon}>✓</div></td>
          </tr>
          <tr className={s.propsRow3colCheck}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>Completeness</td>
            <td className={s.propsCell}>해당 과업이 시작점에서 종료점까지 하나의 동선으로 이루어져 있습니까? (Linear flow: 선형 흐름)</td>
            <td className={s.propsCell}><div className={s.checkIcon}>✓</div></td>
          </tr>
        </tbody>
      </table>

      <h4 className={s.typeHeading} style={{ fontSize: 16 }}>Recommend</h4>
      <table className={s.propsTable}>
        <tbody>
          <tr className={s.propsRow3colCheck}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>맥락 불일치성</td>
            <td className={s.propsCell}>모달 과업이 기존 컨텍스트에서 벗어난 경우</td>
            <td className={s.propsCell}><div className={s.checkIcon}>✓</div></td>
          </tr>
          <tr className={s.propsRow3colCheck}>
            <td className={s.propsCell}></td>
            <td className={s.propsCell}>진입시 제공되는 화면의 정보량을 한 눈에 파악할 수 있습니까?</td>
            <td className={s.propsCell}><div className={s.checkIcon}>✓</div></td>
          </tr>
          <tr className={s.propsRow3colCheck}>
            <td className={s.propsCell}></td>
            <td className={s.propsCell}>진입시 제공되는 메뉴 구조는 복잡하지 않고 단순합니까?</td>
            <td className={s.propsCell}><div className={s.checkIcon}>✓</div></td>
          </tr>
          <tr className={s.propsRow3colCheck}>
            <td className={s.propsCell}></td>
            <td className={s.propsCell}>모달 진입 후 다시 모달 화면이 발생하는 경우가 적습니까?</td>
            <td className={s.propsCell}><div className={s.checkIcon}>✓</div></td>
          </tr>
          <tr className={s.propsRow3colCheck}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>고립 필요성</td>
            <td className={s.propsCell}>해당 과업의 완료하거나 취소하기 전까지 사용자의 이동을 제한하는 것의 이점이 있습니까?</td>
            <td className={s.propsCell}><div className={s.checkIcon}>✓</div></td>
          </tr>
          <tr className={s.propsRow3colCheck}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>비 주요성</td>
            <td className={s.propsCell}>해당 과업의 완료하거나 취소하기 전까지 사용자의 이동을 제한하는 것의 이점이 있습니까?</td>
            <td className={s.propsCell}><div className={s.checkIcon}>✓</div></td>
          </tr>
          <tr className={s.propsRow3colCheck}>
            <td className={s.propsCell} style={{ fontWeight: 600 }}>회귀성</td>
            <td className={s.propsCell}>해당 과업을 완료하고, 기존 화면으로 반드시 돌아와야 합니까?</td>
            <td className={s.propsCell}><div className={s.checkIcon}>✓</div></td>
          </tr>
        </tbody>
      </table>

      {/* ── Scrim Area (Overlay) ── */}
      <h2 className={s.sectionHeading}>Scrim Area (Overlay)</h2>
      <p className={s.sectionSubtext}>
        Dimmed는 배경과 Moadal를 구분시키는 투명한 표면 요소입니다. 화면의 나머지 부분에 접근 할 수 없음을 표현하고 주의를 집중시키기 위해 Modal 뒤에 Dimmed를 사용합니다.
        Overlay는 컬러 Black, Opacity 60%를 사용합니다. Dim Area를 선택 혹은 클릭하더라도 기존 화면으로의 이동이 불가능 합니다. 기존 화면으로의 이동을 원할시 Cancel 버튼 사용을 권장합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/modal/Scrim Area (Overlay).png" alt="Scrim Area (Overlay)" />
      </div>

      <div className={s.sectionGap} />

      {/* ── Spacing ── */}
      <h2 className={s.sectionHeading}>Spacing</h2>

      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/modal/Spacing.png" alt="Spacing" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Spacing</p>
          <p className={s.ruleText}>
            Modal의 기본 가로폭은 448 사이즈이며 Width, Height의 길이 모두 Flexible 합니다. Contents 영역은 상하 좌우 Margin=24px or 32px 이며 Margin의 값은 Modla의 사이즈 및 컨탠츠의 형태에 따라 결정됩니다.
            사이즈의 변동에 맞게 Header과 Contents Area간의 간격은 24px이며, Contents Area 내의 간격은 일반적으로 16가 사용되며 경우에 따라 24으로도 사용 가능합니다. Contents Area와 Footer의 Button과의 간격은 32 이며
            Button의 사이즈는 40px으로 Medium Size가 사용됩니다. Modal의 스크롤은 화면의 84%이상을 차지한 시점부터 발생하는것을 원칙으로 합니다.
          </p>
        </div>
      </div>

      {/* Font */}
      <div className={s.usageRow}>
        <div className={s.previewBox} style={{ marginBottom: 0 }}>
          <img src="/images/components/modal/Font.png" alt="Font" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Font</p>
          <p className={s.ruleText}>
            Modal내의 Font Type은 Inter을 사용하며 Heading: H2 (Inter/Semibold/24/Gray50), Subtitle: Subtitle1 (Inter/Medium/16/Gray400), Body: Body2 (Inter/Regular/14/Gray700)을 사용합니다.
          </p>
        </div>
      </div>

      {/* ── Content & Action Area ── */}
      <h2 className={s.sectionHeading}>Content &amp; Action Area</h2>
      <p className={s.sectionSubtext}>
        Modal은 콘텐츠 영역과 버튼 영역이 분리된 구조를 기본으로 합니다. 하단 버튼 영역은 일반적으로 우측 정렬된 가로 버튼 조합을 사용하며, Primary Button과 Secondary Button의 조합을 권장하고 3개 이상의 버튼 사용은 지양합니다. 또한 Modal을 닫을 수 있는 Dismiss 액션은 반드시 포함되어야 합니다.
        <br /><br />
        콘텐츠가 최대 높이 또는 설정된 높이를 초과하는 경우에는 본문 영역만 스크롤되며, 버튼 영역은 고정된 상태를 유지합니다. 이를 통해 사용자는 긴 콘텐츠를 확인하는 중에도 주요 액션에 지속적으로 접근할 수 있습니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/modal/Content & Action Area.png" alt="Content & Action Area" />
      </div>
    </div>
  );
}
