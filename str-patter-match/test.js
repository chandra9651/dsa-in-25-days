// Rolling hash pattern matching function


// used to find pattern in string

const characterArray = [];

let j = 1;

const start = 'a'.charCodeAt(0);
const end = 'z'.charCodeAt(0);

for (let i = start; i <= end; i++) {
    characterArray[j] = String.fromCharCode(i);
    j++;
}

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



const re = rollingHash('abgjskildsujhabckfkrmldflfmab', 'krm');
console.log(re);

















