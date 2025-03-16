/*
Leetcode 200: Number of Islands

Problem Description:
Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You need to implement an algorithm that returns the number of islands in the given grid. The algorithm must have a time complexity of O(m * n), where `m` is the number of rows and `n` is the number of columns in the grid.

Approach:
1. **Flood Fill/DFS**: For each unvisited land ('1'), we perform a Depth-First Search (DFS) to mark all the connected land as visited.
2. **Mark Visited Land**: During the DFS, we convert all connected land ('1') to water ('0') to avoid revisiting the same land.
3. **Count Islands**: Each time we find an unvisited land, we increment the island count and initiate a DFS to mark the entire island.
*/

class Solution {
    numIslands(grid) {
        // Edge case: if grid is empty, return 0
        if (!grid || grid.length === 0) {
            return 0;
        }

        let islandCount = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        // Helper function for DFS to mark connected land
        const dfs = (r, c) => {
            // Check if the current cell is out of bounds or water ('0')
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
                return;
            }
            // Mark the current land as visited by turning it into water ('0')
            grid[r][c] = '0';
            
            // Explore the four adjacent directions (up, down, left, right)
            dfs(r + 1, c); // Down
            dfs(r - 1, c); // Up
            dfs(r, c + 1); // Right
            dfs(r, c - 1); // Left
        };

        // Iterate through the entire grid
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                // When we encounter unvisited land ('1')
                if (grid[i][j] === '1') {
                    // Increment the island count
                    islandCount++;
                    // Perform DFS to mark all land connected to this island
                    dfs(i, j);
                }
            }
        }

        // Return the total count of islands
        return islandCount;
    }
}
