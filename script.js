const quiz = [
  {
    question: "Which HTML tag is used to define an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>", "<item>"],
    answer: "<ol>"
  },
  {
    question: "Which CSS property is used to change the background color of an element?",
    options: ["font-size", "color", "text-align", "background-color", "border-color"],
    answer: "background-color"
  },
  {
    question: "What does 'HTML' stand for?",
    options: ["HyperText Markup Language", "HyperText Modeling Language", "Hyperlink Text Markup Language", "HyperText Multilayer Language", "HyperText Multicolored Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which method is used to select an element by its ID in JavaScript?",
    options: ["getElementById", "querySelector", "getElementByClassName", "getElementsByTagName", "selectById"],
    answer: "getElementById"
  },
  {
    question: "Which HTML attribute is used to specify an alternative text for an image?",
    options: ["alt", "src", "title", "href", "class"],
    answer: "alt"
  }
];

let currentQuestion = 0;
let score = 0;
let answer;
let isScoreUpdated = false;
let isAnswerCorrect = false;
let isAnswerIncorrect = false;
let isQuizOver = false;
let isAnswerSelected = false;
let isNextBtnDisabled = true;

const question = document.getElementById("question");
const options = document.querySelectorAll(".options button");
const scoreCard = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");