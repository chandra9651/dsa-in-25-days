// suffix trie of Hello
// Hello 
// ello
// llo
// lo
// o 



class Node {
    child = {};
    isCompleteWord = false;
}

class SuffixTrie {
    constructor() {
        this.root = new Node();
    }

    insert(word, root = this.root) {
        if (word.length == 0) {
            root.isCompleteWord = true;
            return;
        }
        // character exist
        if (word[0] in root.child) {
            this.insert(word.slice(1), root.child[word[0]]);
        }
        // character not exis
        else if (!(word[0] in root.child)) {
            root.child[word[0]] = new Node();
            this.insert(word.slice(1), root.child[word[0]]);
        }
    }

    // insert word
    insertWord(word) {
        for (let i = 0; i < word.length; i++) {
            this.insert(word.slice(i));
        }
    }

    // search word
    searchWord(word, root = this.root) {
        //  this.searchWordUtil(word,this,root)
        if (word.length == 0 && root.isCompleteWord) return true;
        if (word[0] in root.child) {
            return this.searchWord(word.slice(1), root.child[word[0]]);
        } else {
            return false;
        }
    }
}

const trie = new SuffixTrie();
trie.insertWord('Hello');
console.log(trie.searchWord('Hello'));
console.log(trie.searchWord('llo'));