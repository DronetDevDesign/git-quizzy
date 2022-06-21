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

var scoreCount = [];
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
var btn13 = document.getElementById("four-btn-13");
var btn14 = document.getElementById("four-btn-14");
var btn15 = document.getElementById("four-btn-15");
var btn16 = document.getElementById("four-btn-16");
// section five buttons:
var btn17 = document.getElementById("five-btn-17");
var btn18 = document.getElementById("five-btn-18");
var btn19 = document.getElementById("five-btn-19");
var btn20 = document.getElementById("five-btn-20");
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

// section one buttons:
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

// section two buttons:
btn5.addEventListener("click", function() {
  count = count -10;
});

btn6.addEventListener("click", function() {
  count = count -10;
});

btn7.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = 10;
  console.log(scoreCount);
});

btn8.addEventListener("click", function() {
  count = count -10;
});

// section three buttons:
btn9.addEventListener("click", function() {
  count = count -10;
});

btn10.addEventListener("click", function() {
  count = count -10;
});

btn11.addEventListener("click", function() {
  count = count -10;
});

btn12.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = 10;
  console.log(scoreCount);
});

// section four buttons:
btn13.addEventListener("click", function() {
  count = count -10;
});

btn14.addEventListener("click", function() {
  count = count -10;
});

btn15.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = 10;
  console.log(scoreCount);
});

btn16.addEventListener("click", function() {
  count = count -10;
});

// section five buttons:
btn17.addEventListener("click", function() {
  count = count -10;
});

btn18.addEventListener("click", function() {
  count = count -10;
});

btn19.addEventListener("click", function() {
  count = count -10;
});

btn20.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = 10;
  console.log(scoreCount);
  return finalScore;
});



// section six input field:
enterYourInitials.addEventListener("click", function() {

});

// submitInitialsBtn.addEventListener("click", function() {
//   var newSubmitInitialsBtn = document.getElementById("submit-initials").value;
//   if(localStorage.getItem("data") === null) {
//     localStorage.setItem("data", "[]");
//   };

//   submitInitialsBtn = JSON.parse(localStorage.getItem('data'));
//   submitInitialsBtn.push(newSubmitInitialsBtn);
//   localStorage.setItem("data", JSON.stringify(submitInitialsBtn));
// });

// section seven buttons:
goBackBtn.addEventListener("click", function() {

});

clearScoresBtn.addEventListener("click", function() {

});




