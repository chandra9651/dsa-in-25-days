'usestrict'

// Resource coding ninja (Build segment Tree) , Tech Dose (Update segment Tree) ,Apne collge (range sum query) -  { YouTube }

//Full Binary Tree (FBT) => Internal node have 0 or 2 children  


// range Sum QUery
const rangeSum = (indexOfSegmentTree, startOfRange, endOfRange, l/* range sum start query */, r/* range sum end query */) => {
    // no overlap
    if (l > endOfRange || r < startOfRange) {
        return 0;
    }
    //  full overlap
    if (l <= startOfRange && r >= endOfRange) {
        return tree[indexOfSegmentTree];
    }
    //partial overlap
    // if (l <= startOfRange || r >= endOfRange) { }

    let mid = Math.floor((startOfRange + endOfRange) / 2);
    // left child + right child
    return rangeSum(indexOfSegmentTree * 2 + 1, startOfRange, mid, l, r) + rangeSum(indexOfSegmentTree * 2 + 2, mid + 1, endOfRange, l, r);

}

// get min of range query
// This code might be wrong
const rangeMin = (indexOfSegmentTree, startOfRange, endOfRange, l, r) => {

    // if (r < startOfRange || l > endOfRange) {
    //     return 0;
    // }

    // full overlap
    if (startOfRange==endOfRange) {
        return tree[startOfRange];
    }

    // partial overlap
    let mid = Math.floor((startOfRange + endOfRange) / 2);

    // left child

    // right child
  return Math.min(rangeMin(indexOfSegmentTree * 2 + 1, startOfRange, mid, l, r),rangeMin(indexOfSegmentTree * 2 + 2, mid + 1, endOfRange, l, r));
}

const query = (treeRootIndx, treeStartOfIndex, treeEndOfIndex, startOfRange, endOfRange) => {

}

// update segment tree 
const update = (indexOfSegmentTree, startOfRange, endOfRange, pos /* position */, diff /* difference */) => {
    // it does not overlap
    if (startOfRange > pos || endOfRange < pos) {
        return;
    }
    if (startOfRange == endOfRange) {
        tree[indexOfSegmentTree] += diff;
        return;
    }
    // tree 
    tree[indexOfSegmentTree] += diff;

    let mid = Math.floor((startOfRange + endOfRange) / 2);
    // left child 
    update(indexOfSegmentTree * 2 + 1, startOfRange, mid, pos, diff);
    // right child
    update(indexOfSegmentTree * 2 + 2, mid + 1, endOfRange, pos, diff);


}


// This segment tree construct for sum

const constructSegmentTree = (arr, tree, startOfRange, endOfRange, segIndx) => {
    // base case
    if (startOfRange == endOfRange) {
        tree[segIndx] = arr[startOfRange];
        return tree[segIndx];
    };
    let mid = Math.floor((startOfRange + endOfRange) / 2);
    // left + right child segment tree
    return tree[segIndx] = constructSegmentTree(arr, tree, startOfRange, mid, 2 * segIndx + 1) + constructSegmentTree(arr, tree, mid + 1, endOfRange, 2 * segIndx + 2);
}


const arr = [1, 2, 5, 6, 7, 9];
//const tree = Array();  this assumption might be wrong 
// height of tree = Math.floor(arr.length/2);

const tree = [];

let startOfRange = 0;
let endOfRange = arr.length - 1;
let segIndx = 0;

constructSegmentTree(arr, tree, startOfRange, endOfRange, segIndx);
console.log(tree);
console.log('Length', tree.length);

let sum = rangeSum(0, 0, 5, 2, 4);
console.log('sum', sum);

update(0, 0, 5, 3, 8);
console.log('After Update');

// print tree after update
console.log(tree);
console.log('Length', tree.length);

// min range query
console.log('Min Range Query');
let min = rangeMin(0,0,5,1,4);
console.log(min);