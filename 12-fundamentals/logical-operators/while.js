while (condition) {
    something;
}

and the something else;

/**
 * Do-while loop - generic form
 */

do {
    something;
}

and the something else;

/**
 * Do-while loop - generic form
 */

for (begin; condition; stop) {
    body;
}

let i = 0 // begin
while ( i < 3) { // condition
    alert(i); // body
    i++; // step
}

for (let i = 0; 1 < 3; i++) {
    alert(i);
}

// FALTA COISAS!!

let i = 0 // we have i already 


// falta coisas !!

for (;;) {
    console.log('Infinite loop');
}

while (true) {
    console.log('Infinite loop');
}

let gameOver = false;

while (!gameOver) {
    let answer = prompt('Do you still want to play?');
    switch (answer) {
        case 'no' :
            gameOver = true;
            break;

        default:
            alert('Still playing');
    }
}

alert('Bye!');

//another try


let gameOver = false;

while (!gameOver) {
    let answer = prompt('Do you still want to play?');
    switch (answer) {
        case 'no':
        case 'No':
        case 'NO':
        case 'nope':
        case 'No way':
            gameOver = true;
            break;

        default:
            alert('Still playing');
    }
}

alert('Bye!');

// swtich to a for loop


let gameOver = false; // begin

while (!gameOver) { // condition
    let answer = prompt('Do you still want to play?');
    switch (answer) {
        case 'no' :
            gameOver = true; // step
            break;

        default:
            alert('Still playing');
    }
}

alert('Bye!');

//write for loop

for (let gameOver = false; !gameOver;) {
    let answer = prompt('Do you still want to play?');
    switch (answer) {
        case 'no':
        case 'No':
        case 'NO':
        case 'nope':
        case 'No way':
            gameOver = true;
            break;

        default:
            alert('Still playing');
    }
}