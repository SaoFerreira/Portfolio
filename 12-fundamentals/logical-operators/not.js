let year = 1982;
let isGenz = year > 2000;
let isNotGenz = !isGenz; // year <= 2000;

let myVariable;

/* Using strict inequality */
//let hasAValue = myVariable !== undefined && myVariable !== null;

/* Unsing strict equality */
//let hasAValue = !(myVariable === undefined) && !(myVariable === null);

/*DeMorgan Law */
//let hasAValue = !(myVariable === undefined || myVariable === null);

/* Reeeeally explicit */
let isUndefined;
let isNull = myVariable === undefined;
let hasNoValue = isUndefined || isNull;
let hasAValue = !hasNoValue;

/* The most concise */
let hasAValue = myVariable != null;

if(hasAValue) {
    alert(myVariable);
}