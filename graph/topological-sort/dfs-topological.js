// topological sorting apply in DAG (Directed acyclic graph)
// Linear ordering of vertex such that for every edge u->v , u always appear before v in the order 

// ## Resource  Anuj Bhaiya (YouTube) && Love Babbar

const visited = Array.from({ length: 6 }, (elmnt, indx) => 0);

class Stack {
    constructor() {
        this.collection = [];
    }
    push = function (elmnt) {
        this.collection.push(elmnt);
    }
    pop = function () {
        this.collection.pop();
    }
    print = function () {
        console.log(this.collection.reverse());
    }
}


// create set to represent graph 
const map = new Map();
// set vale in key and pair
// map.set(1, [2]);
// map.set(0, [1, 2]);
// map.set(2,[]);


//    3 --------'1 
//   /'      /' '| \
//  / |'   /     |   \'
// 0  |   /      |    4
//  \ |  /       |    /'
//   \' /        |   /
//    2---------'5
// where comma shows direction


// map.set(0, [2, 3]);
// map.set(1, [4]);
// map.set(2, [3, 1]);
// map.set(3, [1]);
// map.set(4, []);
// map.set(5, [1, 4]);


map.set(0,[1]);
map.set(1,[2]);
map.set(2,[0]);


// 0 2 3 5 1 4  topological order
// 5 0 2 3 1 4  topological order

const stack = new Stack();

function topologicalSort(u) {
    // console.log(u)
    visited[u] = 1;
    const v = map.get(u); // get array of dependent vertex OR Child vertex
    for (let gotov of v) {
        if (visited[gotov] == 0) {
            topologicalSort(gotov);
        }
    }
    stack.push(u);
}


for ([key, val] of map) {
    if (visited[key] == 0) {
        topologicalSort(key);
    }
}

//console.log(map.get(1));

// after revere collectione element 
stack.print();