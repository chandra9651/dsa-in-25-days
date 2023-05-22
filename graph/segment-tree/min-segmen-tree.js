'usestrict'


// Three condition in segment tree
// total overlap
// 1--3 | 2--3 | 3---4 These are total overlap segment range  
// 1-----------------4  SEarching range 

// partial overlap
// 0---3| 3---6|  These are partial overlap segment tree
// 2------5 Searching range 


// no overlap 
// 0---2 | 5---8 These are no overlap segment tree
// 3------4 Searching range 



// construct minimum segment tree
const minSegmentTree = (arr, tree, startOfRange, endOfRange, indexOfSegmentTree) => {
    if (startOfRange == endOfRange) {
        // console.log(arr[indexOfSegmentTree]);
        tree[indexOfSegmentTree] = arr[startOfRange];
        return tree[indexOfSegmentTree];
    }

    let mid = Math.floor((startOfRange + endOfRange) / 2);
    // left child and right child
    return tree[indexOfSegmentTree] = Math.min(minSegmentTree(arr, tree, startOfRange, mid, indexOfSegmentTree * 2 + 1), minSegmentTree(arr, tree, mid + 1, endOfRange, indexOfSegmentTree * 2 + 2));

}


const arr = [8, 4, 12, 34, 26, 2];
const tree = [];

minSegmentTree(arr, tree, 0, arr.length - 1, 0);

console.log(tree);
console.log(tree.length);