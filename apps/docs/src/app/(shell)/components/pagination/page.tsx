import s from "@/styles/docs.module.css";

export default function PaginationPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Pagination (Page Controller)</h2>
      <p className={s.pageDescription}>
        Pagination은 Contents 혹은 Data를 여러 페이지로 분할하는 데 사용되며,
        이전 또는 다음 버튼을 선택하여 해당 페이지로 이동하거나 페이지를 전환할
        페이지 번호를 선택할 수 있도록 합니다. 주로 불연속적인 정보를 포함하는
        콘텐츠를 나열하는데 사용이 되며 사용자가 반복적인 작업을 하는 페이지에서
        사용되는 것이 특징입니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Anatomy
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/pagination/Anatomy.png"
          alt="Pagination Anatomy"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Table of Figma Properties - Pagenation
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>
        Table of Figma Properties - Pagenation
      </h3>

      <div className={s.propsTable}>
        <div className={`${s.propsRow3col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
          <div className={s.propsCell}>Default Value</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>First, Middle, Last</div>
          <div className={s.propsCell}>First</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Capacity</div>
          <div className={s.propsCell}>True, False</div>
          <div className={s.propsCell}>False</div>
        </div>
        <div className={s.propsRow3col}>
          <div className={s.propsCell}>Page Number</div>
          <div className={s.propsCell}>1, 2, 3, 4, 5</div>
          <div className={s.propsCell}>5</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Pagenation Item
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Pagenation Item</h3>
      <p className={s.sectionSubtext}>
        Pagenation Item은 Data를 포함한 Page Number들과 함께 현재 화면에
        Display되는 Data의 위치를 보여주는 역할로서 수행되어 지는
        Component입니다. 형태적인 부분과 상태적인 측면에서 Chip과 유사하게
        사용되는 것이 특징입니다.
      </p>

      {/* ── Alignment ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/pagination/Alignment.png"
            alt="Pagination Alignment"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Alignment</h4>
          <p className={s.ruleText}>
            일반적으로 Pagenation Item의 현재 선택된 상태의 위치는 가운데
            위치하며, 가장 앞쪽의 1,2 그리고 마지막 페이지의 2 페이지의 경우
            끝점을 기준으로 순차적으로 위치하는 것이 특징입니다.
          </p>
        </div>
      </div>

      {/* ── Table of Figma Properties - Pagenation Item ── */}
      <h3 className={s.typeHeading}>
        Table of Figma Properties - Pagenation Item
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
            Default, Hover, Selected, Disabled
          </div>
          <div className={s.propsCell}>Default, Selected</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Use Case
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Use Case</h3>

      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/pagination/Use Case.png"
            alt="Pagination Use Case"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Pagenation Item State</h4>
          <p className={s.ruleText}>
            종속된 페이지 혹은 Componts의 현재 위치 및 전체 데이터 Display가
            가능한 영역을 Navigate해주는 역할을 수행하며, State의 경우 Default,
            Hover, Selected, Disabled로 Chip과 동일한 4가지의 상태를 가집니다.
            Disabled의 상태의 경우 Sorting시 표출되는 배열적인 문제로 거의
            사용하지 않을 것을 지향합니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Previous / Next Icon Button
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Previous / Next Icon Button</h3>
      <p className={s.sectionSubtext}>
        Previous/Next, First/Last Page Icon Button은 페이지당 클릭
        한번으로만 이루어집니다. Medium Size의 Icon Button이 사용되어 집니다.
        또한 가장 첫번째 페이지 혹은 가장 마지막 페이지의 경우와 같이 페이지
        이동이 불가능한 경우에 버튼의 상태는 Disabled가 되는것으로 합니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/pagination/Previous Next Icon Button.png"
          alt="Previous / Next Icon Button"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Page Number
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Page Number</h3>
      <p className={s.sectionSubtext}>
        디스플레이 화면 별 Page Number 의 개수는 기본적으로 5개로
        구성되어지며, 해당 갯수를 최댓값으로 넘지 않는 것으로 합니다. 전체
        데이터의 페이지 넘버 &lt; 5일 경우 전체 페이지 넘버의 갯수를 표출되는
        페이지 갯수(1-4개)로 사용하는 것이 특징입니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/pagination/Page Number.png"
          alt="Page Number"
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
            src="/images/components/pagination/Spacing.png"
            alt="Pagination Spacing"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Spacing</h4>
          <p className={s.ruleText}>
            Previous/Next, First/Lat Page Button 간격을 8px을 띄우며 좌우
            페이지 버튼과는 16px을 띄우는거로 합니다. 또한 각 페이지 버튼 별
            간격은 4px의 마진값을 가집니다. 양쪽 좌우에 위치한 Range Label과
            Capacity Control과의 간격은 Pagenation이 위치하는 Container의 값에
            따라 Flexible 하게 사용되어지는 것이 특징입니다.
          </p>
        </div>
      </div>

      {/* ── Size ── */}
      <div className={s.usageRow}>
        <div className={s.previewBox}>
          <img
            src="/images/components/pagination/Size.png"
            alt="Pagination Size"
          />
        </div>
        <div className={s.ruleCardBottom}>
          <h4 className={s.ruleTitle}>Size</h4>
          <p className={s.ruleText}>
            좌우 4px의 padding을 기준으로 page number가 적용 될 시 32px보다
            적을 경우 32px로 width 값을 고정하여 사용됩니다. 해당 page number의
            값을 적용 하였을때 width 값이 32px 보다 커지는 경우에는 좌우 4px의
            padding을 기준으로 늘어나는 것으로 하며, 3자리 수 이상의 조합의 경우
            page number 부분의 조합의 너비의 차이가 발생 합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
