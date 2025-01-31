import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [quizData, setQuizData] = useState(null); // Initially null
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  // Fetch quiz data from the API
  useEffect(() => {
    const staticData = {
      questions: [
        {
          question: "What is 2 + 2?",
          options: ["3", "4", "5", "6"],
          correctAnswer: "4",
        },
        {
          question: "What is the capital of France?",
          options: ["London", "Berlin", "Paris", "Madrid"],
          correctAnswer: "Paris",
        },
        // More questions can be added here
      ]
    };

    // Fetching data from API
    axios.get('https://api.jsonserve.com/Uw5CrX')
      .then(response => {
        setQuizData(response.data);  // Set fetched data
      })
      .catch(error => {
        console.error('Error fetching quiz data:', error);
        alert('Error fetching quiz data. Using fallback data.');
        setQuizData(staticData);  // Use fallback static data if API fails
      });
  }, []);  // Empty dependency array ensures the fetch runs only once when the component mounts

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !isQuizFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);  // Cleanup on component unmount
    }
  }, [timeLeft, isQuizFinished]);

  // Handle answer click
  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);  // Increment score if correct answer
    }
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);  // Move to next question
      setTimeLeft(30);  // Reset timer for next question
    } else {
      setIsQuizFinished(true);  // End quiz when all questions are answered
    }
  };

  // Show summary at the end of the quiz
  const showSummary = () => (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} out of {quizData.questions.length}</p>
    </div>
  );

  // Render current question and options
  const renderQuestion = () => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    return (
      <div>
        <h2>{currentQuestion.question}</h2>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button 
              key={index} 
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Show loading state if quizData is not loaded yet
  if (!quizData) {
    return <div>Loading quiz...</div>;  // Wait for quizData to load
  }

  // Show quiz progress
  const progress = (currentQuestionIndex / quizData.questions.length) * 100;

  return (
    <div className="quiz">
      {!isQuizFinished ? (
        <div>
          {renderQuestion()} {/* Show current question */}
          <div>
            <p>Question {currentQuestionIndex + 1} of {quizData.questions.length}</p>
            <p>Time Left: {timeLeft}s</p> {/* Show remaining time */}
          </div>
          <div className="progress-bar" style={{ width: `${progress}%` }}></div> {/* Progress bar */}
        </div>
      ) : (
        showSummary()  // Show score summary after quiz completion
      )}
    </div>
  );
};

export default Quiz;
