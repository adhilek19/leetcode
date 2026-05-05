/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const maxVal = Math.max(...nums);
    return nums.reduce((totalMoves, current) => {
        return totalMoves + (maxVal - current);
    }, 0);
};