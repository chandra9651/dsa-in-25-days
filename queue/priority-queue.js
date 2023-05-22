
// priority queue
// remove  O(1) time
// insert O(n) time

// space O(n) space

function PriorityQueue(){
    let collection = [];
    this.printCollection=function(){
        console.log(collection);
    }
    this.enqueue=function(element){
          if(this.isEmpty()){
              collection.push(element);
          }else{
              var flag = false;
              for(let i=0;i<collection.length;i++){
                  if(element[1] <= collection[i][1]){
                      collection.splice(i,0,element);
                      flag = true;
                      break;
                  }
              }
              if(!flag){
                  collection.push(element);
              }
          }
    }
    this.dequeue=function(){
        let value = collection.shift();
        return value[0];
    }
    this.front=function(){
        return collection[0];
    }
    this.size=function(){
        return collection.length;
    }
    this.isEmpty=function(){
        return (collection.length===0);
    }
}


var pq = new PriorityQueue();
pq.enqueue(['E',2]);
pq.enqueue(['O',4]);
pq.enqueue(['L',3]);
pq.enqueue(['H',1]);
pq.enqueue(['L',3]);

pq.printCollection();

console.log(pq.dequeue());

pq.printCollection();