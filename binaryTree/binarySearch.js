// REsource Anuj Bhaiya (YouTube);
// O(log2^n) time || O(1) space 

const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];

// this is iterative method
function binarySearch(array, target) {
    // Write your code here.
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if (array[mid] == target) {
            return mid;
        }
        if (target > array[mid]) {
            // right part
            start = mid + 1;
        }
        if (target < array[mid]) {
            // left part 
            end = mid - 1;
        }

        mid = Math.floor((start + end) / 2);;
    }

    return -1;
}

console.log(binarySearch(array, 72));




// recursive method of binary search 

const binarySearchRec = (array, low, high, target) => {
    // base case 
    // if (high >= array.length || high<0) return -1;
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (array[mid] == target) return mid;
    if (target > array[mid]) {
        // target should be right side
        return binarySearchRec(array, mid + 1, high, target);
    } else {
        // target should be left side 
        return binarySearchRec(array, low, mid - 1, target);
    }

}

const idx = binarySearchRec(array, 0, array.length - 1, -2);
console.log(idx);
