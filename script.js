// Variables
const display = document.querySelector('#display');
let firstNumber = '';
let secondNumber = '';
let operator = '';

// Basic Arithmetic Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Operation Function
function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                return 'Error';
            }
            result = divide(num1, num2);
            break;
        default:
            return 'Invalid Operator';
    }
    return Math.round(result * 100) / 100;  // rounding to 2 decimal places
}

// Button Click Event Handler
function handleButtonClick(event) {
    const buttonText = event.target.textContent;

    if (['+', '-', '*', '/'].includes(buttonText)) {
        if (firstNumber && operator) {
            secondNumber = display.value;
            let result = operate(operator, firstNumber, secondNumber);
            display.value = result;
            firstNumber = result;
            secondNumber = '';
        } else {
            firstNumber = display.value;
        }
        operator = buttonText;
        display.value = ''; // Clear the display for the next number input

    } else if (buttonText === '=') {
        secondNumber = display.value;
        if (firstNumber && operator && secondNumber) {
            let result = operate(operator, firstNumber, secondNumber);
            display.value = result;
            firstNumber = result;
            operator = '';
            secondNumber = '';
        }

    } else if (buttonText === 'C') {
        display.value = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';

    } else if (buttonText === '.') {
        if (!display.value.includes('.')) {
            display.value += buttonText;
        }
        return;

    } else if (buttonText === '←') {
        display.value = display.value.slice(0, -1);
        return;

    } else {
        display.value += buttonText;
    }
}

// Keyboard Event Listener
document.addEventListener('keydown', function(event) {
    let key = event.key;

    if (['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'].includes(key)) {
        if (key === '.' && display.value.includes('.')) {
            return; // Don't add multiple decimal points
        }
        display.value += key;

        if (['+','-','*','/'].includes(key)) {
            if (firstNumber && operator) {
                secondNumber = display.value;
                let result = operate(operator, firstNumber, secondNumber);
                display.value = result;
                firstNumber = result;
                secondNumber = '';
                operator = key;
            } else {
                firstNumber = display.value;
                operator = key;
            }
            display.value = '';
        }
        
    } else if (key === 'Enter') { // The "Enter" key can act as "="
        secondNumber = display.value;
        if (firstNumber && operator && secondNumber) {
            let result = operate(operator, firstNumber, secondNumber);
            display.value = result;
            firstNumber = result;
            operator = '';
            secondNumber = '';
        }

    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);

    } else if (key === 'Escape') { // The "Escape" key can act as "Clear"
        display.value = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
    }

});



