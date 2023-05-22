// use to implement disconary
// trie Data Structure use for efficient searching

function Node(){
    this.boolen=false;
}

Node.prototype.insertNode=function(val){
   if(val.split('').length==0) return;

    if(this.hasOwnProperty(val[0])){
        console.log(false);
       this.val[0].insertNode(val.slice(1));
   }else{
       this[val[0]] = new Node();
       if(val.split('').length>=1){
           if(val.split('').length==1){
            this[val[0]].boolen=true;
           }
        this[val[0]].insertNode(val.slice(1));
    }
   }
}


function Trie(){
    
}

Trie.prototype.addNode=function(data){
    //(Object.keys(this).length==0)
    if(!this.hasOwnProperty(data[0])){
         // check if key not exist
        this[data[0]] = new Node();
        if(data.split('').length>=1){
            this[data[0]].insertNode(data.slice(1));  
        }
    }else{
        // if key exist
      this[data].inserNode(data.slice(1));
    }
}


let trie = new Trie();

trie.addNode('car');
trie.addNode('bar');
console.log(trie);


// write trie searching algorithm