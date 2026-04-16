/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    num1=0;
  num2=0;
    for(let i=0;i<nums.length;i++){
        num1 +=nums[i]
    }
    console.log(num1)
    let d =nums.join("").split("").map(Number)
     for(let i=0;i<d.length;i++){
        num2 +=d[i]
    }
    return Math.abs(num1-num2)
    
};