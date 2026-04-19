/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
 let res= parseInt(Math.abs(x).toString().split('').reverse().join(''))
 if (x<0) res=-res ;

if (res > 2147483647 || res < -2147483648) return 0;
return res
};