import React from 'react';

export function DetailButton({ onClick, show }) {
  return (
    <button
      className={`px-3 py-0.5 rounded-full hover:text-light-0 transition duration-300 hover:bg-black hover:ring-2 cursor-pointer ${show ? 'bg-light-1 text-dark-0 hover:ring-light-1' : 'bg-dark-0 text-light-0 hover:ring-dark-0'}`}
      onClick={onClick}
      type='button'
    >
      Detail
    </button>
  );
}
