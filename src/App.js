import React, { useState } from 'react';
import './App.css';
import Headr from './Headr';
import Main from './Main';
import quizData from './quizData.json'; 

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(quizData.length).fill(null));
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (answered) return;
  
    const isCorrect = selectedOption === quizData[currentQuestion].correctAnswer;
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = quizData[currentQuestion].options.indexOf(selectedOption);
  
    setUserAnswers(updatedAnswers);
    setAnswered(true);
  };
  

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
    setAnswered(false);
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => prev - 1);
    setAnswered(false);
  };

  return (
    <div className="App">
      <Headr />
      <Main
        currentQuestion={currentQuestion}
        quizData={quizData}
        handleAnswer={handleAnswer}
        handleNext={handleNext}
        handlePrev={handlePrev}
        userAnswers={userAnswers}
        answered={answered}
      />
    </div>
  );
}

export default App;
