const reverseString = function(word) {
    let chars = word.split('');
    let charsReversed = chars.reverse();
    let wordReversed = charsReversed.join('')
    return wordReversed
};

// Do not edit below this line
module.exports = reverseString;
