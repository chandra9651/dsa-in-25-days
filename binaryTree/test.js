const array = [-2, 0, 1, 21, 33, 45, 45, 61, 71, 72, 73];

// search elemt using binary search 
// binary search apply in sorted array


const binarySearch = (array, low, high, target) => {
    // base case 
    // if (high >= array.length || high<0) return -1;
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (array[mid] == target) return mid;
    if (target > array[mid]) {
        // target should be right side
        return binarySearch(array, mid + 1, high, target);
    } else {
        // target should be left side 
        return binarySearch(array, low, mid - 1, target);
    }

}

const idx = binarySearch(array, 0, array.length - 1, -2);
console.log(idx);
