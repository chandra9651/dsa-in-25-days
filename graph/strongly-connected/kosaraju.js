// Resource Love Babbar And Tech Dose (YouTube) 

// kosaraju algorithm used to find strongly connected component 
// strongly connected mean => node that traverse other node and reach that start node is known as strongly connected component

// Directed Graph : graph taken from TechDose

/**
 *       1             4            After Transpose                   1             4 
 *     /' \           /' \      ---------------------->              / '\          /  \'
 *    /    \,        /    \,     OR Reverse of Directionn          ,/    \       '/    \ 
 *   0,------2------,3,----5                                       0-----,2'-----3-----'5
 * 
 * 
 */

// comma show the direction 


// Method to solve 
// 1 - topological sort using dfs
// 2 -Graph transpose
// 3 - dfs call

// Why topological sort => topological sort decide the next time dfs calling order for method Number 3


const adjList = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5],
    5: [3]
}

const visited = Array.from({ length: 6 }, (elmnt, indx) => 0);
//console.log(visited);

function Stack() {
    let stack = [];
    this.push = function (elmnt) {
        stack.splice(0, 0, elmnt);
    }
    this.pop = function () {
        return stack.shift();
    }
    this.print = function () {
        return stack;
    }
    this.size = function () {
        return stack.length;
    }
}

const stack = new Stack();

const transposeList = {};

function topologicalSort(u) {
    visited[u] = 1;
    if (u in adjList) {
        let adjVertex = adjList[u];// get adjacent vertex
        for (let v of adjVertex) {
            if (visited[v] == 0) {
                topologicalSort(v);
            }
        }
    }
    stack.push(Number(u));
}

function transposeGraph() {
    for (let u in adjList) {
        for (let v of adjList[u]) {
            if (v in transposeList) {
                transposeList[v].push(Number(u));
            } else {
                transposeList[v] = [Number(u)]
            }
        }
    }
}


// finding strongly connected component in graph using dfs

function stronglyConnected(u, arr) {
    visited[u] = 1;
    if (u in transposeList) {
        let adjV = transposeList[u]; // get array of adjacent vertex
        for (let x of adjV) {
            if (visited[x] == 0) {
                stronglyConnected(x, arr);
            }
        }
    }
    arr.push(u); // push method return size of array so never do return arr.push(u)
    return arr;
}



const kosaraju = () => {
    for (let key in adjList) {
        if (visited[key] == 0) {
            topologicalSort(key); // topological dfs call
        }
    }

    // transpose of Graph
    transposeGraph();

    // Reset visited array to false (0)
    visited.fill(0);

    // finding strongly connected component (scc)
    for (let key of stack.print()) {
        if (visited[key] == 0) {
            let scc = stronglyConnected(key, []);
            console.log(scc);
        }
    }
}

kosaraju();

//console.log(stack); // stack of  topological sorting order

//console.log(adjList);
//console.log(transposeList);


