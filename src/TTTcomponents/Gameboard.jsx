import React from 'react';

// Import your images
import { blueo, redx } from '../assets'; // Adjust the path as needed
 // Adjust the path as needed

const SYMBOL_IMAGES = {
  'X': redx,
  'O': blueo
};

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol className="flex flex-col justify-center gap-8">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex justify-center gap-8">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                  className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-lg bg-[#aca788]
                  text-[#3f3b00] flex items-center justify-center cursor-pointer p-4"
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
