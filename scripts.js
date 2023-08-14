
const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
let currentExpression = "";

const calculatorButtons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '=', '.', '+', 
    'C'
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/* ... Previous JS up to calculatorButtons array ... */

const colors = [
    '#FF5733', '#33C2FF', '#FFC833', '#33FF57',
    '#9933FF', '#FF3393', '#FF9133', '#33FFA7',
    '#FF33D5', '#3357FF', '#E2FF33', '#33FFEF',
    '#FF3339', '#5DFF33', '#FF5E33', '#7533FF',
    '333FFF'
];

function populateButtons() {
    buttons.innerHTML = '';  // clear existing buttons
    const shuffledButtons = shuffleArray([...calculatorButtons]);
    const shuffledColors = shuffleArray([...colors]); // Shuffle colors as well

    shuffledButtons.forEach((label, index) => {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.style.backgroundColor = shuffledColors[index]; // Assign the color from the shuffled array

        btn.addEventListener('click', function () {
            if (label === '=') {
                try {
                    currentExpression = eval(currentExpression).toString();
                } catch (error) {
                    currentExpression = "Error";
                }
            } else if (label === 'C') {  // Clear functionality
                currentExpression = '';
            } else {
                currentExpression += label;
            }
            display.value = currentExpression;
        });
        buttons.appendChild(btn);
    });
}

populateButtons();
setInterval(populateButtons, 2000);  // reorganize every second
