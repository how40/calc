
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


//fill display when button clicked
let fillDisplay = () => {

    const display = document.querySelector("#display");
    const operators = Array.from(document.querySelectorAll(".operator"));
    const numbers = Array.from(document.querySelectorAll(".num"))
    display.textContent = "0"//initialized blank display

    for(let i = 0; i < numbers.length; i++) { //add event listener to every number
        numbers[i].addEventListener("click", () => { //any time a button is clicked, add its value to the display
            let txt = numbers[i].textContent;
            if (display.textContent === "0") display.textContent = "";
            display.textContent += txt;
            let displayVal = display.textContent; //val on display.. duh
        })

    for(let i = 0; i < operators.length; i++) { //add event listener to every operator
        operators[i].addEventListener("click", () => {
            let txt = operators[i].textContent;
            if (txt === 'clear') display.textContent = "⠀";
            else { //operator selected
                numOne = display.textContent;
                console.log("numOne: " + numOne);
                let selected = txt;
                console.log("selected operator: " + selected);
                display.textContent = "⠀"
            }
        })
    }
}
 

}//EOF

fillDisplay();