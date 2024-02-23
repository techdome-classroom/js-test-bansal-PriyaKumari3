/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    function  isvalid(s){
        const stack =[];
        const pairs={
            '(':'),
                '[':'],
            '{':'),
};
        for (let char of s){
            if(pairs[char]){
                stack.push(char]);
            }
            else{ 
                const openBracet=stack.pop();
                if(pairs[openBracket]!==char)
                {
                    return false;
                }
            }
        }
        return stack.length==0;
    }
    console.log(isvalid("()"));
    console.log(isvalid("()[]{}"));
    console.log(isvalid("(]"));
    console.log(isvalid("([)"));
     console.log(isvalid("{[]}"));
            

module.exports = { isValid };


