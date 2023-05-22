// REsource Anuj Bhaiya (YouTube)


/**
 * 
 * 0---------,1'----------2
 *                       / \'           
 *                      /   \
 *                     /     \ 
 *                   ,/       \  
 *                   3--------,4
 * 
 *  cycle present in graph
 * 
 */



/**
 * Description : if we use here parent array and tracking parent child relation then we can not get correct result
 *
 *      0--------1--------2
 *                       / \           
 *                      /   \
 *                     /     \ 
 *                   ,/       \,  
 *                   3--------,4
 * 
 *   In this graph we say cycle present in graph  if if using parent child relation
 *               BUT 
 *    There is no cycle in graph
 * 
 *   
 *  */ 




// adjacency list
const graph = {
    0: [1],
    2: [1, 3],
    3: [4],
    4: [2]
}


function dfs(u) {
    visited[u] = true;
    recStack[u] = true;
    if (u in graph) {
        for (let neighbour of graph[u]) {
            if (visited[neighbour] == false) {
               let bool = dfs(neighbour);
               if(bool){
                return true;
               }
            } else if (visited[neighbour] == true && recStack[neighbour] == true) {
                // cycle present in graph    
                return true;
            }
        }
    }

    recStack[u] = false;
    return false;
}



const visited = Array(5).fill(false);
// track recursion stack
const recStack = Array(5).fill(false);

const isCycle = () => {
    for (let u in graph) {
        let bool = dfs(u);
        if(bool) return true;
    }
    return false;
}


let bool = isCycle();

console.log(bool);