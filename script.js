let displayValue = 0;
let operator;
let a;
let b;
let operatorPressed = false;
let equalPressed = false;

const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.getElementById('output');
display.innerHTML = '';
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

numberButtons.forEach((button) => button.addEventListener('click', updateDisplay));

function updateDisplay(){
  const buttonClicked = document.getElementById(this.id).value
  if (operatorPressed === true) {
    display.innerHTML = '';
    operatorPressed = false;
  }
  display.innerHTML += buttonClicked;
}

//Get first value and operation to perform
operatorButtons.forEach((button) => button.addEventListener('click', getFirstValue));

function getFirstValue(){
  a = Number(display.innerHTML);
  return a;
}


operatorButtons.forEach((button) => button.addEventListener('click', getOperator));

function getOperator(){
  operator = this.innerHTML;
  operatorPressed = true;
  return operator;
}

//Get second value and send to calculator
equals.addEventListener('click', getSecondValue);

function getSecondValue() {
  b = Number(display.innerHTML);
  return b;
}


equals.addEventListener('click', function(e){
  let answer;
  equalPressed = true;
  
  if (operator === '+') {
    answer = a + b;
  } else if (operator === '-') {
    answer = a - b;
  } else if (operator === 'x') {
    answer = a*b;
  } else if (operator === '/') {
    if (b !== 0) {
      answer = a / b;
    } else {
      answer = "NOT A CHANCE!";
    }
  }

  display.innerHTML = answer;
  
});

// Clear screen
clear.addEventListener('click', function(e) {
  equalPressed = false;
  operatorPressed = false;
  display.innerHTML = '';
} )
