// dfs is depth first search using stack


class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     a
//    / \
//   b   c
//  / \   \
// d   e   f

// const depthFirstPrint = (root)=>{
//      const stack = [root];
//      while(stack.length>0){
//          const curr = stack.pop();
//          console.log(curr.val);

//          if(curr.right!==null){
//             stack.push(curr.right);
//         }
//          if(curr.left!==null){
//              stack.push(curr.left);
//          }
//      }
// }; // O(n) time , O(n) space

//depthFirstPrint(a);

//abdecf



// second method 
// pre-order root | left | right
const depthFirstPrint = (root)=>{
     if(root==null) return;
     console.log(root.val);
     depthFirstPrint(root.left);
     depthFirstPrint(root.right);
}

//depthFirstPrint(a);
//abdecf

// pre-order traversal root | left | right
// In-order   left | root | right
// Post-order left | right | root  


// pre-order traversal
// root | left | right
const preOrder = (root)=>{
    if(root==null) return;
    console.log(root.val);
    depthFirstPrint(root.left);
    depthFirstPrint(root.right);
}
preOrder(a);

