import React from 'react';
import './Main.css';

const Main = ({
  currentQuestion,
  quizData,
  handleAnswer,
  handleNext,
  handlePrev,
  userAnswers,
  answered
}) => {
  return (
    <div className="Main">
      <div className="MainLeft">
        <div className="question-container">
          <p className="question-text">{quizData[currentQuestion].question}</p>
          <ul className="options-list">
            {quizData[currentQuestion].options.map((option, optionIndex) => {
              const isCorrect = option === quizData[currentQuestion].correctAnswer;
              const isSelected = userAnswers[currentQuestion] !== null && option === quizData[currentQuestion].options[userAnswers[currentQuestion]];
              return (
                <li
                  key={optionIndex}
                  onClick={() => handleAnswer(option)}
                  className={`option ${answered ? 'disabled' : ''} ${answered && isSelected ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrev} disabled={currentQuestion === 0}>Prev</button>
          <button onClick={handleNext} disabled={currentQuestion === quizData.length - 1}>Next</button>
        </div>
      </div>
      <div className="MainRight">
        <div className="circle-container">
          {quizData.map((question, index) => (
            <div
              key={index}
              className={`circle ${userAnswers[index] !== null ? (userAnswers[index] ? 'correct' : 'incorrect') : ''}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
