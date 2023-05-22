// articulation poin in bridge in graph 

// articulation point using targens algorithm

// Graph (Tech Dose = YOuTube )
//
//   0------------1
//   | \          |
//   |   \        |
//   |     \      | 
//   |       \    | 
//   |         \  |
//   |           2
//   3 \
//   |   \
//   |     \
//   4      5


const adjList = {
    0: [1, 2, 3],
    1: [0, 2],
    2: [0, 1],
    3: [0, 4, 5],
    4: [3],
    5: [3]
}




// discovery time 
const disc = Array.from({ length: 6 }, () => -1);

// low time 
const low = Array.from({ length: 6 }, () => -1);

// parent child relationship

const parent = Array.from({ length: 6 }, () => -1);

const AP = Array.from({ length: 6 }, () => false);

let timer = 0;


function dfs(u) {
    disc[u] = timer;
    low[u] = timer;
    timer++;
    // count child 
    let childNode = 0;
    // adjacent node 
    for (let adjChild of adjList[u]) {
        if (disc[adjChild] == -1) {
            childNode++;
            parent[adjChild] = u;
            dfs(adjChild);

            // root node case
            if (childNode > 1 && parent[u] == -1) {
                console.log(`vertex ${u} is Articulation point `);
                AP[u] = true;
                return;
            }

            // this node is node a root node
            else if (childNode > 0 && low[adjChild]>disc[u]) {
                console.log(`vertex ${u} is Articulation point `);
                AP[u] = true;
                return;
            }

            low[u] = Math.min(low[adjChild],disc[u]);


        } else if (parent[u] != adjChild) {
            // present of back edge 
            low[u] = disc[adjChild];
        }
    }

}


const articulation = () => {
    for (let key in adjList) {
        if (disc[key] == -1) {
            dfs(key);
        }
    }
}


articulation();

console.log(AP);




