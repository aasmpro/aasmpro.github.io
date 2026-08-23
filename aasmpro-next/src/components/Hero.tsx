"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Char, getCharsMatrix } from "@/components/Char";

// Target text values for the hero display.
const HOME_VALUES: string[][] = [
  ["R", "O", "S", "S"],
  ["A", "M", "R", "I"],
  ["I", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];

const RING_VALUES: string[][] = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["W", "R", "I", "T", "I", "N", "G"],
  ["", "", "", ""],
  ["", "", "", ""],
];

/**
 * Hero component.
 *
 * Original CRA bugs fixed:
 * - setCharsMatrix() was called during render (inside the function body), which
 *   triggered React state updates mid-render and caused an infinite loop because
 *   getCharsMatrix() returns a new random matrix each call.
 * - 1891 setInterval calls (one per Char) — now each Char manages its own
 *   interval internally, so the parent doesn't spawn thousands of timers.
 * - useEffect cleanup was missing for the reset interval.
 *
 * Here we generate random matrices once via getCharsMatrix and feed them to
 * <Char> instances. Each Char independently cycles random chars and snaps back
 * to its target when the target changes. The ring resets every 30s by swapping
 * to a fresh matrix, which causes each Char to snap its target back.
 */
export function Hero() {
  const [homeMatrix, setHomeMatrix] = useState<string[][]>(() =>
    getCharsMatrix(HOME_VALUES.length, HOME_VALUES[0].length)
  );
  const [ringMatrix, setRingMatrix] = useState<string[][]>(() =>
    getCharsMatrix(RING_VALUES.length, RING_VALUES[0].length)
  );

  // Refresh ring matrix every 30 seconds (mirrors the original intent).
  useEffect(() => {
    const id = setInterval(() => {
      setRingMatrix(getCharsMatrix(RING_VALUES.length, RING_VALUES[0].length));
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  // Number of columns is the row length.
  const homeColumns = HOME_VALUES[0].length;
  const ringColumns = RING_VALUES[0].length;

  return (
    <>
      <div>
        {homeMatrix.map((row, r) => (
          <div key={r} className="flex flex-row">
            {row.map((ch, c) => (
              <Char
                key={`home-${r}-${c}`}
                char={ch}
                id={r * homeColumns + c}
                delay={300}
                color="var(--color-light-0)"
              />
            ))}
          </div>
        ))}
      </div>
      <div>
        {ringMatrix.map((row, r) => (
          <div key={r} className="flex flex-row">
            {row.map((ch, c) => (
              <Char
                key={`ring-${r}-${c}`}
                char={ch}
                id={r * ringColumns + c}
                delay={300}
                color="var(--color-light-0)"
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
