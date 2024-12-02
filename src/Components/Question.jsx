import React from "react";

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="questions">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((option, index) => {
          return (
            <li key={index}>
              <button onClick={() => onAnswerClick(option.isCorrect)}>
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
