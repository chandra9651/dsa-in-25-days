// REsource apna college (YouTube) 

/**
 * 
 * condition for count inevretion in array 
 * 
 * arr[i] > arr[j] && i< j    
 * 
 * count inversion simle method to solve use two for loop ::: O(n^2) time | O(1) space 
 * 
 * but merge sort algorithm done  ::: O(n) time | O(n) space 
 * 
 * 
 * NOte = Single change convert merge sort into count invertion  
 * 
 * // that mean how many inversion recquired to sort array 
 * 
 */

const array = [3, 5, 6, 9, 1, 2, 7, 8];


function merge(arr, l, mid, r) {
    const n1 = mid - l + 1;
    const n2 = r - mid;
    let inv = 0;
    const L = new Array(n1).fill(0);
    const R = new Array(n2).fill(0);

    // fill  L array   
    for (let i = 0; i < n1; i++) {
        L[i] = arr[i + l];
    }

    // fill R array 
    for (let i = 0; i < n2; i++) {
        R[i] = arr[i + mid + 1];
    }

    // create lidx and ridx

    let lidx = 0, ridx = 0, k = l;
    while (lidx < n1 && ridx < n2) {
        if (L[lidx] <= R[ridx]) {
            arr[k] = L[lidx];
            lidx++;
            k++;
        } else {
            // inversion count i<j && arr[i] > arr[j]
            arr[k] = R[ridx];
            inv += n1 - lidx;
            ridx++;
            k++;
        }
    }

    // fill remain element 
    while (lidx < n1) {
        arr[k] = L[lidx];
        lidx++;
        k++;
    }

    while (ridx < n2) {
        arr[k] = R[ridx];
        ridx++;
        k++;
    }
    return inv;
}


// let inversion = 0;
const countInversion = (arr, l, r) => {
    // base case 
    if (l >= r) return 0; // zero inversion
    const mid = Math.floor((l + r) / 2);
    // left part 
    const leftInv = countInversion(arr, l, mid);
    // right part
    const rightInv = countInversion(arr, mid + 1, r);
    // merge sorted array 
   return leftInv+rightInv+merge(arr, l, mid, r);
}


let totalInv = countInversion(array, 0, array.length - 1);
console.log(totalInv);
console.log(array);
















