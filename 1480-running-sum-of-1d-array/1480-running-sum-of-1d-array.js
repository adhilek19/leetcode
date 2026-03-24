/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum =0;
    let final=[]
    for(let n of nums){
    sum +=n
    final.push(sum)
    }
    return final
};