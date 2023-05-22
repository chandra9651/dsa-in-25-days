// target sum subset using recursion 


function targetSumRec(coins, target, i, temp) {
    // base case 
    if (target == 0) {
        result.push([...temp]);
        return;
    }
    if (i >= coins.length || target < 0) return;

    // taken 
    temp.push(coins[i]);
    targetSumRec(coins, target - coins[i], i + 1, temp);
    // not taken
    temp.pop();
    targetSumRec(coins, target, i + 1, temp);
}

const result = [];

const coins = [4, 2, 7, 1, 3];
const target = 10;

targetSumRec(coins, target, i = 0, temp = []);

console.log(result);
