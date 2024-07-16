//functions------------
function add() {
    
}

function subtract() {

}

function multiply() {

}

function divide() {

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

//globalVarables
let operater;
let numberOne;
let numberTwo;

