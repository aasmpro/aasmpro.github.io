import React, { useState, useEffect } from "react";

import { Char, getCharsMatrix, setCharsMatrix } from "./Char";

let charsMatrix = getCharsMatrix(31, 61);

charsMatrix[15][26] = <Char value="I" />;
charsMatrix[15][27] = <Char value="'" />;
charsMatrix[15][28] = <Char value="M" />;

charsMatrix[22][30] = <Char value="↓" />;

const values = [
  ["ABOLFAZL", ""],
  ["A WEB", "DEVELOPER"],
  ["A TEAM", "  LEADER"],
  ["A CHESS", "  LOVER"],
  ["A PYTHON-", "  ISTA"],
  ["A GAMER", ""],
  ["A FOOD", "  LOVER"],
];

const length = values.length;

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index < length - 1 ? index + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-screen overflow-hidden flex justify-center items-center">
      <div className="flex-col justify-center items-center">
        {setCharsMatrix(charsMatrix, values[index], 16, 18, 26, 35).map(
          (line) => (
            <div className="whitespace-nowrap">{line.map((char) => char)}</div>
          )
        )}
      </div>
    </div>
  );
};
