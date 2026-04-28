/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let N=0;
    let P=0;
    let Z=0;
    for(let i=0;i< nums.length;i++){
        if(nums[i]<0){
            N++
        }else if(nums[i]>0){
            P++
        }else if(nums[i]===0){
            Z++
        }

    }
    if(Z >=1){
        return 0 
    }else if(N%2 !==0){
        return -1
    }else{
        return 1
    }
};