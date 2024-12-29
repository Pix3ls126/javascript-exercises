const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) !== true || Number.isInteger(num2) !== true || num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    let sum = 0;
    let start = num1;
    let stop = num2;
    if (num1 > num2) {
        start = num2;
        stop = num1;
    }
    for (let i = start; i <= stop; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
