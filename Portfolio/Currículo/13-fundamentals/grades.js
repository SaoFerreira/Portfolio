/**
 * Grades is an application that asks the user for grades until the user cancels, and then
 * calculates the average of all graders.
 * 
 * The average is calculate like this:
 * 
 * avg = (grade1 + grade2 + ...) / numberofgrades
 */


// First Solution
let NumOfSubjects = prompt("Insert number of subjects");
NumOfSubjects=Number(NumOfSubjects);
let grades 
let totalSumofGrades = 0
while (grades != null && grades !== "" && grades >= 0) {
    grades = prompt ("Insert a grade or say stop to see the result");
    grades = Number(grades); 
    if (!grades) 
    break;
    totalSumofGrades+=grades
}

let average = totalSumofGrades / NumOfSubjects;
alert (average);



//another try

alert("Let's calculate your average grade!");
let NumOfSubjects = prompt("How many subjects you have?");
NumOfSubjects = Number(NumOfSubjects);
let counterSubjects = 0;
let totalSumOfGrades = 0;
let grade;

while (counterSubjects < NumOfSubjects) { 
    grade = prompt ("Insert a grade");
    grade = Number(grade);
    if (grade > 20 || grade < 0 ) {
        alert ("Please insert a valid grade between 0 and 20");
        continue;
    }
    counterSubjects++;
    totalSumOfGrades += grade;
}

let average = totalSumOfGrades / NumOfSubjects;
alert (average.toFixed(2));
