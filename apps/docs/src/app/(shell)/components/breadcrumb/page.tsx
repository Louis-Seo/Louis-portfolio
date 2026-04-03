import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function BreadcrumbPage() {
  return (
    <div className={s.page}>
      {/* ── Hero ── */}
      <h2 className={s.pageTitle}>Breadcrumb</h2>
      <p className={s.pageDescription}>
        Breadcrumb은 웹상에서 사용자의 현재 위치를 보여주고 상위 페이지로 이동
        가능하도록 하는 컴포넌트 입니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Anatomy
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Anatomy</h3>

      <div className={s.previewBox}>
        <img
          src="/images/components/breadcrumb/Anatomy.png"
          alt="Breadcrumb Anatomy"
        />
      </div>


      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Spec
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Spec</h3>
      <p className={s.sectionSubtext}>
        Breadcrumb의 사용 spacing은 각각의 간격을 8px로 두며, 현재 페이지와
        이전 hierarchy의 페이지를 Typography 및 Color의 차이를 두어 시각적으로
        구분 합니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/breadcrumb/Spec.png"
          alt="Breadcrumb Spec"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Item Status
          ══════════════════════════════════════════ */}

      <h3 className={s.sectionHeading}>Item Status</h3>
      <p className={s.sectionSubtext}>
        Breadcrumb의 Item의 상태는 해당 페이지로 Link되는 상태와 별도의 상태가
        없는 상태로 사용되어 집니다. 후자의 경우 현재의 Tab이 페이지가 별도로
        존재하지 않는 특정 Parents에 종속 되어 사용되는 경우에 사용합니다.
      </p>

      <div className={s.previewBox}>
        <img
          src="/images/components/breadcrumb/Item Status.png"
          alt="Breadcrumb Item Status"
        />
      </div>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          State & Page Link
          ══════════════════════════════════════════ */}

      <div className={s.usageRowEqual}>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/breadcrumb/State.png"
              alt="Breadcrumb State"
            />
          </div>
          <h4 className={styles.variantColHeading}>State</h4>
          <p className={styles.variantColDesc}>
            Breadcrumb의 State는 3가지 (Current Page, Enabled, Disabled) 로
            구성되어 집니다. Enabled와 Disabled의 경우 시각적 변화는 없으며
            Cusor의 변화로 구분하는 것이 특징입니다.
          </p>
        </div>
        <div className={styles.variantCol}>
          <div className={s.previewBox}>
            <img
              src="/images/components/breadcrumb/Page Iink.png"
              alt="Breadcrumb Page Link"
            />
          </div>
          <h4 className={styles.variantColHeading}>Page link</h4>
          <p className={styles.variantColDesc}>
            Breadcrumb은 Page의 Hierachy를 보여줌과 동시에 통해 페이지 이동이
            가능한 Component 입니다. Current Page를 제외한 Enabled 상태의
            Breadcrumb의 Item을 클릭하는 동작을 통해 이동이 가능하며, Current
            Page가 아닌 Disabled의 상태 또한 별도의 이동이 이루어 지지 않는
            것이 특징입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
