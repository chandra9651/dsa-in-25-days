// coin change using memo
// more detail in coin-change-rec.js

// Total no of Permutaion ways  

function coinChangeMemo(coins, target, memo) {
    if (target < 0) return 0;
    if (target in memo) return memo[target];
    if (target == 0) return 1;
    let ways = 0;
    for (let coin of coins) {
        ways += coinChangeMemo(coins, target - coin, memo);
    }
    return memo[target] = ways;
}


// Infinite suply of coins 
const coins = [2, 3, 5];
const target = 7;

const TotalNoOfWaysToChangeCoin = coinChangeMemo(coins, target, memo = {});

console.log(TotalNoOfWaysToChangeCoin);


