
const representative = [];



function make(v) {
    representative[v] = -1;
}

function union(u, v) {
    let a = find(u);
    let b = find(v);

    if (a == b) {
        console.log('cycle present in graph');
        return;
    }
    
    representative[a] = b;

}

function find(v) {
    if (representative[v] == -1) return v;
    return find(representative[v]);
}



