// doubly link list

function Node(val) {
    this.data = val;
    this.left = null;
    this.righ = null;
}

Node.prototype.insertNode = function (val) {
    if (this.right == null) {
        this.right = new Node(val);
    }else{
        this.right.insertNode(val);
    }
}



function doublyLinkList() {
    this.head = null;
}

doublyLinkList.prototype.head = function(val) {
    // const headNode = new Node(val);
    // const tmp = this.data; // tmp point all head data
    // headNode.righ = tmp;
    // this.head = headNode;
}

doublyLinkList.prototype.addNode = function (val) {
    if (this.data == null) {
        // when head not pointing any value
        this.data = new Node(val).left;
    } else {
        this.data.insertNode(val);
    }
}


const dll = new doublyLinkList();

dll.head(2)


console.log(dll);