// Resource Anuj Bhaiya (YouTube)

// search element in sorted and rotated array 
// and return index of element

// O(lon2^n) time || O(1) space

// REcursive method
const searchElmnt = (array, low, high, target) => {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (array[mid] == target) return mid;

    // left part is sorted 
    if (array[low] < array[mid]) {
        if (target >= array[low] && target <= array[mid - 1]) {
            // element exit in left part 
            return searchElmnt(array, low, mid - 1, target);
        } else {
            // element exist in right part 
            return searchElmnt(array, mid + 1, high, target);
        }
    }
    // right part is sorted 
    else if (array[mid] < array[high]) {
        if (target >= array[mid + 1] && target <= array[high]) {
            return searchElmnt(array, mid + 1, high, target);
        } else {
            return searchElmnt(array, low, mid - 1, target);
        }

    }
}


// const array = [120, 130, 40, 50, 90, 100, 110];
// const result = searchElmnt(array, 0, array.length - 1, 110);

// console.log(result);

//              _____________     
// REsource code | Anuj Bhaiya | (YouTube)
//               ---------------   
// iterative method to search element in rotated array 


const searchElmntIterative = (array, target) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] == target) return mid;

        // left part is sorted
        if (array[low] <= array[mid]) {
            if (array[low] <= target && target < array[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        // right part is sorted
        else {
            if (array[mid] < target && target <= array[high]) {
                low = mid + 1;
            } else {
                high = mid - 1
            }
        }
    }
    return -1;
}


const arr = [120, 130, 40, 50, 90, 100, 110];
const res = searchElmntIterative(arr, 120);
console.log(res);

