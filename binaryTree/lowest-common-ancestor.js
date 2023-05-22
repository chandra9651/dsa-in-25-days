// Resource Anuj Bhaiya (YouTube) 
// Another resource PepCoding  => using node to root path of a and b 

// find data in tree and print node to root  

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const a = new Node(1);
const b = new Node(2);
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

a.left = b;
b.right = d;
b.left = e;

a.right = c;
c.right = f;
f.left = g;
f.right = h;


// lowest common ancestor 
function lca(node, n1, n2) {
    if (node == null) return null;

    //case 1 : when root node is == a || b
    if (node.data == n1 || node.data == n2) return node;
    const left = lca(node.left, n1, n2);
    const right = lca(node.right, n1, n2);

    // case 2 : both a and b either left or right side 
    if (left == null) return right;
    if (right == null) return left;

    // case 3 : one node is left side and other is right side  
    return node;
}

const lowestCA = lca(a,5,7);
console.log(lowestCA.data);





