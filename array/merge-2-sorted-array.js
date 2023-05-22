
const a1 = [2, 8, 10, 15, 18];

const a2 = [3, 4, 6, 7, 9, 20];



// merge two sorted array



function merge(a1,a2) {
    a1.push(Number.MAX_VALUE);
    a2.push(Number.MAX_VALUE);
    const sortedArr = [];

    let l_p = 0;
    let r_p = 0;

    for (let i = 0; i < a1.length + a2.length - 2; i++) {
        if (a1[l_p] < a2[r_p]) {
            sortedArr.push(a1[l_p]);
            l_p++;
        } else {
            sortedArr.push(a2[r_p]);
            r_p++;
        }
    }

    return sortedArr;
}

console.log(merge(a1,a2));




