/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num===0)return "0";
   
let negative=num<0
  if(negative){
    num=-num
  }
   let result = "";
    while (num > 0) {
     let rem=num%7;
      result=rem+ result
      num=Math.floor(num/7)
       
     }
     if(negative){
    result= "-"+result
  }
    return result;
};