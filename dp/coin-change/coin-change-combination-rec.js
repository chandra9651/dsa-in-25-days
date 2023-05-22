// REsource PepCoding (YouTube)
//                                            ____________________
// But this recursion solution hint taken by  | CoderByte|            :: find target sum
//                                             ------------
// find total number of combination using recursion



function coinChange(coins, target, i) {
    // base case 
    if (target == 0) return 1;
    if (i >= coins.length || target < 0) return 0;
    let ways = 0;
    for (let k = i; k < coins.length; k++) {
        ways += coinChange(coins, target - coins[k], k);
    }
    return ways;
}


const coins = [2, 3, 5];
const target = 125;
const totalNoOfCombination = coinChange(coins, target, i = 0);

console.log(totalNoOfCombination);


