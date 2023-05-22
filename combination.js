// combination => order does not matter  mean 12 == 21

// this algorithm developed by me 

// output of [1,2,3]
// 1
// 12
// 123
// 13
// 2
// 23
// 3


// Important 
// subsequence + subset + combination  2^n output and solution are same as combination 



const combination = (element, result) => {

    if (element.length == 0) return;
    for (let i = 0; i < element.length; i++) {
        console.log(result + element[i]);
        combination(element.slice(i + 1), (result + element[i]));
    }
}


//combination([1,2,3],'');

// in case of combination order not matter

//                         ___________
// combination using by | coderbyte | method using recursion
//                         ___________

const combi = (elements) => {

    if (elements.length === 0) return [[]];
    const firstEl = elements[0];
    const rest = elements.slice(1);

    const combsbWithoutFirst = combi(rest);
    const combsbWithFirst = [];

    combsbWithoutFirst.forEach(comb => {

        const combWithFirst = [...comb, firstEl];
        combsbWithFirst.push(combWithFirst);

    });
    return [...combsbWithoutFirst, ...combsbWithFirst];

};

console.log(combi(['a', 'b', 'c']));

// [
//   []
//   [a],
//   [b],
//   [c], 
//   [a,b],
//   [b,c], 
//   [a,c], 
//   [a,b,c]
// ]

// REsource LOve Babbar (YouTube)


const combo = (string, i, result, temp) => {
    // base case 
    if(string.length==0) return result.push([]);
    if (i >= string.length) {
        return result.push([...temp]);
    }
    temp.push(string[i]);
    // taken 
    combo(string, i + 1, result, temp);
    temp.pop();
    //not taken 
    combo(string, i + 1, result, temp);
}

const result = [];
combo('abc', i = 0, result, temp = []);
console.log('smart result ');
console.log(result);
