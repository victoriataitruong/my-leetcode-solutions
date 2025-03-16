/*
Leetcode 208: Implement Trie (Prefix Tree)

Problem Description:
A **Trie** (pronounced as "try") or **prefix tree** is a tree data structure used for efficient retrieval of keys in a dataset of strings. Implement the Trie class:

- **`insert(word)`**: Inserts the string `word` into the trie.
- **`search(word)`**: Returns `true` if the string `word` is in the trie (exact match).
- **`startsWith(prefix)`**: Returns `true` if there is any string in the trie that starts with the given `prefix`.

Approach:
1. **TrieNode Class**: Create a `TrieNode` class with:
   - A dictionary `children` to store child nodes.
   - A boolean `is_end` to mark the end of a word.
2. **Trie Class**: Implement the methods:
   - `insert()`: Traverse the trie nodes, adding nodes as needed.
   - `search()`: Traverse the trie and return `True` only if `is_end` is `True` for the last character.
   - `startsWith()`: Traverse the trie and return `True` if the prefix exists.
*/

// Trie Node class
class TrieNode {
    constructor() {
        // Object to hold children nodes (each representing a character)
        this.children = {};
        // Boolean to mark the end of a word
        this.isEnd = false;
    }
}

// Trie class
class Trie {
    constructor() {
        // Root node is initialized as an empty TrieNode
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (const char of word) {
            // If character is not present, add a new TrieNode
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            // Move to the next node
            node = node.children[char];
        }
        // Mark the end of the word
        node.isEnd = true;
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (const char of word) {
            // If character is not found, the word is not in the Trie
            if (!node.children[char]) {
                return false;
            }
            // Move to the next node
            node = node.children[char];
        }
        // Return true only if the word's end is properly marked
        return node.isEnd;
    }

    // Check if any word in the Trie starts with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            // If character is not found, prefix does not exist
            if (!node.children[char]) {
                return false;
            }
            // Move to the next node
            node = node.children[char];
        }
        // Prefix exists in the Trie
        return true;
    }
}
