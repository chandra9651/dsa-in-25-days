// REsource Tech Dose and LOve Babbar (not coding part)

// Tarjen algorithm used to find Bridge in graph 
// Bridge => A bridge is an edge , removing which increase the number of components

// Notes => Bridge is a n/w (network) can represent critical wires or connection and it similar to SPOF(single point of failure) 
//         we can eliminate such vulnerability by adding edges or redesigning it and increase reliability


// O(V+E) time || O() space 

//        0--------1
//        |\       |
//        |  \     |
//        |    \   | 
//        |      \ 2
//        3 
//        |
//        | 
//        4

// adj represente the graph
const adj = {
    0: [1, 2, 3],
    1: [0, 2],
    2: [0, 1],
    3: [0, 4],
    4: [3]
}

// In this algorithm we never update disc time of vertex 
// Tarjans algorithm used to find bridge in graph  

const disc = Array.from({ length: 5 }, (elmnt, indx) => -1); // Discover time
const low = Array.from({ length: 5 }, (elmnt, indx) => -1); // lower time to reach that node  lower time <= discover time
const parent = Array.from({ length: 5 }, (elmnt, indx) => -1);  // maintain parent and child relationship

let timer = 0;

function dfs(v, ans) {
    disc[v] = timer;
    low[v] = timer;
    timer++;
    let adjv = adj[v];  // get array of adjcent child
    for (let adjChild of adjv) { // get child vertex
        if (disc[adjChild] == -1) {
            parent[adjChild] = v; // parent and child relationship
            dfs(adjChild, ans);

            //after child return to its parent  

            // check backedge presnet or not 
            if (low[adjChild] > disc[v]) {
                console.log(`Bridge presnet in the graph between Edge ${v} and ${adjChild}`);
                ans.push([v, adjChild]);
            } else {
                // when bridge is not present then
                low[v] = Math.min(disc[v], low[adjChild]);
            }

            //

        } else if (parent[v] != adjChild) {
            // present of back edge 
            // update descendent (v) to ancestor
            low[v] = disc[adjChild];
        }
    }
    return ans;
}


// Bridge using tarjan's algorithm
const Tarjans = () => {
    for (let v in adj) {
        if (disc[v] == -1) {
            const bridgeEdge = dfs(v, []);
            console.log(bridgeEdge);
        }
    }
}


Tarjans();