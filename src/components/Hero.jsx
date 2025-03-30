import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ShamrockSVG from './ShamrockSVG';
import Modal from './Modal'; // Import Modal

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
}

const scrollVariants = {
  initial: { opacity: 1 },
  animate: {
    x: ['0%', '-100%'], // Scroll from right to left
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 50, // Adjust the duration for the speed of the scrolling
        ease: 'linear',
      }
    }
  }
};

const Hero = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='mb-12'>
      <div className='mt-20 flex flex-col justify-center items-center px-4'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`bruno-ace-sc-regular text-1xl sm:text-2xl md:text-3xl lg:text-4xl sm:mb-2 md:mb-4`}
        >
          Welcome to
        </motion.div>

        <div className="flex items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className={`bruno-ace-sc-regular text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mr-2`}
          >
            The Grandma K Games
          </motion.h1>

          <ShamrockSVG className="stroke w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-1 lg:mb-3 lg:ml-2" />
        </div>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className='px-4 py-2 sm:px-6 sm:py-3 bg-[#1bac08] text-white rounded'
          onClick={handlePlayButtonClick}
        >
          Play
        </motion.button>
      </div>

      {/* Animated text container */}
      <div
        style={{
          position: 'absolute', // Absolute positioning to ensure it floats above other content
          top: '0',
          left: '0',
          transform: 'rotate(90deg)', // Rotate the container
          transformOrigin: 'left bottom', // Set the rotation origin
          zIndex: 3000,
          backgroundColor: 'black', // Ensure it's above other elements
          overflow: 'hidden' // Hide any overflow
        }}
        className="mt-6 sm:mt-[1.5rem] md:mt-[1.6rem] lg:mt-[1.5rem] whitespace-nowrap"
      >
        <motion.div
          initial='initial'
          variants={scrollVariants}
          animate="animate"
          className="flex"
        >
          <span className={`text-2xl font-bold mr-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Featuring the Big 13: Kara, Bri, Mike, Jess, Brendan, Tommy, Jill, Matt, Sean, Scottie, Colleen, Samantha, and Katie!
          </span>
        </motion.div>
      </div>

      {/* Conditionally render the Modal */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Hero;
