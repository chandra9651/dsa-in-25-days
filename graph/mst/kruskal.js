// kruskal used to find minimum spanning tree
// kruskal use disjoint set 
// disjoint set => two sets that do not have any comman element 

/**
 * Method
 *
 *  sort all the edge on the basis of their respective edge weight 
 *  choose those vertex that not belong to same set 
 * 
 */


/**
 * input 
 * 6 9 vertex edge 
 * 5 4 9  vertex1 vertex2 wt
 * 1 4 1
 * 5 1 4 
 * 4 3 5
 * 4 2 3
 * 1 2 2
 * 3 2 3
 * 3 6 8
 * 2 6 7
 * 
 */

 const [m, n] = [6, 9];

 const input = [
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
 
 // represent sets one or more than  one 
 const representative = [];
 
 function make(m) {
     representative[m] = -1;
 }
 
 // return absolute parent 
 function find(v) {
     if (representative[v] == -1) return v; //return absolute parent 
     return find(representative[v]);
 }
 
 function union(u, v) {
     let a = find(u); // absolute parent of u
     let b = find(v); // absolute parent of v
 
     if (a == b) {
         console.log('Cycle present in a set');
         return;
     }
 
     // two sets are join with absolute parent 
     // a point to b
     representative[a] = b;
 }
 
 
 function kruskal() {
     // sort vertex in increasing order on the basis of their edge weight 
     input.sort((a, b) => a[2] - b[2]);
 
     // where m is the number of vertex
     for (let i = 1; i <= m; i++) {
         make(i);
     }
 
     let t_cost = 0;
 
     for (let vertexes of input) {
         let u = vertexes[0];
         let v = vertexes[1];
         let wt = vertexes[2];
 
         if (find(u) == find(v)) continue;
         union(u, v); // union of two sets
         t_cost += wt;
         console.log(`${u}U${v} &${wt}`);
     }
     console.log(t_cost);
 }
 
 kruskal();
 
 
 
 