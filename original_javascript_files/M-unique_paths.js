/*
Leetcode 62: Unique Paths

Problem Description:
A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there?

Approach:
1. **Dynamic Programming (DP)**: Use a 2D DP table to store the number of ways to reach each cell. The value at each cell represents the number of ways to reach that cell from the start.
2. **Grid Initialization**: The topmost row and the leftmost column can only be reached in one way (moving all the way right or all the way down), so they are initialized to 1.
3. **Filling the DP Table**: For each remaining cell, the number of ways to reach it is the sum of the ways to reach the cell directly above it and the cell directly to its left.
4. **Return the Result**: The value at the bottom-right corner of the grid is the total number of unique paths.

*/
class Solution {
    uniquePaths(m, n) {
        // Initialize a 2D DP table with all values set to 1
        const dp = Array(m).fill().map(() => Array(n).fill(1));

        // Iterate over each cell starting from (1,1) to (m-1, n-1)
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                // Update dp[i][j] as the sum of the cell above it and to the left
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }

        // Return the value in the bottom-right corner, which is the total number of unique paths
        return dp[m-1][n-1];
    }
}

