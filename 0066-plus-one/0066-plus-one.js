/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let y=[]
let b=BigInt(digits.join(""))

let c=(b+1n)

let e=String(c)
for(let i=0;i<e.length;i++){
    y.push(Number(e[i]))
}
return y
};