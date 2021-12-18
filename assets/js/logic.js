var displayHighScoreScreen = function () {
    var highScoreHeaderEl = document.createElement("h2");
    highScoreHeaderEl.textContent = "Highscores";
    highScoreHeaderEl.classList = "row justify-content-center"
    
    var mainBodySectionEl = document.querySelector("#mainBody");
    mainBodySectionEl.appendChild(highScoreHeaderEl);

    //put score display here

    var highScoreButtonContainer = document.createElement("div");
    highScoreButtonContainer.classList = "row justify-content-center"

    var goBackBtnEl = document.createElement("button");
    goBackBtnEl.textContent = "Go Back";
    goBackBtnEl.classList = "col-3 btn btn-sm purple-text btn-outline-purple";

    var clearHighScoresBtn = document.createElement("button");
    clearHighScoresBtn.textContent = "Clear Highscores";
    clearHighScoresBtn.classList = "col-3 btn btn-sm purple-text btn-outline-purple";

    mainBodySectionEl.appendChild(highScoreButtonContainer);
    highScoreButtonContainer.appendChild(goBackBtnEl);
    highScoreButtonContainer.appendChild(clearHighScoresBtn);
};

displayHighScoreScreen();


//at the top of the screen, show a highscore button and a timer

//on page load, show a title, instructions, and a start button

//when the start button is clicked, start timer and show first question

//if answer is correct, display correct for a couple seconds, and go to next question

//if answer is incorrect, display wrong adn subtract time from the clock, and show next question

//when all questions are answered, or the timer reaches 0, the quiz is over

//when the game is over, display highscore screen
