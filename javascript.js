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
            return add(numberOne, numberTwo);
        case "-":
            return subtract(numberOne, numberTwo);
        case "*":
            return multiply(numberOne, numberTwo);
        case "/":
            return divide(numberOne, numberTwo);
    }
}

function reBuildUI() {
    containor.remove(display);
    display.textContent = displayContent;
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
}

//globalVarables--------------
var operater = "";
var numberOne = "";
var numberTwo = "";
var displayContent = "";
var operaterActive = false;

//main
//Creating UI
const body = document.querySelector("body");
const containor = document.createElement("calculator");
const display = document.createElement("display");
const keypad = document.createElement("keypad");
const leftDiv = document.createElement("leftPad");
const rightDiv = document.createElement("rightPad");
const calculatorButtons = [];
const operaterButtons = [];

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
operaterButtons.push(division);

let multipication = document.createElement("button");
multipication.textContent = "*";
multipication.style.backgroundColor = "coral";
operaterButtons.push(multipication);

let subtraction = document.createElement("button");
subtraction.textContent = "-";
subtraction.style.backgroundColor = "coral";
operaterButtons.push(subtraction);

let addition = document.createElement("button");
addition.textContent = "+";
addition.style.backgroundColor = "coral";
operaterButtons.push(addition);
//--------------------------------------------------

//add event code to each button
calculatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!operaterActive) {
            numberOne += parseInt(button.textContent);
        } else {
            numberTwo += parseInt(button.textContent);
        }
        displayContent = numberOne + operater + numberTwo;
        reBuildUI();
    })
})
operaterButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (numberOne !== "") {
            operaterActive = true;
            operater = button.textContent;
            displayContent = numberOne + operater + numberTwo;
            reBuildUI();
        }
    })
})
equal.addEventListener("click", () => {
    if (numberOne !== "" && numberTwo !== "") {
        numberOne = operate(parseInt(numberOne), operater, parseInt(numberTwo));
        numberOne = Math.round((numberOne*100))/100;
        numberTwo = "";
        operater = "";
        displayContent = numberOne + operater + numberTwo;
        operaterActive = false;
        reBuildUI();
    }
})
clear.addEventListener("click", () => {
    operater = "";
    numberOne = "";
    numberTwo = "";
    displayContent = "";
    operaterActive = false;
    reBuildUI();
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