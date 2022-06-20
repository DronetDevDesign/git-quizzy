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
var timerNumber = document.getElementById("timer-number");
var startQuizBtn = document.getElementById("start-quiz-btn");
var count = 5;
var heading1 = document.getElementById("slide-titles");



// Add event listener to button that starts timer:
startQuizBtn.addEventListener("click", function() {
  // startQuizBtn.style.display = "none";
  startQuizBtn = setInterval(function() {
      count -= 1;
      timerNumber.textContent = count;
        if (count <= 0) {
      clearInterval(startQuizBtn);
        }
    }, 1000);
  });

