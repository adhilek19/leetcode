/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let totalSum = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        const charPos = s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
        const revValue = 27 - charPos;
        const stringIndex = i + 1;
          totalSum += revValue * stringIndex;
    }
    
    return totalSum;
};