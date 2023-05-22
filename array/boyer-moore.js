// REsource Anuj Bhaiya (YouTube)

// Boyer Moore algorith used to find majority element in the array
const array = [5, 1, 4, 1, 1];

function bruteForceCount(array) {

    // brute force solution

    // time complexity O(n^2)
    // space complexity O(1)

    let ocount = 0;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;
            }
        }
        if (ocount < count) {
            ocount = count;
            elmnt = array[i];
        }
    }
    return elmnt;
}

//console.log(bruteForceCount(array));




// ##_Optimize way to solve 


// count using boyer moor
// O(n) time || O(1) space


function BoyerMoor(array) {
    let count = 1;
    let ansIdx = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] == array[ansIdx]) {
            count++;
        } else {
            count--;
        }
        if (count == 0) {
            ansIdx = i;
            count++;
        }
    }

    // count 
    if (count <= 0) return;
    // check it is realy majority element
    count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[ansIdx] == array[i]) {
            count++;
        }
    }
    // if count of element is > N/2 then that element is majority element s
    if (count > Math.floor(array.length / 2)) return array[ansIdx];

}


const majorityElmnt = BoyerMoor(array);

console.log('Majority element ' , majorityElmnt);


