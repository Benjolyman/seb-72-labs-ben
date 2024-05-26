
/*
As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.
*/

/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const displayInput = document.querySelectorAll('.display')

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
function handleNumber(number)

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent;

      if (button.classList.contains('number')) {
        handleNumber(buttonText);
      } else if (button.classList.contains('operator')) {
        handleOperator(buttonText);
      } else if (button.classList.contains('equals')) {
        handleEquals();
      }
      updateDisplay();
    });
  });
//rules

//upon entering a number and clicking on a function. the function will clear the number from the display and store it in memory

//clear will clear memory 

