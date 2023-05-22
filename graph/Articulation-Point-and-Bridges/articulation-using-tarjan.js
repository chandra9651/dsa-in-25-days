// Resource Tech Dose (YouTube)

// finding articulation using tarjans algorithm
// Articulatin => A is Node a articulation point if on removing it the number of component increase 
// Articulation point is a node that removed graph can be devided into two or more than componenent

// Application =>

// O(V+E) time | O() space

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

let timer = 0;
// Discovery time 
const disc = Array.from({ length: 6 }, (elmnt, indx) => -1);

// low time
const low = Array.from({ length: 6 }, (elmnt, indx) => -1);

// Parent information
const parent = Array.from({ length: 6 }, (elmnt, indx) => -1);

const AP = Array.from({ length: 6 }, (elmnt, indx) => false);


function dfs(v) {
    disc[v] = timer;
    low[v] = timer;
    timer++;
    let child = 0; // child is a number of subGraph if child >1 then vertex v is Articulation Point   
    let adjv = adjList[v]; // get array of adjacent vertex 
    for (let adjChild of adjv) {
        if (disc[adjChild] == -1) {
            child++;
            parent[adjChild] = v;// parent of adjChild is v 
            dfs(adjChild);

            // root node case
            if (child > 1 && parent[v] == -1) {
                console.log(`vertex ${v} is Articulation point `);
                AP[v] = true;
                return;
            }

            // this node is node a root node
            else if (child > 0 && low[adjChild] > disc[v]) {
                console.log(`vertex ${v} is Articulation point `);
                AP[v] = true;
                return;
            }

            low[v] = Math.min(low[adjChild], disc[v]);

        }
        else if (disc[adjChild] != -1 && parent[v] != adjChild) {
            // present of back edge 
            // update low of descendant with ancestor 
            low[v] = disc[adjChild];
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