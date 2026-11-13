let UserNumber = Number(prompt("Enter a number "));
let AnswerNumber = 10;  

if (UserNumber > AnswerNumber) {
    alert("You are too high");
} 
else if (UserNumber < AnswerNumber) {
    alert("You are too low");
} 
else if (UserNumber === AnswerNumber) {
    alert("You are right");
} 
else {
    alert("Please enter a valid number!"); 
}