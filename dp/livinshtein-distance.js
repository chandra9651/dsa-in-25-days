// livinstein distance also known as Edit Distance problem

// REsouce Love Babbar {youtube}

// livinshtein used to conver str1 to str2 in minimum number of opereation


function livinshtein(str1,str2){
      return solve(str1,str2,i=0,j=0);
}

function solve(str1,str2,i,j){
    // base case
    if(i==str1.length){
        return str2.length-j;
    }
    if(j==str2.length){
        return str1.length-i;
    }

    if(str1[i]==str2[j]){
        return solve(str1,str2,i+1,j+1);
    }else{
        // insert
        const insertChar = 1+solve(str1,str2,i,j+1);
        // delete
        const deleteChar = 1+solve(str1,str2,i+1,j);
        // replace 
        const replaceChar = 1+solve(str1,str2,i+1,j+1);
        
        return Math.min(insertChar,deleteChar,replaceChar); 
    }
}

console.log(livinshtein('hello','helo'));
// number of operation 1