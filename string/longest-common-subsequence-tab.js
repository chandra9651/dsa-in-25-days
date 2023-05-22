// Resource Anuj Bhaiya (YouTube);
// find longest commnon subsequence length

// Tabulation method == Dynamic programming == Bottom - Up approach 
// IMportant :: base case handel in starting in tabulation methiod

// O(nm) Time || O(nm) space 

const string1 = 'aibdcxgyk';
const string2 = 'icg';

const tab = new Array(string1.length + 1).fill(0).map(() => new Array(string2.length + 1).fill(0));

const lcsTab = (string1, string2, i, j) => {
    for (let i = 1; i <= string1.length; i++) {
        for (let j = 1; j <= string2.length; j++) {
            if (string1[i] == string2[j]) {
                tab[i][j] = tab[i - 1][j - 1] + 1;
            } else {
                tab[i][j] = Math.max(tab[i - 1][j], tab[i][j - 1]);
            }
        }
    }
    return tab[string1.length][string2.length]
}

const length = lcsTab(string1, string2, i = 0, j = 0);
console.log(length);


