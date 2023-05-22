// REsource PepCoding (YouTube)

// Target sum subset 
// Dynamic Programmming = Bottom Up Approach = Tabulation

// Hint = There is any subset of coin make target sum

/**
 *  
 *  index             0        1       2      3       4       5       6       7      8       9       10
 *                ______________________________________________________________________________________________
 *  Empty subset    |     |       |       |       |       |       |       |       |       |       |        |  
 *             []   |_true|_fasle_|_fasle_|_fasle_|_fasle_|_fasle_|_fasle_|_fasle_|_fasle_|_fasle_|_fasle__| 
 *                  |     |       |       |       |       |       |       |       |       |       |        |     
 *             4    |_____|_______|_______|_______|_______|_______|_______|_______|_______|_______|________| 
 *                  |     |       |       |       |       |       |       |       |       |       |        |
 *             2    |_____|_______|_______|_______|_______|_______|_______|_______|_______|_______|________|
 *                  |     |       |       |       |       |       |       |       |       |       |        |    
 *             7    |_____|_______|_______|_______|_______|_______|_______|_______|_______|_______|________|
 *                  |     |       |       |       |       |       |       |       |       |       |        |
 *             1    |_____|_______|_______|_______|_______|_______|_______|_______|_______|_______|________|
 *                  |     |       |       |       |       |       |       |       |       |       |        |     
 *             3  __|_____|_______|_______|_______|_______|_______|_______|_______|_______|_______|________|____
 *                  
 *         Empty subset are able to make 0 so is mark as true          
 *                 
 */

// O(nm) time || O(nm) space - where n = length of coin and m = length of target  



function targetSum(coins, target) {
    // row +1 :: for empty subset
    const dp = new Array(coins.length + 1).fill(0).map(() => new Array(target + 1).fill(false));

    // row || coin loop
    for (let i = 0; i < dp.length; i++) {
        // target loop
        for (let j = 0; j < dp[0].length; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] == true;
            }else if(i==0){
                dp[i][j] = false
            }
            else if (j == 0) {
                dp[i][j] = true;
            } else {
                // not batting 
                if (dp[i - 1][j] == true) {
                    dp[i][j] = true;
                }else{
                    const val = coins[i-1];
                    if(j>=val){
                        if(dp[i-1][j-val] ==true){
                            dp[i][j] = true;
                        }
                    }
                }

            }
        }
    }
    return dp[coins.length][target];
}


const coins = [4, 2, 7, 1, 3];
const target = 10;
const bool = targetSum(coins, target);

console.log(bool);











