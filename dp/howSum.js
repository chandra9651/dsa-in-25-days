// how sum function used how target sum generate with number return 

// REcursion solution

function howSum(targetSum,numbers){
    if(targetSum==0) return [];        
    if(targetSum < 0) return null;
    
    for(let num of numbers){
        let remainder = targetSum - num;
        let remainderResult = howSum(remainder,numbers);
        if(remainderResult != null){
            return [...remainderResult,num];
        }
    }
    return null;
}


console.log(howSum(7,[2,3])); // [3,2,2]
console.log(howSum(7,[10,3])); // null



// Dynamic programming solution using memo\


function howSumMemo(targetSum,numbers,memo={}){

}


console.log(howSumMemo(7,[2,3]));