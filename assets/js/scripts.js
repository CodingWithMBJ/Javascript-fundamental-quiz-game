const quizContainer = document.getElementById("quiz-container");
const questionsContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

const quizData = [
  {
    question: "Which array method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: 3,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      "// for single-line, /* */ for multi-line",
      "#",
      "<!-- -->",
      "** **",
    ],
    answer: 0,
  },
  {
    question: "Which array method removes the last element from an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: 0,
  },
  {
    question: "How do you write 'Hello World' to the console?",
    options: [
      "console.log('Hello World')",
      "print('Hello World')",
      "echo('Hello World')",
      "log('Hello World')",
    ],
    answer: 0,
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "==", "===", ":"],
    answer: 0,
  },
  {
    question: "What is the correct way to write an array in JavaScript?",
    options: [
      "let arr = [1, 2, 3]",
      "let arr = (1, 2, 3)",
      "let arr = {1, 2, 3}",
      "let arr = <1, 2, 3>",
    ],
    answer: 0,
  },
  {
    question: "Which method converts a string to uppercase?",
    options: [
      "toUpperCase()",
      "toCapitalize()",
      "upper()",
      "changeCase('upper')",
    ],
    answer: 0,
  },
  {
    question: "What is the data type of NaN?",
    options: ["number", "undefined", "object", "NaN"],
    answer: 0,
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    answer: 2,
  },
  {
    question: "Which function is used to parse a string into an integer?",
    options: ["parseInt()", "Number()", "parseFloat()", "toInteger()"],
    answer: 0,
  },
  {
    question: "What will `typeof []` return?",
    options: ["array", "object", "list", "undefined"],
    answer: 1,
  },
  {
    question: "How do you write an if statement in JavaScript?",
    options: ["if (x > y)", "if x > y then", "if x > y:", "if {x > y}"],
    answer: 0,
  },
  {
    question: "Which comparison operator checks both value and type?",
    options: ["==", "===", "!=", "!=="],
    answer: 1,
  },
  {
    question:
      "Which loop executes at least once, even if the condition is false?",
    options: ["for", "while", "do...while", "forEach"],
    answer: 2,
  },
  {
    question: "How do you define a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "def myFunc()",
      "func myFunc()",
      "define myFunc()",
    ],
    answer: 0,
  },
  {
    question: "What will `Boolean('')` return?",
    options: ["true", "false", "undefined", "0"],
    answer: 1,
  },
  {
    question: "Which method joins all elements of an array into a string?",
    options: ["join()", "concat()", "combine()", "merge()"],
    answer: 0,
  },
  {
    question: "Which built-in method returns the length of a string?",
    options: ["length", "count()", "size()", "index()"],
    answer: 0,
  },
  {
    question: "Which statement is used to stop a loop in JavaScript?",
    options: ["break", "stop", "exit", "halt"],
    answer: 0,
  },
  {
    question: "What will `typeof null` return?",
    options: ["null", "undefined", "object", "boolean"],
    answer: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

window.addEventListener("DOMContentLoaded", () => {
  nextButton.style.display = "none";
  loadQuestion();
});

function loadQuestion() {
  questionsContainer.innerHTML = "";
  optionsContainer.innerHTML = "";

  const currentQuestion = quizData[currentQuestionIndex];
  if (!currentQuestion) return;

  const p = document.createElement("p");
  p.textContent = currentQuestion.question;
  questionsContainer.appendChild(p);

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option-button");
    optionButton.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(optionButton);
  });
}

function selectOption(selectedIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  const optionButtons = document.querySelectorAll(".option-button");

  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === currentQuestion.answer) {
      btn.classList.add("correct");
    } else if (index === selectedIndex && index !== currentQuestion.answer) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedIndex === currentQuestion.answer) {
    score++;
    showScore();
  }

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    nextButton.style.display = "none";
  } else {
    showScore();
  }
});

function showScore() {
  quizContainer.classList.add("hidden");
  scoreContainer.classList.remove("hidden");
  scoreDisplay.textContent = `${score} / ${quizData.length}`;
}

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  nextButton.style.display = "none";
  loadQuestion();
  showScore();
});
