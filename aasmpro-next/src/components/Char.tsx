"use client";

import React, { useEffect, useState } from "react";
import { randomChar } from "@/utils/randomChar";

export const ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export interface CharProps {
  value?: string;
}

export function Char({ value }: CharProps) {
  const [char, setChar] = useState(randomChar);
  const [color, setColor] = useState<string>("text-dark-0");

  useEffect(() => {
    if (value) return;
    const id = setInterval(() => setChar(randomChar), Math.floor(Math.random() * 30000) + 2000);
    return () => clearInterval(id);
  }, [value]);

  useEffect(() => {
    if (value || (char !== "0" && char !== "1")) return;
    setColor((c) => (c === "text-red-0" ? "text-dark-0" : "text-red-0"));
  }, [char, value]);

  if (value) {
    if (value === "↓") {
      return (
        <a href="#info" title="scroll down!">
          <span className="select-none px-2 text-2xl font-bold text-light-0 mr-3.5 relative">
            <span className="animate-bounce absolute mt-1">{value}</span>
          </span>
        </a>
      );
    }
    return (
      <span className="select-none px-2 text-2xl font-bold text-light-0">
        {value}
      </span>
    );
  }

  return (
    <span
      className={`select-none px-2 text-2xl font-bold ${color}`}
      onClick={() => {
        if (char === "0" || char === "1") {
          setColor((c) => (c === "text-red-0" ? "text-dark-0" : "text-red-0"));
        }
      }}
    >
      {char}
    </span>
  );
}

export function getCharsMatrix(rows: number, columns: number): React.ReactElement[][] {
  const matrix: React.ReactElement[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: React.ReactElement[] = [];
    for (let c = 0; c < columns; c++) {
      row.push(<Char key={`${r}-${c}`} />);
    }
    matrix.push(row);
  }
  return matrix;
}
