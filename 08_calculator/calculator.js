const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
	let total = 0;
  for (const number of numbers) {
    total += number
  }
  return total
};

const multiply = function(numbers) {
  if (numbers.length == 0){
    return 0
  }
  let total = numbers.shift();
  for (const number of numbers) {
    let temp = total * number;
    total = temp;
  }
  return total
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	if (num == 0 || num == 1) {
    return 1
  }
  return num * factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
