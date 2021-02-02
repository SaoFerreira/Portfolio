let user = prompt("Hi! I'm a calculator, please test me! Write Yes or No");
 let message;
 let result;
 let operation;

 if (user = 'Yes' || 'yes') {
    let operation = prompt("Let's go! What is the operation do you me to do?");
    let num1 = prompt('Gimme num1');
    let num2 = prompt('Gimme num2');
    num1 = Number(num1);
    num2 = Number(num2); 
 }  if (operation === 'sum') {
     alert(num1 + num2);
     
 } 
else if (talk = 'No' || 'no') {
     message="That's a shame, bye!";
 }  
    alert(message);




alert("Hi! I'm a calculator, please test me!");
let user = prompt("Can you? Yes or No?")
let operation;
let result;

switch (user) {
    case 'No':
        alert("That's a shame, bye!");
        break;
    case 'Yes':
        let operation = prompt("Let's go! What is the operation do you me to do? +;-;/;*?");
        let num1 = prompt('Please write the first number');
        let num2 = prompt('Please write the second number');
        num1 = Number(num1);
        num2 = Number(num2);
        if (operation === '+') {
        result = num1 + num2;
        } else if (operation === '-') {
            result = num1 - num2;
        } else if (operation === '/') {
            result = num1 / num2;
        } else if (operation === '*') {
            result = num1 * num2;
        }    
        alert(result);
        break;
    default:
        alert("Please insert a valid operation");
 }
 alert("Don't forget to study some math!");


        


   
    

