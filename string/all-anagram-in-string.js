// find all Anagram in string
// Resource PepCoding (YouTube)

// solve using :: Sliding Window == window size = pattern size 

const allAnagram = (string, pattern) => {
    const patternFreeqMap = {};
    // map patter 
    for (let ch of pattern) {
        if (ch in patternFreeqMap) {
            patternFreeqMap[ch]++;
        } else {
            patternFreeqMap[ch] = 1;
        }
    }


    // string map 
    const stringFreeqMap = {};
    let s = Array.from(pattern).length;
    for (let i = 0; i < s; i++) {
        if (string[i] in stringFreeqMap) {
            stringFreeqMap[string[i]]++;
        } else {
            stringFreeqMap[string[i]] = 1;
        }
    }



    // compair two object
    function compair(obj1, obj2) {
        for (let key in obj2) {
            if (obj2[key] != obj1[key]) {
                return false;
            }
        }
        return true;
    }

    // take fist position of anagram match
    let pos = ' ';
    // match both character freeMap
    while (s <= Array.from(string).length) {
        if (compair(stringFreeqMap, patternFreeqMap)) {
            // slide window with 1 character 
            pos += s - Array.from(pattern).length + ' ';
        }

        // delete first character of window 
        const rmIdx = s - Array.from(pattern).length;
        const char = string[rmIdx];
        if (stringFreeqMap[char] == 1) {
            delete stringFreeqMap[char];
        }
        else {
            stringFreeqMap[char]--;
        }

        // add new character in window
        const newChar = string[s];
        if (newChar in stringFreeqMap) {
            stringFreeqMap[newChar]++;
        } else {
            stringFreeqMap[newChar] = 1;
        }
        s++;
    }
    return pos;
}


const string = 'abcdefacbxygacb';
const pattern = 'abc';


const result = allAnagram(string, pattern);

console.log(result);