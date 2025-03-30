import React, { useState, useEffect } from 'react';

const Timer = ({ setStop, questionNumber }) => {
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    // Set up interval for countdown
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          // If timer reaches 0, stop the quiz
          clearInterval(interval); // Clear interval
          setStop(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Clear interval on component unmount or when timer is reset
    return () => clearInterval(interval);
  }, [setStop]);

  useEffect(() => {
    // Reset the timer whenever the questionNumber changes
    setTimer(45);
  }, [questionNumber]);

  return (
    <div className="text-2xl font-bold">{timer}</div>
  );
};

export default Timer;
