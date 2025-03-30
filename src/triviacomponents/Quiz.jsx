import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import victory from "../sounds/victory.mp3";
import wrong from "../sounds/wrong.mp3";
import '../extraCSS/quiz.css'; // Import the custom CSS

// Delay function
const delay = (duration, callback) => {
  setTimeout(() => {
    callback();
  }, duration);
};

const Quiz = ({ data, questionNumber, setQuestionNumber, setStop }) => {
  const [question, setQuestion] = useState(null);
  const  [answerGood] = useSound(victory)
  const  [answerBad] = useSound(wrong)
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName('answer active');

    delay(1000, () => {
      setClassName(answer.correct ? 'answer correct' : 'answer wrong');
    });

    delay(5000, () => {
      if (answer.correct) {
        answerGood();
        delay(1000, () => {
          setQuestionNumber(prev => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        answerBad();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  const correctAnswer = () => {
    // Handle correct answer logic here
  };

  const wrongAnswer = () => {
    // Handle wrong answer logic here
  };


  return (
    <div className='h-[100%] flex flex-col items-center justify-around'>
      <div className='w-[80%] bg-gradient-to-b from-green-500 to-green-700 border-white text-[20px] border-2 text-center p-[20px] rounded-[10px]'>
        {question?.question}
      </div>
      <div className='w-[100%] flex justify-center flex-wrap'>
        {question?.answers.map((answer, index) => (
          <div
            key={index}
            className={`w-[40%] p-[10px] content-center border border-solid rounded-xl text-[20px] cursor-pointer font-light text-center mt-0 mr-2.5 mb-5 ml-2.5 gradient-bg ${selectedAnswer === answer ? className : ''}`}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;