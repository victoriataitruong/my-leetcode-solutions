/*
Problem: Word Search II (Leetcode 212)

You are given a 2D board of characters and a list of words. You need to find all words in the board that can be constructed by sequentially adjacent cells. Each word must be constructed by navigating horizontally or vertically to adjacent cells. Diagonal connections are not allowed. The task is to find all valid words from the list that exist in the board.

Efficient Approach:
- We use a Trie (prefix tree) to store the list of words. This allows us to efficiently check whether a sequence of characters in the board forms a valid word.
- We perform a Depth-First Search (DFS) on the board starting from each cell, recursively exploring all possible paths in all four directions (up, down, left, right).
- Each time we find a valid word (a word is completed), we add it to the result set.
- This approach ensures an optimal time complexity of O(N * M * K), where N and M are the dimensions of the board, and K is the maximum length of the word in the list. The DFS ensures we explore each path, while the Trie helps limit the search space.
- Backtracking is employed to ensure we don't revisit cells in the same search path.
*/

class TrieNode {
    constructor() {
        this.children = {};  // Initialize children as an object
        this.isWord = false; // Flag to indicate end of word
    }
}

class Solution {
    findWords(board, words) {
        // Step 1: Build a Trie from the list of words
        const trie = new TrieNode();
        const addWordToTrie = (word) => {
            let node = trie;
            for (const char of word) {
                if (!node.children[char]) {
                    node.children[char] = new TrieNode();
                }
                node = node.children[char];
            }
            node.isWord = true;
        };

        // Step 2: Insert all words into the Trie
        for (const word of words) {
            addWordToTrie(word);
        }

        // Step 3: Define DFS to search for words in the board
        const dfs = (board, node, i, j, path) => {
            if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === "#") {
                return;
            }

            const char = board[i][j];
            const nextNode = node.children[char];
            if (!nextNode) return; // Stop search if the char is not in Trie

            path.push(char);  // Add character to path
            board[i][j] = "#"; // Mark cell as visited

            if (nextNode.isWord) {
                result.add(path.join(""));
            }

            // Explore all four directions
            const directions = [
                [1, 0], [-1, 0], [0, 1], [0, -1]
            ];
            for (const [x, y] of directions) {
                dfs(board, nextNode, i + x, j + y, path);
            }

            // Backtrack
            board[i][j] = char;
            path.pop();
        };

        // Step 4: Initialize the result set to store found words
        const result = new Set();

        // Step 5: Iterate through each cell in the board and start DFS
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                dfs(board, trie, i, j, []);
            }
        }

        // Step 6: Return the result as a list of words
        return Array.from(result);
    }
}
