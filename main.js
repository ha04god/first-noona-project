//random number
//user input number and press go button
//if number is right true
//random number < guess number Down!
//random number < guess number Up!
//press Reset button game reset 
//after 5 chances game over (no more guess, button disable)
//user input outside of 1 to 100, notice , give chance
//user input number same number, notice and give chance

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultsArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {
    userInput.value = "";
})

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100 + 1);
    console.log("Right" , computerNum);
}

function play() {
    let userValue = userInput.value;
   
    if(userValue < 1 || userValue > 100){
        resultsArea.textContent = "Enter the number between 1 to 100";
        return;
    }

    if(history.includes(userValue)) {
        resultsArea.textContent = "This number is already entered. Please enter a different number.";
        return;
    }

    chances--;
    chanceArea.textContent = `left chance: ${chances}`;
    console.log("chance", chances);

    if(userValue < computerNum) {
        resultsArea.textContent = "UP!";

    }
    else if(userValue > computerNum) {
        resultsArea.textContent = "DOWN!";
    }
    else {
        resultsArea.textContent = "You got it!!!";
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances < 1) {
        gameOver = true;
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    //clean user input box
    userInput.value = "";
    //produce new number
    pickRandomNum();

    resultsArea.textContent = "Reset!";
}

pickRandomNum();

