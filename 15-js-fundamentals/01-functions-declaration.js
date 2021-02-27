function showMessage() {
    console.log
}

showMessage()

let num;

function showTwo() {
    num = 2;
    console.log(num);
}


// falta coisas

function sayHello(who) {
    console.log('Hello ${who}!');
}

let name = 'world';

sayHello(name);

function incrementAndSum(x, y) {
    x += 1;
    y += 1;
    console.log(x + y);
}

let x = 2;
let y = 3;
incrementAndSum(2, 3);

function incrementAndSum() {
    x += 1;
    y += 1;
    console.log(x + y);
}

let x = 2;
let y = 3;
incrementAndSum();

function sum(x, y) {
    if (x === undefined || x === null || x === '') /* or (!x) */{
        y = 0;
    }

    if ( y === undefined || y === null || y === '') {
        x = 0; 
    }
    
    console.log( x + y);
}

sum(2, 3);
sum(2);
sum(undefine, 3);
sum();


/* falta coisas */





/** Calculate the hypothenuse of a right triangle
 * 
 * 
 *       
 *       ________________ 
 * h = \|(leg1^2 + leg^2)
 */

 `
 |\
 | \
 |  \
 +---+
`

//const leg1 = prompt('Give me leg1');

function calculateHypothenuse(leg1, leg2) {
    const h = Math.sqrt(leg1 ** 2 + leg2 ** 2);
}

const leg1 = prompt();
const leg2 = prompt();

calculateHypothenuse(leg1, leg2);
