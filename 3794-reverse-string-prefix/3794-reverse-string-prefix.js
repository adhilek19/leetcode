/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let reverse=s.slice(0,k).split("").reverse().join("")
    let  send =s.slice(k)
    return  reverse+ send
};