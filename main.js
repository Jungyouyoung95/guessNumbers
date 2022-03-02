let randomNumber = Math.floor(Math.random() * 100 + 1);
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = '기 입력값: ';
    }
    guesses.textContent += userGuess + ' ';
    
    if (userGuess === randomNumber) {
        lastResult.textContent = '축하합니다. 정답입니다!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '안타깝네요. 10회의 기회를 다 쓰셨습니다.';
        setGameOver();
    } else {
        lastResult.textContent = '오답!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
        lowOrHi.textContent = '입력값이 정답보다 작습니다!';
        } else if(userGuess > randomNumber) {
        lowOrHi.textContent = '입력값이 정답보다 큽니다!';
        }
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
}        

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '게임 재시작';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);