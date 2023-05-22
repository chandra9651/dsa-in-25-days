// REsource Tech Dose (Youtube)

// string pattern matching 

// KMP => Knuth-morris-Pratt

// time O(m+n)  m = string.length  AND n = pattern.length

// Extra space O(n) 

// IMPortant : move single pattern forward if there is no match
// Example 
// string =  ababababd
// pattern = abababd

// above a and d not match then move previous pattern
// string = ababababd
// pattern =  abababd
// Now pattern is matched  

function KMPsearch(string, pattern) {
    // create longest prefix and suffix
    const lps = new Array(pattern.length).fill(0);
    let i = 0;
    for (let j = 1; j < pattern.length; j++) {
        if (pattern[i] == pattern[j]) {
            lps[j] = i + 1;
            i++;
        } else if(i > 0){
            i = lps[i-1];
            j--;
        }
    }
    
    console.log(lps);
    // match with string 
    const n = string.length + pattern.length;
    let p = 0, k = 0;
    while (k < n) {
        if (string[k] == pattern[p]) {
            p++;
        } else if(p>0) {
            k--;
            const offset = lps[--p];
            p = offset;
        }
        k++;
        if (p == pattern.length) return true;
    }
    return false;

}


// const result = KMPsearch("aefoaefcdaefcdaed", "aefcdaed");

const result = KMPsearch("aefoaefcdaefcdaed", "abcsabefab");

console.log(result);