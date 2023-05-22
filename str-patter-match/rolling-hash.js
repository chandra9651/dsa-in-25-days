// REsource Tech Dose

// Rolling hash | Rabin karp algorithm : pattern matching algorithm


//  A to Z    65 to 91
// a to z     97 to 123
//console.log(String.fromCharCode(189, 43, 190, 61));

/**  text               hash                                  hash-value
 *    a                1*26^0                                      1
 *    b                2*26^0                                      2
 *    abc              1*26^2+2*26^1+1*26^0( 673+52+3 = 731)       731
 *    bc               2*26^1+3*26^0 (52+3)                        55
 *    
 *     find hash of a using two known hash abc and bc
 *     Formula =  (abc-ab)/26^length(ab)
 *    
 *     find hash of c by two given hash abc and ab
 *     Formula = (abc-ab*26^length(ab)-1)
 *    
 * 
 */

const characterArray = [];

const start = 'a'.charCodeAt(0);
const end = 'z'.charCodeAt(0);

let j = 1;
for (let i = start; i <= end; i++) {
    //  console.log(String.fromCharCode(i));
    characterArray[j] = (String.fromCharCode(i));
    j++;
}


// Here we are using 1*26^0 + 2*26^1 + 3*26^2

//find abc patter in given string 

const rollingHash = (string, pattern) => {
    // take any random hash code 
    const hashCode = 27;
    // calculate hash value of pattern
    const hashValOfPattr = Array.from(pattern).map((elmnt, idx) => characterArray.indexOf(elmnt) * Math.pow(hashCode, idx));
    const hashVal = hashValOfPattr.reduce((accumulator, current) => accumulator + current);
    // string operation
    const stringArr = Array.from(string);
    const windowSize = pattern.length;
    let windowChar = stringHash = string.substr(0, windowSize);
    // calculate hash of window character
    let winMap = Array.from(windowChar).map((elmnt, idx) => characterArray.indexOf(elmnt) * Math.pow(hashCode, idx));
    let windowHashValue = winMap.reduce((accumulator, current) => accumulator + current);

    if (windowHashValue == hashVal) return true;
    // console.log(windowHashValue, ' hash window ')
    for (let i = windowSize; i < string.length; i++) {
        // console.log('iiii ', i)
        // slide window remove starting elmnt and add i-th elmnt : Roll
        windowHashValue = (windowHashValue - characterArray.indexOf(string[i - windowSize])) / hashCode;
        const nextElmnt = characterArray.indexOf(string[i]) * Math.pow(hashCode, windowSize - 1);

        // add next to windowhashval
        windowHashValue += nextElmnt;
        // console.log(windowHashValue, 'windowhash value');
        if (windowHashValue == hashVal) {
            return true;
        }
    }
    return false;

}


const result = rollingHash('abgjskildsujhabckfkrmldflfmab', 'dsa');
console.log(result);

// console.log(text.charAt(1).charCodeAt(0))



//le.log(Array.from({ length: 20 }));
//     vs 
//console.log(new Array(20));



//console.log(new Array(10)[0]);

