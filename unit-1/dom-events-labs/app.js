
/*
As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.
*/



let num1 = '';
let num2 = '';
let operator = '';
let result = 0;



const calcDisplay = document.querySelector('.display');
const calculator = document.querySelector('#calculator')

function calculate(a, b, operation) {
  if (operation === '+') {
    return a+b;
  }
  if (operation === '-') {
    return a-b;
  }
  if (operation === '*') {
    return a*b;
  }
  if (operation === '/') {
    return a/b;
  }

};



calculator.addEventListener('click', (event) => {

  if (event.target.classList.contains('number')) {
    if (operator === ''){
      num1 += event.target.innerText;
      calcDisplay.innerText = num1;
    } else {
      num2 += event.target.innerText;
      calcDisplay.innerText = num2;
    };

  }

  if (event.target.classList.contains('operator')) {

    if (event.target.innerText === 'C') {
      num1 = '';
      num2 = '';
      operator = '';
      result = 0;
      calcDisplay.innerText = '';
    } else {
      operator = event.target.innerText;
      calcDisplay.innerText = '';
    }
  }

  if (event.target.classList.contains('equals')) {
    result = calculate(Number(num1), Number(num2), operator);
    calcDisplay.textContent = result;
    num1 = result;
    num2 = '';
    operator = '';
  }

})

