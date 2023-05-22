// insertion sort 
// complexity O(n^2) Insertion Sort == Bubble sort 

const arr = [70, 15, 2, 62, 32, 100, 78, 60];

const insertion = (arr)=>{
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i-1; // handel sorted array 
        while(j>=0 && key<arr[j]){
            arr[j+1] = arr[j]; // shift element to the right side
            j=j-1;
        }
        arr[j+1] = key; // insert element to its correct position
    }
    return arr;
}


console.log(insertion(arr));

