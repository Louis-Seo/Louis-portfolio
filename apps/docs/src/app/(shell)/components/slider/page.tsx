import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function SliderPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Slider</h2>
      <p className={s.pageDescription}>
        Slider는 수평 트랙을 따라 이동하여 값을 조정 가능하도록 하는 시각적
        표시를 장치 입니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/slider/Anatomy.png"
          alt="Slider Anatomy"
        />
      </div>

      <hr className={s.divider} />

      {/* ── Usage ── */}
      <h3 className={s.sectionHeading}>Usage</h3>
      <p className={s.sectionSubtext}>
        Slider는 사용자가 특정 정량적인 수치를 원할때 사용하는 것이 아닌
        대략적인 Boundary를 정의 하고자 할때 사용 되어 집니다. 범위 설정
        방식으로 2가지로 분류 합니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/slider/Usage.png"
          alt="Slider Usage"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Components
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Components</h3>
      <p className={s.sectionSubtext}>
        Slider는 Range 설정 범위에 따라서 Single Range, Dual Range 2가지로
        분류되는데, 그 안에서도 사용되는 방식에 따라서 여러 부가적인 요소들이
        함께 사용 될 수 있습니다.
      </p>

      {/* ── Single Value Slider ── */}
      <h4 className={s.typeHeading}>1. Single Value Slider</h4>
      <p className={styles.typeDescription}>
        Single Value Slider는 가장 흔하게 사용되는 타입으로, Range의 작은 값은
        0으로 고정한 상태로 한방향으로 사용자가 원하는 범위의 값을 설정하는
        방식입니다. Image Correction의 필터 형태에서 Numerical Input과 Label과
        함께 사용되는 것이 특징입니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/slider/Single Value Slider.png"
          alt="Single Value Slider"
        />
      </div>

      {/* ── Range Slider ── */}
      <h4 className={s.typeHeading}>2. Range Slider</h4>
      <p className={styles.typeDescription}>
        Range Slider는 사용자가 원하는 범위의 값의 작은 값과 큰 값을 모두
        설정하는 방식입니다. Distance to Root의 필터 형태에서 Numerical Input과
        Label이 함께 사용되는 것이 특징입니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/slider/Range Slider.png"
          alt="Range Slider"
        />
      </div>

      {/* ── Pop-up Slider ── */}
      <h4 className={s.typeHeading}>3. Pop-up Slider</h4>
      <p className={styles.typeDescription}>
        Pop-up Slider는 공간상의 제약으로 별도로 Input을 위한 Pop-up을 띄워
        Slider를 제공하는 방식입니다. Wind의 경우에 Blade View의 Rotate 동작을
        수행할때 사용이 되어집니다. 해당 타입의 Pop-up표출 방식은 Dropdown
        Menu의 표출 방식과 동일하게 적용되어 지는 것이 특징입니다.
        <br /><br />
        Dropdown이 표출되어지는 위치는 연관 콘텐츠와 가까운 방향으로 뜨는 것을
        원칙으로 합니다. 해당조건을 동등하게 충족 하였을때 왼쪽 기준으로 맞춰
        정렬 하는 것이 특징입니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/slider/Pop-up Slider.png"
          alt="Pop-up Slider"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          State
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>State</h3>
      <p className={s.sectionSubtext}>
        Slider는 Range 설정 범위에 따라서 Single Value Slider, Range Slider
        2가지로 분류되는데, 그 안에서도 사용되는 방식에 따라서 여러 부가적인
        요소들이 함께 사용 될 수 있습니다.
      </p>

      {/* ── Table: Slider / Handle ── */}
      <h4 className={s.typeHeading}>
        Table of Figma Properties - Slider / Handle
      </h4>

      <div className={s.propsTable}>
        <div className={`${s.propsRow2col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>Default, Pressed, Disabled</div>
        </div>
      </div>

      {/* ── Table: Slider ── */}
      <h4 className={s.typeHeading}>
        Table of Figma Properties - Slider
      </h4>

      <div className={s.propsTable}>
        <div className={`${s.propsRow2col} ${s.propsHeader}`}>
          <div className={s.propsCell}>Property</div>
          <div className={s.propsCell}>Values</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Type</div>
          <div className={s.propsCell}>
            Single Value Slider, Range Slider
          </div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>State</div>
          <div className={s.propsCell}>Default, Disabled</div>
        </div>
        <div className={s.propsRow2col}>
          <div className={s.propsCell}>Position</div>
          <div className={s.propsCell}>Start, Middle, End</div>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          User Case
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>User Case</h3>

      {/* ── State ── */}
      <div className={s.previewBox}>
        <img
          src="/images/components/slider/State.png"
          alt="User Case State"
        />
      </div>
      <h4 className={s.typeHeading}>State</h4>
      <p className={styles.typeDescription}>
        Slider는 Range 설정 범위에 따라서 특정 기준점(0)이 정해진
        상태에서의 값을 설정하는 Single Value Slider와 첫 값과 끝값을 모두
        설정 가능한 Range Slider 2가지로 분류되는데, 사용되는 방식에 따라서
        여러 부가적인 요소 (e.g. input)들이 함께 사용 될 수 있습니다.
      </p>

      <div className={s.sectionGap} />

      {/* ── Handle ── */}
      <div className={s.previewBox}>
        <img
          src="/images/components/slider/Handle.png"
          alt="User Case Handle"
        />
      </div>
      <h4 className={s.typeHeading}>Handle</h4>
      <p className={styles.typeDescription}>
        Hand의 경우 Default, Pressed, Disabled의 3가지 상태를 가지며 별도의
        Hover가 사용되지 않는 것이 특징입니다. Disabled의 경우 Handle
        개별적으로 Disabled가 사용되진 않으며 Slider의 상태와 함께
        적용되어집니다.
      </p>
    </div>
  );
}
