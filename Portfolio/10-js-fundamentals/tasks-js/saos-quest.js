/**
 * Sao's quest is about askintg the user for the number of values to sum
 * and then sum them all and provide the result as output.
 * 
 * Example: the user inputs 3, then the app asks for the numbers
 * (and I want to ask 3 times, because that was what the user said).
 * Question: Can I use "while" to say : while the number of inputs is
 * not equal to numvalue, ask for numbers.
 */

 
let userInput = prompt("How many numbers do you want to sum?");
userInput = Number(userInput);
let number;
let counter = 0;
let sum = 0;
while ( counter < userInput) { 
    number = prompt ("Insert a number");
    number = Number(number);
    counter++;
    sum += number;
}

alert (sum);

