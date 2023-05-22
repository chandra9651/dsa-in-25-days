// walk => Any random traversal in graph ( V+E can be repeated )
// Trail => A walk in which no edge is repeated ( V can be repeated ) 

// A trail which start and end at same vertex is called Euler Circuit

// Condition for Euler 
// start = end vertex are same  
// every edge must be visited only once 
// All the vertices should have even degree

// if component have no edge then component is euler graph  
// 2 is a componenet with no edge is euler garph

// Graph

//   1-------2---------3
//   |     /   \       |
//   |    /      \     |  
//   |   /         \   | 
//   0 /             \ 4
//   

// const adjList = {
//     1: [0, 2],
//     0: [1, 2],
//     2: [0, 1, 3, 4],
//     3: [2, 4],
//     4: [3, 2]
// }

const adjList = {
    0:[1,3],
    1:[0,2],
    2:[1,3],
    3:[2]
}

const parent = Array.from({ length: Object.keys(adjList).length }, (elmnt, indx) => -1);

// count how many time vertex are visited
const visitCount = Array.from({ length: Object.keys(adjList).length}, (elmnt, indx) => 0);

// edge count of very vertex
const edgecount = Array.from({ length: Object.keys(adjList).length }, (elmnt, indx) => -1);


// count total number of edge present in graph
function countEdge() {
    for (let key in adjList) {
        edgecount[key] = adjList[key].length;
    }
    // check if every edge are even or not 
    const sum = (edgecount.reduce((previousValue, currentValue) => previousValue + currentValue, 0)) % 2;
    return sum;
}


function isValidPath(start, adjChild) {
    //console.log(start , " :" , adjChild);
    if (start == adjChild) {
        if (visitCount[adjChild] == (adjList[adjChild].length)) {
            // check evey edge is visited 
            for (key in adjList) {
                if (visitCount[key] == adjList[key].length) {

                } else {
                    // every edge are not visited so return false
                    return false;
                }
            }
            // if every edge is visited return true
            console.log('Every edge is visited');
            return true;
        }
        // when visitCount != adjList[adjChild].length that mean there is a path
        return true;
    }

    // if  visitCount < adjList[adjChild].length that mean there is a path to go 
    else if (visitCount[adjChild] < (adjList[adjChild].length)) {
        return true;
    }
    // if visitCount == adjList[adjChild].length) that mean there is no path to go that vertex
    else if (visitCount[adjChild] == (adjList[adjChild].length)) {
        return false
    }

}




function dfs(start, v) {
    // visitCount[v]++; // mark visited true
    let adjV = adjList[v];
    for (let adjChild of adjV) {
        parent[adjChild] = v;
        if (parent[v] != adjChild && visitCount[adjChild] < (adjList[adjChild].length)) {
            if (isValidPath(start, adjChild)) {
                visitCount[v]++;
                visitCount[adjChild]++;
                //console.log("child",adjChild);
                // crete edge mark

                console.log(`Edge between ${v} and ${adjChild}`);
                console.log(visitCount);
                dfs(start, adjChild);
            }
        }
    }
}



const euler = () => {
    //check graph can be euler or not by counting incident edge 
    const res = countEdge();
    if (res == 0) { // graph can euler 
        dfs(start = 1, 1);
    }

console.log(isEulearean());
}


function isEulearean(){
    for (let i = 0; i < edgecount.length; i++) {
        if (edgecount[0] == visitCount[0]) {
            // every edge are visited
        }
        else {
            return false;
        }
        // graph is eulerian
        return true;
    }
}

euler();

