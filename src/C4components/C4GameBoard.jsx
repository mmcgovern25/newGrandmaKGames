import React from 'react';

// Import your images
import { rchip, ychip } from '../assets'; // Adjust the path as needed

const SYMBOL_IMAGES = {
  'X': rchip,
  'O': ychip
};

export default function c4Gameboard({ onSelectSquare, board }) {
  return (
    <ol className="flex flex-col justify-center gap-5">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex justify-center gap-5">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(colIndex)}
                  disabled={playerSymbol !== null}
                  className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] bg-[#aca788]
                  text-[#3f3b00] flex items-center justify-center cursor-pointer rounded-full p-0"
                >
                  {playerSymbol ? (
                    <img
                      src={SYMBOL_IMAGES[playerSymbol]} // Use the image corresponding to the symbol
                      alt={playerSymbol}
                      className="w-full h-full object-contain"
                    />
                  ) : null}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
