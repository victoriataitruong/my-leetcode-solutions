/*
Leetcode 79: Word Search

Problem Description:
Given an `m x n` grid of characters `board` and a string `word`, return `true` if the word exists in the grid and `false` otherwise.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Approach:
1. **DFS with Backtracking**: Perform Depth-First Search (DFS) starting from each cell in the grid.
2. **Boundary Conditions**: Ensure boundary checks for valid cell positions.
3. **Visited Tracking**: Use a set to track visited cells to avoid reusing the same cell.
4. **Backtrack**: After exploring a path, backtrack to allow other possibilities.

Time Complexity: **O(m * n * 4^L)** where `m` is the number of rows, `n` is the number of columns, and `L` is the length of the word.
*/

class Solution {
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        // Helper function for DFS with backtracking
        const dfs = (r, c, index) => {
            // Base case: if index reaches the word's length, word is found
            if (index === word.length) {
                return true;
            }

            // Boundary check and character match check
            if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) {
                return false;
            }

            // Temporary marker to indicate visited cell
            const temp = board[r][c];
            board[r][c] = '#'; 

            // Explore all 4 possible directions (down, up, right, left)
            const found = dfs(r + 1, c, index + 1) ||  // Down
                          dfs(r - 1, c, index + 1) ||  // Up
                          dfs(r, c + 1, index + 1) ||  // Right
                          dfs(r, c - 1, index + 1);    // Left

            // Restore the cell value after exploration (backtracking)
            board[r][c] = temp;

            return found;
        };

        // Iterate through each cell in the grid to find the starting point
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (dfs(r, c, 0)) {  // Start DFS if the first letter matches
                    return true;
                }
            }
        }

        return false;
    }
}
