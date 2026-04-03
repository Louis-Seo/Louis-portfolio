"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import styles from "./Slider.module.css";

type SliderType = "single" | "range";

interface SliderProps {
  type?: SliderType;
  value?: number | [number, number];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number | [number, number]) => void;
  className?: string;
}

export default function Slider({
  type = "single",
  value: controlledValue,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onChange,
  className,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<null | "single" | "start" | "end">(null);

  const defaultVal = type === "range" ? [25, 75] as [number, number] : 0;
  const [internalValue, setInternalValue] = useState<number | [number, number]>(defaultVal);

  const value = controlledValue ?? internalValue;
  const valueRef = useRef(value);
  valueRef.current = value;

  const getPercent = useCallback(
    (val: number) => {
      if (max === min) return 0;
      return ((val - min) / (max - min)) * 100;
    },
    [min, max]
  );

  const snapToStep = useCallback(
    (val: number) => {
      const stepped = Math.round((val - min) / step) * step + min;
      return Math.min(max, Math.max(min, stepped));
    },
    [min, max, step]
  );

  const getValueFromPosition = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return min;
      const rect = trackRef.current.getBoundingClientRect();
      const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      return snapToStep(min + percent * (max - min));
    },
    [min, max, snapToStep]
  );

  const updateValue = useCallback(
    (newVal: number | [number, number]) => {
      setInternalValue(newVal);
      onChange?.(newVal);
    },
    [onChange]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, handleId: "single" | "start" | "end") => {
      if (disabled) return;
      e.preventDefault();
      e.stopPropagation();
      setDragging(handleId);
    },
    [disabled]
  );

  const handleTrackClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;
      const newVal = getValueFromPosition(e.clientX);

      if (type === "single") {
        updateValue(newVal);
      } else {
        const [start, end] = valueRef.current as [number, number];
        const distToStart = Math.abs(newVal - start);
        const distToEnd = Math.abs(newVal - end);
        if (distToStart <= distToEnd) {
          updateValue([Math.min(newVal, end), end]);
        } else {
          updateValue([start, Math.max(newVal, start)]);
        }
      }
    },
    [disabled, type, getValueFromPosition, updateValue]
  );

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newVal = getValueFromPosition(e.clientX);

      if (type === "single") {
        updateValue(newVal);
      } else {
        const [start, end] = valueRef.current as [number, number];
        if (dragging === "start") {
          updateValue([Math.min(newVal, end), end]);
        } else {
          updateValue([start, Math.max(newVal, start)]);
        }
      }
    };

    const handleMouseUp = () => setDragging(null);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, type, getValueFromPosition, updateValue]);

  // Compute positions
  let rangeLeft: number;
  let rangeWidth: number;

  if (type === "range") {
    const [s, e] = value as [number, number];
    rangeLeft = getPercent(s);
    rangeWidth = getPercent(e) - rangeLeft;
  } else {
    rangeLeft = 0;
    rangeWidth = getPercent(value as number);
  }

  const containerClasses = [
    styles.slider,
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      <div
        className={styles.track}
        ref={trackRef}
        onClick={handleTrackClick}
      >
        <div
          className={styles.range}
          style={{ left: `${rangeLeft}%`, width: `${rangeWidth}%` }}
        />
      </div>

      {type === "range" && (
        <div
          className={`${styles.handle} ${dragging === "start" ? styles.handlePressed : ""}`}
          style={{ left: `${getPercent((value as [number, number])[0])}%` }}
          onMouseDown={(e) => handleMouseDown(e, "start")}
        />
      )}

      <div
        className={`${styles.handle} ${
          dragging === (type === "single" ? "single" : "end")
            ? styles.handlePressed
            : ""
        }`}
        style={{
          left: `${
            type === "range"
              ? getPercent((value as [number, number])[1])
              : getPercent(value as number)
          }%`,
        }}
        onMouseDown={(e) =>
          handleMouseDown(e, type === "single" ? "single" : "end")
        }
      />
    </div>
  );
}
