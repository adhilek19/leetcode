/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let c=""
let rev=""

for(let i =0; i<s.length ; i++){
    if(/[a-zA-Z0-9]/.test(s[i])){
      c+=s[i].toLowerCase()
    }
  
  
    }

for(let i =c.length-1; i>=0 ; i--){
  rev+=c[i]
    } 
return c===rev
};