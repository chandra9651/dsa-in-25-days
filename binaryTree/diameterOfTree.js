// REsource Anuj Bhaiya (YouTube)


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



// O(n^2) time || O(1) space

// Diameter of tree
const Diameter = (tree) => {
    if (tree == null) return 0;
    const leftDia = Diameter(tree.left);
    const rightDia = Diameter(tree.right);
    const lh = height(tree.left);
    const rh = height(tree.right);
    return Math.max(leftDia, rightDia, lh + rh + 1);
}


function height(node) {
    if (node == null) return 0;
    const lh = height(node.left);
    const rh = height(node.right);
    return Math.max(lh, rh) + 1;
}


console.log(Diameter(a));

// console.log(height(a));

/************************************************** */

// other way to find Diameter 
//  O(n) time || O(1) space 
let diameter = 0;

const treeDia = (node) => {
    if (node == null) return 0;
    const lh = treeDia(node.left);
    const rh = treeDia(node.right);
    diameter = Math.max(diameter, lh + rh + 1);
    return Math.max(lh, rh) + 1;
}

treeDia(a);

console.log('optimised ', diameter);