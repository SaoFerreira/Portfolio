/**
 * Print all numbers from 0 to 10 (excluded).
 * Try with a while loop, then with a for loop.
 */

 //while loop
 let i = 0
 while ( i < 10) {
    alert(i);
    i++
 }

 // for loop
 for (let i = 0; i < 10; i++) { 
  alert(i);
}

 
/**
 * Print all numbers from 10 to 0 (excluded), reversed.
 * Try with a for loop, then with a while loop.
 */

for(let i = 10; i> 0; i--) {
    console.log(i);
}

// while loop
let i=9
while (i >= 0) {
    alert(i);
    i--
}

/**
 * Print even numbers from 0 to 10 (excluded) with a for loop.
 * There are at least 3 possible solutions, can you find them all?
 */

 // i = 0 -> 0
 // i = 2 -> 2
 // i = 4 -> 4
 // i = 6 -> 6
 // i = 8 -> 8
 // i = 10 -> end

 for (let i = 0; i < 10; i+=2) {
     alert(i);
 }

 for (let i=0; i<10; i++) {
     if (i % 2 == 0);
     alert(i);
 }

 for (let i = 0; i < 5; i++) {
    alert(i); 
}


/**
 * Guess the number: Prompt the user for a number until it equals the secret number or it's a falsy value
 * 
 * HINT: "until" something is true means "while" the same is false, and viceversa!
 */

 // breaking condition: falsy value OR number was correct
 // guessedNumber === 0 || guessedNumber === secretNumber
 // continuing condition: is the opposite
 // !(guessedNumber || guessedNumber === secretNumber)
 // guessedNumber && guessedNumber |== secretNumber

 let secretNumber = 7;
 let guessedNumber = +prompt('Give me a number between 1 and 10');
 while (guessedNumber && guessedNumber !== secretNumber) {
     guessedNumber = +prompt('Sorry, not the right number, please try again');
 }

 if (guessedNumber === secretNumber) {
     alert('You got it!');
 } else {
 alert("You gave up :'(");
 }

/**
 * Sum all numbers from 1 to 5
 *
 * HINT: use a variable to accumulate partial results
 */

 let sum = 0;
 for (let number = 1; number < 5; number++) {
     sum += number;
 }
 console.log(sum);

/**
 * Build a string that looks like this:
 * "Na Na Na Na Na (...16 times) Batman!"
 * The string should be built by looping 16 times,
 * and at the end of the loop I want to print the result to the 
 * 
 * HINT: we can use string concatenation to build strings
 */

 let string = '';
 for (let i = 0; i<16; i++) {
     string += 'Na ';
 }
 string += 'Batman!';
 console.log(string);