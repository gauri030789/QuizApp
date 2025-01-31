import React from "react";

const Result = ({ score, total }) => {
    return (
        <div className="result">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} / {total}</p>
            {score >= total * 0.8 ? (
                <h3>🎉 Great Job! You are a Quiz Master! 🎉</h3>
            ) : (
                <h3>Keep Practicing! 🚀</h3>
            )}
            <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
    );
};

export default Result;
