import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Leo Tolstoy",
      "Mark Twain",
      "William Shakespeare",
      "Charles Dickens",
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["90", "95", "100", "105"],
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
  },
  {
    question: "Which year did World War II end?",
    options: ["1940", "1942", "1945", "1950"],
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
  },
  {
    question: "Who discovered gravity when an apple fell on his head?",
    options: [
      "Albert Einstein",
      "Galileo Galilei",
      "Isaac Newton",
      "Niels Bohr",
    ],
  },
];

const answers = [
  "Paris",
  "8",
  "William Shakespeare",
  "Jupiter",
  "100",
  "Leonardo da Vinci",
  "Au",
  "1945",
  "2",
  "Isaac Newton",
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswers, setMyAnswers] = useState([]);

  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...myAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setMyAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore(updatedAnswers);
    }
  };

  const calculateScore = (answersArray) => {
    const score = answersArray.reduce(
      (total, answer, index) => (answer === answers[index] ? total + 1 : total),
      0
    );
    alert(`Your score is ${score} / ${questions.length}`);
  };

  const navigateQuestion = (direction) => {
    setCurrentQuestion((prev) =>
      direction === "next"
        ? Math.min(prev + 1, questions.length - 1)
        : Math.max(prev - 1, 0)
    );
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setMyAnswers([]);
  };

  const { question, options } = questions[currentQuestion];

  return (
    <div>
      <div className="m-4">
        <h1>{question}</h1>
        <div className="flex gap-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`p-2 border-2 ${
                myAnswers[currentQuestion] === option
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <button
          className="border-2 border-gray-200 rounded-md p-2 mx-2"
          onClick={() => navigateQuestion("previous")}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          className="border-2 border-gray-200 rounded-md p-2 mx-2"
          onClick={() => navigateQuestion("next")}
          disabled={currentQuestion >= questions.length - 1}
        >
          Next
        </button>
        {currentQuestion === questions.length - 1 && (
          <button
            className="border-2 border-green-500 rounded-md p-2 mx-2"
            onClick={() => calculateScore(myAnswers)}
          >
            Submit
          </button>
        )}
        <button
          className="border-2 border-red-500 rounded-md p-2 mx-2"
          onClick={resetQuiz}
        >
          Reset Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
