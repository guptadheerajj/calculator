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
