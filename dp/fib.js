// here write dynamic programming 
 // there are two type of dynamic programming  1- memorization 2- tabuler form  

//  fib  0   1   2   3   4   5  
//  val  0   1   1   2   3   5

 const fib = (n)=>{
   if(n<=2) return 1;
   return fib(n-1) + fib(n-2);
 }

//  console.log(fib(7));
//  console.log(fib(7));

// when pass a big number like 80 or any other big number it will take longer time to calculate 

//  console.log(fib(20));

// we can solve these problem by using Memoization method 

const fibMemo = (n,memo={})=>{
  console.log(memo);
  console.log(n);
  console.log(n in memo);
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n] = fibMemo(n-1,memo) + fibMemo(n-2,memo);
    return memo[n];
  }
 
  // console.log(fibMemo(7));
//   console.log(fibMemo(180));


//|||||||||||| Grid traverse using recursive |||||||

const gridTravler = (m,n)=>{
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;
    return gridTravler(m-1,n) + gridTravler(m,n-1);
}

// console.log(gridTravler(1,1));
// console.log(gridTravler(2,3));
// console.log(gridTravler(3,2));

//when pass big x,y then it take longer time or some time it can be crashed solve this by Memoization

//console.log(gridTravler(18,18));


// apply memoization

const gridTravlerMemo = (m,n,memo={})=>{
    const key = m+","+n;
    if(key in memo) return memo[key];
    if(m===1 && n==1) return 1;
    if(m===0 || n===0) return 0;
    memo[key] = gridTravlerMemo(m-1,n,memo) + gridTravlerMemo(m,n-1,memo);
    return memo[key];
}

 //console.log(gridTravlerMemo(1,1));
console.log(gridTravlerMemo(2,3));
// console.log(gridTravlerMemo(3,2));
// console.log(gridTravlerMemo(180,180));