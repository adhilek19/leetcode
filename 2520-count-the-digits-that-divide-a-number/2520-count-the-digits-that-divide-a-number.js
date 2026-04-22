/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    return num.toString().split('').filter(digit => num % Number(digit) === 0).length;

};