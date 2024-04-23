import React, { useState, useEffect } from 'react';
import { randomChar } from 'utils/randomChar';

export function Char({ value }) {
  const [color, setColor] = useState('dark');
  const [char, setChar] = useState(randomChar());

  const changeColor = () => {
    if (value) return;
    if (char === '0' || char === '1') {
      setColor(color === 'red' ? 'dark' : 'red');
    }
  };

  const classes = `select-none px-2 text-2xl font-bold text-${value ? 'light' : color}-0`;

  useEffect(() => {
    const interval = setInterval(
      () => {
        setChar((currentChar) =>
          currentChar !== '0' && currentChar !== '1' ? randomChar() : currentChar
        );
      },
      Math.floor(Math.random() * 30_000) + 2000
    );
    return () => clearInterval(interval);
  }, []);

  if (value === '↓') {
    return (
      <a href='#info' title='Scroll Down!'>
        <span className={classes}>
          <span className='animate-bounce absolute mt-1 mr-3.5'>{value}</span>
        </span>
      </a>
    );
  }

  return (
    <button type='button' className={classes} onClick={changeColor}>
      {value || char}
    </button>
  );
}

export const getCharsMatrix = (row, col) => {
  const charsMatrix = [];
  for (let index = 0; index < row; index++) {
    const matrixRow = [];
    for (let insideIndex = 0; insideIndex < col; insideIndex++) {
      matrixRow.push(<Char />);
    }
    charsMatrix.push(matrixRow);
  }
  return charsMatrix;
};

export const setCharsMatrix = (charsMatrix, values, fromRow, toRow, fromCol, toCol) => {
  for (let index = fromRow; index < toRow; index++) {
    for (let insideIndex = fromCol; insideIndex < toCol; insideIndex++) {
      let char = null;
      try {
        char = values[index - fromRow][insideIndex - fromCol];
      } catch {}
      try {
        charsMatrix[index][insideIndex] =
          char && char !== ' ' ? <Char value={char} /> : <Char />;
      } catch {}
    }
  }
  return charsMatrix;
};
