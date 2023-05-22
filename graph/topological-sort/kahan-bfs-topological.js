// Resource Anuj Bhaiya (YouTube)

// topological sorting apply in DAG (Directed acyclic graph)
// Linear ordering of vertex such that for every edge u->v , u always appear before v in the order 

// topological sorting using bfs , bfs uses queue data structure

// This is kahan's algorithm

// Graph

//    3 --------'1 
//   /'      /' '| \
//  / |'   /     |   \'
// 0  |   /      |    4
//  \ |  /       |    /'
//   \' /        |   /
//    2---------'5
// where comma shows direction



const adjList = {
    // key : value pair
    0: [3, 2],
    3: [1],
    2: [3, 1, 5],
    1: [4],
    5: [1, 4]
}


function Queue() {
    const collection = [];
    this.size = function () {
       return collection.length;
    }
    this.enqueue = function (elmnt) {
       collection.push(elmnt);
    }
    this.dequeue = function () {
       return collection.shift();
    }
    this.print = function () {
       console.log(collection);
    }
 }
 
 
 
 const kahan = () => {
 
    const indegree = new Array(3/* this array create 10 empty */).fill(0);
 
    const Q = new Queue();
 
    const ans = [];
 
    // count indegree of each vertex
    for (let v in adjList) {
      for(let node of adjList[v]){
         indegree[node]++;
      }
    }
 
 
    // push vertex into queue which have indegree zero
    for (let i = 0; i < indegree.length; i++) {
       if (indegree[i] == 0) {
          Q.enqueue(i);
       }
    }
 
    while (Q.size() > 0) {
       const rm = Q.dequeue();
       //Q.print();
       ans.push(rm);
 
       // remove 1 degree of its neighbour
       if (rm in adjList) {
          for (let v of adjList[rm]) {
             if (--indegree[v] == 0) {
                Q.enqueue(v);
             }
          }
       }
    }
 
    console.log(indegree);
    return ans;
 
 }
 
 let ans = kahan();
 console.log(...ans);

// This is sorting order
// 0 2 3 5 1 4


// let a ={name:"chandra"}

// let b;
// b=a;

// b.name='dell';

// console.log(a.name)

// console.log(d);
// var d;



// let a = true;

// setTimeout(()=>{
//     a=false;
// },2000);


// while(a){
//     console.log('hii')
// }


// function h(a){
// console.log(`my name is ${a}`);
// }

// h()

// const value ='a';

// if(value){
//     const value ='b';
//     console.log(value);
// }

// console.log(value)




// let a=1;
// console.log(a)

// for( i in "String('123')"){
//     console.log(i)
// }

// console.log(2+5+"8")

// function f1() {
//     let i = 1;
//     let j = 1;
//     for (++i && ++j; i < 10; i += 2) {
//         console.log(j);
//     }
//     console.log('#')
// }

// f1();


