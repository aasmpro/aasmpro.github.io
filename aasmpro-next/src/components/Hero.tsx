"use client";

import React, { useEffect, useState } from "react";
import { Char, getCharsMatrix } from "./Char";

const MATRIX_ROWS = 31;
const MATRIX_COLS = 61;

const values = [
  ["   RO∙", "   ∙SS"],
  ["   WEB", "DEVELOPER"],
  ["  CHESS", "  LOVER"],
  [" PYTHON-", " ISTA"],
  ["  GAMER", ""],
  [" AASMPRO", "   TOO"],
];

function fillMatrix(
  matrix: React.ReactElement[][],
  values: string[],
  from_row: number,
  to_row: number,
  from_col: number,
  to_col: number
): React.ReactElement[][] {
  for (let i = from_row; i < to_row; i++) {
    for (let j = from_col; j < to_col; j++) {
      const ch = values[i - from_row]?.[j - from_col];
      matrix[i][j] = ch && ch !== " " ? <Char key={`${i}-${j}`} value={ch} /> : <Char key={`${i}-${j}`} />;
    }
  }
  return matrix;
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [matrix, setMatrix] = useState<React.ReactElement[][]>(() => {
    const m = getCharsMatrix(MATRIX_ROWS, MATRIX_COLS);
    m[15][29] = <Char key="15-29" value="I" />;
    m[15][30] = <Char key="15-30" value="'" />;
    m[15][31] = <Char key="15-31" value="M" />;
    m[22][30] = <Char key="22-30" value="↓" />;
    fillMatrix(m, values[0], 16, 18, 26, 35);
    return m;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i < values.length - 1 ? i + 1 : 0));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const m = getCharsMatrix(MATRIX_ROWS, MATRIX_COLS);
    m[15][29] = <Char key="15-29" value="I" />;
    m[15][30] = <Char key="15-30" value="'" />;
    m[15][31] = <Char key="15-31" value="M" />;
    m[22][30] = <Char key="22-30" value="↓" />;
    fillMatrix(m, values[index], 16, 18, 26, 35);
    setMatrix(m);
  }, [index]);

  return (
    <div className="h-screen overflow-hidden flex justify-center items-center">
      <div className="flex-col justify-center items-center">
        {matrix.map((row, r) => (
          <div key={r} className="whitespace-nowrap">
            {row.map((cell, c) => cell)}
          </div>
        ))}
      </div>
    </div>
  );
}
