/*
Leetcode 211: Design Add and Search Words Data Structure

Problem Description:
Design a data structure that supports adding new words and finding if a string matches any previously added word. Implement the `WordDictionary` class:

- `WordDictionary()` Initializes the object.
- `void addWord(word)` Adds a word to the data structure.
- `bool search(word)` Returns true if there is any string in the data structure that matches `word` or false otherwise. A word may contain dots `.` where dots can match any letter.

Approach:
1. **Trie Data Structure**: Use a Trie (prefix tree) for efficient storage and retrieval.
2. **Recursive DFS Search**: Implement a recursive search function that can handle `.` wildcard characters effectively.
3. **Efficiency Consideration**: Trie enables efficient word insertion, while DFS ensures flexible searching with `.` wildcard support.
*/

class WordDictionary {
    constructor() {
        // Initialize the root of the Trie with an empty object
        this.trie = {};
    }

    addWord(word) {
        // Start from the root node
        let node = this.trie;
        for (const char of word) {
            // Add character nodes if they don't exist
            if (!node[char]) {
                node[char] = {};
            }
            // Move to the next node
            node = node[char];
        }
        // Mark the end of the word with a special flag
        node['$'] = true;
    }

    search(word) {
        // Recursive DFS function to handle `.` wildcard
        const dfs = (node, i) => {
            // If we've processed the entire word
            if (i === word.length) {
                return node['$'] === true;  // Check for end of word flag
            }

            const char = word[i];
            if (char === '.') {  // Wildcard logic
                // Check all possible characters in the current node
                for (const child in node) {
                    if (child !== '$' && dfs(node[child], i + 1)) {
                        return true;
                    }
                }
            } else {  // Normal character logic
                if (node[char] && dfs(node[char], i + 1)) {
                    return true;
                }
            }

            // No match found
            return false;
        };

        // Start DFS from the root of the Trie
        return dfs(this.trie, 0);
    }
}

