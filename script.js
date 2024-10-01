let randomNumber;
let attempts;

document.getElementById('submitGuess').addEventListener('click', submitGuess);
document.getElementById('restart').addEventListener('click', startGame);

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restart').style.display = 'none';
}

function submitGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        document.getElementById('feedback').textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('restart').style.display = 'inline';
    } else if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('feedback').textContent = 'Too high! Try again.';
    }
    
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
}

// Start the game on load
startGame();
