const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice  
  generateComputerChoice();
  getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; //Or we can do... || * possibleChoices.length) + 1 ||
  //Without .floor after Math it will not return a repsonse for computer choice
    if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'rock'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
  }

function getResult() {
    if (computerChoice === userChoice) {
        result = 'DRAW!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "Winner :)"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "Loser :P"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "Winner :)"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result =  "Loser :P"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "Winner :)"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "Loser :P"
    } 
    resultDisplay.innerHTML = result;
}


