// // topological sorting using dfs 

// // what is topological sorting  if u to  v is edge then u comes before v

// // topological sorting apply in DAG (Directed acyclic graph)
// // Linear ordering of vertex such that for every edge u->v , u always appear before v in the order 

// // ## Resource  Anuj Bhaiya (YouTube) && Love Babbar

// const visited = Array.from({ length: 6 }, () => false);

// class Stack{
//    constructor(){
//       this.collection = [];
//    }
//    push = function(elmnt){
//        this.collection.push(elmnt);
//    }
//    pop = function(){
//       this.collection.pop();
//    }
//    print = function(){
//       console.log(this.collection.reverse());
//    }
// }

// const map = new Map();


// // map represent graph

// map.set(0, [2, 3]);
// map.set(1, [4]);
// map.set(2, [3, 1]);
// map.set(3, [1]);
// map.set(4, []);
// map.set(5, [1, 4]);

// const stack = new Stack();

// const topologicalSort = (u) => {

//    visited[u] = true;
//    // go to its child
//    for(let child of map.get(u)){
//       if(visited[child]==false){
//          topologicalSort(child);
//       }
//    }
//    stack.push(u);
// }



// // map iterate using (for of) loop
// for(let [key,val] of map){
//    if(visited[key]==false){
//       topologicalSort(key);
//    }
// }



// stack.print();


// topological sorting using bfs kahan's algorithm 
// using indegree and out degree


const adjList = {
   // key : value pair
   0: [3, 2],
   3: [1],
   2: [3, 1, 5],
   1: [4],
   5: [1, 4]
}



// implement queue 

function Queue() {
   const collection = [];

   // return size 
   this.size = function () {
      return collection.length;
   }

   // enqueue element 
   this.enqueue = function (elmnt) {
      collection.push(elmnt);
   }

   // dequeue element from queue
   this.dequeue = function () {
      return collection.shift();
   }

}





const kahan = () => {
   const PQ = new Queue();

   const indegree = new Array(6).fill(0);
   const ans = [];

   // count indvegree of vertex
   for (let v in adjList) {
      for (let j = 0; j < adjList[v].length; j++) {
         indegree[adjList[v][j]]++;
      }
   }


   // push vertex that have one degree 0
   for (let i = 0; i < indegree.length; i++) {
      if (indegree[i] == 0) {
         PQ.enqueue(i);
      }
   }


   while (PQ.size() > 0) {
      const current = PQ.dequeue();
      ans.push(current);
      // minimise indegree
      if (current in adjList) {
         for (let v of adjList[current]) {
            if (--indegree[v] == 0) {
               PQ.enqueue(v);
            }
         }
      }
   }

   return ans;
}

const result = kahan();
console.log(result);

