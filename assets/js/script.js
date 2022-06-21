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

var scoreCount = [0];
var finalScore = document.getElementById("score-number");
var timerNumber = document.getElementById("timer-number");
var startQuizBtn = document.getElementById("start-quiz-btn");
var count = 100;
// section one buttons:
var btn1 = document.getElementById("one-btn-1");
var btn2 = document.getElementById("one-btn-2");
var btn3 = document.getElementById("one-btn-3");
var btn4 = document.getElementById("one-btn-4");
// section two buttons:
var btn5 = document.getElementById("two-btn-5");
var btn6 = document.getElementById("two-btn-6");
var btn7 = document.getElementById("two-btn-7");
var btn8 = document.getElementById("two-btn-8");
// section three buttons:
var btn9 = document.getElementById("three-btn-9");
var btn10 = document.getElementById("three-btn-10");
var btn11 = document.getElementById("three-btn-11");
var btn12 = document.getElementById("three-btn-12");
// section four buttons:
var btn13 = document.getElementById("three-btn-13");
var btn14 = document.getElementById("three-btn-14");
var btn15 = document.getElementById("three-btn-15");
var btn16 = document.getElementById("three-btn-16");
// section five buttons:
var btn17 = document.getElementById("three-btn-17");
var btn18 = document.getElementById("three-btn-18");
var btn19 = document.getElementById("three-btn-19");
var btn20 = document.getElementById("three-btn-20");
// section six input field:
var enterYourInitials = document.getElementById("characters-for-initials");
var submitInitialsBtn = document.getElementById("submit-initials");
// section seven input field:
var goBackBtn = document.getElementById("go-back-to-top");
var clearScoresBtn = document.getElementById("clear-scores");



// Add event listener to button that starts timer:
startQuizBtn.addEventListener("click", function() {
  startQuizBtn = setInterval(function() {
      count -= 1;
      timerNumber.textContent = count;
        if (count <= 0) {
      clearInterval(startQuizBtn);
        }
    }, 1000);
  });

btn1.addEventListener("click", function() {
  count = count -10;
});

btn2.addEventListener("click", function() {
  count = count -10;
});

btn3.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = 10;
  console.log(scoreCount);
});

btn4.addEventListener("click", function() {
  count = count -10;
});





