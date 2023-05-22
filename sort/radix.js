// radix sort 

function getDigit(num, place){
  return Math.floor(Math.abs(num)/Math.pow(10,place)) % 10;
}

// console.log(getDigit(43263,0));  // 3
// console.log(getDigit(43263,1));  // 6
// console.log(getDigit(43263,2));  // 2

//4326.3

function digitCount(num){
  if(num===0) return 1
  // Math.abs() conver negative value into positive 
  return Math.floor(Math.log10(Math.abs(num)))+1;
}

// console.log(digitCount(0)); //1
// console.log(digitCount(21)); // 2
// console.log(digitCount(256)); //3

function mostDigits(nums){
   let maxDigits = 0;
   for(let i=0;i<nums.length;i++){
       maxDigits = Math.max(maxDigits,digitCount(nums[i]));
   }
   return maxDigits;
}

//console.log(mostDigits([44,849,1,3333])); // return 4



const radixSort = (arr)=>{
  let maxDigitCount = mostDigits(arr); // return number of integer in max value


  for(let k=0;k<maxDigitCount;k++){
      let digitBuckets = Array.from({length:10},()=>[]); // [[],[],[],[],......]

      for(let i=0;i<arr.length;i++){
          let digit = getDigit(arr[i],k);
          digitBuckets[digit].push(arr[i]);
      }
      // new order after each loop
      arr = [].concat(...digitBuckets);
  }
  return arr;
}





const arr = [10,240,45,302,95,12,2];
const sortedArr = radixSort(arr);

console.log(sortedArr);