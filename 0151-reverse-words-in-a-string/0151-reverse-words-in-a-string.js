/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

     let c =s .split(" ").filter((i)=> i !=="").reverse().join(" ");
    return c
};