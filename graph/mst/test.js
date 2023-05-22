// // prism algorithm

// const vertices = ['A', 'B', 'C', 'D', 'E'];

// const adjacencyMatrix = [
//     [0, 2, 1, 0, 0],
//     [2, 0, 0, 3, 0],
//     [1, 0, 0, 4, 6],
//     [0, 3, 4, 0, 5],
//     [0, 0, 6, 5, 0]
// ]

// const visisted = new Array(5).fill(false);

// // priority queue implement 

// function PriorityQueue() {
//     const collection = [];
//     // size of pq
//     this.size = function () {
//         return collection.length;
//     }
//     // insert element in pq
//     this.enqueue = function (elmnt) {
//         let flag = false
//         for (let i = 0; i < collection.length; i++) {
//             if (collection[i][2] > elmnt[2]) {
//                 collection.splice(i, 0, elmnt);
//                 flag = true;
//                 break;
//             }
//         }
//         if (!flag) {
//             collection.push(elmnt);
//         }
//     }

//     // remove element fron pq
//     this.dequeue = function () {
//         return collection.shift();
//     }
//     // is Empty 
//     this.isEmpty = function () {
//         return collection.length == 0;
//     }
// }


// // prism algorith implement 

// const prism = (sourceVrtx)=>{
//    const pq = new PriorityQueue();
//    pq.enqueue(sourceVrtx);

//    while(pq.size() >0 ){
//      const current = pq.dequeue(); //[v, av, wt]
//      // mark visited true
//     if(visisted[current[0]]) continue;

//      visisted[current[0]] = true;

//      // print current node
//      console.log(`${current[0]}/${current[1]} & ${current[2]}`);

//      // add adjacent node
//      for(let i=0;i<visisted.length;i++){
//         // wt != 0 and visted false
//         if(adjacencyMatrix[current[0]][i]!=0 && visisted[i]!= true){
//             const wt = adjacencyMatrix[current[0]][i];

//             // enque hole path of every node
//             pq.enqueue([i, `${current[0]}+${current[2]}`,wt]); // [v,av,wt];
//         }
//      }
//    }
// }


// prism([0,-1,0]);




// krusal algorith 
// this is also use to find  minimum spanning tree

const [m, n] = [6, 9];

const edgeWithWt = [
    [5, 4, 9],
    [1, 4, 1],
    [5, 1, 4],
    [4, 3, 5],
    [4, 2, 3],
    [1, 2, 2],
    [3, 2, 3],
    [3, 6, 8],
    [2, 6, 7]
];

const representative = [];

function make(m) {
    representative[m] = -1;
}


// return parent of current set 
function find(v) {
    if (representative[v] == -1) return v;
    return find(representative[v]);
}

// join two set 

function union(u, v) {
    const a = find(u); // parent of u
    const b = find(v); // parent of v

    if (a == b) {
        console.log('cycle present in graph');
        return;
    }

    // a -> b
    representative[a] = b;
}


const krusal = (edgeWithWt) => {
    edgeWithWt.sort((a, b) => a[2] - b[2]); // sort edge with their weight

    // where m is the number of vertex
    for (let i = 0; i <= m; i++) {
        make(i);
    }
    let t_cost = 0;

    for (let vertex of edgeWithWt) {
        let u = vertex[0];
        let v = vertex[1];
        let wt = vertex[2];

        if (find(u) == find(v)) continue;
        union(u, v);
        t_cost += vertex[2];
        console.log(`${u}U${v} & wt`);
    }
    console.log(t_cost);
}



krusal(edgeWithWt);















