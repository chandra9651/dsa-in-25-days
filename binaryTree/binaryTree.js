
// create BST tree start
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Node.prototype.addNode = function (n) {
    if (n.data < this.data) {
        if (this.left == null) {
            this.left = n;
        } else {
            this.left.addNode(n)
        }
    }
    else {
        if (this.right == null) {
            this.right = n;
        } else {
            this.right.addNode(n);
        }

    }
}

function Tree() {
    this.root = null;
    // this.left=left;
    // this.right=right;
}


Tree.prototype.addValue = function (val) {
    var n = new Node(val);
    if (this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n)
    }

}

var tree = new Tree();

tree.addValue(10);
tree.addValue(8);
tree.addValue(20);
tree.addValue(5);
tree.addValue(2);
console.log(tree);

// create BST tree end



// traversBST bst tree inOrder -> LNR
function traversBST(tree) {
    if (tree == null) return;
    traversBST(tree.left);
    console.log(tree.data);
    traversBST(tree.right);
}

//traversBST(tree.root);

// traversBST bst tree preOrder -> NLR
function traversBST(tree) {
    if (tree == null) return;
    console.log(tree.data);
    traversBST(tree.left);
    traversBST(tree.right);
}

//traversBST(tree.root);

// traversBST bst tree postOrder -> LRN
function traversBST(tree) {
    if (tree == null) return;
    traversBST(tree.right);
    traversBST(tree.left);
    console.log(tree.data);
}

//traversBST(tree.root);





