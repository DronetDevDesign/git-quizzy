// ACCEPTANCE CRITERIA:
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var userScore = 0;
var timerStartNumber = 100;
var startQuizBtn = document.querySelector("#start-quiz");

// variable objects containing quiz questions and possible answers:
var quizQuestionOne = {
    askOne: "Commonly used data types DO not include:",
    answersOne: [
      "strings",
      "booleans",
      "alerts",
      "numbers",
    ],
};
// console.log(quizQuestionOne);

var quizQuestionTwo = {
    askTwo: "The condition in an if / else statement is enclosed with _______.",
    answersTwo: [
      "quotes",
      "curly brackets",
      "parenthesis",
      "square brackets",
    ],
};
// console.log(quizQuestionTwo);

var quizQuestionThree = {
    askThree: "Arrays in JavaScript can be used to store _______.",
    answersThree: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
};
// console.log(quizQuestionThree);

var quizQuestionFour = {
    askFour: "String values must be enclosed within _______ when being assigned to variables.",
    answersFour: [
      "commas",
      "curly brackets",
      "quotes",
      "parenthesis",
    ],
};
// console.log(quizQuestionFour);

var quizQuestionFive = {
    askFive: "A very useful tool during development and debugging for printing content to the debugger is:",
    answersFive: [
      "JavaScript",
      "terminal/zsh",
      "for loops",
      "console.log",
    ],
};

var finalScore = userScore;
// console.log(finalScore);

var questionSlidesArray = [quizQuestionOne, quizQuestionTwo, quizQuestionThree, quizQuestionFour, quizQuestionFive];
console.log(questionSlidesArray);

// Write password to the #password input
function startQuiz() {
  for (i = 0; i <= questionSlidesArray.length; i++) {

  }
}

// Add event listener to generate button
startQuizBtn.addEventListener("click", startQuiz);