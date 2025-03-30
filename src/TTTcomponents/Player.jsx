import React, { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (!isEditing) {
    onChangeName(symbol, playerName)
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={`${
      isActive ? 'border-4 border-[#adaa7ef7] animate-pulse' : 'border-transparent'
    } flex items-center rounded-full p-2`}>

      <span className="flex items-center justify-between border-2 border-transparent lg:p-2 rounded-full font-bold">
        <span className="flex items-center text-[10px text-white uppercase mx-0 p-2 rounded-full text-center flex-grow">
          {isEditing ? (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
              style={{ display: 'block', visibility: 'visible', color: '#4CAF50', backgroundColor: 'white' }}
              className="font-inherit text-[10px] w-20 border-none p-2 bg-white text-center rounded-full uppercase"
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
        </span>
        <span className="flex items-center ml-4">
          <img src={symbol} alt="Player Symbol" className="w-4 sm:w-8 h-4 sm:h-8 mt-1 object-contain" />
        </span>
        <button onClick={handleEditClick} className="w-12 text-white text-sm bg-transparent p-2 cursor-pointer hover:text-[#D3D3D3] transition-colors duration-200">
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </span>
    </li>
  );
}
