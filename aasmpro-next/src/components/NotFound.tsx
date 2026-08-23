"use client";

import React from "react";
import Link from "next/link";
import { Char, getCharsMatrix } from "@/components/Char";

export function NotFound() {
  const rows = 7;
  const columns = 32;
  const charsMatrix = getCharsMatrix(rows, columns);

  const homeMatrixFlat = React.useMemo(() => {
    const result: { char: string; id: number; delay: number; color: string }[][] = [];
    for (let r = 0; r < rows; r++) {
      const row: { char: string; id: number; delay: number; color: string }[] = [];
      for (let c = 0; c < columns; c++) {
        row.push({
          char: charsMatrix[r][c],
          id: r * columns + c,
          delay: 300,
          color: "var(--color-light-0)",
        });
      }
      result.push(row);
    }
    return result;
  }, [charsMatrix, rows, columns]);

  return (
    <>
      <div className="flex justify-center">
        {homeMatrixFlat.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row">
            {row.map((charObj) => (
              <Char
                key={charObj.id}
                char={charObj.char}
                id={charObj.id}
                delay={charObj.delay}
                color={charObj.color}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
