const colorValue = document.getElementById('input-color');
const grid = document.querySelector('.grid');

let activeColor = '#ffffff';

// Set color
function changeColor(color) {
    console.log(color)
    grid.style.backgroundColor = color;
    activeColor = color;
}

colorValue.addEventListener('change', () => changeColor(colorValue.value));

// Create grid - div elements
const number = parseInt(prompt('Type a number of squares per side for the grid 🖌️'));
for (let i = 0; i < Math.pow(number, 2); i++) {
    const newSquares = document.createElement('div');
    newSquares.className = 'square';
    grid.appendChild(newSquares);
}

grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;


// Paint squares
const squares = document.querySelectorAll('.square');

function paintSquare(square) {
    square.style.backgroundColor = activeColor;
};

squares.forEach(square => square.addEventListener('dragover', () => paintSquare(square)));

// RESET
const resetButton = document.getElementById('reset-btn');

resetButton.addEventListener('click', () => location.reload());