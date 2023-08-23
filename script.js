const display = document.querySelector('#display');
let firstNumber = '';
let secondNumber = '';
let operator = '';

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function operate (operator, num1, num2) {
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
    } else {
        display.value += buttonText;
    }
}




