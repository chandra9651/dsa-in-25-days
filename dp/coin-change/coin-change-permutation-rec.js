// coin change and target sum subset approximately are same

// 1: coin change using recursion problem  :: in case of coin change if we generate coin change then try to find other way and 
// try all possibility _____________
//                     | PepCoding|
//                     -------------

// 2: this type solution also used to find target sum  :: In case of target sum subset if we make target sum then we return 
//  _____________
// | CoderByte |
// ---------------

// Total no of Permutaion ways  

function coinChange(coins, target) {
    if (target < 0) return 0;
    if (target == 0) return 1;
    let ways = 0;
    for (let coin of coins) {
        ways += coinChange(coins, target - coin);
    }
    return ways;
}


// Infinite suply of coins 
const coins = [2, 3, 5];
const target = 7;

const TotalNoOfWaysToChangeCoin = coinChange(coins, target);

console.log(TotalNoOfWaysToChangeCoin);


