// Resource Pepcoding 

// find data in tree and print node to root  

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const a = new Node(1);
const b = new Node(b);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);
const h = new Node(8);


/**
 *              a
 *            /   \
 *           b     c
 *          / \     \
 *         d   e     f
 *                  / \
 *                 g   h
 * 
 */

a.left=b;
b.right=d;
b.left=e;

a.right=c;
c.right=f;
f.left=g;
f.right=h;



// search function return true and false 

function nodetoroot(tree,val,array){
    if(tree==null) return false;
    if(tree.data==val){
        array.push(tree.data);
      return true;
    }
    const left = nodetoroot(tree.left,val,array);
    if(left){
        array.push(tree.data);
        return true;
    }  // no call right child

    const right = nodetoroot(tree.right,val,array);
    if(right) {
     array.push(tree.data);
      return true;
    }

    return false;

}

const array = [];

const bool = nodetoroot(a,7,array);
console.log(bool);
console.log(array);

