/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let totalsum=nums.reduce((a,b)=>a+b,0) ;
    let leftside=0;
    let ans=[];
   
     let rigthside =totalsum

    for(let i=0 ;i<=nums.length-1;i++){

   rigthside -= nums[i];

  ans.push(Math.abs(leftside-rigthside))

   leftside+=nums[i]
    }
    return ans
    
};