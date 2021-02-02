/**
 * Grades is an application that asks the user for grades until the user cancels, and then
 * calculates the average of all graders.
 * 
 * The average is calculate like this:
 * 
 * avg = (grade1 + grade2 + ...) / numberofgrades
 */

alert("Let's see if you passed this year?");
let numClasses = prompt("Please say how many classes you have");
numClasses = Number(numClasses);
let numGrades
let totalGrades=0
While (true) {
    numGrades = prompt("Please insert your grade");
    numGrades = Number(numGrades);
    if (numClasses === numGrades) break;
    totalGrades += numGrades
}

let media = totalGrades / numClasses;
 alert(media)






 
 let totalNumberOfGrades = prompt("Insert number of classes");
totalNumberOfGrades=Number(totalNumberOfGrades);
let userInput 
let totalSumofGrades = 0
while (true) {
    userInput = prompt ("Insert a new grade or say No when you don't have any more grades to add");
    userInput = Number(userInput);
if (!userInput) break;
totalSumofGrades+=userInput
}

let average = totalSumofGrades / totalNumberOfGrades;
alert (average);