

var longestsubstringwithoutrepeatingcharacter = function(s)
{
    let res = 0;

    for (let i=0 ; i < s.length ; i++)
    {
        let charset = new Set()
        for (j=i ;j<s.length ; j++ )
        {
            if(charset.has(s[j]))
            {
            break
            }
            charset.add(s[j])
        }
        res= Math.max(res, charset.size)
    }
    
    return res;
}

console.log(longestsubstringwithoutrepeatingcharacter('pwwkew'))