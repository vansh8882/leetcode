/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let x= 0;
    for(let i=0; i<s.length - 1; i++)
    {
        x+= Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1));
        return x;
    }
    
};

console.log(scoreOfString("web")); 