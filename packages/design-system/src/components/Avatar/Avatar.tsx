"use client";

import styles from "./Avatar.module.css";

/* ── Types ── */

type AvatarSize = "large" | "medium" | "small" | "xsmall";
type AvatarColor = "blue" | "green" | "yellow" | "red" | "gray";
type AvatarShape = "square" | "circle";

/* ── Pencil Icon SVG ── */

function PencilIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 1.5L10.5 3.5L3.5 10.5H1.5V8.5L8.5 1.5Z"
        stroke="#616161"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Class Maps ── */

const SIZE_CLASS: Record<AvatarSize, string> = {
  large: styles.sizeLarge,
  medium: styles.sizeMedium,
  small: styles.sizeSmall,
  xsmall: styles.sizeXsmall,
};

const SHAPE_CLASS: Record<AvatarShape, string> = {
  square: styles.shapeSquare,
  circle: styles.shapeCircle,
};

const BG_CLASS: Record<AvatarColor, string> = {
  blue: styles.bgBlue,
  green: styles.bgGreen,
  yellow: styles.bgYellow,
  red: styles.bgRed,
  gray: styles.bgGray,
};

const TEXT_CLASS: Record<AvatarColor, string> = {
  blue: styles.textBlue,
  green: styles.textGreen,
  yellow: styles.textYellow,
  red: styles.textRed,
  gray: styles.textGray,
};

const LABEL_SIZE_CLASS: Record<AvatarSize, string> = {
  large: styles.labelLarge,
  medium: styles.labelMedium,
  small: styles.labelSmall,
  xsmall: styles.labelXsmall,
};

const EDIT_ICON_SIZE_CLASS: Record<AvatarSize, string> = {
  large: styles.editIconLarge,
  medium: styles.editIconMedium,
  small: styles.editIconSmall,
  xsmall: styles.editIconXsmall,
};

const PENCIL_ICON_SIZE: Record<AvatarSize, number> = {
  large: 10,
  medium: 9,
  small: 8,
  xsmall: 7,
};

/* ── Avatar Component ── */

interface AvatarProps {
  size?: AvatarSize;
  color?: AvatarColor;
  shape?: AvatarShape;
  letter?: string;
  label?: string;
  editable?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function Avatar({
  size = "large",
  color = "blue",
  shape = "square",
  letter = "A",
  label,
  editable = false,
  disabled = false,
  className,
}: AvatarProps) {
  const avatarClasses = [
    styles.avatar,
    SIZE_CLASS[size],
    SHAPE_CLASS[shape],
    BG_CLASS[color],
    TEXT_CLASS[color],
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const avatarElement = (
    <span className={avatarClasses}>{letter}</span>
  );

  const wrappedAvatar = editable ? (
    <span className={styles.editableWrapper}>
      {avatarElement}
      <span className={[styles.editIcon, EDIT_ICON_SIZE_CLASS[size]].join(" ")}>
        <PencilIcon size={PENCIL_ICON_SIZE[size]} />
      </span>
    </span>
  ) : (
    avatarElement
  );

  if (label) {
    const wrapperClasses = [
      styles.withText,
      disabled ? styles.disabled : "",
    ]
      .filter(Boolean)
      .join(" ");

    const labelClasses = [styles.label, LABEL_SIZE_CLASS[size]].join(" ");

    return (
      <span className={wrapperClasses}>
        {editable ? (
          <span className={styles.editableWrapper}>
            <span className={avatarClasses}>{letter}</span>
            <span className={[styles.editIcon, EDIT_ICON_SIZE_CLASS[size]].join(" ")}>
              <PencilIcon size={PENCIL_ICON_SIZE[size]} />
            </span>
          </span>
        ) : (
          <span className={avatarClasses}>{letter}</span>
        )}
        <span className={labelClasses}>{label}</span>
      </span>
    );
  }

  return wrappedAvatar;
}
