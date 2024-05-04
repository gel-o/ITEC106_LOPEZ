const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    attempts++;

    const userGuess = parseInt(document.getElementById('guessInput').value);
  
    const message = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = 'Please enter a valid number between 1 and 10.';
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! The correct number is ${randomNumber} with only ${attempts} attempt(s)!`;
        message.style.color = 'lightgreen';
        document.getElementById('guessInput').disabled = false;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try a higher number.';
    } else {
        message.textContent = 'Too high! Try a lower number.';   
    }
    document.getElementById('guessInput').value = '';
}