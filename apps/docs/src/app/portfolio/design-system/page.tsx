"use client";

import ProjectHero from "@/components/portfolio/ProjectHero/ProjectHero";
import ContentSection from "@/components/portfolio/ContentSection/ContentSection";
import SectionHeader from "@/components/portfolio/SectionHeader/SectionHeader";
import StatGrid from "@/components/portfolio/StatGrid/StatGrid";
import styles from "./page.module.css";

/* ═══════════════════════════════════════════
   Data — sourced from Figma MCP tokens
   ═══════════════════════════════════════════ */

const COLOR_PALETTE = [
  {
    name: "Gray",
    shades: [
      { level: "900", hex: "#212121", light: false },
      { level: "800", hex: "#424242", light: false },
      { level: "700", hex: "#616161", light: false },
      { level: "600", hex: "#757575", light: false },
      { level: "500", hex: "#9E9E9E", light: false },
      { level: "400", hex: "#BDBDBD", light: true },
      { level: "300", hex: "#E0E0E0", light: true },
      { level: "200", hex: "#EEEEEE", light: true },
      { level: "100", hex: "#F5F5F5", light: true },
      { level: "50", hex: "#FAFAFA", light: true },
    ],
  },
  {
    name: "Green",
    shades: [
      { level: "900", hex: "#114F53", light: false },
      { level: "800", hex: "#0F6E60", light: false },
      { level: "700", hex: "#008F60", light: false },
      { level: "600", hex: "#05AA73", light: false },
      { level: "500", hex: "#0FBA7F", light: false },
      { level: "400", hex: "#54C694", light: true },
      { level: "300", hex: "#8BD6B2", light: true },
      { level: "200", hex: "#C2EAD7", light: true },
      { level: "100", hex: "#D2F2E6", light: true },
      { level: "50", hex: "#E6F7EF", light: true },
    ],
  },
  {
    name: "Blue",
    shades: [
      { level: "900", hex: "#01579B", light: false },
      { level: "800", hex: "#0277BD", light: false },
      { level: "700", hex: "#0288D1", light: false },
      { level: "600", hex: "#039BE5", light: false },
      { level: "500", hex: "#03A9F4", light: false },
      { level: "400", hex: "#29B6F6", light: true },
      { level: "300", hex: "#4FC3F7", light: true },
      { level: "200", hex: "#81D4FA", light: true },
      { level: "100", hex: "#B3E5FC", light: true },
      { level: "50", hex: "#E1F5FE", light: true },
    ],
  },
  {
    name: "Red",
    shades: [
      { level: "900", hex: "#771A0D", light: false },
      { level: "800", hex: "#97180C", light: false },
      { level: "700", hex: "#BC1B06", light: false },
      { level: "600", hex: "#E62E05", light: false },
      { level: "500", hex: "#FF4405", light: false },
      { level: "400", hex: "#FF692E", light: true },
      { level: "300", hex: "#FF9C66", light: true },
      { level: "200", hex: "#FFD6AE", light: true },
      { level: "100", hex: "#FFE6D5", light: true },
      { level: "50", hex: "#FFF4ED", light: true },
    ],
  },
];

const TYPOGRAPHY_SCALE = [
  { name: "H1", size: "32px", weight: "600", lineHeight: "40px", variable: "h1" },
  { name: "H2", size: "24px", weight: "600", lineHeight: "30px", variable: "h2" },
  { name: "H3", size: "20px", weight: "600", lineHeight: "24px", variable: "h3" },
  { name: "H4", size: "18px", weight: "600", lineHeight: "22px", variable: "h4" },
  { name: "H5", size: "16px", weight: "600", lineHeight: "22px", variable: "h5" },
  { name: "Subtitle 1", size: "16px", weight: "500", lineHeight: "22px", variable: "subtitle1" },
  { name: "Subtitle 2", size: "14px", weight: "600", lineHeight: "20px", variable: "subtitle2" },
  { name: "Body 1", size: "16px", weight: "400", lineHeight: "22px", variable: "body1" },
  { name: "Body 2", size: "14px", weight: "400", lineHeight: "20px", variable: "body2" },
  { name: "Body 4", size: "12px", weight: "400", lineHeight: "16px", variable: "body4" },
  { name: "Body 6", size: "10px", weight: "400", lineHeight: "14px", variable: "body6" },
];

const SPACING_TOKENS = [
  { name: "space-1", value: "4px", px: 4 },
  { name: "space-2", value: "8px", px: 8 },
  { name: "space-3", value: "12px", px: 12 },
  { name: "space-4", value: "16px", px: 16 },
  { name: "space-5", value: "20px", px: 20 },
  { name: "space-6", value: "24px", px: 24 },
];

const RADIUS_TOKENS = [
  { name: "radius-sm", value: "4px" },
  { name: "radius-md", value: "8px" },
  { name: "radius-full", value: "24px" },
];

const BUTTON_SIZES: {
  name: string;
  key: "large" | "medium" | "small" | "xsmall" | "2xsmall";
  height: string;
  minWidth: string;
  fontSize: string;
}[] = [
  { name: "Large", key: "large", height: "48px", minWidth: "90px", fontSize: "14px" },
  { name: "Medium", key: "medium", height: "40px", minWidth: "80px", fontSize: "14px" },
  { name: "Small", key: "small", height: "32px", minWidth: "80px", fontSize: "14px" },
  { name: "xSmall", key: "xsmall", height: "28px", minWidth: "71px", fontSize: "12px" },
  { name: "2xSmall", key: "2xsmall", height: "24px", minWidth: "64px", fontSize: "10px" },
];

const BUTTON_PROPERTIES = [
  { prop: "type", values: "primary, secondary", defaultVal: "primary" },
  { prop: "size", values: "large, medium, small, xsmall, 2xsmall", defaultVal: "medium" },
  { prop: "state", values: "default, hover, clicked, disabled", defaultVal: "default" },
  { prop: "icon", values: "true, false", defaultVal: "false" },
];

const ICON_BUTTON_PROPERTIES = [
  { prop: "type", values: "primary, secondary, tertiary", defaultVal: "secondary" },
  {
    prop: "size",
    values: "large, medium, small, xsmall, 2xsmall, 3xsmall, 4xsmall",
    defaultVal: "medium",
  },
  { prop: "state", values: "default, hover, clicked, disabled", defaultVal: "default" },
];

const PRINCIPLES = [
  {
    title: "Consistency",
    text: "Single source of truth for all visual decisions. Every color, size, and spacing value is a registered token — not a magic number.",
    icon: "grid",
  },
  {
    title: "Scalability",
    text: "Components and tokens designed to grow with the product. New variants extend the system, they don't break it.",
    icon: "layers",
  },
  {
    title: "Efficiency",
    text: "Reduce design-to-development friction through a shared language of tokens, variants, and states.",
    icon: "zap",
  },
  {
    title: "Clarity",
    text: "Every design decision is documented and accessible. Designers and developers reference the same system.",
    icon: "eye",
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Define Tokens",
    text: "Establish the foundational values — color, typography, spacing, radius — as reusable design tokens in Figma.",
    code: "--green-500: #0FBA7F\n--radius-sm: 4px\n--space-4: 16px",
  },
  {
    title: "Design Components",
    text: "Build components using variants, props, and states that map directly to React component APIs.",
    code: "Button\n  type: primary\n  size: medium\n  state: default",
  },
  {
    title: "Map to CSS Variables",
    text: "Tokens become CSS custom properties. Components consume them, never hardcoded values.",
    code: "background:\n  var(--green-500)\nborder-radius:\n  var(--radius-sm)",
  },
  {
    title: "Ship & Document",
    text: "Components ship with clear property tables, state definitions, and usage guidelines.",
    code: '<Button\n  type="primary"\n  size="medium"\n/>',
  },
];

const IMPACTS = [
  { value: "7", label: "Foundation token groups" },
  { value: "20+", label: "Registered components" },
  { value: "5", label: "Button size variants" },
  { value: "4", label: "Button state definitions" },
];

/* ═══════════════════════════════════════════
   Demo Components
   ═══════════════════════════════════════════ */

const SIZE_CLASS_MAP: Record<string, string> = {
  large: styles.demoButtonLarge,
  medium: styles.demoButtonMedium,
  small: styles.demoButtonSmall,
  xsmall: styles.demoButtonXsmall,
  "2xsmall": styles.demoButton2xsmall,
};

const ICON_SIZE_MAP: Record<string, string> = {
  large: styles.demoIconButtonLarge,
  medium: styles.demoIconButtonMedium,
  small: styles.demoIconButtonSmall,
};

const PRINCIPLE_ICONS: Record<string, React.ReactNode> = {
  grid: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.5L17.5 7.5L10 12.5L2.5 7.5L10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2.5 12.5L10 17.5L17.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2L4 11.5H10L9 18L16 8.5H10L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  eye: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 10C2 10 5 4.5 10 4.5C15 4.5 18 10 18 10C18 10 15 15.5 10 15.5C5 15.5 2 10 2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

function WindIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33 5.33h5.34M5.33 8h4M5.33 10.67h5.34"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DemoButton({
  variant = "primary",
  size = "medium",
  label = "Button",
  disabled = false,
  icon = false,
}: {
  variant?: "primary" | "secondary";
  size?: "large" | "medium" | "small" | "xsmall" | "2xsmall";
  label?: string;
  disabled?: boolean;
  icon?: boolean;
}) {
  const variantClass =
    variant === "primary" ? styles.demoButtonPrimary : styles.demoButtonSecondary;
  const sizeClass = SIZE_CLASS_MAP[size] || styles.demoButtonMedium;

  return (
    <button
      className={`${styles.demoButton} ${variantClass} ${sizeClass}`}
      disabled={disabled}
      type="button"
    >
      {icon && <WindIcon size={size === "2xsmall" || size === "xsmall" ? 12 : 16} />}
      {label}
    </button>
  );
}

function DemoIconButton({
  variant = "secondary",
  size = "medium",
}: {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "large" | "medium" | "small";
}) {
  const variantClass =
    variant === "primary"
      ? styles.demoIconButtonPrimary
      : variant === "secondary"
        ? styles.demoIconButtonSecondary
        : styles.demoIconButtonTertiary;
  const sizeClass = ICON_SIZE_MAP[size] || styles.demoIconButtonMedium;
  const iconSize = size === "large" ? 24 : size === "medium" ? 20 : 18;

  return (
    <button className={`${styles.demoIconButton} ${variantClass} ${sizeClass}`} type="button">
      <WindIcon size={iconSize} />
    </button>
  );
}

/* ═══════════════════════════════════════════
   Page
   ═══════════════════════════════════════════ */

export default function DesignSystemCaseStudy() {
  return (
    <div className={styles.page}>
      {/* ── 1. Hero ── */}
      <ProjectHero
        label="Design System Case Study"
        title="NL Wind Design System"
        description="A scalable design system built for enterprise wind energy inspection products — structured around tokens, components, and states to bridge the gap between design and React-based development."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Scope", value: "System Architecture" },
          { label: "Components", value: "20+ Registered" },
          { label: "Tokens", value: "7 Foundation Groups" },
        ]}
      />

      {/* ── 2. Why This System ── */}
      <ContentSection alternate>
        <SectionHeader
          label="Context"
          title="Why This System"
          description="As the product grew, inconsistencies multiplied. Each screen was designed in isolation, and every handoff required re-explaining the same visual decisions."
        />
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <span className={styles.problemNumber}>01</span>
            <h3 className={styles.problemTitle}>Inconsistent UI</h3>
            <p className={styles.problemText}>
              Different screens used different button sizes, colors, and spacing — with no
              single reference to align them.
            </p>
          </div>
          <div className={styles.problemCard}>
            <span className={styles.problemNumber}>02</span>
            <h3 className={styles.problemTitle}>Slow Handoff</h3>
            <p className={styles.problemText}>
              Developers had to reverse-engineer spacing, colors, and states from static
              mockups every time.
            </p>
          </div>
          <div className={styles.problemCard}>
            <span className={styles.problemNumber}>03</span>
            <h3 className={styles.problemTitle}>Hard to Scale</h3>
            <p className={styles.problemText}>
              Adding new features meant recreating patterns from scratch instead of reusing
              proven components.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* ── 3. System Principles ── */}
      <ContentSection>
        <SectionHeader
          label="Foundation"
          title="System Principles"
          description="Four principles guide every decision in the system — from token naming to component API design."
        />
        <div className={styles.principleGrid}>
          {PRINCIPLES.map((p) => (
            <div key={p.title} className={styles.principleCard}>
              <div className={styles.principleIcon}>
                {PRINCIPLE_ICONS[p.icon]}
              </div>
              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleText}>{p.text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* ── 4. Token Foundation ── */}
      <ContentSection alternate>
        <SectionHeader
          label="Tokens"
          title="Token Foundation"
          description="Every visual value in the system is a registered token. Colors, typography, spacing, and radius are never hardcoded — they flow from a single source of truth."
        />

        {/* Color */}
        <div className={styles.tokenGroup}>
          <h3 className={styles.tokenGroupTitle}>Color</h3>
          {COLOR_PALETTE.map((palette) => (
            <div key={palette.name} className={styles.colorRow}>
              <span className={styles.colorRowLabel}>{palette.name}</span>
              <div className={styles.colorSwatches}>
                {palette.shades.map((shade) => (
                  <div
                    key={shade.level}
                    className={styles.colorSwatch}
                    style={{ backgroundColor: shade.hex }}
                  >
                    <span
                      className={styles.colorSwatchLabel}
                      style={{ color: shade.light ? "#616161" : "#FAFAFA" }}
                    >
                      {shade.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Typography */}
        <div className={styles.tokenGroup}>
          <h3 className={styles.tokenGroupTitle}>Typography</h3>
          <div className={styles.typeScale}>
            {TYPOGRAPHY_SCALE.map((t) => (
              <div key={t.name} className={styles.typeRow}>
                <span className={styles.typeRowName}>--{t.variable}</span>
                <span
                  className={styles.typeRowSample}
                  style={{
                    fontSize: t.size,
                    fontWeight: Number(t.weight),
                    lineHeight: t.lineHeight,
                  }}
                >
                  {t.name}
                </span>
                <span className={styles.typeRowMeta}>
                  {t.size} / {t.weight} / {t.lineHeight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div className={styles.tokenGroup}>
          <h3 className={styles.tokenGroupTitle}>Spacing</h3>
          <div className={styles.spacingScale}>
            {SPACING_TOKENS.map((s) => (
              <div key={s.name} className={styles.spacingRow}>
                <span className={styles.spacingLabel}>--{s.name}</span>
                <div className={styles.spacingBar} style={{ width: s.px * 8 }} />
                <span className={styles.spacingValue}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Radius */}
        <div className={styles.tokenGroup}>
          <h3 className={styles.tokenGroupTitle}>Radius</h3>
          <div className={styles.radiusRow}>
            {RADIUS_TOKENS.map((r) => (
              <div key={r.name} className={styles.radiusItem}>
                <div
                  className={styles.radiusShape}
                  style={{ borderRadius: r.value }}
                />
                <span className={styles.radiusLabel}>--{r.name}</span>
                <span className={styles.radiusValue}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* ── 5. Component Architecture ── */}
      <ContentSection>
        <SectionHeader
          label="Structure"
          title="Component Architecture"
          description="Components are designed with React-style thinking — every visual variation is expressed through typed props, not ad-hoc overrides."
        />
        <div className={styles.archContent}>
          <div className={styles.archDiagram}>
            <div>
              <span className={styles.archKeyword}>{"<Button"}</span>
              {"\n"}
              {"  "}
              <span className={styles.archType}>type</span>
              {"="}
              <span className={styles.archString}>{'"primary"'}</span>
              {"\n"}
              {"  "}
              <span className={styles.archType}>size</span>
              {"="}
              <span className={styles.archString}>{'"medium"'}</span>
              {"\n"}
              {"  "}
              <span className={styles.archType}>state</span>
              {"="}
              <span className={styles.archString}>{'"default"'}</span>
              {"\n"}
              {"  "}
              <span className={styles.archType}>icon</span>
              {"="}
              <span className={styles.archString}>{"{false}"}</span>
              {"\n"}
              <span className={styles.archKeyword}>{"/>"}</span>
            </div>
          </div>
          <div className={styles.archExplanation}>
            <div className={styles.archItem}>
              <h4 className={styles.archItemTitle}>Variants as Props</h4>
              <p className={styles.archItemText}>
                Each Figma variant maps to a typed prop. Primary and Secondary are{" "}
                <code>type</code> values, not separate components.
              </p>
            </div>
            <div className={styles.archItem}>
              <h4 className={styles.archItemTitle}>Size Scale</h4>
              <p className={styles.archItemText}>
                Five size options from Large (48px) to 2xSmall (24px) — each with
                corresponding padding, font size, and minimum width.
              </p>
            </div>
            <div className={styles.archItem}>
              <h4 className={styles.archItemTitle}>State Management</h4>
              <p className={styles.archItemText}>
                Default, Hover, Clicked, and Disabled states are all defined in Figma and
                translate to CSS pseudo-classes and the disabled attribute.
              </p>
            </div>
            <div className={styles.archItem}>
              <h4 className={styles.archItemTitle}>Composable Icons</h4>
              <p className={styles.archItemText}>
                The icon prop adds a leading icon with a 4px gap — no layout changes needed.
                Icon-only buttons use the separate Tertiary type.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ── 6. Component Showcase — Button ── */}
      <ContentSection alternate>
        <SectionHeader
          label="Showcase"
          title="Button Component"
          description="The Button is the most fundamental interactive component. Every variant, size, and state is registered in Figma and maps directly to code."
        />

        {/* Variants */}
        <div className={styles.showcaseGroup}>
          <h3 className={styles.showcaseSubtitle}>Variants</h3>
          <p className={styles.showcaseNote}>
            Three main types serve the visual hierarchy: Primary for key actions, Secondary
            for supporting actions, and Tertiary for icon-only triggers.
          </p>
          <div className={styles.showcasePanel}>
            <div className={styles.showcaseRow}>
              <span className={styles.showcaseRowLabel}>Primary</span>
              <div className={styles.showcaseRowButtons}>
                <DemoButton variant="primary" label="Button" />
                <DemoButton variant="primary" label="Button" icon />
              </div>
            </div>
            <div className={styles.showcaseRow}>
              <span className={styles.showcaseRowLabel}>Secondary</span>
              <div className={styles.showcaseRowButtons}>
                <DemoButton variant="secondary" label="Button" />
                <DemoButton variant="secondary" label="Button" icon />
              </div>
            </div>
            <div className={styles.showcaseRow}>
              <span className={styles.showcaseRowLabel}>Tertiary</span>
              <div className={styles.showcaseRowButtons}>
                <DemoIconButton variant="primary" />
                <DemoIconButton variant="secondary" />
                <DemoIconButton variant="tertiary" />
              </div>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className={styles.showcaseGroup}>
          <h3 className={styles.showcaseSubtitle}>Sizes</h3>
          <p className={styles.showcaseNote}>
            Five sizes cover all contexts — from prominent page actions (Large: 48px) to
            compact inline triggers (2xSmall: 24px).
          </p>
          <div className={styles.showcasePanel}>
            <div className={styles.sizeCompare}>
              {BUTTON_SIZES.map((s) => (
                <div key={s.key} className={styles.sizeItem}>
                  <DemoButton variant="primary" size={s.key} label="Button" />
                  <span className={styles.sizeLabel}>
                    {s.name} · {s.height}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* States */}
        <div className={styles.showcaseGroup}>
          <h3 className={styles.showcaseSubtitle}>States</h3>
          <p className={styles.showcaseNote}>
            Four interaction states are defined for every button variant. Hover and Clicked
            use darker shades from the same palette.
          </p>
          <div className={styles.showcasePanel}>
            <div className={styles.showcaseRow}>
              <span className={styles.showcaseRowLabel}>Primary</span>
              <div className={styles.showcaseRowButtons}>
                <DemoButton variant="primary" label="Default" />
                <DemoButton variant="primary" label="Disabled" disabled />
              </div>
            </div>
            <div className={styles.showcaseRow}>
              <span className={styles.showcaseRowLabel}>Secondary</span>
              <div className={styles.showcaseRowButtons}>
                <DemoButton variant="secondary" label="Default" />
                <DemoButton variant="secondary" label="Disabled" disabled />
              </div>
            </div>
          </div>
        </div>

        {/* Property Tables */}
        <div className={styles.showcaseGroup}>
          <h3 className={styles.showcaseSubtitle}>Primary & Secondary — Properties</h3>
          <table className={styles.propTable}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Values</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              {BUTTON_PROPERTIES.map((p) => (
                <tr key={p.prop}>
                  <td>{p.prop}</td>
                  <td>{p.values}</td>
                  <td>
                    <span className={styles.propDefault}>{p.defaultVal}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.showcaseGroup}>
          <h3 className={styles.showcaseSubtitle}>Icon Button — Properties</h3>
          <table className={styles.propTable}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Values</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              {ICON_BUTTON_PROPERTIES.map((p) => (
                <tr key={p.prop}>
                  <td>{p.prop}</td>
                  <td>{p.values}</td>
                  <td>
                    <span className={styles.propDefault}>{p.defaultVal}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* ── 7. Design-to-Development Workflow ── */}
      <ContentSection>
        <SectionHeader
          label="Process"
          title="Design-to-Development"
          description="The system connects Figma design decisions to React implementation through a clear four-step workflow."
        />
        <div className={styles.workflowSteps}>
          {WORKFLOW_STEPS.map((step, i) => (
            <div key={step.title} className={styles.workflowStep}>
              <div className={styles.workflowStepNumber}>{i + 1}</div>
              <h3 className={styles.workflowStepTitle}>{step.title}</h3>
              <p className={styles.workflowStepText}>{step.text}</p>
              <div className={styles.workflowStepCode}>{step.code}</div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* ── 8. Outcome / Impact ── */}
      <ContentSection alternate>
        <SectionHeader
          label="Result"
          title="Outcome"
          description="The design system transformed how the team builds and maintains the product."
        />
        <StatGrid items={IMPACTS} />
      </ContentSection>

      {/* ── 9. Reflection ── */}
      <ContentSection>
        <SectionHeader label="Reflection" title="What I Learned" />
        <div className={styles.reflectionContent}>
          <p className={styles.reflectionText}>
            <span className={styles.reflectionHighlight}>
              A design system is not a component library — it is a shared language.
            </span>{" "}
            Building NL Wind taught me that the real value of a system is not in the
            components themselves, but in the agreements they encode: what sizes exist, how
            states behave, where tokens come from.
          </p>
          <p className={styles.reflectionText}>
            Structuring every component around typed props, explicit states, and registered
            tokens forced me to think like both a designer and a developer. The result is a
            system where every Figma variant has a direct counterpart in code — no ambiguity,
            no re-interpretation.
          </p>
          <p className={styles.reflectionText}>
            <span className={styles.reflectionHighlight}>
              Systems thinking is product thinking.
            </span>{" "}
            When the foundation is solid — consistent tokens, clear component APIs,
            documented states — the entire team moves faster. Designers compose instead of
            redrawing. Developers implement instead of guessing. The product stays coherent
            as it grows.
          </p>
        </div>
      </ContentSection>
    </div>
  );
}
