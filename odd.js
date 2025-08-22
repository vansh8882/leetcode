// var odd = function(x)
// {


// const digitsArray = x.map(num => {
  
//   const numString = String(num); 
  
//   return numString.split('').map(digitChar => Number(digitChar));

// });

// let j=0;

// for(i = 0 ; i < digitsArray.length ; i++)
// {

    
//      if(digitsArray[i].length %2 == 0)
//      {
//         j++ 
//      }
   
    
// }
// return j;




// }
// console.log(odd([23 , 123, 3333663, 5599, 56 ]))

var odd = function(x) {
  let j = 0;
  for (let num of x) {
    if (String(num).length % 2 === 0) {
      j++;
    }
  }
  return j;
}

console.log(odd([23, 123, 3333663, 5599, 56]));
