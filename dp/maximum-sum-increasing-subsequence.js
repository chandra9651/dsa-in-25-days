// REsource pepCoding {YouTube}
function maxSumIncreasingSubsequence(array) {
    let omax = -Infinity;
    const dp = new Array(array.length).fill();

    for(let i=0;i<dp.length;i++){
        let max = null;
        
        for(let j=0;j<i;j++){
          if(array[j] < array[i]){
            if(max == null){
                max = dp[j];
            }else if(dp[j] > max){
                max = dp[j];
            }
          }
        }

        if(max == null){
            dp[i] = array[i];
        }else{
            dp[i] = max+ array[i];
        }

        if(dp[i] > omax){
            omax = dp[i];
        }
    }
    return omax;

}

const array = [10, 70, 20, 30, 50, 11, 30];

const maxIncSum = maxSumIncreasingSubsequence(array);

console.log(maxIncSum);
