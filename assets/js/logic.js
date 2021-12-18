
//✅at the top of the screen, show a highscore button and a timer

//✅on page load, show a title, instructions, and a start button

//✅when the start button is clicked, start timer and show first question

//if answer is correct, display correct for a couple seconds, and go to next question

//if answer is incorrect, display wrong and subtract time from the clock, and show next question

//✅when all questions are answered, or the timer reaches 0, the quiz is over

//  when the game is over, display a forn to enter inititals

// high score page loads scores from local storage

//when clear button is clicked, clear local storage

var mainBodySectionEl = document.querySelector("#mainBody");

var question1 = ["question #1 text...", "question #1 answer choice 1", "question #1 answer choice 2 *CORRECT", "question #1 answer choice 3", "question #1 answer choice 4"];
var question2 = ["question #2 text...", "question #2 answer choice 1", "question #2 answer choice 2", "question #2 answer choice 3", "question #2 answer choice 4"];
var question3 = ["question #3 text...", "question #3 answer choice 1", "question #3 answer choice 2", "question #3 answer choice 3", "question #3 answer choice 4"];
var question4 = ["question #4 text...", "question #4 answer choice 1", "question #4 answer choice 2", "question #4 answer choice 3", "question #4 answer choice 4"];
var question5 = ["question #5 text...", "question #5 answer choice 1", "question #5 answer choice 2", "question #5 answer choice 3", "question #5 answer choice 4"];
var questionArray = [question1, question2, question3, question4, question5];
var timeLeft = 6; 
let timeDisplay = document.querySelector(".timer")
timeDisplay.textContent = "Timer: " + timeLeft;
let i = 0;
var chosenAnswer = "";

function startCountdown () {
    quizTimer = setInterval(countdown,1000);
};

function countdown () {
    if (timeLeft === 0) {
        clearInterval(quizTimer);
        displayHighScoreScreen();
    }
    else {
        timeLeft--;
        timeDisplay.textContent = "Timer: " + timeLeft;
    }
};


var displayStartScreen = function() {

    clearPage();

    var startScreenHeaderEl = document.createElement("h2");
    startScreenHeaderEl.textContent = "Coding Quiz";
    startScreenHeaderEl.classList = "row justify-content-center";
    
    mainBodySectionEl.appendChild(startScreenHeaderEl);

    var startScreenInstructionsEl = document.createElement("p");
    startScreenInstructionsEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!";
    startScreenInstructionsEl.classList = "w-75 m-auto text-center";

    mainBodySectionEl.appendChild(startScreenInstructionsEl);

    var startButtonDivEl = document.createElement("div");
    var startButtonEl = document.createElement("button");
    startButtonDivEl.classList = "text-center"
    startButtonEl.textContent = "Start Quiz";
    startButtonEl.id = "startBtn";
    startButtonEl.classList = "btn purple-text btn-outline-purple";

    mainBodySectionEl.appendChild(startButtonDivEl);
    startButtonDivEl.appendChild(startButtonEl);

    $("button#startBtn").click(function() {
        startCountdown();
        quizScreen(questionArray[i]);
        i++;
    });
};


var displayHighScoreScreen = function () {

    clearPage();
    
    //add form to fill with initials and whatever else
    
    var highScoreHeaderEl = document.createElement("h2");
    highScoreHeaderEl.textContent = "Highscores";
    highScoreHeaderEl.classList = "row justify-content-center"
    
    mainBodySectionEl.appendChild(highScoreHeaderEl);
    
    //put score display here
    
    var highScoreButtonContainer = document.createElement("div");
    highScoreButtonContainer.classList = "text-center"
    
    var goBackBtnEl = document.createElement("button");
    goBackBtnEl.textContent = "Go Back";
    goBackBtnEl.id = "goBackBtn";
    goBackBtnEl.classList = "btn btn-sm purple-text btn-outline-purple";
    
    var clearHighScoresBtn = document.createElement("button");
    clearHighScoresBtn.textContent = "Clear Highscores";
    clearHighScoresBtn.classList = "btn btn-sm purple-text btn-outline-purple";
    
    mainBodySectionEl.appendChild(highScoreButtonContainer);
    highScoreButtonContainer.appendChild(goBackBtnEl);
    highScoreButtonContainer.appendChild(clearHighScoresBtn);

    $("button#goBackBtn").click(function() {
        location.reload();
    });
};

var quizScreen = function(arr) {
    clearPage();

    var quizQuestionEl = document.createElement("h5");
    quizQuestionEl.textContent = arr[0];
    quizQuestionEl.classList = "w-100"
    var answerChoices = document.createElement("ul");
    answerChoices.classList = "d-inline-flex flex-column"
    var answerChoice1 = document.createElement("li");
    answerChoice1.textContent = arr[1];
    answerChoice1.classList = "btn answerChoiceBtn"
    answerChoice1.id = "answerChoice1btn";
    var answerChoice2 = document.createElement("li");
    answerChoice2.textContent = arr[2];
    answerChoice2.classList = "btn answerChoiceBtn"
    answerChoice2.id = "answerChoice2btn";
    var answerChoice3 = document.createElement("li");
    answerChoice3.textContent = arr[3];
    answerChoice3.classList = "btn answerChoiceBtn"
    answerChoice3.id = "answerChoice3btn";
    var answerChoice4 = document.createElement("li");
    answerChoice4.textContent = arr[4];
    answerChoice4.classList = "btn answerChoiceBtn"
    answerChoice4.id = "answerChoice4btn";

    mainBodySectionEl.appendChild(quizQuestionEl);
    mainBodySectionEl.appendChild(answerChoices);
    answerChoices.appendChild(answerChoice1);
    answerChoices.appendChild(answerChoice2);
    answerChoices.appendChild(answerChoice3);
    answerChoices.appendChild(answerChoice4);

    $(answerChoices).on('click', ".answerChoiceBtn", function () {
        var chosenAnswer = this.id;
        console.log(chosenAnswer);
        if (i<questionArray.length) {
            quizScreen(questionArray[i]);
            i++;
        } 
        else {
            clearInterval(quizTimer);
            console.log(timeLeft);
            displayHighScoreScreen();
        }

    })
};


var clearPage = function() {
    mainBodySectionEl.innerHTML = "";
};


displayStartScreen();

$("button#highScoreBtn").click(function() {
    displayHighScoreScreen();
});
