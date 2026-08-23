"use client";

import React, { useMemo } from "react";
import { Char, getCharsMatrix } from "@/components/Char";

export function NotFound() {
  const rows = 7;
  const columns = 32;
  const matrix = getCharsMatrix(rows, columns);

  return (
    <div className="flex justify-center">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.map((cell, cellIndex) => cell)}
        </div>
      ))}
    </div>
  );
}
