var twosum = function(nums, target) {
    let x=[];
    for(let i=0;i<nums.length;i++){ 
        x.push([nums[i], i]);

    }
    x.sort((a, b) => a[0] - b[0]);
    
    let i=0;
    let j=nums.length-1;
    while(i<j){
        let sum = x[i][0] + x[j][0];
        if(sum===target){
            return [Math.min(x[i][1], x[j][1]), Math.max(x[i][1], x[j][1])];
        }
        else if(sum<target){
            i++
        }
        else{
            j--
        }
    
    }
    return [];

}

console.log(twosum([2, 7, 11, 15], 9)); 