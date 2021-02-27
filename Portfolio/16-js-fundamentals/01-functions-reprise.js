/* without fumctions */
console.log('Hello world'.toUpperCase());
console.log('Did you get it?'.toUpperCase());
console.log('Then let\'s move on!'.toUpperCase());


/* with fumctions */
shout('Hello world'());
shout('Did you get it?'());
shout('Then let\'s move on!'());

function shout(str) {
    const shoutedStr = str.toUpperCase();
    return shoutedStr;
}

