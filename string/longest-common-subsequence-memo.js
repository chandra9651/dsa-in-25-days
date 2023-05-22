// REsource Anuj Bhaiya (YouTube)

// find longest common subsequence in string
// REcursion + memo => Dynamic Programming => Top Down approach

// O(nm) time || O(nm) space - where n is string1 length and m is string2 length

const string1 = "abgdg";
const string2 = 'bgf';

const memo = new Array(string1.length).fill(0).map(() => new Array(string2.length).fill(0));

const lcsMemo = (string1, string2, i, j, memo) => {
    if (i >= string1.length || j >= string2.length) return 0;
    if (memo[i][j] != 0) return memo[i][j];

    if (string1[i] == string2[j]) {
        return memo[i][j] = 1 + Math.max(lcsMemo(string1, string2, i + 1, j + 1, memo));
    }
    else {
        return memo[i][j] = Math.max(lcsMemo(string1, string2, i + 1, j, memo), lcsMemo(string1, string2, i, j + 1, memo));
    }

}

const length = lcsMemo(string1, string2, i = 0, j = 0, memo);
console.log(length);


