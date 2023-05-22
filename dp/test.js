// fibonocai series 

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

//console.log(fib(50));


const fibMemo = (n, memo) => {
    if (n <= 2) return 1;
    if (n in memo) return memo[n];
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

// const result = fibMemo(500, memo = {});

// console.log(result);

// Grid traversal using recursion 



const gridTravler = ()=>{
    
}


//gridTravler();


// create 2D array and fill with 0

const table = Array(5).fill().map(()=>Array(2).fill(0));

table[1][2]=50;

console.log(table);