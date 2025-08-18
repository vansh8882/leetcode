/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let arr = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let res= 0;
    for(let i = 0 ; i < s.length ; i++ )
    {
        if(arr[ s [ i ] ] < arr[ s [ i + 1 ]])
            res -= arr[s[i]];

        else
            res += arr[s[i]];
    }
    
    return res;

};

console.log(romanToInt('IV'));