// Functionalities to be fixed: 
// 1. Rounding large numbers to specific decimals
// 2. Ensure multiple decimal points are not entered by the user

let numBtns = document.querySelectorAll(".num");
let operatorBtns = document.querySelectorAll(".operator");
let backspaceBtn = document.querySelector(".backspace");
let clearBtn = document.querySelector(".clear");
let output = document.querySelector(".output");
let equalBtn = document.querySelector(".equal");
let displayValue = null;
let operator = null;
let operand1 = null;
let operand2 = null;

function add(operand1, operand2) {
	return operand1 + operand2;
}
function subtract(operand1, operand2) {
	return operand1 - operand2;
}
function multiply(operand1, operand2) {
	return operand1 * operand2;
}
function divide(operand1, operand2) {
	return operand2 === 0 ? "Nice Try Giga Diddy" : operand1 / operand2;
}
function remainder(operand1, operand2) {
	return operand1 % operand2;
}

function operate(operand1, operator, operand2) {
	let result;
	switch (operator) {
		case "+":
			result = add(operand1, operand2);
			break;
		case "-":
			result = subtract(operand1, operand2);
			break;
		case "*":
			result = multiply(operand1, operand2);
			break;
		case "/":
			result = divide(operand1, operand2);
			break;
		case "%":
			result = remainder(operand1, operand2);
			break;
		default:
			result = "Invalid";
	}

	return result;
}

function display(event) {
	// this to ensure that 0 is not present at the front of number. ex: 0890, 00090 instead it becomes 890 and 90
	if (displayValue === "0" || displayValue === "00" || displayValue === null) {
		displayValue = event.target.value;
	} else if (displayValue.length >= 14) {
		//number pressed after the display value reacehs >= 14 are not considered
		displayValue = displayValue;
	} else {
		displayValue += event.target.value;
	}

	output.textContent = displayValue;
}

numBtns.forEach((numBtn) => {
	numBtn.addEventListener("click", display);
});

operatorBtns.forEach((operatorBtn) => {
	operatorBtn.addEventListener("click", (event) => {
		if (operand1 === null && displayValue !== null) {
			operand1 = Number(displayValue);
			displayValue = null;
		} else if (operand2 === null && displayValue !== null) {
			operand2 = Number(displayValue);
			displayValue = operate(operand1, operator, operand2);
			output.textContent = displayValue;

			operator = event.target.value;
			operand1 = displayValue;
			operand2 = null;
			displayValue = null;
		}

		// this ensures if an operator is pressed multiple times after entering operand1 and at the end a different operator is pressed,
		// 		the the last pressed operator will be cosidered.
		// This also stores the value of operator pressed when both operands have been received and result is caluculated
		// 		and stored in operand1 and this operator is stored as the operator for next calculation
		if (operand2 === null) {
			operator = event.target.value;
		}
	});
});

function clear() {
	displayValue = null;
	operand1 = null;
	operand2 = null;
	operator = null;
	output.textContent = "0";
}

clearBtn.addEventListener("click", clear);

backspaceBtn.addEventListener("click", () => {
	if (displayValue !== null) {
		displayValue = displayValue.slice(0, length - 1);
		output.textContent = displayValue;
		if (displayValue.length === 0) {
			output.textContent = 0;
		}
	}
});

equalBtn.addEventListener("click", () => {
	if (operator !== null) {
		console.log("event running");

		operand2 = Number(displayValue);
		let result = operate(operand1, operator, operand2);
		clear();
		output.textContent = result;
	}
});
