/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev=n.toString().split('').reverse().join("")
    let x=Number(rev)
    return Math.abs(n-x)
};