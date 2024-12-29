const fibonacci = function(num) {
    num = parseInt(num)
    if (num < 0) {
        return "OOPS"
    }
    let numArray = [0, 1]
    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    }
    let numberHolder = 0;
    for (let i = 2; i <= num; i++) {
        numberHolder = numArray[i-1] + numArray[i-2];
        numArray.push(numberHolder);
    }
    return numberHolder
};

// Do not edit below this line
module.exports = fibonacci;
