// REsource PepCoding (YouTube)
// longest common increasing subsequence

// Tabulation solved using iterative method

// O(n*n) time || O(n) space

// other solution in O(nlogn) time  

const LisTab = (arr) => {
    const tab = new Array(arr.length).fill(0);
    let omax = 1;
    for (let i = 0; i < arr.length; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && max < tab[j]) {
                max = tab[j];
            }
        }
        tab[i] = max + 1;
        if (tab[i] > omax) omax = tab[i];
    }
    return omax;
}


const length = LisTab([5, 8, 12, 1, 6, 15]);
console.log(length);


