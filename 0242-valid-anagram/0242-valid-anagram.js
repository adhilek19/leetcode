/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)return false ;
    let r={}
    for (let i=0; i<s.length;i++){
        let char=s[i]
        if(r[char]){
            r[char]++;
        }else{
       r[char]=1
        }
    }

      for (let i = 0; i < t.length; i++) {
        let char = t[i];

        if (!r[char]) {
            return false;
        }

        r[char]--;
    }

    return true;
};