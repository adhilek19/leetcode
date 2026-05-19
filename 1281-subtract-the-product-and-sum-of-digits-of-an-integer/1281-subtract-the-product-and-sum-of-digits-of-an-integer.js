/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let n1=1;
let n2=0
let str=n.toString().split("").map(Number)
for(let i=0;i<=str.length-1;i++){
    
    n1 =n1*str[i]
    n2=n2+str[i]
}
return n1-n2
};