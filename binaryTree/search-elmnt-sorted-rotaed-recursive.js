/** 
 *                                /  target in range  :: go left
 *                               / 
 *  case 1 : left part is sorted  
 *                              \
 *                               \  target is not in range  :: go right 
 * 
 * 
 * 
 *                                 / target in range  :: go right 
 *                                /
 *  case 2 : right part is sorted   
 *                               \
 *                                \ target is not in range :: go left 
 */


// O(logn) time || O(1) space



function searchInRotatedArray(array,l,r,target) {
    if(l > r) return -1;
    const mid = Math.floor((l+r)/2);
    if(array[mid] == target) return mid;
  
    // left part is sorted 
    if(array[l] < array[mid]){
      // check target in left range 
      if(array[l] <= target && target < array[mid]){
        return searchInRotatedArray(array,l,mid-1,target);
      }else{
        // target is not range
        return searchInRotatedArray(array,mid+1,r,target);
      }
      
    }
    else{
      // right part is sorted 
      if(array[mid] < target && target <= array[r]){
        // righ side range 
         return searchInRotatedArray(array,mid+1,r,target);
      }else{
        // target is not in range
        return searchInRotatedArray(array,l,mid-1,target);
      }
     
    }
  }


  const array = [45,61,71,72,73,0,1,21,33,37];
  const l = 0;
  const r = array.length-1;


 const result = searchInRotatedArray(array,l,r,33);

console.log(result);
