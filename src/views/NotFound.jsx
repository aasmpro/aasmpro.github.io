import React from "react";
import { Link } from "react-router-dom";

import { Char, getCharsMatrix } from "../components/Char";

let charsMatrix = getCharsMatrix(7, 9);

charsMatrix[2][3] = <Char value="4" />;
charsMatrix[2][4] = <Char value="0" />;
charsMatrix[2][5] = <Char value="4" />;

charsMatrix[3][3] = <Char value="N" />;
charsMatrix[3][4] = <Char value="O" />;
charsMatrix[3][5] = <Char value="T" />;

charsMatrix[4][2] = <Char value="F" />;
charsMatrix[4][3] = <Char value="O" />;
charsMatrix[4][4] = <Char value="U" />;
charsMatrix[4][5] = <Char value="N" />;
charsMatrix[4][6] = <Char value="D" />;

export const NotFound = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center">
      <Link to="/" title="Let's Go Home!">
        <div className="flex-col justify-center items-center">
          {charsMatrix.map((line) => (
            <div>{line.map((char) => char)}</div>
          ))}
        </div>
      </Link>
    </div>
  );
};
