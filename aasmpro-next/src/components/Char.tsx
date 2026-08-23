"use client";

import React, { useEffect } from "react";
import { randomChar } from "@/utils/randomChar";

const ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

interface CharProps {
  char: string;
  id: number;
  delay: number;
  color: string;
}

export function Char({ char, id, delay, color }: CharProps) {
  const [text, setText] = React.useState(char);
  const [opacity, setOpacity] = React.useState(1);
  const [currentColor, setCurrentColor] = React.useState(color);

  useEffect(() => {
    const interval = setInterval(() => {
      if (text !== char) {
        setOpacity(0);
        setTimeout(() => {
          setText(char);
          setCurrentColor(color);
          setOpacity(1);
        }, delay);
      } else {
        setText(randomChar());
      }
    }, delay);

    return () => clearInterval(interval);
  }, [char, id, delay, color]);

  return (
    <span
      className="inline-block"
      style={{
        opacity: opacity,
        color: currentColor,
        transition: "opacity 0.2s",
        WebkitTransition: "opacity 0.2s",
        MozTransition: "opacity 0.2s",
        msTransition: "opacity 0.2s",
        OTransition: "opacity 0.2s",
      }}
    >
      {text}
    </span>
  );
}

/**
 * Creates a 2D matrix (rows x cols) filled with random characters.
 * Pure utility — no side effects, no React state.
 */
export function getCharsMatrix(rows: number, columns: number): string[][] {
  const matrix: string[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: string[] = [];
    for (let c = 0; c < columns; c++) {
      row.push(randomChar());
    }
    matrix.push(row);
  }
  return matrix;
}
