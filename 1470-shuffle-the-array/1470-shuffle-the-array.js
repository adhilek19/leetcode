/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 
var shuffle = function(nums, n) {
    let ne=[]
    for(let i=0; i<n;i++){
ne.push(nums[i],nums[i+n])

}
return ne
};