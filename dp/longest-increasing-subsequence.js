// REsource LOver Babbar (YouTube)

// longest common increasing subsequence

function LIS(array, prev, curIdx) {
   if (curIdx >= array.length) return 0;

   // taken
   let taken = 0;
   if (prev == -1 || array[curIdx] > array[prev]) {
      //taken = array[curIdx]+LIS(array,curIdx,curIdx+1); // use for maximum sum
      taken = 1 + LIS(array, curIdx, curIdx + 1);

   }

   let notTaken = LIS(array, prev, curIdx + 1)
   return Math.max(taken, notTaken);
   // not taken0

}

const array = [1, 4, 2, 5, 3];

console.log(LIS(array, -1, 0));

