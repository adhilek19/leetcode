/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.reduce((count, num) => {
        return num % 3 !== 0 ? count + 1 : count;
    }, 0);
};