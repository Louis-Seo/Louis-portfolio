"use client";

import styles from "./page.module.css";

export default function IconPage() {
  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <h1 className={styles.pageTitle}>Iconography</h1>
        <p className={styles.pageDescription}>
          아이콘은 기능, 행동, 사물의 상징을 기호로 만든 시각 언어로 한정된
          공간에서 효율적으로 정보를 전달하는 역활을 합니다.
        </p>
      </div>

      <hr className={styles.divider} />

      {/* ── Icon Size ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Icon Size</h2>
        <p className={styles.sectionDescription}>
          시스템 아이콘은 24 x 24 dp로 표시됩니다. 픽셀 단위의 정확도를 위해
          100% 스케일로 볼 수 있는 아이콘을 만듭니다.
        </p>

        <img
          src="/images/Icon/Icon%20Size.svg"
          alt="Icon Size diagram showing 100% and 1000% scale"
          className={styles.sectionImage}
        />
      </section>

      <hr className={styles.divider} />

      {/* ── Layout ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Layout</h2>
        <p className={styles.sectionDescription}>
          콘텐츠는 라이브 영역 안에 있어야 하며, 이 영역은 보기에서 숨길
          가능성이 낮은 영역입니다(예: 스크롤할 때 사이드바가 나타날 때).
          추가적인 시각적 무게가 필요한 경우, 내용물이 라이브 영역과 트림 영역
          사이의 패딩(그래픽의 전체 크기)으로 확장될 수 있습니다. 아이콘의 어떤
          부분도 트림 영역 외부로 확장되어서는 안 됩니다.
        </p>

        <img
          src="/images/Icon/Layout%20Example.svg"
          alt="Layout diagram showing live area and padding"
          className={styles.sectionImage}
        />
      </section>

      <hr className={styles.divider} />

      {/* ── Keyline Shapes ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Keyline Shapes</h2>
        <p className={styles.sectionDescription}>
          Key Shape은 각 아이콘의 기본 틀을 정의합니다. 비슷한 비율의 아이콘에
          일관성을 줄 수 있습니다.
        </p>

        <img
          src="/images/Icon/Keyline%20Shapes%20Example.svg"
          alt="Keyline Shapes diagram showing square, vertical rectangle, horizontal rectangle, and circle"
          className={styles.sectionImage}
        />
      </section>

      <hr className={styles.divider} />

      {/* ── Stroke ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Stroke</h2>
        <p className={styles.sectionDescription}>
          기본 Stroke는 2dp 이며 아이콘의 크기, 위치 목적에 따라 변경될 수
          있습니다.
        </p>

        <img
          src="/images/Icon/Stroke%20Example.svg"
          alt="Stroke diagram showing 2dp stroke width"
          className={styles.sectionImage}
        />
      </section>

      <hr className={styles.divider} />

      {/* ── Radius ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Radius</h2>
        <p className={styles.sectionDescription}>
          Radius는 0~2dp 사이에서 자유롭게 사용할수 있습니다. 아이콘의 모티프를
          보다 효과적으로 보여주고자 할 때 사용하며, 각 모서리마다 개별적으로
          적용할 수 있습니다.
        </p>

        <img
          src="/images/Icon/Radius%20Example.svg"
          alt="Radius diagram showing 0, 1, and 2dp radius options"
          className={styles.sectionImage}
        />
      </section>

      <hr className={styles.divider} />

      {/* ── Styles ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Styles</h2>
        <p className={styles.sectionDescription}>
          아이콘은 Line, Fill 2가지 타입의 표현을 사용하며, 맥락에 따라 적절하게
          사용합니다.
        </p>

        <img
          src="/images/Icon/Styles%20Example.svg"
          alt="Styles diagram showing Line and Fill icon types"
          className={styles.sectionImage}
        />
      </section>

      <hr className={styles.divider} />

      {/* ── Colors ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Colors</h2>
        <p className={styles.sectionDescription}>
          기본적으로 아이콘은 Gray-50 컬러로 제공되며, 일반적으로 Worker 내에서
          단독적으로 사용되는 아이콘 컬러는 Gray-400을, Heading과 같이
          사용되는경우 Gray-50을 사용하게 됩니다. 배경색 또는 상황에 따라
          아이콘의 컬러는 달라질수 있습니다.
        </p>

        <img
          src="/images/Icon/Colors%20Example.svg"
          alt="Colors diagram showing Gray-500, Gray-900, and Gray-50 icon colors"
          className={styles.sectionImage}
        />
      </section>

    </div>
  );
}
