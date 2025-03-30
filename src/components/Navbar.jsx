import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import MoonSVG from './MoonSVG';
import SunSVG from './SunSVG';
import '../extraCSS/input.css'
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0, x: '250px' },
  visible: {
    opacity: 1,
    x: '0px',
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 90 },
  },
};

const Navbar = ({ theme, setTheme }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={` relative z-50 transition duration-700 border-b-2 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className='flex justify-between items-center p-2'>
        <Link to="/">
        <img src={logo} alt="The Grandma Games" className="mr-4 w-[50px] sm:w-[50px] md:w-[50px]" />
        </Link>

        <motion.ul className="hidden md:flex flex-row space-x-14 mr-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {['Trivia', 'Connect 4', 'Memory Lane', 'Tik Tak Toe'].map((item, index) => (
            <motion.div key={index}>
              <Link to={`/${item.replace(/ /g, '').toLowerCase()}`}>
                <motion.button
                  className={`nav ${theme === 'light' ? 'hover:text-black' : 'hover:text-white'}`}
                  variants={itemVariants}
                  transition={{ type: 'spring', stiffness: 150 }}
                >
                  {item}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.ul>

          <input className='nav-input' type='checkbox' id="darkmode-toggle"/>
          <label className='nav-label' onClick={toggle_mode} htmlFor="darkmode-toggle">
            <MoonSVG className='w-10 h-10'/>
            <SunSVG className='w-10 h-10'/>
          </label>
        <div className="relative md:hidden order-1 md:order-2">
          <div
            className={`rounded-full ${theme === 'light' ? 'hover:bg-gray-200' : ''} p-2 cursor-pointer`}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {!isMenuToggled ? (
              <svg className={`h-6 w-6 ${theme === 'light' ? 'text-green-700' : 'text-white'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${theme === 'light' ? 'text-green-700' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          {isMenuToggled && (
            <div className={`flex flex-col ${theme === 'light' ? 'bg-white' : 'bg-black'} shadow-md absolute top-full right-0 animate-slide-in-right rounded`}>
              {['Trivia', 'Connect 4', 'Memory Lane', 'Tik Tak Toe'].map((item, index) => (
                <Link key={index} to={`/${item.replace(/ /g, '').toLowerCase()}`} onClick={() => setIsMenuToggled(false)}>
                  <p
                    className={`flex font-medium justify-center items-center cursor-pointer w-[200px] px-4 py-5 ${theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700'}`}
                  >
                    {item}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
