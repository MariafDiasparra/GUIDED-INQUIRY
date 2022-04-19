// v easy Create two variables and assign a number to each.
//Console log the difference between the numbers.

var x = 6;
var y = 3;
var z = (x-y)

console.log (`The difference between ${x} and ${y} is ${z}`);


//easy Create two variables and assign a person’s name to each.
// Console log a statement that says which name is shorter or longer, and by how many characters.

var name1 = 'Maria';
var name2 = 'Antonio';

var length1 = name1.length;
var length2 = name2.length;
var lenDiff = Math.abs(length1-length2)

if (length1 > length2){
   console.log ( `The name ${name1} is longer than ${name2} by ${lenDiff} characters`)
}
else {
   console.log ( `The ${name1} is shorter than ${name2} by ${lenDiff} characters`)
};

//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither.
// Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

let userInput =prompt (`Are you shouting, whispering or talking normally`);

if (userInput === userInput.toUpperCase()){
    console.log( "Stop yelling at me")
} 
else if (userInput === userInput.toLowerCase()){
    console.log("Speak louder please")
}
else {
    console.log( "That's better")
};
//HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers,
//  one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

function add (num1, num2) {
    return num1+num2

}
console.log(add(2,3))

function substract (num1, num2) {
    return num1-num2

}
console.log(substract(9,5))

function multiply (num1, num2) {
    return num1*num2

}
console.log(multiply(3,1))

function divide(num1, num2) {
    return num1/num2
console.log("unreachable")
}
console.log(divide(10,5))

//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number,
// and then uses the functions created in the hard challenge to output the value in sentence form

let num1 = prompt ("GIVE ME A NUMBER" );
let operator = prompt ("enter either +, -, * or /")
let num2 = prompt ("GIVE ME ANOTHER NUMBER")

if (operator === "+"){
let result = add (parseInt(num1), parseInt(num2)) 
console.log(num1 +  " " + operator + " "  + num2 + " is " + result)
}

else if (operator === "-"){
    let result = substract (parseInt(num1), parseInt(num2)) 
    console.log(num1 +  " " + operator + " "  + num2 + " is " + result)    
}
else if (operator === "*"){
    let result = multiply (parseInt(num1), parseInt(num2)) 
console.log(num1 +  " " + operator + " "  + num2 + " is " + result)
}
else if (operator === "/"){
    let result = divide (parseInt(num1), parseInt(num2)) 
console.log(num1 +  " " + operator + " "  + num2 + " is " + result)
}
else {
console.log ("do it again my guy")
};