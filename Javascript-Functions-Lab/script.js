console.log("aa")

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if (age < 18) {
        return "Minor";
    } else { 
        return "Adult";   
    }

}

console.log(isAdult(21));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (input1) => {
    if ("a" === input1 || "e" === input1 || "i" === input1 || "o" === input1 || "u" === input1) {
        return true;
    }
}


console.log(isCharAVowel("a"));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
    return `${name}@${domain}`

}

console.log(generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (nameOfUser, timeOfDay) => {
    return `${timeOfDay}, ${nameOfUser}!`
}

console.log(greetUser("Sam", "Good morning"));

/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

const reverseString = (insertString) => {
    let theString = insertString.split('');
    theString = theString.reverse();
    theString = theString.join('');
    return theString;
}

console.log(reverseString("rockstar"));

/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

const checkPalindrome = (palindrome) => {
    let palindromeFunction = palindrome.split('');
    palindromeFunction = palindromeFunction.reverse();
    palindromeFunction = palindromeFunction.join('');
    if (palindromeFunction === palindrome) {
        return "true";
    } else { 
        return "false";
    }
}


console.log(checkPalindrome("radar"));

/* originally had console.log in place of return as i misunderstood when i heard that you could only have one return in a function. while i was aware that the function would run based on either or (true/false) i didnt realize that this meant the multiple lines featuring return did not clash with each other
*/


/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (a, b, c) => {
    return Math.max(a, b, c);
}

console.log(maxOfThree(5, 120, 8));

/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
const calculateTip = (billAmount, tipPercentage) => {
    let tip = tipPercentage/100;
    return (billAmount*tip);
}

console.log(calculateTip(50, 20));

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temp, celFar) =>
    {
        if (celFar === "C") {
            return (`${temp*1.8+32} Fahrenheit`);
        } else if (celFar === "F") {
            return (`${(temp-32)*5/9} Celsius`)
        }
    }


console.log(convertTemperature(32, "C"));


/*
Exercise 11: basicCalculator()

Create a function named basicCalculator. It should take three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). Perform the provided operation on the two numbers. In operations where the order of numbers is important, treat the first parameter as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (num1, num2, operation) => {
    let a = num1;
    let b = num2;
    let c = operation; 
    if (c === 'add') {
        return (`${a+b}`);
    } else if (c === "subtract") { 
      return (`${a-b}`);
    } else if (c === "divide") {
      return (`${a/b}`); 
    } else if (c === "multiply") {
      return (`${a*b}`)
    }
}


console.log(basicCalculator(1, 0, "subtract"));


/*
Exercise 12: calculateGrade()

Define a function called calculateGrade. It should take a numerical score and return the corresponding letter grade (A, B, C, D, F). For example, 90 and above yields an 'A', 80-89 is a 'B', and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
  let grade = score;

  if (grade >= 90) {
    return "A";
  } else if (grade >= 80 && grade < 90) {
    return "B";
  } else if (grade >= 70 && grade < 80) {
    return "C";
  } else if (grade >= 60 && grade < 70) {
    return "D";
  } else if (grade < 60) {
    return "F";
  }

}


console.log(calculateGrade(100));

// alt simplified way 

const calculateGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calculateGrade(100)); // Output: A