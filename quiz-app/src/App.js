import React, { useState } from 'react';  
import './App.css';  // App ka CSS
import Quiz from './components/Quiz';  

function App() {
  const [quizStarted, setQuizStarted] = useState(false);  

  const startQuiz = () => {
    setQuizStarted(true);  
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎯 Gamified Quiz App</h1>  
        
        {!quizStarted ? (  
          <button onClick={startQuiz}>Start Quiz</button> 
        ) : (
          <Quiz />  
        )}
      </header>
    </div>
  );
}

export default App;
