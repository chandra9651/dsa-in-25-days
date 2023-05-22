// simple matching algorithm of patter match

// O(m*n) time | O(1) space 



const matching = (string, pattern) => {
    
    let n = string.length * pattern.length;
    let k = 0, i = 0, j = 0, pos = 0;
    while (k < n) {
        if (string[i] == pattern[j]) {
            i++; j++;
        } else {
            pos++;
            i = pos;
            j = 0;
        } if (j == pattern.length) return true;
        k++
    }
    return false;
}


let result = matching('abababd', 'ababd');

console.log(result);