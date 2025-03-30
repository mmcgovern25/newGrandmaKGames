export const C4_WINNING_COMBINATIONS = [];

// Horizontal combinations
for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 4; col++) { // Only go to col 3 since 4 in a row can't start past col 3
    C4_WINNING_COMBINATIONS.push([
      { row: row, column: col },
      { row: row, column: col + 1 },
      { row: row, column: col + 2 },
      { row: row, column: col + 3 }
    ]);
  }
}

// Vertical combinations
for (let row = 0; row < 3; row++) { // Only go to row 2 since 4 in a row can't start past row 2
  for (let col = 0; col < 7; col++) {
    C4_WINNING_COMBINATIONS.push([
      { row: row, column: col },
      { row: row + 1, column: col },
      { row: row + 2, column: col },
      { row: row + 3, column: col }
    ]);
  }
}

// Diagonal (Bottom-Left to Top-Right) combinations
for (let row = 0; row < 3; row++) { // Only go to row 2 since diagonals can't start past row 2
  for (let col = 0; col < 4; col++) { // Only go to col 3 since diagonals can't start past col 3
    C4_WINNING_COMBINATIONS.push([
      { row: row, column: col },
      { row: row + 1, column: col + 1 },
      { row: row + 2, column: col + 2 },
      { row: row + 3, column: col + 3 }
    ]);
  }
}

// Diagonal (Top-Left to Bottom-Right) combinations
for (let row = 3; row < 6; row++) { // Start from row 3 since diagonals need space above to form
  for (let col = 0; col < 4; col++) { // Only go to col 3 since diagonals can't start past col 3
    C4_WINNING_COMBINATIONS.push([
      { row: row, column: col },
      { row: row - 1, column: col + 1 },
      { row: row - 2, column: col + 2 },
      { row: row - 3, column: col + 3 }
    ]);
  }
}
