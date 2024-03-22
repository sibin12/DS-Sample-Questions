class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {            
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
  
        node = node.children[char];
      }
  
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!node.children[char]) {
          return false;
        }
  
        node = node.children[char];
      }
  
      return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
  
        if (!node.children[char]) {
          return false;
        }
  
        node = node.children[char];
      }
  
      return true;
    }
  }
  const trie = new Trie();
  
  trie.insert("apple");
  console.log(trie.search("apple")); // true
  console.log(trie.search("appi")); // false
  console.log(trie.startsWith("app")); // true
  
  trie.insert("appi");
  console.log(trie.search("app")); // false
  trie.insert("car");
  trie.insert("cat");
  console.log(trie.search("cam")); // false
  
  
  