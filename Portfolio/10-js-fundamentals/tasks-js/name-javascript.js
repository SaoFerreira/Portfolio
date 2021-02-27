/*Using the if..else construct, write the code which asks: 
‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, 
otherwise – output: “You don’t know? ECMAScript!”
*/

let namejs = prompt(`What is the "official" name of JavaScript?`, '');
if (namejs === 'ECMAScript') {
    alert('Right!');
} else {
    alert (`You don't know? "ECMAScript!"`);
}