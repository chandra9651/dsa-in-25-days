// REsource Love babbar (YouTube) - to understand algorithm


// BellmanFord also used to find single source sortest path
// Bellman-Ford algorithm work in negative edge weight
// but dijkstar algorithm not work in negative edge weight

// Bellman-Ford fail in negative edge weight cycle 

// Bellman ford will work definitely work if all edge in undirected graph is positive 
// NOTE = >  Bellman Ford does not find sortes path for undirected graph if it has any negative edge 


// ++++ relax every edge (n-1) time where n is number of vertex ++++++

// O((V-1)E) => O(VE) time | O(1) time


// vertex
const vertex = [0, 1, 2, 3, 4];

// directed graph
const adjacencyMatrix = [
    [0, 1, 4, 0, 0],
    [0, 0, -2, 2, 0],
    [0, 0, 0, 3, 0],
    [0, 0, 0, 0, 4],
    [0, -3, 0, 0, 0]
];

/**
// it is another small grpah 

const vertex=[0,1,2];
const adjacencyMatrix=[
    [0,2,2],
    [0,0,-1],
    [0,0,0]
];

 * 
 */

// required cost
const rc = Array.from({ length: adjacencyMatrix.length }, () => Number.MAX_VALUE);

const BellmanFord = (sourceVrtx) => {
    rc[sourceVrtx[0]] = sourceVrtx[1];
    // relax every edge n-1 time  where n is vertex length
    for (let k = 0; k < adjacencyMatrix.length - 1; k++) {

        for (let i = 0; i < adjacencyMatrix.length; i++) {
            for (let j = 0; j < adjacencyMatrix.length; j++) {
                if (adjacencyMatrix[i][j] != 0) {
                    if (adjacencyMatrix[i][j] + rc[i] < rc[j]) {
                        rc[j] = adjacencyMatrix[i][j] + rc[i];
                    }
                }
            }
        }
    }
    // cycle dedection in graph

    for (let i = 0; i < adjacencyMatrix.length; i++) {
        for (let j = 0; j < adjacencyMatrix.length; j++) {
            if (adjacencyMatrix[i][j] != 0) {
                if (adjacencyMatrix[i][j] + rc[i] < rc[j]) {
                    console.log('Negative Cycle present in Graph');
                    break;
                }
            }
        }
    }

}

BellmanFord([0, 0]); // [source vertex , wt]
console.log(rc);

