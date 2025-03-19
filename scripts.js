let num1;
let num2;
let operator = "";
let result = 0;
let displayValue = "";

console.log(num1);

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
const decimalButton = document.querySelector("#decimalButton");
const operatorButton = document.querySelectorAll(".operatorButton");
const backspaceButton = document.querySelector("#backspaceButton");
const equalsButton = document.querySelector("#equalsButton")
const clearButton = document.querySelector("#clearButton")

const buttons = document.querySelectorAll("button");

document.addEventListener("keydown", (event => {
    buttons.forEach(button => {
        const accessKey = button.getAttribute("accesskey");
        if (event.key === accessKey) {
            button.click();
        }
        console.log(accessKey);
    })
    console.log(event);
}))

numberButton.forEach((button) => {
    button.addEventListener("click", () => {

        if (operator === "") {
            displayValue += button.textContent;
            display.textContent = displayValue;
            num1 = parseFloat(displayValue);
        }
        else {
            displayValue += button.textContent;
            display.textContent = displayValue;
            num2 = parseFloat(displayValue);
        }

        console.log({num1});
        console.log({operator});
        console.log({num2});
    })
})

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {

        if (num1 !== undefined && operator === "/" && num2 === 0) {
            display.textContent = "Error: Cannot / 0.";
            num1 = undefined;
            num2 = undefined;
            operator = "";
            result = 0;
            displayValue = "";
        }
        else if (operator !== "" && num1 !== undefined && num2 !== undefined) {
            result = operate(operator, num1, num2);
            display.textContent = Number(result.toFixed(10));
            num1 = result;
            num2 = undefined;
            operator = button.textContent;
            displayValue = "";
        }
        else {
            operator = button.textContent;
            displayValue = "";
        }

        console.log({num1});
        console.log({operator});
        console.log({num2});
    })
})

equalsButton.addEventListener("click", () => {

    if (operator === "" || num1 === undefined || num2 === undefined) {

    }
    else if (num1 !== undefined && operator === "/" && num2 === 0) {
        display.textContent = "Error: Cannot / 0.";
        num1 = undefined;
        num2 = undefined;
        operator = "";
        result = 0;
        displayValue = "";
    }
    else {
        result = operate(operator, num1, num2);
        display.textContent = Number(result.toFixed(10));
        num1 = result;
        num2 = undefined;
        operator = "";
        displayValue = "";
    }

    console.log({num1});
    console.log({operator});
    console.log({num2});
});

clearButton.addEventListener("click", () => {
    num1 = undefined;
    num2 = undefined;
    operator = "";
    result = 0;
    displayValue = "";
    display.textContent = 0;

    console.log({num1});
    console.log({operator});
    console.log({num2});
})

backspaceButton.addEventListener("click", () => {

    if (display.textContent.length === 1 && operator === "") {
        display.textContent = "0";
        displayValue = "";
        num1 = 0;
    }
    else if (display.textContent.length === 1 && operator !== "") {
        display.textContent = "0";
        displayValue = "";
        num2 = 0;
    }
    else if (operator === "") {
        display.textContent = display.textContent.slice(0,-1);
        displayValue = display.textContent;
        num1 = parseFloat(displayValue);
    }
    else if (operator !== "") {
        display.textContent = display.textContent.slice(0,-1);
        displayValue = display.textContent;
        num2 = parseFloat(displayValue);
    }

    console.log({num1});
    console.log({operator});
    console.log({num2});
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent.includes(".")) {
            decimalButton.setAttribute("disabled", "");
            console.log(decimalButton);
        }
        else {
            decimalButton.removeAttribute("disabled");
            console.log(decimalButton);
        }

        if (display.textContent.indexOf(".") === 0) {
            display.textContent = "0" + display.textContent;
        }
    })
})