// Learn with Harry bhai

// count sort 

const arr = [12, 52, 1, 89, 130, 45];

const countSort = (arr) => {
    let max = Math.max(...arr);
    let coutArr = Array.from({ length: max+1 }, () => 0);

    // traverse main array 
    for (let i = 0; i < arr.length; i++) {
        coutArr[arr[i]]++;
    }
    //console.log(coutArr);

    let mainArrIndex = 0;
    // traverse count array
    for (let i = 0; i < coutArr.length; i++) {
        while (coutArr[i] > 0) {
            arr[mainArrIndex] = i;
            coutArr[i]--;
            mainArrIndex++;
        }
    }

    return arr;
}

let count = countSort(arr);

console.log(count);

