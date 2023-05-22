// REsource PepCoding (YouTube) :: Coin change Combination Dynamic Programming

// coin change Problem using tabulation 


// Dynamic Programming == Tabulation (solve using Iterative) == Bottom Up Approach



function coinChangeTab(coins, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1; // base case 
    for (let coin of coins) {
        for (let i = 1; i <= target; i++) {
            if (i >= coin) {
                const reaminChange = i - coin;
                if (dp[reaminChange] > 0) {
                    dp[i] += dp[reaminChange];
                }
            }
        }
    }
    return dp[target];
}


const coins = [2, 3, 5, 6];
const target = 10;
const noOfWays = coinChangeTab(coins, target);
console.log(noOfWays);






