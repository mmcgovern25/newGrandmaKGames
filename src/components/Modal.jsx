import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const buttonClasses = 'flex items-center justify-center w-40 h-12 rounded-md bg-gradient-to-b from-green-500 to-green-700 text-white transition-transform duration-300 transform shadow-md hover:shadow-xl active:scale-95 active:shadow-inner';

const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose(); // Close the modal
    navigate('/'); // Navigate to the home page
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={modalVariants}
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Choose a Game</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className='flex flex-row justify-center space-x-4'>
            <Link to="/tiktaktoe">
              <button
                className={buttonClasses}
                onClick={onClose}
              >
                Tik Tak Toe
              </button>
            </Link>
            <Link to="/connect4">
              <button
                className={buttonClasses}
                onClick={onClose}
              >
                Connect 4
              </button>
            </Link>
          </div>
          <div className='flex flex-row justify-center space-x-4'>
            <Link to="/memorylane">
              <button
                className={buttonClasses}
                onClick={onClose}
              >
                Memory Lane
              </button>
            </Link>
            <Link to="/trivia">
              <button
                className={buttonClasses}
                onClick={onClose}
              >
                Trivia
              </button>
            </Link>
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default Modal;
