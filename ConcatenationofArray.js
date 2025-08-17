

var a= function(nums)
{
    let sum = nums.length;
    let ans = new Array(2*sum); // Initialize the array with zeros;
    for(let i=0; i<sum ; i++)
    {
        ans[i]= ans[i+ sum]=nums[i]
    }
    
    return ans;
}

console.log(a([1,2]));