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

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 === 0) {
                return 'Error';
            }
            return divide(num1, num2);
        default:
            return  'Invalid Operator';
    }
}

function handleButtonClick (event) {
   const buttonText = event.target.textContent;
   display.value += buttonText;
   if ([ '+', '-', '*', '/' ].includes(buttonText)) {
         firstNumber = display.value;
         operator = buttonText;
         display.value = '';
   } else if (buttonText === '=') {
         secondNumber = display.value;
         display.value = operate(operator, firstNumber, secondNumber);
   } else if (buttonText === 'C') {
         display.value = '';
         firstNumber = '';
         secondNumber = '';
         operator = '';
   }
}


