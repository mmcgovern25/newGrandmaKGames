import React from 'react';
 // Adjust the import path as needed

export default function Log({ turns }) {
 // Get the current theme from the context

  // Define text color based on the current theme


  return (
    <ol className={`max-w-[20rem] list-none my-8 p-0 text-center className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full bg-gradient-to-b from-green-500 to-green-700 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-xl flex flex-col items-center"`}>
      {turns.map((turn) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
          className="rounded-md animate-slide-in-from-left my-3"
        >
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
