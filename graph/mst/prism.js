// Resource pepcode (YouTube)

// MST => minimum cost spanning tree
//  tree with acyclic
//  spanning mean take all the vertex
// it is gredy approach
//
//     This is undirected graph
//             a
//           /    \
//          b      c
//          |    /  |
//          \   e   / 
//           \  | /  
//              d 
//  a-b=2 | a-c=1 | b-d=3 | d-e=5 | d-c=4 | e-c=6 



/**
 * @THere are four step to solve prism problem
 * 
 * @remove
 * @mark
 * @work // print
 * @add
 * 
 */

// in case of prism to find mst you need to target start vertex point and current vertex 

const vertices = ['A', 'B', 'C', 'D', 'E'];

const adjacencyMatrix = [
    [0, 2, 1, 0, 0],
    [2, 0, 0, 3, 0],
    [1, 0, 0, 4, 6],
    [0, 3, 4, 0, 5],
    [0, 0, 6, 5, 0]
]
const visited = Array(5).fill(false);

// print mst 



function PriorityQueue() {
    let collection = [];
    this.size = function () {
        return collection.length;
    }
    this.enqueue = function (elmnt) {
        if (this.size() == 0) {
            collection.push(elmnt);
        } else {
            let flag = false;
            for (let i = 0; i < collection.length; i++) {
                if (elmnt[2] < collection[i][2]) {
                    collection.splice(i, 0, elmnt);
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                collection.push(elmnt);
            }
        }
    }
    this.dequeue = function () {
        return collection.shift();
    }
    this.print = function () {
        console.log(collection);
    }
}


const PQ = new PriorityQueue();

// pq.enqueue(45);
// pq.enqueue(10);
// pq.print()
// console.log(pq.size());

// console.log(pq.dequeue());

// pq.print();


// edges are weighted so need to use Priority Queue

const prism = (sourceVrtx) => {
    PQ.enqueue(sourceVrtx);
    while (PQ.size() > 0) {
        let dqElmnt = PQ.dequeue();  /// get removed element from queue // [v|av|wt]

        if (visited[dqElmnt[0]] != false) continue;
        console.log(`${dqElmnt[0]}/${dqElmnt[1]} &${dqElmnt[2]}`);  // print vertex

        // mark visisted
        visited[dqElmnt[0]] = true;


        for (let i = 0; i < visited.length; i++) {
            if (adjacencyMatrix[dqElmnt[0]][i] != 0 && visited[i]==false) {
                // push its child in queue
                let wt = adjacencyMatrix[dqElmnt[0]][i];
                PQ.enqueue([i, dqElmnt[0], wt]); //[v|av|wt]
            }
        }
    }
}


// [v,av,wt]
//prism([0, -1, 0]);
prism([0, -1, 0]);



