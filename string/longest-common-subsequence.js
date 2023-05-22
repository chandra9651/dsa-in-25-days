// REscource anuj bhaiya (YouTube)

// find longest common subsequence in string
// REcursion solution 
// O(log2(m+n)) time || O(1) space 


const lcs = (sting1, string, i, j) => {
    if (i >= string1.length || j >= string2.length) return 0;
    if (string1[i] == string2[j]) {
        return 1 + lcs(string1, string2, i + 1, j + 1);
    } else {
        return Math.max(lcs(string1, string2, i + 1, j), lcs(sting1, string2, i, j + 1));
    }
}

const string1 = 'aibdcxgyk';
const string2 = 'ibcg';

const length = lcs(string1, string2, i = 0, j = 0);
console.log(length);

