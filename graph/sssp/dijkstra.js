// Resource pepcoding 

// dijkstar's algorithm use to find sortest path from source node to all other node
// or 
// single source sortest path 

// this is optimise algo
// it is gready algorithm 
// it is applicable in both directed and undirected graph

//[ 0 , 1  ,2  ,3  ,4]
//const vertices = ['A','B','C','D','E'];


// This graph created my self and this is directed graph 
// comma represent direction of graph 

//       1-----------,3
//      /'|  \        |     
//     /  |    \      |    
//    0   |      \    |       
//     \  |        \  |    
//      \,|,        \,|,     
//       2-----------,4                   

//          || 
const adjMatrix = [
    [0, 1, 2, 0, 0],
    [0, 0, 1, 4, 2],
    [0, 0, 0, 3, 0],
    [0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0]
];



//directed graph
// const adjMatrix = [
//       [0,1,12,2,3],
//       [0,0,8,0,0],
//       [0,0,0,0,0],
//       [0,0,0,0,1],
//       [0,0,4,0,0]
// ];



function PriorityQueue() {
    let collection = [];
    this.size = function () {
        return collection.length;
    }
    this.enqueue = function (elmnt) {
        if (this.size() == 0) {
            collection.push(elmnt);
        } else {
            let flag = false;
            for (let i = 0; i < collection.length; i++) {
                if (elmnt[2] < collection[i][2]) {
                    collection.splice(i, 0, elmnt);
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                collection.push(elmnt);
            }
        }
    }
    this.dequeue = function () {
        return collection.shift();
    }
    this.print = function () {
        console.log(collection);
    }
}

const visited = Array(5).fill(false);

const dijkstra = (sourceVrtx) => {
    const PQ = new PriorityQueue();
    PQ.enqueue(sourceVrtx);
    while (PQ.size() > 0) {
        let rm = PQ.dequeue();
        if (visited[rm[0]] == true) continue;

        // mark visited true
        visited[rm[0]] = true;
        console.log(`vrtx ${rm[0]} via ${rm[1]} & wt ${rm[2]}`);  // print path

        // process its adjacent node
        for (let i = 0; i < adjMatrix.length; i++) {
            if (visited[i] != true && adjMatrix[rm[0]][i] != 0) {
                PQ.enqueue([i, rm[1] + '' + i, adjMatrix[rm[0]][i] + rm[2]]); // [vertex, Path, wt+rm[2]]
            }
        }
    }
}

dijkstra([0, 0, 0]); // [vertex,path,wt]




