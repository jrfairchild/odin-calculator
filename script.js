let displayValue = 0;

const numberButtons = document.querySelectorAll('button');
const display = document.getElementById('output');

numberButtons.forEach((button) => button.addEventListener('click', updateDisplay))

function updateDisplay(){
  display.innerHTML = "yes";
}



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

function operate(operator, a, b) {
  switch(operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      break;
  }
}