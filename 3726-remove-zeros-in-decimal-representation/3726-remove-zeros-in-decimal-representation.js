/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    let c = n.toString()
    let d=c.split("").filter(num=> num !== "0").join("")
    let e=Number(d)
    return e
};