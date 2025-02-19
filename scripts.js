function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1;
let num2;
let operator;

function operate(num1, num2, operator) {
    return operator(num1, num2);
}