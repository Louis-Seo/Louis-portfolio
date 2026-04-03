"use client";

import { useState, useRef, useCallback, type ReactNode } from "react";
import IconButton from "../IconButton/IconButton";
import styles from "./Input.module.css";

/* ── Inline SVG Icons ── */

function SearchIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Cancel circle icon — 18px viewBox for Large */
function CancelCircleIconLarge() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.90008 11.9167L9.00008 9.81666L11.1001 11.9167L11.9167 11.1L9.81675 8.99999L11.9167 6.89999L11.1001 6.08332L9.00008 8.18332L6.90008 6.08332L6.08341 6.89999L8.18341 8.99999L6.08341 11.1L6.90008 11.9167ZM9.00008 14.8333C8.19314 14.8333 7.4348 14.6802 6.72508 14.3739C6.01536 14.0677 5.398 13.6521 4.873 13.1271C4.348 12.6021 3.93237 11.9847 3.62612 11.275C3.31987 10.5653 3.16675 9.80693 3.16675 8.99999C3.16675 8.19305 3.31987 7.43471 3.62612 6.72499C3.93237 6.01527 4.348 5.39791 4.873 4.87291C5.398 4.34791 6.01536 3.93228 6.72508 3.62603C7.4348 3.31978 8.19314 3.16666 9.00008 3.16666C9.80703 3.16666 10.5654 3.31978 11.2751 3.62603C11.9848 3.93228 12.6022 4.34791 13.1272 4.87291C13.6522 5.39791 14.0678 6.01527 14.374 6.72499C14.6803 7.43471 14.8334 8.19305 14.8334 8.99999C14.8334 9.80693 14.6803 10.5653 14.374 11.275C14.0678 11.9847 13.6522 12.6021 13.1272 13.1271C12.6022 13.6521 11.9848 14.0677 11.2751 14.3739C10.5654 14.6802 9.80703 14.8333 9.00008 14.8333Z" fill="currentColor"/>
      <path d="M6.90008 11.9167L9.00008 9.81666L11.1001 11.9167L11.9167 11.1L9.81675 8.99999L11.9167 6.89999L11.1001 6.08332L9.00008 8.18332L6.90008 6.08332L6.08341 6.89999L8.18341 8.99999L6.08341 11.1L6.90008 11.9167Z" fill="white"/>
    </svg>
  );
}

/* Cancel circle icon — 16px viewBox for Medium / Small */
function CancelCircleIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.2 10.5L8 8.7L9.8 10.5L10.5 9.8L8.7 8L10.5 6.2L9.8 5.5L8 7.3L6.2 5.5L5.5 6.2L7.3 8L5.5 9.8L6.2 10.5ZM8 13C7.30833 13 6.65833 12.8687 6.05 12.6062C5.44167 12.3437 4.9125 11.9875 4.4625 11.5375C4.0125 11.0875 3.65625 10.5583 3.39375 9.95C3.13125 9.34167 3 8.69167 3 8C3 7.30833 3.13125 6.65833 3.39375 6.05C3.65625 5.44167 4.0125 4.9125 4.4625 4.4625C4.9125 4.0125 5.44167 3.65625 6.05 3.39375C6.65833 3.13125 7.30833 3 8 3C8.69167 3 9.34167 3.13125 9.95 3.39375C10.5583 3.65625 11.0875 4.0125 11.5375 4.4625C11.9875 4.9125 12.3437 5.44167 12.6062 6.05C12.8687 6.65833 13 7.30833 13 8C13 8.69167 12.8687 9.34167 12.6062 9.95C12.3437 10.5583 11.9875 11.0875 11.5375 11.5375C11.0875 11.9875 10.5583 12.3437 9.95 12.6062C9.34167 12.8687 8.69167 13 8 13Z" fill="currentColor"/>
      <path d="M6.2 10.5L8 8.7L9.8 10.5L10.5 9.8L8.7 8L10.5 6.2L9.8 5.5L8 7.3L6.2 5.5L5.5 6.2L7.3 8L5.5 9.8L6.2 10.5Z" fill="white"/>
    </svg>
  );
}

/* ── Types ── */

type InputType = "text" | "search" | "textWithIcon";
type InputSize = "large" | "medium" | "small";

interface InputProps {
  type?: InputType;
  size?: InputSize;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

/* ── Size Configs ── */

const SEARCH_ICON_SIZE: Record<InputSize, number> = {
  large: 18,
  medium: 16,
  small: 16,
};

const CLEAR_BUTTON_SIZE: Record<InputSize, "2xSmall" | "3xSmall"> = {
  large: "2xSmall",
  medium: "3xSmall",
  small: "3xSmall",
};

const SIZE_CLASS: Record<InputSize, string> = {
  large: styles.sizeLarge,
  medium: styles.sizeMedium,
  small: styles.sizeSmall,
};

const NATIVE_SIZE_CLASS: Record<InputSize, string> = {
  large: styles.nativeInputLarge,
  medium: styles.nativeInputMedium,
  small: styles.nativeInputSmall,
};

const ICON_SIZE_CLASS: Record<InputSize, string> = {
  large: styles.iconLeftLarge,
  medium: styles.iconLeftMedium,
  small: styles.iconLeftSmall,
};

/* ── Component ── */

export default function Input({
  type = "text",
  size = "medium",
  placeholder = "Enter the text",
  value,
  onChange,
  onClear,
  icon,
  disabled = false,
  className,
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = useCallback(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  const handleClear = useCallback(() => {
    onChange?.("");
    onClear?.();
    inputRef.current?.focus();
  }, [onChange, onClear]);

  const hasValue = !!value && value.length > 0;
  const showClear = hasValue && focused && !disabled;
  const showSearchIcon = type === "search";
  const showLeftIcon = type === "textWithIcon" && icon;

  const cancelIcon = size === "large"
    ? <CancelCircleIconLarge />
    : <CancelCircleIcon />;

  const containerClasses = [
    styles.input,
    SIZE_CLASS[size],
    focused && !disabled ? styles.focused : "",
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const nativeClasses = [styles.nativeInput, NATIVE_SIZE_CLASS[size]]
    .join(" ");

  return (
    <div className={containerClasses} onClick={handleContainerClick}>
      {/* Search icon */}
      {showSearchIcon && (
        <span className={`${styles.iconLeft} ${ICON_SIZE_CLASS[size]}`}>
          <SearchIcon size={SEARCH_ICON_SIZE[size]} />
        </span>
      )}

      {/* Left icon (textWithIcon type) */}
      {showLeftIcon && (
        <span className={`${styles.iconLeft} ${ICON_SIZE_CLASS[size]}`}>
          {icon}
        </span>
      )}

      {/* Native input */}
      <input
        ref={inputRef}
        className={nativeClasses}
        type="text"
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disabled={disabled}
      />

      {/* Cancel IconButton — all types, when focused + has value */}
      {showClear && (
        <IconButton
          className={size === "large" ? styles.cancelButtonLg : styles.cancelButtonSm}
          variant="tertiary"
          size={CLEAR_BUTTON_SIZE[size]}
          elevation="dp0"
          icon={cancelIcon}
          aria-label="Clear"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleClear}
        />
      )}
    </div>
  );
}
