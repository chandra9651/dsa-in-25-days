// Queues => Fisrt In First Out 

// insert and remove
// O(1) time || O(n) space

function Queue(){
    let collection = [];
    this.print=function(){
        console.log(collection);
    }
    this.enqueue=function(element){
        collection.push(element);
    }
    this.dequeue=function(){
       return collection.shift();
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

/*
let q = new Queue(); 
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('d');

q.print();

console.log(q.dequeue())

q.print();

console.log(q.front())

*/
