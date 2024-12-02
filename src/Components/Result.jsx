import React from "react";

const Result = ({ userAnswer, questions, resetQuiz = () => {} }) => {
  const correctAnswer = userAnswer.filter((answer) => answer).length;
  return (
    <div className="result">
      <h2>Result</h2>
      <p>
        Your answered {correctAnswer} out of {questions.length} Questions{" "}
      </p>
      <span onClick={resetQuiz}>Click Here To Retry</span>
      <ul>
        {questions.map((question, index) => {
          return <li key={index} data-correct={userAnswer[index]} >
            Q{index+1}.{question.question }
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Result;
