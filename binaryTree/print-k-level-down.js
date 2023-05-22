// Resource Pepcoding 

// print k level down node in tree

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
 *              a         level 0
 *            /   \
 *           b     c      level 1
 *          / \     \
 *         d   e     f    level 2  
 *                  / \ 
 *                 g   h  level 3
 * 
 */

a.left = b;
b.left = d;
b.right = e;

a.right = c;
c.right = f;
f.left = g;
f.right = h;


function printKLevelsDown(tree, k) {
    if (tree == null || k < 0) return;
    if (k == 0) {
        console.log(tree.data);
    }
    printKLevelsDown(tree.left, k - 1);
    printKLevelsDown(tree.right, k - 1);

}




printKLevelsDown(a, 2);