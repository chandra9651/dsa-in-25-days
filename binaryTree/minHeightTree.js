// create binary tree form sorted array 
// and height should be minimum 

const array = [10, 4, 2, 1, 5, 17, 19, 18];

// This is an input class. Do not edit.
class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function reconstructBst(preOrderTraversalValues) {
    // Write your code here.
    if(preOrderTraversalValues.length==0) return null;
    const root = new BST(preOrderTraversalValues[0]);

    if(root.value>preOrderTraversalValues[1]){
                  preOrderTraversalValues.splice(0,1);
      root.left = reconstructBst(preOrderTraversalValues);
    }else if(root.value<=preOrderTraversalValues[1]){
                   preOrderTraversalValues.splice(0,1);
      root.right = reconstructBst(preOrderTraversalValues);
    }
   return root;
  }

  console.log(reconstructBst(array));