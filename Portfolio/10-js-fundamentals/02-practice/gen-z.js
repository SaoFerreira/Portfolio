/**
 * GenZ is an application that asks  the user for their year
 * * of birth, then outputs true if the user is a GenZ and false if
 * the user is not a GenZ.
 * 
 * A GenZ is anybody born after the year 2000.
 */


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
