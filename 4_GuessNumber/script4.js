let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numguess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a number");
  } else if (guess < 1) {
    alert("Please enter valid a number");
  } else if(guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    prevGuess.push(guess)
    if(numguess === 11) {
        displayGuess(guess)
        displayMessage(`Game over. Random Number was ${randomNumber}`)
        endGame()
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber) {
    displayMessage(`You Guesses it right`)
    endGame()
  } else if(guess < randomNumber) {
    displayMessage(`Number is tooo low`)
  } else if(guess > randomNumber) {
    displayMessage(`Number is tooo high`)
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numguess++;
  remaining.innerHTML = `${11 - numguess}`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess= []
    numguess  = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numguess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
  })
}
