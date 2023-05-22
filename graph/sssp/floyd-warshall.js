// Resource Tech Dose (YouTube)

// find sortest distance from all the pair
// O(n^3) time || O(1) space 

/** 
 * 
 * @all_pair_sortest_path
 * 
 * @_Any self distance is negative then graph have negative edge weight cycle
 * 
 * */


//        A
//     /    \
//    B ____ C
//
//
//   pair 1      pair 2       pair 3 
//   A->B ,      B->A ,        C->A , 
//   A-> C       B->C          C->B  
//


// floyd warshall can dedect negative edge weight cycle in graph 

// Graph

//       2-------'3
//      /'  \    |
//     /     \   | 
//    /       \  | 
//   /         \,|,
//   0----------,1
//
//
//

const vertex = [0, 1, 2, 3];

const adjMatrix = [
    [0, 8, 3, Number.MAX_VALUE],
    [Number.MAX_VALUE, 0, Number.MAX_VALUE, Number.MAX_VALUE],
    [Number.MAX_VALUE, 4, 0, 2],
    [Number.MAX_VALUE, 1, Number.MAX_VALUE, 0]
];


const floydWarshall = () => {

    // why start k = 1   ==> Reason => without including any edge {direct path}  get direct path
    for (let k = 0; k < vertex.length; k++) {
        for (let i = 0; i < vertex.length; i++) {
            for (let j = 0; j < vertex.length; j++) {
                //if(adjMatrix[i][j]==Number.MAX_VALUE || adjMatrix[k][j]==Number.MAX_VALUE) continue;
                adjMatrix[i][j] = Math.min(adjMatrix[i][j], (adjMatrix[i][k] + adjMatrix[k][j]));
            }
        }
    }
}


floydWarshall()

console.log(adjMatrix)
