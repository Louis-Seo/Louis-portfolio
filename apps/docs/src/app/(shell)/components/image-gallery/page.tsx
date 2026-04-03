import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function ImageGalleryPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Image Gallery</h1>
      <p className={s.pageDescription}>
        여러 이미지 정보를 한데 모아 보여주기 위한 이미지 컬렉션으로 이미지 썸네일에 특정 정보를 일부 함께 나타내어 사용 되어 집니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h2 className={s.sectionHeading}>Anatomy</h2>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/image-gallery/Anatomy.png" alt="Anatomy" />
        <p className={styles.previewBoxCompactLabel}>
          1. Severity Label<br />
          2. Image Container<br />
          3. Text Label<br />
          4. Label Container
        </p>
      </div>

      <div className={s.sectionGap} />

      {/* ── Usage ── */}
      <h2 className={s.sectionHeading}>Usage</h2>
      <p className={s.sectionSubtext}>
        Image Gallery는 정보의 유형과 상태에 따라 크게 아래 4가지로 분류합니다.
        <br /><br />
        1. Default Image<br />
        2. Image with Severity<br />
        3. No Data<br />
        4. Image Empty
        <br /><br />
        해당 컨탠츠가 가지고 있는 정보의 특성들로 4가지로 분류가 되며, 해당 4가지 모두 선택 되었을때의 Selected, Unfocused Status가 별도로 존재 하는 것이 특징입니다.
      </p>

      <div className={s.previewRow}>
        <div>
          <div className={s.previewBoxBg}>
            <img src="/images/components/image-gallery/Default Image.png" alt="Default Image" />
          </div>
          <h4 className={s.typeHeading}>Default Image</h4>
          <p className={s.typeSubtext}>
            기본적인 이미지 요소의 형태입니다.
          </p>
        </div>
        <div>
          <div className={s.previewBoxBg}>
            <img src="/images/components/image-gallery/Image with Severity.png" alt="Image with Severity" />
          </div>
          <h4 className={s.typeHeading}>Image with Severity</h4>
          <p className={s.typeSubtext}>
            포함하고 있는 정보에서 Severity를 보유하고 있을때의 형태 입니다.
          </p>
        </div>
      </div>

      <div className={s.previewRow}>
        <div>
          <div className={styles.previewBoxOutline}>
            <img src="/images/components/image-gallery/No Data.png" alt="No Data" />
          </div>
          <h4 className={s.typeHeading}>No Data</h4>
          <p className={s.typeSubtext}>
            데이터가 존재하지 않는 상태입니다.
          </p>
        </div>
        <div>
          <div className={styles.previewBoxOutline}>
            <img src="/images/components/image-gallery/Image Empty.png" alt="Image Empty" />
          </div>
          <h4 className={s.typeHeading}>Image Empty</h4>
          <p className={s.typeSubtext}>
            메타데이터는 존재하되, 이미지는 로딩이 되지 않는 형태 입니다.
          </p>
        </div>
      </div>
      <hr className={s.divider} />

      {/* ── Status ── */}
      <h2 className={s.sectionHeading}>Status</h2>
      <p className={s.sectionSubtext}>
        Alert는 정보의 구성에 따라 콘텐츠를 Container Alert, Text Alert 2가지로 분류합니다. Info Text와 Info Icon으로 구성된 Basic Info Box를 기본으로 합니다. Text Alert과 Container Alert는 정보에 대한 액션이 필요한 경우 사용합니다. 또한 정보를 함축·요약이 필요한 경우 사용합니다.
      </p>

      <div className={s.grid3col}>
        <div className={s.gridCard}>
          <div className={s.previewBoxBg}>
            <img src="/images/components/image-gallery/Default.png" alt="Default" />
          </div>
          <p className={s.gridCardTitle}>Default</p>
          <p className={s.gridCardDesc}>
            기본적으로 이미지 갤러리에 접근했을때 표출 되는 방식입니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={s.previewBoxBg}>
            <img src="/images/components/image-gallery/Focused.png" alt="Focused" />
          </div>
          <p className={s.gridCardTitle}>Focused</p>
          <p className={s.gridCardDesc}>
            특정 이미지 컨탠츠에 집중시켜 해당 요소와 연관된 특정 Action을 하기 위한 상태입니다.
          </p>
        </div>
        <div className={s.gridCard}>
          <div className={s.previewBoxBg}>
            <img src="/images/components/image-gallery/Unfocused.png" alt="Unfocused" />
          </div>
          <p className={s.gridCardTitle}>Unfocused</p>
          <p className={s.gridCardDesc}>
            Focused와 함께 동작하는 형태로 집중된 하나의 요소외의 요소들을 집중도를 낮춰주는 역할을 합니다.
          </p>
        </div>
      </div>

      {/* ── Spacing ── */}
      <h2 className={s.sectionHeading}>Spacing</h2>
      <p className={s.sectionSubtext}>
        Image Gallery의 이미지 사이즈는 부여된 화면마다의 갤러리 영역에 따라 Flexible 하게 변하며, 상하좌우 간격은 8px로 두는 것으로 합니다.
      </p>
      <div className={s.previewBoxBg}>
        <img src="/images/components/image-gallery/Spacing.png" alt="Spacing" />
      </div>

      <div className={s.sectionGap} />

      {/* ── Contents ── */}
      <h2 className={s.sectionHeading}>Contents</h2>

      <div className={s.usageRow}>
        <div className={s.previewBoxBg} style={{ marginBottom: 0 }}>
          <img src="/images/components/image-gallery/Severity Group.png" alt="Severity Group" />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Severity Group</p>
          <p className={s.ruleText}>
            Gallery에 사용되는 Severity Badge의 경우 Circular Type으로 사용되어지며 갯수가 포함된 Count Severity Group과 갯수를 포함하지 않은 Severity Group 두가지로 분류되어 사용됩니다.
          </p>
        </div>
      </div>

      <div className={s.usageRow}>
        <div className={s.previewBoxBg} style={{ marginBottom: 0 }}>
          <img src="/images/components/image-gallery/Text Label.png" alt="Text Label" style={{ maxWidth: "50%" }} />
        </div>
        <div className={s.ruleCardBottom}>
          <p className={s.ruleTitle}>Text Label</p>
          <p className={s.ruleText}>
            이미지에 대한 정보를 이미지 하단에 Text로 제공하는 역할로 사용되어 집니다. &apos;Blade / Blade Side / R Value&apos;의 정보를 표출합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
