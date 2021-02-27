/**
 * Calculator is a webapp that asks for two numbers and
 * performs a specific operation on them.
 * 
 * The available operations are:
 * - sum
 * - subtraction
 * - division
 * - power
 * - remainder
 * - ...
 * 
 * You can use an if-else cascade, or the ternary operator (not suggested)
 */

  
let user = alert("Hi! I'm a calculator, let's do some calculations!");
let operation = prompt('Please choose one of this operations: sum, subtraction, division, multiplication, power or remainder');
let num1 = prompt('Please write the first number');
let num2 = prompt('Please write the second number');
    num1=Number(num1);
    num2=Number(num2);
let result; 


if (operation === 'sum') {
    result= num1 + num2;
}

else if (operation === 'subtraction') {
    result= num1 - num2;
}
else if (operation === 'division') {
    result= num1 / num2;
}

else if (operation === 'multiplication') {
    result= num1 * num2;
}

else if (operation === 'power') {
    result= num1 ** num2;
}
else if (operation === 'remainder') {
    result= num1 % num2;
}

else if (operation != 'sum' & operation !='subtraction' 
& operation !='division' & operation !='multiplication' & operation !='power' & operation !='remainder') {
    result= "Please insert a valid operation";
}

alert(result);
let finalMessage =alert("Don't forget to study some math!");




//Another try

let user = alert("Hi! I'm a calculator, let's do some calculations!");
let operation = prompt('Please choose one of this operations: sum, subtraction, division, multiplication, power or remainder');
let num1 = prompt('Please write the first number');
let num2 = prompt('Please write the second number');
    num1=Number(num1);
    num2=Number(num2);
let result; 


if (operation === 'sum') {
    result= num1 + num2;
}

else if (operation === 'subtraction') {
    result= num1 - num2;
}
else if (operation === 'division') {
    result= num1 / num2;
}

else if (operation === 'multiplication') {
    result= num1 * num2;
}

else if (operation === 'power') {
    result= num1 ** num2;
}
else if (operation === 'remainder') {
    result= num1 % num2;
}

else if (operation === "") {
    result= "Please insert a valid operation";
}

alert(result);
let finalMessage =alert("Don't forget to study some math!");

// Switch

let num1 = +prompt('First operand');
let num2= +prompt('Second operand');


