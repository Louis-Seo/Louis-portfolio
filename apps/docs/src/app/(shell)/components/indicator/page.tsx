import s from "@/styles/docs.module.css";

export default function IndicatorPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Indicator</h1>
      <p className={s.pageDescription}>
        Indicator는 정보를 불러오거나 사용자가 취한 액션을 처리할 경우 발생하는 시간동안에 시각정보를 통해 처리 과정이 진행 중임을 사용자에게 알리는 역할로서 사용 되어집니다.
      </p>

      <hr className={s.divider} />

      {/* ── Components ── */}
      <h2 className={s.sectionHeading}>Components</h2>
      <p className={s.sectionSubtext}>
        Indicator는 발생하는 동작 후 발생되는 Duration의 특징에 따라서 불특정하게 (Indeterminate) 시각적으로 보여주는 Spinner, 규정 가능한 (Determinate) 형태로 보여주는 Progress Bar로 사용되어집니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/indicator/Components.png" alt="Components" />
      </div>
      <p className={s.caption}>
        A. Spinner<br />
        B. Progress Bar
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Spinner
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Spinner</h2>
      <p className={s.sectionSubtext}>
        특정 동작 수행에 있어서 데이터를 불러오거나 처리하는데 예측하기 힘든 시간이 소요될시 사용자에게 해당부분에 있어서 시각적으로 처리됨을 Indeterminate 하게 보여주는 역할로서 사용 되어집니다.
      </p>

      {/* Anatomy */}
      <h3 className={s.typeHeading}>Anatomy</h3>
      <div className={s.previewBox}>
        <img src="/images/components/indicator/Spinner Anatomy.png" alt="Spinner Anatomy" />
      </div>
      <p className={s.caption}>
        1. Track<br />
        2. Indicator (Fill)
      </p>

      <div className={s.sectionGap} />

      {/* Variants */}
      <h3 className={s.sectionHeading}>Variants</h3>
      <div className={s.previewRow}>
        <div>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Spinner Type.png" alt="Spinner Type" />
          </div>
          <h4 className={s.typeHeading}>Type</h4>
          <p className={s.typeSubtext}>
            Spinner의 경우 Button, Dropdown내에 포함되어 사용되어지는 경우와, Container, Page 단위로 사용되어 지는 경우 두가지로 크게 나누어 사용되어 집니다.
          </p>
        </div>
        <div>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Spinner Duration.png" alt="Spinner Duration" />
          </div>
          <h4 className={s.typeHeading}>Duration</h4>
          <p className={s.typeSubtext}>
            Indeterminate Indicator의 형태로 사용되어지는 Spinner Type의 Indicator의 일반적으로 1-3 sec 정도의 짧은 시간동안 Loading 되어지는 경우에서 사용이 되어집니다.
          </p>
        </div>
      </div>

      {/* Usecase */}
      <h3 className={s.sectionHeading}>Usecase</h3>
      <div className={s.grid3col}>
        <div className={s.gridCard}>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Spinner Button.png" alt="Button" />
          </div>
          <p className={s.gridCardTitle}>Button</p>
          <p className={s.gridCardDesc}>
            Button Action 수행시 데이터 로딩이 생길 경우 표출 되어 집니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Spinner Dropdown.png" alt="Dropdown" />
          </div>
          <p className={s.gridCardTitle}>Dropdown</p>
          <p className={s.gridCardDesc}>
            Dropdown 수행시 데이터 로딩이 생길 경우 표출 되어 집니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Spinner File Uplaod.png" alt="File Upload" />
          </div>
          <p className={s.gridCardTitle}>File Upload</p>
          <p className={s.gridCardDesc}>
            개별 파일 업로드시 표출 되어집니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Progress Bar
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Progress Bar</h2>
      <p className={s.sectionSubtext}>
        특정 동작 수행에 있어서 처리 방식에 있어서 과정에 대한 정보가 예측이 가능한 경우에 사용자에게 해당부분에 있어서 시각적으로 처리됨을 Determinate 하게 보여주는 역할로서 사용 되어집니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/indicator/Progress Bar.png" alt="Progress Bar" />
      </div>
      <p className={s.caption}>
        Progress Bar (Linear Type)
      </p>

      <div className={s.sectionGap} />

      {/* Anatomy */}
      <h3 className={s.typeHeading}>Anatomy</h3>
      <div className={s.previewBox}>
        <img src="/images/components/indicator/Progress Bar Anatomy.png" alt="Progress Bar Anatomy" />
      </div>
      <p className={s.caption}>
        1. Indicator (Bar Type)<br />
        2. Track<br />
        3. Helper Text
      </p>

      <div className={s.sectionGap} />

      {/* Variants */}
      <h3 className={s.sectionHeading}>Variants</h3>
      <div className={s.previewRow}>
        <div>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Progress Bar State.png" alt="Progress Bar State" />
          </div>
          <h4 className={s.typeHeading}>State</h4>
          <p className={s.typeSubtext}>
            Progress Bar는 Determinate하게 시각적으로 결과에 대한 정보를 사용자에게 표출을 제주며, Wind에서는 주로 File Upload시에 사용되어 집니다. 상태는 Uploading, Complete 두가지 상태로 사용되어집니다.
          </p>
        </div>
        <div>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Progress Bar Size.png" alt="Progress Bar Size" />
          </div>
          <h4 className={s.typeHeading}>Size</h4>
          <p className={s.typeSubtext}>
            Wind에서 사용되어지는 Container의 영역에 포함되어 사용되는 Progress Bar의 경우 Height = Container&apos;s Height 로 사용되어지며, Width의 경우 위치되어지는 영역에 따라 Flexible 하게 사용되어집니다.
          </p>
        </div>
      </div>

      {/* Usecase */}
      <h3 className={s.sectionHeading}>Usecase</h3>
      <div className={s.previewBox}>
        <img src="/images/components/indicator/Progress Bar Usecase.png" alt="Usecase" />
      </div>
      <h4 className={s.typeHeading}>Export PDF</h4>
      <p className={s.typeSubtext}>
        Wind에서 Progress Bar의 경우 File을 Export 할시 사용되어 집니다. 해당 경우 Spinner와 함께 사용되어지는 것이 특징입니다.
      </p>
    </div>
  );
}
