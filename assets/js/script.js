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

  function displayScore(num) {
    scoreCount === scoreCount + 10;
    if (scoreCount) {
      scoreCount = scoreCount + finalScore; 
    } else {
      !scoreCount;
    };
  };

// section one buttons:
btn1.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

btn2.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});
// correct answer
btn3.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = scoreCount + 10;
  console.log(scoreCount);
});

btn4.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

// section two buttons:
btn5.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

btn6.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});
// correct answer
btn7.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = scoreCount + 10;
  console.log(scoreCount);
});

btn8.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

// section three buttons:
btn9.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

btn10.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

btn11.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});
// correct answer
btn12.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = scoreCount + 10;
  console.log(scoreCount);
});

// section four buttons:
btn13.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

btn14.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});
// correct answer
btn15.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = scoreCount + 10;
  console.log(scoreCount);

});

btn16.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

// section five buttons:
btn17.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

btn18.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});

btn19.addEventListener("click", function() {
  count = count -10;
  alert("WRONG ANSWER!");
});
// correct answer
btn20.addEventListener("click", function() {
  scoreCount = finalScore;
  scoreCount = scoreCount + 10;
  displayScore(parseInt(document.getElementById("score-number").innerHTML, 10));
  console.log(scoreCount);
  return finalScore;
});


// section six input field:
// enterYourInitials.addEventListener("click", function() {

// });

submitInitialsBtn.addEventListener("click", function() {
  var newSubmitInitialsBtn = document.getElementById("submit-initials").value;
  if(localStorage.getItem("data") === null) {
    localStorage.setItem("data", "[]");
  };

  submitInitialsBtn = JSON.parse(localStorage.getItem('data'));
  submitInitialsBtn.push(newSubmitInitialsBtn);
  localStorage.setItem("data", JSON.stringify(submitInitialsBtn));
});

// section seven buttons ---
// go back and reload page:
goBackBtn.addEventListener("click", function() {
  location.reload();
  return false;
});

clearScoresBtn.addEventListener("click", function() {
  location.reload();
  return false;
});




