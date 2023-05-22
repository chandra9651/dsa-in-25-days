// disjoint set use to find cycle in graph 
// kruskal algorithm use to find cycle in graph 

// Sets are called as Disjoint if :
//                  Intersection of any two sets is NULL

/*
*
* Disjoint set can not dedect cycle in  Directed graph Beacause union operation have no directionality
* AuB = it does not mean (A to B) OR (B to A)
*/

// method in disjoint set 

// add new node or vertex
var representative = [];

function make(v){
  representative[v] = -1;
}

// return root of set
function find(v){
    // this code is not totally correct 
    if(representative[v] == -1) return v; // vertex mean index return if value is -1
    return find(representative[v]);

}

// make a new set by using two set
function union(u,v){
    let a = find(u);
    let b = find(v);
    if(a==b){
        console.log("\ncycle present in set \n");
        return ;
    }

  // when 1 node point multiple node in this case secode node add to the root of that node   
    if(representative[u]!= -1){
        let parent = find(u);
        representative[parent] = v;
        return;
    }
 // a and b are absolute parent 
    representative[a] = b;

}

make(0);
make(1);
make(2);
make(3);
make(4);

console.log(representative);


union(4,3);
//union(3,2);
union(2,1);
union(1,0);
// union(0,1);
//union(3,1);

console.log(representative);