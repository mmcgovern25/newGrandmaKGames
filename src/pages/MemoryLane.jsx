import React, { useState } from 'react';
import Cardflip from '../memcomponents/Cardflip';
import { exampleImg, exampleImg2, memory, blueo, tiktaktoe, greencheck, redx } from '../assets';

// Sample list of images and descriptions
const images = [
  { front: exampleImg, backText: 'This is the description for Sky.' },
  { front: exampleImg2, backText: 'This is the description for Mountain.' },
  { front: memory, backText: 'This is the description for memory.' },
  { front: blueo, backText: 'This is the description for blueo.' },
  { front: tiktaktoe, backText: 'This is the description for ttt.' },
  // Add more images as needed
];

const MemoryLane = () => {
  const [inputValue, setInputValue] = useState('');
  const [flipCard, setFlipCard] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0); // Track the number of correct answers
  const [gameOver, setGameOver] = useState(false); // State to track if the game is over
  const [modalMessage, setModalMessage] = useState(''); // State to store the modal message

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setFlipCard(!flipCard);
  };

  const handleCorrect = () => {
    setFlipCard(false); // Hide the card before showing the next one
    setInputValue(''); // Clear the input field
    setCorrectCount((prevCount) => prevCount + 1); // Increment the correct count

    // Show next image after flip animation completes
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        if (nextIndex === 0) {
          setGameOver(true); // End the game if all images have been shown
        }
        return nextIndex;
      });
      setFlipCard(true); // Show the new card
    }, 600); // Delay to match flip animation duration
  };

  const handleIncorrect = () => {
    setFlipCard(false); // Hide the card before showing the next one
    setInputValue(''); // Clear the input field
    setIncorrectCount((prevCount) => prevCount + 1); // Increment the incorrect count

    // Show next image after flip animation completes
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        if (nextIndex === 0) {
          setGameOver(true); // End the game if all images have been shown
        }
        return nextIndex;
      });
      setFlipCard(true); // Show the new card
    }, 600); // Delay to match flip animation duration
  };

  const handleCloseModal = () => {
    setGameOver(false); // Close the modal and restart the game if needed
    setCurrentImageIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setModalMessage(''); // Reset the modal message
  };

  const totalCount = images.length; // Total number of images

  // Determine the message based on the user's performance
  React.useEffect(() => {
    if (gameOver) {
      const correctPercentage = (correctCount / totalCount) * 100;
      let message = '';

      if (correctCount === totalCount) {
        message = 'Flawless victory. You are the undisputed CHAMPEEN!';
      } else if (correctPercentage > 75) {
        message = `Look at you go, you´re almost a Champeen! You got ${correctCount} out of ${totalCount} right.`;
      } else if (correctPercentage < 50) {
        message = `You clearly aren’t a Champeen. You only got ${correctCount} out of ${totalCount} right.`;
      } else {
        message = `You got ${correctCount} out of ${totalCount} right.`;
      }

      setModalMessage(message);
    }
  }, [gameOver, correctCount, totalCount]);

  return (
    <div className="mt-8 flex flex-col items-center px-4">
      <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl bruno-ace-sc-regular mb-4">
        Memory Lane
      </div>

      <div className="w-full max-w-lg relative mb-4">
        <Cardflip
          onFlip={flipCard}
          frontImage={images[currentImageIndex].front}
          backText={images[currentImageIndex].backText}
          frontText={images[currentImageIndex].frontText}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
        />
      </div>

      <div className="flex flex-col items-center w-full mb-4">
        <input
          type="text"
          placeholder="What happened here?"
          value={inputValue}
          onChange={handleInputValue}
          className="h-[50px] text-black text-center px-4 w-full max-w-xs border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        onClick={handleSubmit}
        className='mb-4 flex items-center p-[10px] rounded-md bg-gradient-to-b from-green-500 to-green-700 text-white transition-transform duration-300 transform active:scale-95 active:shadow-inner'
      >
        Show Answer
      </button>

      <div className='flex flex-row items-center mb-4'>
        {Array.from({ length: correctCount }).map((_, index) => (
          <img
            key={index}
            src={greencheck}
            alt="green check"
            className='w-[30px] h-[30px] mr-2' // Space between each check
          />
        ))}
        {Array.from({ length: incorrectCount }).map((_, index) => (
          <img
            key={index}
            src={redx}
            alt="red X"
            className='w-[30px] h-[30px] mr-2' // Space between each X
          />
        ))}
      </div>

      {/* Modal for Game Over */}
      {gameOver && (
        <div className="fixed inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Game Over</h2>
            <p className="mb-4">{modalMessage}</p>
            <button
              onClick={handleCloseModal}
              className='p-[10px] rounded-md bg-gradient-to-b from-green-500 to-green-700 text-white'
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryLane;
