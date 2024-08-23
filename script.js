
//simple arithmetic
let add = (a,b) => a + b;

let subtract = (a,b) => a - b;

let multiply = (a,b) => a * b;

let divide = (a,b) => a / b;

let firstNum;
let operator;
let secondNum;

let operate = (operator, firstNum, secondNum) => {
    if (operator === '+') return add(firstNum,secondNum);
    else if (operator === '-') return subtract(firstNum,secondNum);
    else if (operator === '*') return multiply(firstNum,secondNum);
    else if (operator === '/') return divide(firstNum,secondNum);
    else return "OOPS!";
}

let fillDisplay = () => {
    
}