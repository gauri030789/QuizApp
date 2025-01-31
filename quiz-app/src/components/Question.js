import React from "react";

const Question = ({ question, handleAnswer, index, total }) => {
    return (
        <div className="question-card">
            <h2>Question {index + 1} of {total}</h2>
            <h3>{question.question}</h3>
            <div className="options">
                {question.options.map((option, idx) => (
                    <button key={idx} onClick={() => handleAnswer(option.isCorrect)}>
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
