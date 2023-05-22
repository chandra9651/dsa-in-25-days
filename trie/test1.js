class Node {
    // no need use contructor because every initial node are same 
    // constructor(){
    // }
    isCompleteWord = false;
    child = {};
}


class Trie {
    constructor() {
        this.root = new Node();
    }

    // insert word 
    insertWord(word,root=this.root) {
        if (word.length == 0) {
            root.isCompleteWord = true;
            return;
        }
        // character exist
        if (word[0] in root.child) {
            this.insertWord(word.slice(1), root.child[word[0]]);
        }
        // character not exis
        else if (!(word[0] in root.child)) {
            root.child[word[0]] = new Node();
            this.insertWord(word.slice(1), root.child[word[0]]);
        }
    }

    // search word util
    searchWordUtil(word, root) {
        if (word.length == 0 && root.isCompleteWord) return true;
        if (word[0] in root.child) {
            this.searchWordUtil(word.slice(1), root.child[word[0]]);
        } else {
            return false;
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

const trie = new Trie();

console.log(trie);

trie.insertWord('Hii');
trie.insertWord('Hello');

console.log(trie.searchWord('Hello'));
console.log(trie.searchWord('Hii'));

