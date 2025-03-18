let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;
let displayValue = "";

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

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
}

let display = document.querySelector("#display");

const numberButton = document.querySelectorAll(".numberButton");
const operatorButton = document.querySelectorAll(".operatorButton");
const equalsButton = document.querySelector("#equalsButton")
const clearButton = document.querySelector("#clearButton")

numberButton.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue += button.textContent;
        display.textContent = displayValue;


        if (operator === "") {
            num1 = parseInt(displayValue);
        }
        else {
            num2 = parseInt(displayValue);
        }

        console.log(`Num 1: ${num1}`);
        console.log(operator);
        console.log(`Num 2: ${num2}`);
    })
})

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        displayValue = "";
        display.textContent = 0;
    })
})

equalsButton.addEventListener("click", () => {
    result = operate(operator, num1, num2);
    display.textContent = result;
});

clearButton.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    operator = "";
    result = 0;
    displayValue = "";
    display.textContent = 0;
})