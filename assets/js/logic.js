var mainBodySectionEl = document.querySelector("#mainBody");

var question1 = [
    {
        "text": "question #1 text...",
        isCorrect: false
    },
    {
        "text": "question #1 answer choice 1",
        isCorrect: false
    },
    {
        "text": "question #1 answer choice 2 *CORRECT",
        isCorrect: true
    },
    {
        "text": "question #1 answer choice 3",
        isCorrect: false
    },
    {
        "text": "question #1 answer choice 4",
        isCorrect: false
    }
];
var question2 = [
    {
        "text": "question #2 text...",
        isCorrect: false
    },
    {
        "text": "question #2 answer choice 1",
        isCorrect: false
    },
    {
        "text": "question #2 answer choice 2",
        isCorrect: false
    },
    {
        "text": "question #2 answer choice 3",
        isCorrect: false
    },
    {
        "text": "question #2 answer choice 4 *CORRECT",
        isCorrect: true
    }
];
var question3 = [
    {
        "text": "question #3 text...",
        isCorrect: false
    },
    {
        "text": "question #3 answer choice 1",
        isCorrect: false
    },
    {
        "text": "question #3 answer choice 2",
        isCorrect: false
    },
    {
        "text": "question #3 answer choice 3 *CORRECT",
        isCorrect: true
    },
    {
        "text": "question #3 answer choice 4",
        isCorrect: false
    }
];
var question4 = [
    {
        "text": "question #4 text...",
        isCorrect: false
    },
    {
        "text": "question #4 answer choice 1",
        isCorrect: false
    },
    {
        "text": "question #4 answer choice 2 *CORRECT",
        isCorrect: true
    },
    {
        "text": "question #4 answer choice 3",
        isCorrect: false
    },
    {
        "text": "question #4 answer choice 4",
        isCorrect: false
    }
];
var question5 = [
    {
        "text": "question #5 text...",
        isCorrect: false
    },
    {
        "text": "question #5 answer choice 1 *CORRECT",
        isCorrect: true
    },
    {
        "text": "question #5 answer choice 2",
        isCorrect: false
    },
    {
        "text": "question #5 answer choice 3",
        isCorrect: false
    },
    {
        "text": "question #5 answer choice 4",
        isCorrect: false
    }
];


var scoresArr = [];

var loadScores = function() {
    scoresArr = localStorage.getItem("scores");
    console.log(scoresArr);

    if (scoresArr === null) {
        scoresArr = [];
        return false
    }
    else if (scoresArr) {
        scoresArr = JSON.parse(scoresArr);
        console.log(scoresArr);
    }
};

var questionArray = [question1, question2, question3, question4, question5];
var timeLeft = 75;
let timeDisplay = document.querySelector(".timer")
timeDisplay.textContent = "Timer: " + timeLeft;
let i = 0;
var chosenAnswer = "";

function startCountdown() {
    quizTimer = setInterval(countdown, 1000);
};

function countdown() {
    if (timeLeft === 0) {
        clearInterval(quizTimer);
        displayHighScoreScreen();
    }
    else {
        timeLeft--;
        timeDisplay.textContent = "Timer: " + timeLeft;
    }
};


var displayStartScreen = function () {

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

    $("button#startBtn").click(function () {
        startCountdown();
        quizScreen(questionArray[i]);
        i++;
    });
};


var displayHighScoreScreen = function () {

    clearPage();

    var highScoreHeaderEl = document.createElement("h2");
    highScoreHeaderEl.textContent = "Highscores";
    highScoreHeaderEl.classList = "row justify-content-center"

    mainBodySectionEl.appendChild(highScoreHeaderEl);

    var highScoresTableEl = document.createElement("table");
    highScoresTableEl.classList = "table table-hover w-50 m-auto border text-center" 
    mainBodySectionEl.appendChild(highScoresTableEl);
    var highScoreTableHeaderEl = document.createElement("thead");
    highScoresTableEl.appendChild(highScoreTableHeaderEl);
    var highScoreTableHeaderRowEl = document.createElement("tr");
    highScoreTableHeaderEl.appendChild(highScoreTableHeaderRowEl);
    var highScoreTableHeaderRowInitialsTextEL = document.createElement("th");
    highScoreTableHeaderRowInitialsTextEL.textContent = "Initials";
    highScoreTableHeaderRowEl.appendChild(highScoreTableHeaderRowInitialsTextEL);
    var highScoreTableHeaderRowScoreTextEL = document.createElement("th");
    highScoreTableHeaderRowScoreTextEL.textContent = "Score";
    highScoreTableHeaderRowEl.appendChild(highScoreTableHeaderRowScoreTextEL);
    var highScoreTableBodyEl = document.createElement("tbody");
    highScoresTableEl.appendChild(highScoreTableBodyEl);
    
    for (var i = 0; i<scoresArr.length; i++) {
        var scoreRow = document.createElement("tr");
        highScoreTableBodyEl.appendChild(scoreRow);
        var scoreRowInitials = document.createElement("td");
        scoreRowInitials.textContent = scoresArr[i].initials;
        scoreRow.appendChild(scoreRowInitials);
        var scoreRowScore = document.createElement("td");
        scoreRowScore.textContent = scoresArr[i].score;
        scoreRow.appendChild(scoreRowScore);
    }


    var highScoreButtonContainer = document.createElement("div");
    highScoreButtonContainer.classList = "text-center"

    var goBackBtnEl = document.createElement("button");
    goBackBtnEl.textContent = "Go Back";
    goBackBtnEl.id = "goBackBtn";
    goBackBtnEl.classList = "btn btn-sm purple-text btn-outline-purple";

    var clearHighScoresBtn = document.createElement("button");
    clearHighScoresBtn.textContent = "Clear Highscores";
    clearHighScoresBtn.id = "clearBtn";
    clearHighScoresBtn.classList = "btn btn-sm purple-text btn-outline-purple";

    mainBodySectionEl.appendChild(highScoreButtonContainer);
    highScoreButtonContainer.appendChild(goBackBtnEl);
    highScoreButtonContainer.appendChild(clearHighScoresBtn);

    $("button#goBackBtn").click(function () {
        location.reload();
    });

    $("button#clearBtn").click(function () {
        localStorage.clear();
        highScoreTableBodyEl.remove(scoreRow);
    });
};

var quizScreen = function (arr) {
    clearPage();

    var quizQuestionEl = document.createElement("h5");
    quizQuestionEl.textContent = arr[0].text;
    quizQuestionEl.classList = "w-100"
    var answerChoices = document.createElement("ul");
    answerChoices.classList = "d-inline-flex flex-column"
    var answerChoice1 = document.createElement("li");
    answerChoice1.textContent = arr[1].text;
    answerChoice1.classList = "btn answerChoiceBtn"
    answerChoice1.id = arr[1].isCorrect;
    var answerChoice2 = document.createElement("li");
    answerChoice2.textContent = arr[2].text;
    answerChoice2.classList = "btn answerChoiceBtn"
    answerChoice2.id = arr[2].isCorrect;
    var answerChoice3 = document.createElement("li");
    answerChoice3.textContent = arr[3].text;
    answerChoice3.classList = "btn answerChoiceBtn"
    answerChoice3.id = arr[3].isCorrect;
    var answerChoice4 = document.createElement("li");
    answerChoice4.textContent = arr[4].text;
    answerChoice4.classList = "btn answerChoiceBtn"
    answerChoice4.id = arr[4].isCorrect;

    mainBodySectionEl.appendChild(quizQuestionEl);
    mainBodySectionEl.appendChild(answerChoices);
    answerChoices.appendChild(answerChoice1);
    answerChoices.appendChild(answerChoice2);
    answerChoices.appendChild(answerChoice3);
    answerChoices.appendChild(answerChoice4);

    $(answerChoices).on('click', ".answerChoiceBtn", function () {
        var chosenAnswer = this.id;
        console.log(chosenAnswer);
        if (chosenAnswer === "true") {
            //question is right
            var separationLineEl = document.createElement("hr");
            var correctAnswerMessageEl = document.createElement("p");
            correctAnswerMessageEl.textContent = "Correct Answer!";
            correctAnswerMessageEl.classList = "correct";

            mainBodySectionEl.appendChild(separationLineEl);
            mainBodySectionEl.appendChild(correctAnswerMessageEl);

            setTimeout(function () {
                if (i < questionArray.length) {
                    quizScreen(questionArray[i]);
                    i++;
                }
                else {
                    clearInterval(quizTimer);
                    console.log(timeLeft);
                    displayHighScoreFormPage();
                }
            }, 1500);
        }
        else {
            //question is wrong
            var separationLineEl = document.createElement("hr");
            var incorrectAnswerMessageEl = document.createElement("p");
            incorrectAnswerMessageEl.textContent = "Inorrect Answer! -10 seconds!";
            incorrectAnswerMessageEl.classList = "incorrect";

            mainBodySectionEl.appendChild(separationLineEl);
            mainBodySectionEl.appendChild(incorrectAnswerMessageEl);

            timeLeft = timeLeft - 10;
            var timerDisplay = document.querySelector("#timerDisplay");
            timerDisplay.classList = "incorrectTimer";


            setTimeout(function () {
                timerDisplay.classList = "timer purple-text";
                if (i < questionArray.length) {
                    quizScreen(questionArray[i]);
                    i++;
                }
                else {
                    clearInterval(quizTimer);
                    console.log(timeLeft);
                    displayHighScoreFormPage();
                }
            }, 1500);
        }
    })
}

var displayHighScoreFormPage = function () {
    clearPage();

    var highScoreFormHeaderEl = document.createElement("h2");
    highScoreFormHeaderEl.textContent = "All done!";
    var highScoreFormInformationEl = document.createElement("p");
    highScoreFormInformationEl.textContent = "Your final score is " + timeLeft + "!";
    var highScoreFormContainerEl = document.createElement("form");
    var highScoreFormLabelEl = document.createElement("label");
    highScoreFormLabelEl.textContent = "Enter your initials:";
    highScoreFormLabelEl.htmlFor = "highScoreInitials";
    var highScoreFormInputEl = document.createElement("input");
    highScoreFormInputEl.id = "highScoreInitials";
    highScoreFormInputEl.type = "text";
    highScoreFormInputEl.name = "highScoreInitials";
    var highScoreFormSubmitBtnEl = document.createElement("input");
    highScoreFormSubmitBtnEl.type = "button";
    highScoreFormSubmitBtnEl.value = "Submit";
    highScoreFormSubmitBtnEl.classList = "btn answerChoiceBtn";
    highScoreFormSubmitBtnEl.id = "submitInitials";

    mainBodySectionEl.appendChild(highScoreFormHeaderEl);
    mainBodySectionEl.appendChild(highScoreFormInformationEl);
    mainBodySectionEl.appendChild(highScoreFormContainerEl);
    highScoreFormContainerEl.appendChild(highScoreFormLabelEl);
    highScoreFormContainerEl.appendChild(highScoreFormInputEl);
    highScoreFormContainerEl.appendChild(highScoreFormSubmitBtnEl);

    $(highScoreFormSubmitBtnEl).on('click', function () {
        var initials = document.querySelector("input[id='highScoreInitials']").value;
        console.log(initials);
        var scoreObj = {
            initials: initials,
            score: timeLeft
        }
        console.log(scoreObj);
        scoresArr.push(scoreObj);
        console.log(scoresArr);
        localStorage.setItem("scores", JSON.stringify(scoresArr));
        displayHighScoreScreen();
    });
}

var clearPage = function () {
    mainBodySectionEl.innerHTML = "";
};

loadScores();
displayStartScreen();

$("button#highScoreBtn").click(function () {
    if (timeLeft === 75) {
        displayHighScoreScreen();
    }
    else {
        clearInterval(quizTimer);
        timeLeft = 75;
        displayHighScoreScreen();
    }
});
