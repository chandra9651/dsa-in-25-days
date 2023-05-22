
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

console.log(a);

// inorder traversal

// inorder = (node)=>{
//   if(node==null) return;
//   inorder(node.left);
//   console.log(node.val);
//   inorder(node.right);
// }

// inorder(a);


// preorder traversal 

// preOrder = (node)=>{
//      if(node==null) return;
//      console.log(node.val);
//      preOrder(node.left);
//      preOrder(node.right);
// }

// preOrder(a);



// post order traversal

// postOrder = (node)=>{
//   if(node==null) return;
//   postOrder(node.left);
//   postOrder(node.right);
//   console.log(node.val);
// }


// postOrder(a);



// node to root path



