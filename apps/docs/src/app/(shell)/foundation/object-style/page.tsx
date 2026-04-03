"use client";

import styles from "./page.module.css";

const ROUNDING_DATA = [
  { size: 40, radius: 6 },
  { size: 36, radius: 4 },
  { size: 32, radius: 4 },
  { size: 28, radius: 3 },
  { size: 24, radius: 3 },
  { size: 20, radius: 3 },
  { size: 18, radius: 3 },
  { size: 16, radius: 2 },
];

export default function ObjectStylePage() {
  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <h1 className={styles.pageTitle}>Object Style</h1>
        <p className={styles.pageDescription}>
          Zoomable의 Design Components의 스타일은 round를 가지고 있는 Shape로
          대부분 구성이 되어 있습니다. Component Box의 스타일은 filled된 형태와,
          outlined로 구분되는 형태로 분류가 되며 Worker Zoomable Design
          System에서는 별도의 dimension을 구분하기 위한 shadow를 사용하지 않으며,
          elevation color를 사용하여 계층을 구분 합니다.
        </p>
      </div>

      <hr className={styles.divider} />

      {/* ── Rounding Guide ── */}
      <section className={styles.section}>
        <div className={styles.roundingHeader}>
          <h2 className={styles.sectionTitle}>Rounding Guide</h2>
          <span className={styles.roundingNote}>
            Rounding Value는 2px 부터 6px로 구성이 됩니다.
          </span>
        </div>

        <div className={styles.roundingDiagram}>
          {ROUNDING_DATA.map((item) => (
            <div key={item.size} className={styles.roundingItem}>
              <span className={styles.roundingSizeLabel}>
                w,h={item.size}px
              </span>
              <div className={styles.roundingShapeWrap}>
                <div
                  className={styles.roundingShape}
                  style={{
                    width: item.size,
                    height: item.size,
                    borderRadius: item.radius,
                  }}
                />
              </div>
              <span className={styles.roundingRadiusLabel}>
                r={item.radius}px
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
