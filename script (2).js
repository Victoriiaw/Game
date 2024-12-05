let randomNumber = Math.floor(Math.random() * 100) + 1; // Загаданное число
let attempts = 0; // Счетчик попыток

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const messageDisplay = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

guessButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = "Пожалуйста, введите число от 1 до 100.";
    } else if (userGuess === randomNumber) {
        messageDisplay.textContent = Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток!;
        endGame();
    } else if (userGuess < randomNumber) {
        messageDisplay.textContent = "Слишком низкое число! Попробуйте еще раз.";
    } else {
        messageDisplay.textContent = "Слишком высокое число! Попробуйте еще раз.";
    }
}

function endGame() {
    guessInput.disabled = true; // Отключаем ввод
    guessButton.disabled = true; // Отключаем кнопку
    restartButton.style.display = 'block'; // Показываем кнопку перезапуска
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Загадать новое число
    attempts = 0; // Сбросить счетчик попыток
    guessInput.value = ''; // Очистить ввод
    messageDisplay.textContent = ''; // Очистить сообщение
    guessInput.disabled = false; // Включить ввод
    guessButton.disabled = false; // Включить кнопку
    restartButton.style.display = 'none'; // Скрыть кнопку перезапуска
}

// Начальная установка
restartGame();
