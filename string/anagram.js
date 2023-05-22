// REsource PepCoding (YouTube)

/**
 * 
 * Two string s1 and s2 are anagram if they are made of the same 
 * characters with the same frequency
 * 
 *  Example = danger = garden
 * 
 */

// O(n) time || O(n) space 

const str1 = 'danger';
const str2 = 'garden';

function stringAnagram() {
    const freeObj = {};

    // make count map of string1
    for (let ch of str1) {
        if (ch in freeObj) {
            freeObj[ch]++;
        } else {
            freeObj[ch] = 1;
        }
    }

    // match string2 in freeObj
    for (let ch of str2) {
        if (ch in freeObj && freeObj[ch] == 1) {
            delete freeObj[ch];
        } else if (ch in freeObj) {
            freeObj[ch]--;
        } else {
            return false;
        }
    }

    // check freeObj isEmpty or not 
    return Object.keys(freeObj).length == 0;


}


const bool = stringAnagram(str1, str2);
console.log(bool);