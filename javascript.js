//functions------------
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function operate(numberOne, operater, numberTwo) {
    switch (operater) {
        case "+":
            add(numberOne, numberTwo);
            break;
        case "-":
            subtract(numberOne, numberTwo);
            break;
        case "*":
            multiply(numberOne, numberTwo);
            break;
        case "/":
            divide(numberOne, numberTwo);
            break;
    }
}

//globalVarables--------------
var operater = "";
var numberOne = "";
var numberTwo = "";
var displayContent = "empty";

//main
//Creating UI
const body = document.querySelector("body");
const containor = document.createElement("calculator");
const display = document.createElement("display");
const keypad = document.createElement("keypad");
const leftDiv = document.createElement("leftPad");

const rightDiv = document.createElement("rightPad");
const calculatorButtons = [];

for (let i = 0; i < 10; i++) {
    let button = document.createElement("button");
    button.textContent= i;
    calculatorButtons.push(button);
}

let clear = document.createElement("button");
clear.textContent = "AC";

let equal = document.createElement("button");
equal.textContent = "=";

let division = document.createElement("button");
division.textContent = "/";
division.style.backgroundColor = "coral";

let multipication = document.createElement("button");
multipication.textContent = "*";
multipication.style.backgroundColor = "coral";

let subtraction = document.createElement("button");
subtraction.textContent = "-";
subtraction.style.backgroundColor = "coral";

let addition = document.createElement("button");
addition.textContent = "+";
addition.style.backgroundColor = "coral";

//add event code to each button
calculatorButtons.forEach(button => {
    //event code
    button.addEventListener("click", () => {
        if (parseInt(button.textContent) !== NaN) {
            if (numberOne !== null) {
                numberOne += parseInt(button.textContent);
                displayContent += parseInt(button.textContent);
            }
        }
    })
})
//build ui (append divs)
containor.appendChild(display);
for (let i = 1; i < calculatorButtons.length; i++) {
    leftDiv.appendChild(calculatorButtons[i]);
}
leftDiv.appendChild(calculatorButtons[0]);
leftDiv.appendChild(clear);
leftDiv.appendChild(equal);

rightDiv.appendChild(division);
rightDiv.appendChild(multipication);
rightDiv.appendChild(subtraction);
rightDiv.appendChild(addition);

keypad.appendChild(leftDiv);
keypad.appendChild(rightDiv);

containor.appendChild(keypad);

body.appendChild(containor);
