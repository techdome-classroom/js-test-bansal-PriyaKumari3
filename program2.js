/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumerals={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    
};
    let result=0;
    for(let i=0;i<s.length;i++){
        const currentval=romanNumerals[s[i]];
        const nextVal =romanNumerals[s[i+1]];
        if(nextVal && currentVal<nextVal){
            result+=nextVAl-currentVal;
            i++;
        }
        else{
            result+=currentVAl;
        }
    }
    return result;
}
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV")):


module.exports={romanToInt}
