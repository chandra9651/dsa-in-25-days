//  queue is a data structure to store data 
// queue is based on first come first out

// function Queue() {
//     let collection = [];
//     this.print = function () {
//         console.log(collection);
//     }

//     // insert data in queue
//     this.enqueue = function (elmnt) {
//         collection.push(elmnt);
//     }
//     // remove element from queue
//     this.dequeue = function () {
//         return collection.shift();
//     }

//     // get front element
//     this.front = function () {
//         return collection[0];
//     }

//     // get size of queue
//     this.size = function () {
//         return collection.length;
//     }

//     // check queue is empty 
//     this.isEmpty = function(){
//         true (collection.length==0);
//     }

// }
// let q = new Queue();
// q.enqueue(10);

// q.print()



// function Queue() {
//     let collection = [];
//     // print queue 
//     this.print = function () {
//         console.log(collection);
//     }
//     //insert element in queue
//     this.enqueue = function (element) {
//         collection.push(element)
//     }
//     // remove element from queue
//     this.dequeue = function () {
//         return collection.shift();
//     }

//     // check front value 
//     this.front = function(){
//         return collection[0]; 
//     }

//     //size of queue
//     this.size = function(){
//         return collection.length;
//     } 

//     // check is empty
//     this.isEmpty = function(){
//         return (collection.length ==0 );
//     }
// }


// let q = new Queue();

// q.enqueue(5);
// q.enqueue(12);
// q.enqueue(15);
// q.enqueue(46);

// q.print();


// // other queue

// let qq = new Queue();
// qq.print();



// implement priority queue

// function PriorityQueue() {
//     let collection = [];

//     // print priority queue
//     this.print = function () {
//         console.log(collection);
//     }

//     // enqueue element 
//     this.enqueue = function (element) {
//         let flag = false;
//         for (let i = 0; i < collection.length; i++) {
//             if (element < collection[i]) {
//                 collection.splice(i, 0, element);
//                 flag = true;
//                 break;
//             }
//         }
//         if (!flag) {
//             collection.push(element);
//         }
//     }
//     // remove element from queue
//     this.dequeue = function () {
//         return collection.shift();
//     }

//     // front element 
//     this.front = function () {
//         return collection[0];
//     }
//     this.size = function () {
//         return collection.length;
//     }
//     // check is empty
//     this.isEmpty = function () {
//         return (collection.length == 0);
//     }
// }


// const pq = new PriorityQueue();

// pq.enqueue(12);
// pq.enqueue(14);
// pq.enqueue(5);
// pq.enqueue(6);
// pq.enqueue(8);

// pq.print();
// pq.dequeue();
// console.log(pq.front());











