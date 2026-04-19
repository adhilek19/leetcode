/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
   if (n <= 0) return false;
   for(let pf of [2,3,5]){
    while(n%pf ===0){
        n=n/pf
    }
   }
 return n===1
};