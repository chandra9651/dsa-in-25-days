// Resource Anuj Bhaiya (Graph) love Babbar clear concept (YouTube)


//dedect cycle in undirected graph using dfs 



/**      1  
 *      /
 *     /
 *    0    
 *     \   
 *      \  
 *       3__ __ 2 
 *        \    /
 *         \  /       
 *          4
 *
 *  Graph 1
 *  
*/

const graph1 = {
    0: [1, 3],
    1: [0],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}


/**
 * 
 * 
 *    0 __  __ __1
 *    \ 
 *     \
 *      3__ __ ___2
 * 
 */



const graph2 = {
    0: [1, 3],
    1: [0],
    2: [3],
    3: [0, 2]
}

function dfs(u) {
    visited[u] = true;
    // get its child
    for (let v of graph1[u]) {  // [neighbour ]
        if (visited[v] == false) {
            parent[v] = u;
            let bool = dfs(v);
            if(bool){
                return true;
            }
        } else if (parent[u] != v) {
            // cycle in graph
            return true;
        }
    }
    // cycle not present in graph
    return false;
}

const parent = Array(5).fill(-1);
const visited = Array(5).fill(false);

const isCycle = () => {
    for (let u in graph1) {
        if (visited[u] == false) {
           return dfs(u);
        }
    }
}

let bool = isCycle();

console.log(bool);