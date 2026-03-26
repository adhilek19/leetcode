/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    output=0
    for(i=0;i<hours.length;i++){
     if(hours[i] >= target){
        output++
     }
    }
    return output
};