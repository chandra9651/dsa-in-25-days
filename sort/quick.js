
// O(nlogn) time || O(1) space


function quickSort(arr){
    if(arr.length<=1) return arr;

    // take last element as pivote
    const pivot = arr[arr.length-1];
    const leftArr = [];
    const rightArr =[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i]);
        }
        else{
            rightArr.push(arr[i]);
        }
    }
  
    return [...quickSort(leftArr),pivot,...quickSort(rightArr)];
}


const arr = [1,5,2,99,81,100,144,121,91,85,74,10];

console.log(quickSort(arr));