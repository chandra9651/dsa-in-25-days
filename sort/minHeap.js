// Description : Heap is complete binary tree 
// Insertion in Heap done from end 
// Deletion of Heap in done from root

// min Heap -> Parent are smaller than it children
// Representation of heap done using array 

// height of max and min heap is log(n)
// insert time O(log(n))
// delete tie O(log(n))

function minSwap(arr,indx){
// in other coding site output order of min heap is differ because first = compare right side then left side
// in your code you first- compare left side then right side 
// if you can change order and will same   

    if(arr[indx]>arr[indx*2+1]){
        [arr[indx],arr[indx*2+1]]=[arr[indx*2+1],arr[indx]];
        minHeap(arr,indx*2+1);
    }if(arr[indx*2+2]!=null){
        if(arr[indx]>arr[indx*2+2]){
            [arr[indx],arr[indx*2+2]]=[arr[indx*2+2],arr[indx]];
            minHeap(arr,indx*2+2);
        }
    }
}



const minHeap = (arr,indx)=>{   
    if(arr[indx*2+1] ==null) return;
  //  while(indx<arr.length){
    // check left side  2*i+1
  // let large = arr[indx*2+1]<arr[indx]?indx*2+1:indx*2+2;

    minHeap(arr,indx*2+1);
    // check right side  2*i+2
    minHeap(arr,indx*2+2);
    minSwap(arr,indx);
   //}
}

const arr = [35, 33 ,42, 10 ,14 ,19 ,27 ,44 ,26 ,31];
//const arr = [35, 33 ,42, 10 ,14];
//const arr = [4,2,6,1,3,5,7];

minHeap(arr,0);

console.log('sorted min heap ');
console.log(arr);


// delete item from heap
// deletion start in heap from top of the heap

const deleteItem = (arr)=>{
      arr[0]=arr[arr.length-1];
      arr.pop();
      minHeap(arr,0);
}

deleteItem(arr);
console.log('delete item from heap');
console.log(arr);



// data insertion in heap done from end of heap  
inserHeap = (arr,elmnt)=>{
    arr.push(elmnt);
    minHeap(arr,0);
}


inserHeap(arr,10);
console.log('inserted element in heap ');
console.log(arr);