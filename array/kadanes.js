// resource pepcoding Sumit Malik (YouTube)

// kadanes algorith  used to find maximum sum of sub array in array

//  TC O(N)
// SC O(N)

const kadanes = (arr) => {
    let csum = arr[0]; // current sum
    let osum = arr[0];  // overall sum

    let celmnt = [arr[0]]; // current element array used to keep track max sum element 
    let oelmnt = [arr[0]]; // overall element array used to keep track max sum element 


    for (let i = 1; i < arr.length; i++) {
        if (csum >= 0) {  // if corrent sum is positive then added otherwise create new sub array
            csum = csum + arr[i];
            celmnt.push(arr[i]);
        } else {               // create new sub array because current sum is negative 
            oelmnt = celmnt;  
            csum = arr[i];
            celmnt = [arr[i]];
        }
        if (csum > osum) {
            osum = csum;
            oelmnt = celmnt;
        }
    }
    console.log(oelmnt);
    return osum;
}


const arr = [5, 6, -12, 12, 3];

console.log(kadanes(arr));