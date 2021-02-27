// if (condition) {
//     statement;
    
// }

// antoherStatement;

// let year = prompt('In  which year was ECMAScript-2015 specification published?', '');
// if(year == 2015) {
//     alert('You are right!');
// }

// let year = +prompt('In  which year was ECMAScript-2015 specification published?', '');
// let answerIsRight = year === 2015;
// let answerIsWrong = year !== 2015;
// if(answerIsRight) {
//     alert('You are right!');
// }
// if(answerIsWrong) {
//     alert('Nope...');
// }

// let year = +prompt('In  which year was ECMAScript-2015 specification published?', '');
// let answerIsRight = year === 2015;
// if(answerIsRight){
//     alert('You are right!');
// } else {
//     alert('Nope...');
// }


//not the best solution, pretty ugly
let year = +prompt('Gimme the year');
if (year < 2015) {
    alert('Too early');
} else {
    if (year > 2015) {
        alert('Too late');
    } else {
        if (year == 2015) {
            alert("You're right!");
        }
    }
}


// remove curly braces
let year = +prompt('Gimme the year');
if (year < 2015) {
    alert('Too early');
} else if (year > 2015) {
    alert('Too late');
} else if (year == 2015) {
    alert("You're right!");
}

// remove curly braces, and last condition
let year = +prompt('Gimme the year');
if (year < 2015) {
    alert('Too early');
} else if (year > 2015) {
    alert('Too late');
} else {
    alert("You're right!");
}


let yearOfBirth = prompt('What year of birth?');
let message;
let isGenZ;
if(yearOfBirth > 2000) {
    message= "You're a Gen Z!";
} else {
    message= "You are not a Gen Z!";
}
alert(message);

//alternative
let yearOfBirth = prompt('What year of birth?');
let message;
if(yearOfBirth > 2021) {
    message= "You're not born yet!";
} else if (yearOfBirth > 2000) {
    message=("You're a Gen Z!");
} else {
    message= "You are not a Gen Z!";
}
alert(message);



let year = +prompt('Gimme the year');
let message;
if (year < 2015) {
    message = 'Too early';
} else if (year > 2015) {
    message='Too late';
} else {
    message="You're right!";
}
alert(message);

/**
 * Ternary operator (or conditional operator'?')
 */
let year = +prompt('Gimme the year?');
let message = year < 2015
    ? 'Too early'
    : (year > 2015
        ? 'Too late'
        : "You're right!");
alert(message);

let num1 = prompt('Gimme num1');
let num2 = prompt('Gimme num2');
num1 = Number(num1);
num2 = Number(num2);
let operation = prompt('Gimme operation', 'sum');
let result = operation === 'sum' ? num1 + num2 : num1 - num2;
alert(result);