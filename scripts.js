// Logic
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

let num1 = "0";
let num2 = "";
let operator = "";

function operate(num1, num2, operator) {
    switch (operator) {
        case "plus":
            return add(num1, num2);
        case "minus":
            return subtract(num1, num2);
        case "times":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
}

function getOperator(btnID) {
    switch (btnID) {
        case "btn4":
            return "plus";
        case "btn8":
            return "minus";
        case "btn12":
            return "times";
        case "btn16":
            return "divide";
    }
}

// Buttons
const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");
display.textContent = "0";
const textArray = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, 'x', 'C', 0, '=', '/'];
let newNum = true;

for (let i = 1; i <= 16; i++) {
    const button = document.createElement("div");
    button.setAttribute("id", `btn${i}`);
    button.classList.add("button");
    if (i == 15) {
        button.classList.add("equals");
    } else if (i % 4 == 0) {
        button.classList.add("operator");
    } else if (i == 13) {
        button.classList.add("clear");
    } else {
        button.classList.add("number");
    }
    button.textContent = textArray[i - 1];
    button.addEventListener("click", (e) => {
        switch (e.target.classList[1]) {
            case "clear":
                display.textContent = "0";
                num1 = "0";
                num2 = "";
                operator = "";
                break;
            case "operator":
                num1 = +display.textContent;
                operator = getOperator(e.target.id);
                newNum = true;
                break;
            case "number":
                if (newNum || display.textContent == "0") {
                    display.textContent = "";
                    newNum = false;
                }
                if (display.textContent.length < 10) {
                    display.textContent += e.target.textContent;
                }
                break;
            case "equals":
                num2 = +display.textContent;
                display.textContent = operate(num1, num2, operator);
                newNum = true;
        }


    });
    buttons.appendChild(button);
}