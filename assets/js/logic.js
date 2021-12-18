
//✅at the top of the screen, show a highscore button and a timer

//on page load, show a title, instructions, and a start button

//when the start button is clicked, start timer and show first question

//if answer is correct, display correct for a couple seconds, and go to next question

//if answer is incorrect, display wrong adn subtract time from the clock, and show next question

//when all questions are answered, or the timer reaches 0, the quiz is over

//(2 todos) ✅  when the game is over, display highscore screen

var mainBodySectionEl = document.querySelector("#mainBody");

var question1 = ["question #1 text blahball lsiadfhu lashf ;asoihdf ;sidhf ;alshjf ;aihjf ;iouf;nvkls aslkfh wrklsd fsa fja f;ajshf aekjrhf laws hfcsf;lkjhs.", "question #1 answer choice 1", "question #1 answer choice 2", "question #1 answer choice 3", "question #1 answer choice 4"];

var countdownTimer = function() {
    var timeLeft = 75;
    
    setInterval(function () {
        document.querySelector(".timer").textContent = "Timer: " + timeLeft;
        timeLeft--;
    }, 1000);
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
}


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
    
    displayStartScreen();
});
};

var quizScreen = function() {
    clearPage();

    var quizQuestionEl = document.createElement("h5");
    quizQuestionEl.textContent = question1[0];
    quizQuestionEl.classList = "w-100"
    var answerChoices = document.createElement("ul");
    var answerChoice1 = document.createElement("li");
    answerChoice1.textContent = question1[1];
    var answerChoice2 = document.createElement("li");
    answerChoice2.textContent = question1[2];
    var answerChoice3 = document.createElement("li");
    answerChoice3.textContent = question1[3];
    var answerChoice4 = document.createElement("li");
    answerChoice4.textContent = question1[4];

    

    mainBodySectionEl.appendChild(quizQuestionEl);
    mainBodySectionEl.appendChild(answerChoices);
    answerChoices.appendChild(answerChoice1);
    answerChoices.appendChild(answerChoice2);
    answerChoices.appendChild(answerChoice3);
    answerChoices.appendChild(answerChoice4);
}

var clearPage = function() {
    mainBodySectionEl.innerHTML = "";
};


displayStartScreen();

$("button#highScoreBtn").click(function() {
    displayHighScoreScreen();
});


$("button#startBtn").click(function() {
    quizScreen();
});
