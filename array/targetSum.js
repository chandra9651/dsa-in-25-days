const array = [1, 3, 4, 7, 8, 2];
const sum = 6;


function targetSumIndices(array, sum) {
    // Map to store value -> index
    const seen = new Map();
    for (let i = 0; i < array.length; i++) {
        const diff = sum - array[i];

        // Check if the difference has been seen already
        if (seen.has(diff)) {
            // Return the stored index and the current index
            return [seen.get(diff), i];
        }
        // Store the current value and its index
        seen.set(array[i], i);
    }
    return null; // Return null if no pair found
}


const result = targetSumIndices(array, sum);
console.log(result); // Output: [2, 5] (Since array[2] is 4 and array[5] is 2)






