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
    return operator(num1, num2);
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
        case "btn15":
            return "equals";
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
    if (i % 4 == 0 || i == 15) {
        button.classList.add("operator");
    } else if (i == 13) {
        button.classList.add("clear");
    } else {
        button.classList.add("number");
    }
    button.textContent = textArray[i - 1];
    button.addEventListener("click", (e) => {
        switch (e.target.classList[1]) {
            case "operator":
                num1 = display.textContent;
                operator = getOperator(e.target.id);
                newNum = true;
                break;
            case "clear":
                display.textContent = "0";
                num1 = "";
                num2 = "";
                operator = "";
                break;
            case "number":
                if (operator != "" && newNum) {
                    display.textContent = "";
                    newNum = false;
                }
                if (display.textContent.length < 10) {
                    display.textContent += e.target.textContent;
                }
                break;
        }


    });
    buttons.appendChild(button);
}