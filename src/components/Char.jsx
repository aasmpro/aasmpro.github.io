import React, { useState, useEffect } from "react";
import { randomChar } from "../utils/randomChar";

export const Char = (props) => {
  const [color, setColor] = useState("text-dark-0");
  const [char, setChar] = useState(randomChar());

  const changeColor = () => {
    if (char === "0" || char === "1") {
      if (color === "text-red-0") {
        setColor("text-dark-0");
      } else {
        setColor("text-red-0");
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setChar((char) => (char !== "0" && char !== "1" ? randomChar() : char));
    }, Math.floor(Math.random() * 30000) + 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  if (props.value) {
    if (props.value === "↓") {
      return (
        <a href="#info" title="scroll down!">
          <span className="select-none px-2 text-2xl font-bold text-light-0 mr-3.5">
            <span className="animate-bounce absolute mt-1">{props.value}</span>
          </span>
        </a>
      );
    }
    return (
      <span className="select-none px-2 text-2xl font-bold text-light-0">
        {props.value}
      </span>
    );
  }

  return (
    <span
      className={`select-none px-2 text-2xl font-bold ${color}`}
      onClick={changeColor}>
      {char}
    </span>
  );
};

export const getCharsMatrix = (row, col) => {
  let charsMatrix = [];
  for (var i = 0; i < row; i++) {
    let _row = [];
    for (var j = 0; j < col; j++) {
      _row.push(<Char />);
    }
    charsMatrix.push(_row);
  }
  return charsMatrix;
};

export const setCharsMatrix = (
  charsMatrix,
  values,
  from_row,
  to_row,
  from_col,
  to_col
) => {
  for (var i = from_row; i < to_row; i++) {
    for (var j = from_col; j < to_col; j++) {
      let char = null;
      try {
        char = values[i - from_row][j - from_col];
      } catch {}
      try {
        charsMatrix[i][j] =
          char && char !== " " ? <Char value={char} /> : <Char />;
      } catch {}
    }
  }
  return charsMatrix;
};
