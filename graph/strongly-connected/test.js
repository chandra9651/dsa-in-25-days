
 //      directed graph
 
/**
 *       1             4            After Transpose                   1             4 
 *     /' \           /' \      ---------------------->              / '\          /  \'
 *    /    \,        /    \,     OR Reverse of Directionn          ,/    \       '/    \ 
 *   0,------2------,3,----5                                       0-----,2'-----3-----'5
 * 
 * 
 */




const adjList = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5],
    5: [3]
}


const visited = new Array(6).fill(false);


const stack = []; // reverse stack get topological order of sorting

function topologicalSort(u){
    // mark visited 
    visited[u] = true;
    for(let child of adjList[u]){
        if(visited[child] == false){
            topologicalSort(child);
        }
    }
    stack.push(Number(u));
}

const transposeList={};

function transposeGraph(){
    for(let u in adjList){
        for(let v of adjList[u]){
            if(v in transposeList){
                transposeList[v].push(Number(u));
            }else{
                transposeList[v] = [Number(u)];
            }
        }
    }
}


function stronglyConnected(u,arr){
    visited[u] = true;
    for(let child of transposeList[u]){
        if(visited[child] == false){
            stronglyConnected(child,arr);
        }
    }
  arr.push(u);
  return arr;
}





const kosaraju = ()=>{
    for(let key in adjList){
        if(visited[key]==false){
            topologicalSort(key);
        }
    }

    // transpose of graph
    transposeGraph();

    // resent visted false

    visited.fill(false);


const topologicalOrder = stack.reverse();  
    // find strongly connnected component (scc)
    for(let key of topologicalOrder){
        if(visited[key]==false){
           const scc = stronglyConnected(key,[]);
           console.log(scc);
        }
    }
}


kosaraju();