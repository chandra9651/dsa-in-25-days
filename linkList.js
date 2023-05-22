/* singly link list */

function Node(data){
    this.data = data;
    this.next = null;
}

Node.prototype.insertNode=function(data){
    if(this.next==null){
        this.next = new Node(data);
    }else{
        this.next.insertNode(data);
    }
       
}



function linkList(){
   this.data=null;
  // this.next= null;

}

linkList.prototype.head = function(val){
    let newHead = new Node(val);
    let temp = this.data
    newHead.next=temp;
    this.data=newHead;
}



linkList.prototype.addNode=function(data){
    if(this.data == null){
        this.data= new Node(data);
    }else{
        this.data.insertNode(data)
    }
}

linkList.prototype.insertAfterGiven=function(){
    
}

linkList.prototype.removeGivenNode=function(){
    
}

 let ll = new linkList();

 ll.addNode(20);
 ll.addNode(30);
 ll.addNode(40);
 ll.addNode(50);

 console.log(ll);

ll.head(1);
//  console.log(ll.head(2));

console.log(ll);

