// // floyd warshal rule

// // Graph

// //       2-------'3
// //      /'  \    |
// //     /     \   | 
// //    /       \  | 
// //   /         \,|,
// //   0----------,1
// //
// //
// //

// const vertex = [0, 1, 2, 3];

// const adjMatrix = [
//     [0, 8, 3, Number.MAX_VALUE],
//     [Number.MAX_VALUE, 0, Number.MAX_VALUE, Number.MAX_VALUE],
//     [Number.MAX_VALUE, 4, 0, 2],
//     [Number.MAX_VALUE, 1, Number.MAX_VALUE, 0]
// ];

// const floydWarshall = () => {

//     for (let k = 0; k < vertex.length; k++) {
//         for (let i = 0; i < vertex.length; i++) {
//             for (let j = 0; j < vertex.length; j++) {
//                 adjMatrix[i][j] = Math.min(adjMatrix[i][j],(adjMatrix[i][k]+adjMatrix[k][j]));
//             }
//         }
//     }
// }

// floydWarshall();
// console.log(adjMatrix);



// const result =6/2*3+1;

// console.log(result);
