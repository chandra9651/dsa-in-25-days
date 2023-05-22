// node contian data and another node 
class Node {
    // children
    child = {};
    isCompleteWord = false;
    // link other node
}

Node.prototype.insertWordUtil = function (word) {
    //debugger;
    if (word.length == 0) {
        this.isCompleteWord = true;
        return;
    }
    // length not zero
    if (word[0] in this.child) {
        this.child[word[0]].insertWordUtil(word.slice(1));
    }
    // when character not exist

    else if (!(word[0] in this.child)) {
        this.child[word[0]] = new Node();
        this.child[word[0]].insertWordUtil(word.slice(1))
    }
}

Node.prototype.searchUtil = function (word, root) {
    if (word.length == 0 && root.isCompleteWord == true) {
        console.log(true);
        return true;
    }
    if (word[0] in this.child) {
        this.child[word[0]].searchUtil(word.slice(1), this.child[word[0]]);
    } else {
        // because we can not get return value 
        console.log(false);
        return false;
    }

}

class Trie {
    constructor() {
        this.root = new Node();
    }
    insertWord = function (word) {
        this.root.insertWordUtil(word, this.root);
    }

    searchWord = function (word) {
        // get undefined 
        var x = this.root.searchUtil(word, this.root);
        //console.log(x);
    }
    removeWord = function () { }
}


const trie = new Trie();

//console.log(trie);
trie.insertWord('Hii');
trie.insertWord('Hello52');
//trie.insertWord('Hello');
//console.log(trie);

trie.searchWord('Hello52');
//console.log(trie.searchWord('Hello'));
//console.log(trie);
