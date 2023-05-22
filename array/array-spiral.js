// print array in spiral model 
// spiral mean circular Hell

const arr = [10, 45, 12, 6, 41];

const spiral = (arr) => {
    const len = Math.ceil(arr.length / 2);
    let start = 0;
    let end = arr.length - 1;
    for (let i = 0; i < len; i++) {
        console.log(arr[i]);
        start++;
        if (i <end) {
            console.log(arr[end]);
            end--;
        }
    }

}

spiral(arr);