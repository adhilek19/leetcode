/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let c=Math.abs(z-y);
let d=Math.abs(z-x);
if(d<c){
    return 1
}else if(c < d){
    return 2
}else{
    return 0
}
};