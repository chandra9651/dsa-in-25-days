/// maximum distance from top level call to a base case


// REcursion solution

function canSum(targetSum, numbers) {
      if (targetSum == 0) return true;
      if (targetSum < 0) return false;
      for (let num of numbers) {
            let remainder = targetSum - num;
            if (canSum(remainder, numbers) == true) return true;
            
      }
      return false;
}

//console.log(canSum(7, [2, 4, 3,7])); 
//console.log(canSum(13,[4,2,3,8]));


// using memo object to optimise the algorithim


// Dynamic Programming solution 

function canSumMemo(targetSum, numbers, memo = {}) {
      if (targetSum in memo) return memo[targetSum];
      if (targetSum == 0) return true;
      if (targetSum < 0) return false;
      for (let num of numbers) {
            let remainder = targetSum - num;
            if (canSumMemo(remainder, numbers, memo) == true) {
                  memo[targetSum] = true;
                  return true;
            }
      }
      memo[targetSum] = false;
      return false;
}


// console.log(canSumMemo(7, [2, 4, 3,7]));   // true
//console.log(canSumMemo(300,[4,2,3,8]));    // true 
console.log(canSumMemo(7, [2, 2, 2,2]));     // false