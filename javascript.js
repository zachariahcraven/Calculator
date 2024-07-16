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
var displayContent = "";

//main
const calculatorButtons = document.querySelectorAll("button");
const display = document.querySelector("#display");
const caculator = document.querySelector("#calculator");

display.textContent = displayContent;
calculatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (parseInt(button.textContent) !== NaN) {
            if (numberOne !== null) {
                numberOne += parseInt(button.textContent);
                displayContent += parseInt(button.textContent);
            }
        }
        //save operator
    })
})