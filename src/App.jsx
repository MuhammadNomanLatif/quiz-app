import { useState } from "react";
import "./App.css";
import questions from "./Constants/questions.json";
import Question from "./Components/Question";
import Result from "./Components/Result";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setuserAnswer] = useState([]);
  const handlNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setuserAnswer([...userAnswer, isCorrect]);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setuserAnswer([]);
  };
  return (
    <div className="app">
      <h1>World Quiz</h1>
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handlNextQuestion}
        />
      )}
      {currentQuestion === questions.length && (
        <Result
          userAnswer={userAnswer}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
