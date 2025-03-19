let num1;
let num2;
let operator = "";
let result = 0;
let storedValue = "";

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

const buttons = document.querySelectorAll("button");

const numberButton = document.querySelectorAll(".numberButton");
const decimalButton = document.querySelector("#decimalButton");
const operatorButton = document.querySelectorAll(".operatorButton");
const equalsButton = document.querySelector("#equalsButton");
const clearButton = document.querySelector("#clearButton");
const backspaceButton = document.querySelector("#backspaceButton");

numberButton.forEach((button) => {
    button.addEventListener("click", () => {

        if (operator === "") {
            storedValue += button.textContent;
            display.textContent = storedValue;
            num1 = parseFloat(storedValue);
        }
        else {
            storedValue += button.textContent;
            display.textContent = storedValue;
            num2 = parseFloat(storedValue);
        }

        // console.log({num1});
        // console.log({operator});
        // console.log({num2});
    })
})

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {

        if (num1 !== undefined && operator === "/" && num2 === 0) {
            display.textContent = "Cannot / 0";
            num1 = undefined;
            num2 = undefined;
            operator = "";
            result = 0;
            storedValue = "";
        }
        else if (num1 !== undefined && operator !== "" && num2 !== undefined) {
            result = operate(operator, num1, num2);
            display.textContent = Number(result.toFixed(5));
            num1 = result;
            num2 = undefined;
            operator = button.textContent;
            storedValue = "";
        }
        else {
            operator = button.textContent;
            storedValue = "";
        }

        // console.log({num1});
        // console.log({operator});
        // console.log({num2});
    })
})

equalsButton.addEventListener("click", () => {

    if (num1 === undefined || operator === "" || num2 === undefined) {

    }
    else if (num1 !== undefined && operator === "/" && num2 === 0) {
        display.textContent = "Cannot / 0";
        num1 = undefined;
        num2 = undefined;
        operator = "";
        result = 0;
        storedValue = "";
    }
    else {
        result = operate(operator, num1, num2);
        display.textContent = Number(result.toFixed(5));
        num1 = result;
        num2 = undefined;
        operator = "";
        storedValue = "";
    }

    // console.log({num1});
    // console.log({operator});
    // console.log({num2});
});

clearButton.addEventListener("click", () => {
    display.textContent = 0;
    num1 = undefined;
    num2 = undefined;
    operator = "";
    result = 0;
    storedValue = "";

    // console.log({num1});
    // console.log({operator});
    // console.log({num2});
})

backspaceButton.addEventListener("click", () => {

    if (display.textContent.length === 1 && operator === "") {
        display.textContent = "0";
        storedValue = "";
        num1 = 0;
    }
    else if (display.textContent.length === 1 && operator !== "") {
        display.textContent = "0";
        storedValue = "";
        num2 = 0;
    }
    else if (operator === "") {
        display.textContent = display.textContent.slice(0,-1);
        storedValue = display.textContent;
        num1 = parseFloat(storedValue);
    }
    else if (operator !== "") {
        display.textContent = display.textContent.slice(0,-1);
        storedValue = display.textContent;
        num2 = parseFloat(storedValue);
    }

    // console.log({num1});
    // console.log({operator});
    // console.log({num2});
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        if (display.textContent.includes(".")) {
            decimalButton.setAttribute("disabled", "");
        }
        else {
            decimalButton.removeAttribute("disabled");
        }

        if (display.textContent.indexOf(".") === 0) {
            display.textContent = "0" + display.textContent;
        }

        if (display.textContent === "Cannot / 0") {
            backspaceButton.setAttribute("disabled", "");
            equalsButton.setAttribute("disabled", "");
            operatorButton.forEach((button) => {
                button.setAttribute("disabled", "");
            })
        }
        else {
            backspaceButton.removeAttribute("disabled");
            equalsButton.removeAttribute("disabled");
            operatorButton.forEach((button) => {
                button.removeAttribute("disabled");
            })
        }
    })
})

document.addEventListener("keydown", (event => {
    buttons.forEach(button => {
        const accessKey = button.getAttribute("accesskey");
        if (event.key === accessKey) {
            button.click();
        }
        // console.log(accessKey);
    })
    // console.log(event);
}))