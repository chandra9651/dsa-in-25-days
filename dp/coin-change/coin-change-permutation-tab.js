// REsource PepCoding (YouTube)

// Coin change Permutation (order matter)

function coinChangeTab(coins, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                const wayToMakeRemainChange = i - coin;
                if (dp[wayToMakeRemainChange] > 0) {
                    dp[i] += dp[wayToMakeRemainChange];
                }
            }
        }
    }
    return dp[target];
}

const coins = [2, 3, 5];
const target = 7;
const noOfWays = coinChangeTab(coins, target);

// total no of way to make chage 
console.log(noOfWays);

