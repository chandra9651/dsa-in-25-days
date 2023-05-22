// permutaion result = n!

// print all permutation of string
// this is following swaping method

// https://www.jsmount.com/javascript-string-permutation-program/


let permutation = (string,result)=>{
      if(string.length==0){
          console.log(result);
        return;
      } 
      for(let i=0;i<string.length;i++){
          permutation(swap(string,i).slice(1),result+string[0]);
      }
}

let swap = (arr,indx)=>{
      [arr[0],arr[indx]] = [arr[indx],arr[0]];
   return arr;
}

permutation(['A','B','C'],'');


// other solution of permutation resurce Love Babbar

/*
function permutaion(arr, idx, result) {
  // base case 
  if (idx >= arr.length) {
      result.push([...arr]);
      return;
  }

  for (let j = idx; j < arr.length; j++) {
      // swap value
      [arr[idx], arr[j]] = [arr[j], arr[idx]];
      permutaion(arr, idx + 1, result);
      // backtrack 
      [arr[idx], arr[j]] = [arr[j], arr[idx]];
  }
}

const arr = ['A', 'B', 'C'];
const result = [];

permutaion(arr, 0, result); // pass result as a reference

console.log(result);

*/