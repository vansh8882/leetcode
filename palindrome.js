
var pralindrome = function(x)
{

    // let r=0 ;
    // let n=x;
    // if(x<0)
    //     return (false)
     
    // while(n !== 0 ){
    //         r = r * 10 + (n % 10 );
    //         n= Math.floor(n / 10);

    // }
    // console.log(r);
    
    //    return r===x
    
   let str=x.toString();

   str = str . split("") . reverse() . join("");

   
   
   return str == x;

}
console.log( pralindrome(-121))
