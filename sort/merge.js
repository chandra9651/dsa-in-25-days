/** @Optimise_code_of_merge_sort is below to this code 
 * @REsource of optimse code is CodeHelp - by Babbar
 *  time O(nlogn) | space O(n)
 * **/

// function merge(arr, l, m, r) {
//     var n1 = m - l + 1;
//     var n2 = r - m;

//     // Create temp arrays
//     var L = new Array(n1);
//     var R = new Array(n2);

//     for (let i = 0; i < n1; i++) {
//         L[i] = arr[i + l];
//     }

//     L[n1] = R[n2] = Number.MAX_VALUE;

//     for (let i = 0; i < n2; i++) {
//         R[i] = arr[i + m + 1];
//     }

//     //    console.log(l, +' '+ r);
//     //    console.log(L);
//     //    console.log(R);

//     let l_i = 0;
//     let r_i = 0;

//     for (let i = l; i <= r; i++) {
//         if (L[l_i] <= R[r_i]) {
//             arr[i] = L[l_i];
//             l_i++;
//         } else {
//             arr[i] = R[r_i];
//             r_i++;
//         }
//     }
// }
// function mergeSort(arr, l, r) {
//     //console.log(a + ' 'l+' '+' '+r)
//     if (l >= r) {
//         return;//returns recursively
//     }
//     var m = Math.floor((r + l) / 2);
//     mergeSort(arr, l, m);
//     mergeSort(arr, m + 1, r);
//     merge sorted array
//     merge(arr, l, m, r);
// }

// const arr = [20, 8, 64, 80, 10, 16, 2, 50, 1];

// mergeSort(arr, 0, arr.length - 1);

// console.log(arr);


// optimise code of merge sort 
// REsource to understand algorith is CodeHelp - by Babbar



function merge(left, right) {
  left.push(Number.MAX_VALUE);
  right.push(Number.MAX_VALUE);
  const sortedArr = [];
  let j = 0; k = 0;
  for (let i = 0; i < left.length + right.length - 2; i++) {
    if (left[j] < right[k]) {
      sortedArr.push(left[j]);
      j++;
    }
    else {
      sortedArr.push(right[k]);
      k++;
    }
  }
  return sortedArr;
}


function mergeSort(array, l, r) {
  if (l >= r) {
    return [array[l]];
  }

  const mid = Math.floor((l + r) / 2);
  const left = mergeSort(array, l, mid);
  const right = mergeSort(array, mid + 1, r);
  // merge sorted array 
  return merge(left, right);

}

const array = [20, 8, 64, 80, 10, 16, 2, 50, 1];
console.log(mergeSort(array, 0, array.length - 1));






