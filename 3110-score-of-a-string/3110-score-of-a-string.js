
var scoreOfString = function(s) {
    let output=0;
    for(i=0;i<s.length-1;i++){
      output =output+Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))

    }
    return output
};