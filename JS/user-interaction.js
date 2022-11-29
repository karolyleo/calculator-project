// const operand1 = prompt("Enter the First Value");
// if (isDigit(operand1) == false) {
//     alert("Wrong input at operand 1| Not an integer Value");
// }
// const operand2 = prompt("Enter the Second Value");
// if (isDigit(operand2) == false) {
//     alert("Wrong input at operand 2| Not an integer Value");
// }
//
// let stringOne = prompt("What is your first number?");
// let stringTwo = prompt('What is your second number?');
// let NumOne = parseInt(stringOne), NumTwo = parseInt(stringTwo);
// if ((typeof(NumOne) !== "number") ||(typeof(NumTwo) !== "number")){
//     alert("Try typing in numbers...")
// } else {
// let operation = prompt(`What operation do you want to do?
// For addition type "add"`);
// switch(operation){
//     case "add":
//         let sum = add(NumOne, NumTwo)
//         alert(sum);
//         console.log(sum);
//     break;
//     default :
//         alert(`I don't understand what operation you want to preform`)
// }}
const operation = prompt(`Enter the operator that you want to use:
addition as + 
subtraction as -
multiplication as *
division as /`);

let num1 = prompt("Enter the First Value");
if (isDigit(num1) == false) {
    alert("Wrong input at operand 1| Not an integer Value");
    num1 = prompt("Enter the First Value");
}
let num2 = prompt("Enter the Second Value");
if (isDigit(num2) == false) {
    alert("Wrong input at operand 2| Not an integer Value");
    num2 = prompt("Enter the Second Value");
}

var result;switch (operation) {
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "+":
        result = parseInt(num1) + parseInt(num2);
        break;
    case "-":
        result = num1 - num2;
        break;
    default:
        alert("Invalid Operator!");
        break;
}

alert("The result is : " + result);

function isDigit(input) {
    let num = parseInt(input);
    return (typeof(num)==="number") ? num : false
}