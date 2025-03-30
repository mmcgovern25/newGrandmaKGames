import React, { useState } from 'react';
import Player from '../TTTcomponents/Player';
import Log from '../TTTcomponents/Log';
import GameOver from '../TTTcomponents/GameOver';
import { C4_WINNING_COMBINATIONS } from '../C4components/C4_winning_combinations';
import { blueo, redx } from '../assets';
import C4Gameboard from '../C4components/C4GameBoard';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

const initialGameBoard = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

function Connect4() {
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  });

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;

for (const combination of C4_WINNING_COMBINATIONS) {
  const firstSquareSymbol = gameBoard[combination[0].row]?.[combination[0].column];
  const secondSquareSymbol = gameBoard[combination[1].row]?.[combination[1].column];
  const thirdSquareSymbol = gameBoard[combination[2].row]?.[combination[2].column];
  const fourthSquareSymbol = gameBoard[combination[3].row]?.[combination[3].column];

  if (
    firstSquareSymbol &&
    firstSquareSymbol === secondSquareSymbol &&
    firstSquareSymbol === thirdSquareSymbol &&
    firstSquareSymbol === fourthSquareSymbol
  ) {
    winner = players[firstSquareSymbol];
    break; // Exit loop once a winner is found
  }
}



  const hasDraw = gameTurns.length === 42 && !winner;

  function handleSelectSquare(colIndex) {
    // Find the lowest available row in the selected column
    let availableRow = null;
    for (let row = gameBoard.length - 1; row >= 0; row--) {
      if (gameBoard[row][colIndex] === null) {
        availableRow = row;
        break;
      }
    }

    // If there is an available row, make the move
    if (availableRow !== null) {
      setGameTurns(prevTurns => {
        const currentPlayer = deriveActivePlayer(prevTurns);
        const updatedTurns = [
          { square: { row: availableRow, col: colIndex }, player: currentPlayer },
          ...prevTurns,
        ];
        return updatedTurns;
      });
    }
  }


  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }


  return (
    <main className="flex flex-col justify-center items-center px-4">
      <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-8 lg:mb-2 bruno-ace-sc-regular">Connect 4</div>

      <div
        className="relative pb-12 max-w-[550px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[650px] w-full bg-gradient-to-b from-green-500 to-green-700 lg:pt-[15px] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-xl flex flex-col items-center"
      >
        <ol id="players" className="highlight-player flex justify-center items-center gap-4 mb-6">
          <Player
            className="player-name"
            initialName="Player 1"
            symbol={redx}
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            className="player-name"
            initialName="Player 2"
            symbol={blueo}
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        <C4Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default Connect4;
