// REsource CodeHelp - by Babbar

// implementation of max heap using complete binary tree

// Complete BT = tree have at lest two child  and leaf child should be left at possible
// Heap represent by array 


const maxSwap = (arr,indx)=>{
  
      if(arr[indx]<arr[indx*2+1]){ // check if left child is greater
          [arr[indx],arr[indx*2+1]]=[arr[indx*2+1],arr[indx]];
          maxHeap(arr,indx*2+1);
      }if(arr[indx*2+2]!=null){ // check if right child not equal to null
            if(arr[indx]<arr[indx*2+2]){ // check if right child is greater
                [arr[indx],arr[indx*2+2]]=[arr[indx*2+2],arr[indx]];
                maxHeap(arr,indx*2+2);
            }
      }
}



const maxHeap = (arr,indx)=>{
     if(arr[indx*2+1]==null) return;  // if left child is null
    
     // left child
     maxHeap(arr,indx*2+1);
     
     // right child
     maxHeap(arr,indx*2+2);

     // swap child with parent 
     maxSwap(arr,indx);

}

const arr = [4,2,6,1,3,5,7];

maxHeap(arr,0);
console.log('sorted max heap ');
console.log(arr);

// deletion of item done from root node 

deleteHeap = (arr)=>{
    // fill index 0 with last element so last elemet deleted and pop element
        arr[0]=arr[arr.length-1];
        arr.pop();
        maxHeap(arr,0);
}

deleteHeap(arr);
console.log('deleted item from heap');
console.log(arr);


// inserton done from end of heap add to the last node 
inserHeap = (arr,elmnt)=>{
   arr.push(elmnt);
   maxHeap(arr,0);
}

inserHeap(arr,7);
console.log('Inserted elmt in heap ');
console.log(arr);