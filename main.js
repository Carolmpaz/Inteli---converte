// Use fixed binary numbers
const binaryNumbers = ['0010', '0000', '0001', '1001'];

// Reference to the game container
const gameContainer = document.getElementById('game-container');

// Create input fields for each binary number
binaryNumbers.forEach((binary, index) => {
    const container = document.createElement('div');
    container.className = 'input-container';

    const binaryText = document.createElement('span');
    binaryText.className = 'binary-number';
    binaryText.textContent = `Binary: ${binary}`;

    const input = document.createElement('input');
    input.type = 'number';
    input.id = `answer-${index}`;
    input.placeholder = 'Enter decimal value';

    container.appendChild(binaryText);
    container.appendChild(input);
    gameContainer.appendChild(container);
});

// Function to check answers
function checkAnswers() {
    let correct = 0;
    const decimalAnswers = [];

    binaryNumbers.forEach((binary, index) => {
        const userAnswer = document.getElementById(`answer-${index}`).value;
        const correctAnswer = parseInt(binary, 2);

        if (parseInt(userAnswer) === correctAnswer) {
            correct++;
            decimalAnswers.push(correctAnswer); // Salva a resposta correta
        }
    });

    const resultDiv = document.getElementById('result');
    if (correct === binaryNumbers.length) {
        resultDiv.textContent = `Parabéns! A sua senha é: ${decimalAnswers.join('')}`;
        resultDiv.style.color = 'white';
    } else {
        resultDiv.textContent = `Você acertou ${correct} de ${binaryNumbers.length} digítos. Tente novamente!`;
        resultDiv.style.color = 'white';
    }
}
