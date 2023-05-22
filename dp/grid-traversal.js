// Grid Traversal 

// two option (down and right )

// REcursion solution

// time  O(2^m+n)
// space O(n)

const gridTraversal = (m, n) => {
    if (m == 1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;

    // down                     right
    let x = gridTraversal(m - 1, n) + gridTraversal(m, n - 1);
    return x;

}

// console.log(gridTraversal(2, 3));
// console.log(gridTraversal(8,8))




// Dynamic programming solution using memoization

// time  O()
// space O()

const gridTraversalMemo = (m, n, memo = {}) => {
    const key = m + '' + n;
    if (key in memo) return memo[key];
    if (m == 1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;

    memo[key] = gridTraversalMemo(m - 1, n,memo) + gridTraversalMemo(m, n-1,memo);
    return memo[key];
}

console.log(gridTraversalMemo(2, 3));
console.log(gridTraversalMemo(18, 18));