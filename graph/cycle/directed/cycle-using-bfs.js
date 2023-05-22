// REsource love babbar

// dedect cycle in directed graph using bfs (Kahn's algorithm) 

// using topological sorting

/**
 * 
 * 0---------,1----------,2
 *                       / \'           
 *                      /   \
 *                     /     \ 
 *                   ,/       \  
 *                   3--------,4
 * 
 *             Cyclic Graph
 * 
 */


// adjacency list
const adjList = {
    0: [1],
    1: [2],
    2: [3],
    3: [4],
    4: [2]
}


function Queue() {
    const collection = [];
    this.size = function () {
        return collection.length;
    }
    this.enqueue = function (elmnt) {
        collection.push(elmnt);
    }
    this.dequeue = function () {
        return collection.shift();
    }
    this.print = function () {
        console.log(collection);
    }
}



const kahan = () => {

    const indegree = new Array(5/* this array create 10 empty */).fill(0);

    const Q = new Queue();

    let count = 0;

    // count indegree of each vertex
    for (let v in adjList) {
        for (let i = 0; i < adjList[v].length; i++) {
            indegree[adjList[v][i]]++;
        }
    }


    // push vertex into queue which have indegree zero
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0) {
            Q.enqueue(i);
        }
    }


    while (Q.size() > 0) {
        const rm = Q.dequeue();
        //Q.print();
        console.log(rm);
        count++;

        // remove 1 degree of its neighbour
        if (rm in adjList) {
            for (let v of adjList[rm]) {
                if (--indegree[v] == 0) {
                    Q.enqueue(v);
                }
            }
        }
    }

    if (count == 5) {
        return false;
    }
    else {
        return true;
    }
}

let bool = kahan();
console.log(bool);