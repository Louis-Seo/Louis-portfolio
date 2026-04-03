import s from "@/styles/docs.module.css";
import styles from "./page.module.css";

/* ═══════════════════════════════════════════
   Color Data
   ═══════════════════════════════════════════ */

type Shade = { name: string; hex: string };

const GREEN: Shade[] = [
  { name: "900", hex: "#114F53" },
  { name: "800", hex: "#0F6E60" },
  { name: "700", hex: "#008F60" },
  { name: "600", hex: "#05AA73" },
  { name: "500", hex: "#0FBA7F" },
  { name: "400", hex: "#54C694" },
  { name: "300", hex: "#8BD6B2" },
  { name: "200", hex: "#C2EAD7" },
  { name: "100", hex: "#D2F2E6" },
  { name: "50", hex: "#E6F7EF" },
];

const GRAY: Shade[] = [
  { name: "900", hex: "#212121" },
  { name: "800", hex: "#424242" },
  { name: "700", hex: "#616161" },
  { name: "600", hex: "#757575" },
  { name: "500", hex: "#9E9E9E" },
  { name: "400", hex: "#BDBDBD" },
  { name: "300", hex: "#E0E0E0" },
  { name: "200", hex: "#EEEEEE" },
  { name: "100", hex: "#F5F5F5" },
  { name: "50", hex: "#FAFAFA" },
];

export default function ColorPage() {
  return (
    <div className={s.page}>
      {/* ── Page Title ── */}
      <h1 className={s.pageTitle}>Colors</h1>
      <p className={s.pageDescription}>
        컬러는 브랜드 인지, 정보 위계, 상태 전달을 동시에 담당하는 핵심 시각 요소입니다.
        <br />
        디자인 시스템의 컬러는 제품 전반에서 일관된 경험을 만들기 위한 기준으로 정의되며, 모든 UI는 지정된 컬러 토큰과 사용 원칙을 기반으로 적용되어야 합니다.
      </p>

      <hr className={s.divider} />

      {/* ══════════════════════════════════════════
          Color Usage Guidelines
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Color Usage Guidelines</h2>
      <ul className={styles.guidelineList}>
        <li>Color는 명확한 커뮤니케이션을 위해 Hex Code보다는 컬러명을 사용합니다.</li>
        <li>WCAG 2.0 기반으로 컬러 별 10단계(50-900)를 지원하며, 각 컬러 별 주요 색상은 500입니다.</li>
        <li>모든 화면에서는 정의된 컬러 토큰을 우선 적용하고, 접근성과 시각적 일관성을 해치지 않도록 임의의 컬러 사용은 지양합니다.</li>
        <li>텍스트와 배경의 명도 대비는 가독성을 충분히 확보할 수 있어야 하며, 신규 컬러가 필요한 경우에도 기존 시스템 안에서 확장 가능성을 먼저 검토한 뒤 제한적으로 추가하는 것을 원칙으로 합니다.</li>
      </ul>

      <div className={s.sectionGap} />

      {/* ══════════════════════════════════════════
          Brand Colors
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Brand Colors</h2>
      <p className={s.sectionSubtext}>
        Brand Colors는 제품 전반에서 브랜드의 정체성을 가장 직접적으로 드러내는 핵심 컬러 체계입니다.
        <br />
        그중 Primary Green은 서비스의 대표 컬러로, 주요 액션, 활성 상태, 강조 요소와 같이 사용자의 주의를 유도하고 브랜드 경험을 일관되게 전달해야 하는 영역에 우선적으로 적용합니다.
        <br /><br />
        이 컬러는 단순한 포인트 색상이 아니라, 제품 전체에서 시각적 중심축 역할을 하는 기준 색상입니다.
        <br />
        따라서 모든 화면에서는 정의된 컬러 토큰과 사용 원칙을 기반으로 일관되게 활용해야 하며, 브랜드 인지와 정보 위계를 동시에 강화하는 방향으로 사용해야 합니다.
      </p>

      <div className={styles.previewBox}>
        <img
          src="/images/color/Brand Colors.png"
          alt="Brand Colors usage example"
        />
      </div>

      {/* ── Main Green Colour Variation ── */}
      <h2 className={s.sectionHeading}>Main Green Colour Variation</h2>
      <p className={s.sectionSubtext}>
        Green Scale은 Primary Green을 기준으로 확장된 단계형 컬러 세트입니다. 강조 수준과 사용 맥락에 따라 배경, 텍스트, 상태 표현 등에 일관되게 활용할 수 있습니다.
      </p>

      <div className={styles.paletteRow}>
        {GREEN.map((shade) => (
          <div key={shade.name} className={styles.paletteItem}>
            <div
              className={styles.paletteSwatch}
              style={{ background: shade.hex }}
            />
            <span className={styles.paletteName}>Green {shade.name}</span>
            <span className={styles.paletteHex}>{shade.hex}</span>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          Text Colour
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Text Colour</h2>
      <p className={s.sectionSubtext}>
        텍스트 위계에 따라 CTA, Primary, Secondary, Tertiary 컬러로 사용하며 각
        화면 구성 요소에 따라 이외의 컬러를 사용합니다.
      </p>

      <div className={styles.paletteRow}>
        {GRAY.map((shade) => (
          <div key={shade.name} className={styles.paletteItem}>
            <div
              className={styles.paletteSwatch}
              style={{ background: shade.hex }}
            />
            <span className={styles.paletteName}>Gray {shade.name}</span>
            <span className={styles.paletteHex}>{shade.hex}</span>
          </div>
        ))}
      </div>

      <div className={styles.previewBox}>
        <img
          src="/images/color/Text Colour.png"
          alt="Text Colour usage example"
        />
      </div>

      <table className={s.propsTable}>
        <tbody>
          <tr className={`${styles.tableRow} ${styles.tableHeader}`}>
            <td className={s.propsCell}>Name</td>
            <td className={s.propsCell}>Usage</td>
            <td className={s.propsCell}>Hex</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>Gray 700</td>
            <td className={s.propsCell}>
              제목 (Title, Subtitle, Body), Tap, Filter, OSD Viewer 및 본문
              텍스트 색상
            </td>
            <td className={s.propsCell}>#616161</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>Gray 900</td>
            <td className={s.propsCell}>
              제목 (Heading, Title) or Icon, Button Info 강조 텍스트 색상
            </td>
            <td className={s.propsCell}>#212121</td>
          </tr>
        </tbody>
      </table>

      {/* ══════════════════════════════════════════
          Background Depth
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Background Depth</h2>
      <p className={s.sectionSubtext}>
        배경 색상과 아웃라인에만 사용하며 텍스트 색상에서의 사용을 지양합니다.
      </p>

      <div className={styles.previewBox}>
        <img
          src="/images/color/Background Depth.png"
          alt="Background Depth usage example"
        />
      </div>

      <table className={s.propsTable}>
        <tbody>
          <tr className={`${styles.tableRow} ${styles.tableHeader}`}>
            <td className={s.propsCell}>Name</td>
            <td className={s.propsCell}>Usage</td>
            <td className={s.propsCell}>Hex</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>BG Color / 00dp</td>
            <td className={s.propsCell}>
              기본 배경 색상이자 목록과 유사한 구성 항목의 구분에 대한 배경색
            </td>
            <td className={s.propsCell}>#FFFFFF</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>BG Color / -01dp</td>
            <td className={s.propsCell}>2번째 배경 색상</td>
            <td className={s.propsCell}>#FAFAFA</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>BG Color / -02dp</td>
            <td className={s.propsCell}>3번째 배경 색상</td>
            <td className={s.propsCell}>#F5F5F5</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>BG Color / -03dp</td>
            <td className={s.propsCell}>4번째 배경 색상</td>
            <td className={s.propsCell}>#EEEEEE</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>Divider Color / Gray200</td>
            <td className={s.propsCell}>디바이더 라인에 사용하는 색상</td>
            <td className={s.propsCell}>#EEEEEE</td>
          </tr>
        </tbody>
      </table>

      {/* ══════════════════════════════════════════
          Selected Color
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Selected Color</h2>
      <p className={s.sectionSubtext}>
        컴포넌트의 Selected에 대한 Status에 따른 색상을 정의합니다.
      </p>

      <div className={styles.previewBox}>
        <img
          src="/images/color/selected-color-example.svg"
          alt="Selected Color usage example"
        />
      </div>

      <table className={s.propsTable}>
        <tbody>
          <tr className={`${styles.tableRow} ${styles.tableHeader}`}>
            <td className={s.propsCell}>Name</td>
            <td className={s.propsCell}>Usage</td>
            <td className={s.propsCell}>Hex</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>(Table) Selected Color / 01dp</td>
            <td className={s.propsCell}>
              Table Row의 선택 시 표출되는 색상
            </td>
            <td className={s.propsCell}>#E6F7EF</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>
              (Table) Selected Hover Color / 02dp
            </td>
            <td className={s.propsCell}>
              Table의 선택된 Row에 Hover 시 표출되는 색상
            </td>
            <td className={s.propsCell}>#D2F2E6</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>Selected Color / -02dp</td>
            <td className={s.propsCell}>
              특정 요소를 선택 시 표출되는 색상 (e.g. Dropdown Item)
            </td>
            <td className={s.propsCell}>#F5F5F5</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>Selected Hover Color / -03dp</td>
            <td className={s.propsCell}>
              선택된 요소를 Hover 시 표출되는 색상 (e.g. Dropdown Item)
            </td>
            <td className={s.propsCell}>#EEEEEE</td>
          </tr>
        </tbody>
      </table>

      {/* ══════════════════════════════════════════
          Border Colour
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Border Colour</h2>
      <p className={s.sectionSubtext}>
        영역을 구분하는 테두리 색상으로 사용하며, 배경색이나 텍스트 색상에는
        사용하지 않습니다.
      </p>

      <div className={styles.previewBox}>
        <img
          src="/images/color/Border Colour.png"
          alt="Border Colour usage example"
        />
      </div>

      <table className={s.propsTable}>
        <tbody>
          <tr className={`${styles.tableRow} ${styles.tableHeader}`}>
            <td className={s.propsCell}>Name</td>
            <td className={s.propsCell}>Usage</td>
            <td className={s.propsCell}>Hex</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>Gray 200</td>
            <td className={s.propsCell}>
              컴포넌트 Action 시 Default or Hover 테두리
            </td>
            <td className={s.propsCell}>#EEEEEE</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={s.propsCell}>Gray 300</td>
            <td className={s.propsCell}>
              활성화 시 사용하는 테두리 색상 (e.g. Input, Dropdown)
            </td>
            <td className={s.propsCell}>#E0E0E0</td>
          </tr>
        </tbody>
      </table>

      {/* ══════════════════════════════════════════
          Secondary & Extra Colours
          ══════════════════════════════════════════ */}
      <h2 className={s.sectionHeading}>Secondary &amp; Extra Colours</h2>
      <p className={s.sectionSubtext}>
        Secondary &amp; Extra Color는 Chip, Badge, Avatar Color에서 사용되며,
        State Color 색상을 포함하여 카테고리에 따라 주요 컬러를 다양하게
        제공합니다.
      </p>

      <div className={styles.previewBox}>
        <img
          src="/images/color/Secondary & Extra Colours.png"
          alt="Secondary & Extra Colours usage example"
        />
      </div>

    </div>
  );
}
