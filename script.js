//simple arithmetic
let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

let firstNum = null;
let operation = null;
let secondNum = null;
let newNumber = true;

let operate = (operator, firstNum, secondNum) => {
    if (firstNum == null || secondNum == null) {
        return "Invalid input";
    }
    
    let a = parseFloat(firstNum);
    let b = parseFloat(secondNum);

    if (isNaN(a) || isNaN(b)) {
        return "Invalid number(s)";
    }

    if (operator === '+') return add(a,b);
    else if (operator === '-') return subtract(a,b);
    else if (operator === '*') return multiply(a,b);
    else if (operator === '/') return b === 0 ? "Cannot divide by zero" : divide(a,b);
    else return "OOPS!";
}

let clearDisplay = () => {
    document.querySelector("#display").textContent = "0";
}

let reset = () => {
    clearDisplay();
    firstNum = null;
    operation = null;
    secondNum = null;
    newNumber = true;
}

let fillDisplay = () => {
    const display = document.querySelector("#display");
    const operators = document.querySelectorAll(".operator");
    const numbers = document.querySelectorAll(".num");
    
    clearDisplay();

    // Handle number clicks
    numbers.forEach(number => {
        number.addEventListener("click", () => {
            let numTxt = number.textContent.trim();
            if (newNumber || display.textContent === "0") {
                display.textContent = numTxt;
                newNumber = false;
            } else display.textContent += numTxt;
        });
    });

    // Handle operator clicks
    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            let opTxt = operator.textContent.trim();

            if (opTxt === "clear") {
                reset();
                return;
            }

            if (opTxt === "=") {
                if (operation && firstNum) {
                    secondNum = display.textContent;
                    let result = operate(operation, firstNum, secondNum);
                    display.textContent = result;
                    
                    firstNum = result;
                    operation = null;
                    secondNum = null;
                    newNumber = true;
                }
            } else {
                // Handle arithmetic operators
                operation = opTxt;
                firstNum = display.textContent;
                newNumber = true;
            }
        });
    });
}

fillDisplay();