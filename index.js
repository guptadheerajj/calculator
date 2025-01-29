let numBtns = document.querySelectorAll(".num");
let output = document.querySelector(".output");
let operand1;
let operand2;
let operator;

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
	return operand2 === 0 ? 0 : operand1 / operand2;
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
			return "Enter valid operator";
	}

	return result;
}

let displayValue = "0";
output.textContent = displayValue;

function display(event) {
	if (displayValue === "0") {
		displayValue = event.target.value;
	} else if (displayValue.length === 14) {
		displayValue = displayValue;
	} else {
		displayValue += event.target.value;
	}

	output.textContent = displayValue;
}

numBtns.forEach((numBtn) => {
	numBtn.addEventListener("click", display);
});
