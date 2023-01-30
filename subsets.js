const input  = require(`readline-sync`);

let subsets = function(nums) {
    
    let result = [[]];

    function sol(i, curr){
        
        for(let j = i;j<nums.length;j++){
            
            curr.push(nums[j]);
            result.push([...curr])

            sol(j+1, curr);
            curr.pop()
        }
    }

    sol(0,[]);
    console.log(result);
}

let x;
let nums = []

do{
x = input.question("Enter the array elements : ");
if(x==-1){
    break;
}
else{
    nums.push(x);
}
}while(x);

subsets(nums)
