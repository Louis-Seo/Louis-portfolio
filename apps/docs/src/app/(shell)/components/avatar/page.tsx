import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

export default function AvatarPage() {
  return (
    <div className={s.page}>
      <h1 className={s.pageTitle}>Avatar</h1>
      <p className={s.pageDescription}>
        Avatar는 특정 그룹 혹은 사용자를 대표하는 셀래강으로, Zoomable Design System에서는 Square와 Circle Type으로 사용합니다.
      </p>

      <hr className={s.divider} />

      {/* ── Anatomy ── */}
      <h2 className={s.sectionHeading}>Anatomy</h2>
      <div className={styles.previewBoxCompact}>
        <img src="/images/components/avatar/Anatomy.png" alt="Anatomy" />
        <p className={styles.previewBoxCompactLabel}>
          1. Avatar Label<br />
          2. Circle Container<br />
          3. Square Container<br />
          4. Text Label
        </p>
      </div>

      <div className={s.sectionGap} />

      {/* ── Usage ── */}
      <h2 className={s.sectionHeading}>Usage</h2>
      <p className={s.sectionSubtext}>
        Avatar의 Type이 형태적인 기준으로 2가지로 분류가 되며, 각각의 Type은 다른 종류의 요소를 대표하는 역할로서 서로 별개의 용도로 사용되어야 합니다.
      </p>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${styles.propsRow4col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Component</td>
            <td className={s.propsCell}>Type</td>
            <td className={s.propsCell}>Usage</td>
            <td className={s.propsCell}>Used</td>
          </tr>
          <tr className={styles.propsRow4col}>
            <td className={s.propsCell}><div className={styles.avatarSquare}>D</div></td>
            <td className={s.propsCell}>Square</td>
            <td className={s.propsCell}>그룹(organization)을 대표하는 썸네일로 사용합니다.</td>
            <td className={s.propsCell}>Farm, Fleet</td>
          </tr>
          <tr className={styles.propsRow4col}>
            <td className={s.propsCell}><div className={styles.avatarCircle}>A</div></td>
            <td className={s.propsCell}>Circle</td>
            <td className={s.propsCell}>개인(person)을 대표하는 썸네일로 사용합니다.</td>
            <td className={s.propsCell}>User</td>
          </tr>
        </tbody>
      </table>

      {/* ── Design Spec ── */}
      <h2 className={s.sectionHeading}>Design Spec</h2>
      <table className={s.propsTable}>
        <tbody>
          <tr className={`${s.propsRow3col} ${s.propsHeader}`}>
            <td className={s.propsCell}>Property</td>
            <td className={s.propsCell}>Values</td>
            <td className={s.propsCell}>Default</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Size</td>
            <td className={s.propsCell}>36px (Large) / 32px (Medium) / 24px (Small)</td>
            <td className={s.propsCell}>32px (Medium)</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>Image</td>
            <td className={s.propsCell}>Image / Empty</td>
            <td className={s.propsCell}>Empty</td>
          </tr>
          <tr className={s.propsRow3col}>
            <td className={s.propsCell}>State</td>
            <td className={s.propsCell}>Default / Disabled</td>
            <td className={s.propsCell}>Default</td>
          </tr>
        </tbody>
      </table>

      <div className={s.sectionGap} />

      {/* ── Size ── */}
      <h2 className={s.sectionHeading}>Size</h2>
      <p className={s.sectionSubtext}>
        아래와같이 사용 가능 목록들 총 3가지에 Avatar 사이즈를 제공하고 있습니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/avatar/Size.png" alt="Size" />
      </div>

      <div className={s.sectionGap} />

      {/* ── Color ── */}
      <h2 className={s.sectionHeading}>Color</h2>
      <p className={s.sectionSubtext}>
        Avatar의 Image Empty 상태의 배경을 총 5가지이며, 랜덤으로 배정 되는 것을 원칙으로 합니다. 기존의 Color Palette에서 Blue, Green, Yellow, Red 그리고 Gray Color의 200, 700값의 조합으로 사용 합니다.
      </p>
      <div className={s.previewBox}>
        <img src="/images/components/avatar/Color.png" alt="Color" />
      </div>
    </div>
  );
}
