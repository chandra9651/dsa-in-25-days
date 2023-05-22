// REsource Anuj Bhaiya {YouTube}


// dedect cycle in link list 

// Method =>   
// slow pointer And fast pointer
/* 
    ____ ____ ___         _____________             _______ ______         _____________         _______________________
   |_data__|_node|-------|_data__|_node|-----------|_data__|_node_|-------|_data_|_node_|-------|_data_|_ref of node 3__|
                                                       /|\                                                       |
                                                        |                                                        |
                                                        |________________________________________________________|
                                                            cycle in link list 
                                     
*/


/* singly link list */

function Node(data) {
    this.data = data;
    this.next = null;
}

Node.prototype.insertNode = function (data) {
    if (this.next == null) {
        this.next = new Node(data);
    } else {
        this.next.insertNode(data);
    }

}



function linkList() {
    this.data = null;
    // this.next= null;

}


linkList.prototype.head = function (val) {
    let newHead = new Node(val);
    let temp = this.data
    newHead.next = temp;
    this.data = newHead;
}



linkList.prototype.addNode = function (data) {
    if (this.data == null) {
        this.data = new Node(data);
    } else {
        this.data.insertNode(data);
    }
}

// linkList.prototype.insertAfterGiven = function () {

// }

// linkList.prototype.removeGivenNode = function () {

// }

// let ll = new linkList();

// ll.addNode(20);
// ll.addNode(30);
// ll.addNode(40);
// ll.addNode(50);

// console.log(ll);

// ll.head(1);
// // head point node
// //  console.log(ll.head(2));

// console.log(ll);



const a = new Node(10);
const b = new Node(21);
const c = new Node(26);
const d = new Node(45);
const e = new Node(55);



a.next = b;
b.next = c;
c.next = d;
d.next = e;

// // create cycle in link list 
c.next = b;


//dedect cycle in link list using floyd cycle dedection algorithm

const floyd = () => {

    let slow = a //point head; // slow pointer move 1 step
    let fast = a //point head; // fast pointer move 2 step

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            //console.log('Cycle present in link list');
            return slow;
        }
    }

   return null;

}

//console.log(floyd());



// find first node where start cycle in link list 
// this startNodeCycleNode is not correct
function startCycleNode(){
   let start = a; 
   let meet = floyd();
   while(start!=meet){
       start = start.next;
       meet = meet.next;
   }

   return start;

}


console.log(startCycleNode());
























