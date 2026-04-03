import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function EmptyStatePage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Empty State</h1>
      <p className={s.pageDescription}>
        특정 항목에 대한 정보가 제공되지 않을때 (no data case), 항목에 대한 데이터의 설명을 전달하는 역할을 합니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h2 className={s.sectionHeading}>Anatomy</h2>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/empty-state/Anatomy.png" alt="Anatomy" />
        <p className={styles.previewBoxCompactLabel}>
          1. Illustration<br />
          2. Icon<br />
          3. Header<br />
          4. Description<br />
          5. Container
        </p>
      </div>

      <div className={s.sectionGap} />

      {/* ── Usage ── */}
      <h2 className={s.sectionHeading}>Usage</h2>
      <p className={s.sectionSubtext}>
        Empty State의 기본적인 구성 요소는 Illustration, Header, 그리고 Description으로 구성 됩니다. 각각의 요소는 경우에 따라 빼고 추가 할 수 있으며, 기능적 필요성에 따라서 CTA역할의 Button이 함께 사용 될 수 있습니다.
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBox}>
            <img src="/images/components/empty-state/Header.png" alt="Header" />
          </div>
          <h4 className={s.typeHeading}>Header</h4>
          <p className={s.typeSubtext}>
            해당 Empty State에 대한 주요 요약 정보로 2-3가지의 짧은 단어의 조합으로 사용 되는 것이 특징입니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBox}>
            <img src="/images/components/empty-state/Description.png" alt="Description" />
          </div>
          <h4 className={s.typeHeading}>Description</h4>
          <p className={s.typeSubtext}>
            Illustration과 Header외에 해당 Empty State에 대한 별도의 부가 설명이 필요한 경우 함께 제공되어 집니다. 2 Line을 넘지 않는 것을 지향하며, Max Width는 300px 입니다.
          </p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBox}>
            <img src="/images/components/empty-state/Illustration.png" alt="Illustration" />
          </div>
          <h4 className={s.typeHeading}>Illustration</h4>
          <p className={s.typeSubtext}>
            Data가 없는 경우에 대한 직관적인 시각적 정보로 제공하여 줍니다. Illustration을 구성하는 Container의 영역의 경우 100x100px으로 모든 Illustration이 동일한 사이즈를 가지는 것이 특징입니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBox}>
            <img src="/images/components/empty-state/CTA Button (optional).png" alt="CTA Button" />
          </div>
          <h4 className={s.typeHeading}>CTA Button (optional)</h4>
          <p className={s.typeSubtext}>
            Empty State의 경우, CTA Button을 통해 특정 Action 수행을 유도합니다. 주로 생성에 관련된 Action을 수행하는 CTA Button을 포함하는 것이 특징입니다.
          </p>
        </div>
      </div>
      <hr className={s.divider} />

      {/* ── Type of Empty State ── */}
      <h2 className={s.sectionHeading}>Type of Empty State</h2>
      <p className={s.sectionSubtext}>
        Empty State의 사용 목적에 따라 3가지 Type으로 분류되어 사용 됩니다. 해당 Empty State의 Type들은 특정 영역에 대하여 정보가 제공되지 않을 시에 표출되는 방식으로, 특정 영역으로 둘러쌓인 Container 내에 해당 Type의 Empty State가 발생 할 수 있습니다.
        <br /><br />
        해당 3가지 Type 외에도 Zoomable Design System의 단일한 Componant에 데이터가 존재 하지 않을 경우에도 Empty State가 발생 할 수 있습니다. 해당 케이스의 경우 각각의 개별 Component에 해당하는 시스템 내에 별도로 정의 됩니다.
        (e.g. avatar image empty, image data empty ...)
      </p>

      <div className={s.grid3col}>
        <div className={s.gridCard}>
          <div className={styles.gridCardPreview}>
            <img src="/images/components/empty-state/Illust Type (IES).png" alt="Illust Type" />
          </div>
          <p className={s.gridCardTitle}>Illust Type (IES)</p>
          <p className={s.gridCardDesc}>
            컨탠츠의 범주 안에 속하여 연달아 표출 되는 경우로 Illustration 혹은 Icon과 함께 사용되기에 Heavy 한 경우에 사용 됩니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={styles.gridCardPreview}>
            <img src="/images/components/empty-state/Illust with Description Type (IDES).png" alt="Illust with Description Type" />
          </div>
          <p className={s.gridCardTitle}>Illust with Description Type (IDES)</p>
          <p className={s.gridCardDesc}>
            컨탠츠의 범주 안에 속하여 연달아 표출 되는 경우로 Illustration 혹은 Icon과 함께 사용되기에 Heavy 한 경우에 사용 됩니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={styles.gridCardPreview}>
            <img src="/images/components/empty-state/Illust with CTA Type (ESC).png" alt="Illust with CTA Type" />
          </div>
          <p className={s.gridCardTitle}>Illust with CTA Type (ESC)</p>
          <p className={s.gridCardDesc}>
            컨탠츠의 범주 안에 속하여 연달아 표출 되는 경우로 Illustration 혹은 Icon과 함께 사용되기에 Heavy 한 경우에 사용 됩니다.
          </p>
        </div>
      </div>

      <hr className={s.divider} />

      {/* ── Illustration Types ── */}
      <h2 className={s.sectionHeading}>Illustration Types</h2>
      <p className={s.sectionSubtext}>
        Empty State의 Illustration은 기능에 따라 별도로 제작 될 수 있으나, 현재 대표적으로 No Data, Nothing Selected 인 경우의 상태의 Illustration를 사용합니다. &apos;No Data&apos; 는 현재 디스플레이할 데이터가 없는 경우, &apos;Nothing Selected&apos; 는 현재 선택된 항목이 없는 경우에 사용 되는 것으로 합니다.
      </p>

      <div className={styles.previewBoxSmall}>
        <img src="/images/components/empty-state/Main Illustration Types.png" alt="Main Illustration Types" />
      </div>
      <p className={styles.imageLabel}>Main Illustration Types</p>

      <div className={styles.previewBoxSmall}>
        <img src="/images/components/empty-state/Extra Illustration Type (Optional).png" alt="Extra Illustration Type (Optional)" style={{ maxWidth: "80%" }} />
      </div>
      <p className={styles.imageLabel}>Extra Illustration Type (Optional)</p>
    </div>
  );
}
