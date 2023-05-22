const array = [15, 25, 4, 63, 2, 15, 8, 79, 1];

// const bubbleSort = (array) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1 - i; j++) {
//       if (array[j] > array[j + 1]) {
//         // swap element
//         [array[j],array[j+1]] = [array[j+1],array[j]];
//       }
//     }
//   }
// }

// bubbleSort(array);


// const selectionSort = (array)=>{
//     for(let i=1;i<array.length;i++){
//       const temp = array[i];
//       let j= i-1;
//       while(j>=0 && array[j]>temp){
//         array[j+1]= array[j];
//         j--;
//       }
//       array[j+1] = temp;
//     }
// }


// selectionSort(array);

// selection sort 
// const selectionSort = (array) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         //swap
//         [array[i],array[j]] = [array[j],array[i]];
//       }
//     }
//   }
// }


//count sort 


// const countSort = (array) => {
//   const max = Math.max(...array);
//   const countArray = new Array(max + 1).fill(0);
//   for (let i = 0; i < array.length; i++) {
//     countArray[array[i]]++;
//   }

//  let idx =0; 
//   // traverse countArray 
//   for(let i=0;i<countArray.length;i++){
//     while(countArray[i]>0){
//          array[idx] = i;
//          idx++;
//          countArray[i]--;
//       }
//   }
// }


// countSort(array);

// quick sort 

// const quickSort = (array) => {
//   if(array.length<=1) return array;
//   // tale last element as pivot
//   const pivot = array[array.length - 1];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }


//   return [...quickSort(left),pivot,...quickSort(right)];
// }


// const result = quickSort(array);
// console.log(array);


// function merge(array, l, mid, r) {
//   const n1 = mid - l + 1;
//   const n2 = r - mid;
//   const ar1 = new Array(n1);
//   const ar2 = new Array(n2);
//   for (let i = 0; i < n1; i++) {
//     ar1[i]= array[i + l];
//   }
//   for (let i = 0; i < ar2.length; i++) {
//     ar2[i] = array[mid+1 + i];
//   }
//   ar1[n1] = ar2[n2] = Number.MAX_VALUE;

//   let lidx = 0, ridx = 0;

//   for (let i = l; i <= r; i++) {
//     if (ar1[lidx] < ar2[ridx]) {
//       array[i] = ar1[lidx];
//       lidx++;
//     } else {
//       array[i] = ar2[ridx];
//       ridx++;
//     }
//   }

// }


// const mergeSort = (array, l, r) => {
//   if (l >= r) return;
//   const mid = Math.floor((l + r) / 2);
//   mergeSort(array, l, mid);
//   mergeSort(array, mid + 1, r);
//   // merge sorted array
//   merge(array, l, mid, r);
// }


// mergeSort(array, 0, array.length - 1);

function digitCount(num) {
  return Math.floor(Math.log10(num)) + 1;
}

function digitPos(num, place) {
  return Math.floor(num / Math.pow(10, place)) % 10;
}

const radixSort = (arr) => {
  const max = Math.max(...arr);
  const numberOfDigit = digitCount(max);
  for (let k = 0; k < numberOfDigit; k++) {
    const digitBucket = new Array(10).fill(0).map(()=>[]);
    for (let i = 0; i < arr.length; i++) {
      const getDigitPos = digitPos(arr[i], k);
      digitBucket[getDigitPos].push(arr[i]);
      // console.log(digitBucket)
    }
    arr = [].concat(...digitBucket)
  }
  return arr;
}

const result = radixSort(array);
console.log(result);
// console.log(array);




