/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sq=nums.map(x=>Math.pow(x,2))
 sq.sort((a,b)=>a-b)

 return sq
};