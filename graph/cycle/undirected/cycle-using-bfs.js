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


function Queue() {
    const collection = [];
    this.enqueue = function (elmnt) {
        collection.push(elmnt);
    }
    this.dequeue = function () {
        return collection.shift();
    }
    this.size = function () {
        return collection.length;
    }
    this.print = function () {
        console.log(collection);
    }
}


const visited = Array(5).fill(false);
const parent = Array(5).fill(-1);



const isCycle = (sourcevrtx) => {
    const Q = new Queue();
    visited[sourcevrtx] = true;
    Q.enqueue(sourcevrtx);
    while (Q.size() > 0) {
        const rm = Q.dequeue(); //  [ neighbour ]
        for (let u of graph1[rm]) { 
            if(visited[u]==false){
                parent[u] = rm;
                Q.enqueue(u);
            }else if(visited[u]==true && parent[u]!=rm){
               // cycle present in graph
                return true;
            }
        }

    }

return false;

}

let bool = isCycle(0);

// bool = true (cycle present in graph)
// bool = false (cycle present in graph)


console.log(bool);

