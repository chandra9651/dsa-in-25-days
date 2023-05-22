const boyer = (array) => {
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


const result = boyer([5, 1, 4, 1, 1]);
console.log(result);