/*
Leetcode 417: Pacific Atlantic Water Flow

Problem Description:
Given a matrix of integers representing heights above sea level, you are to find all the coordinates (i, j) where water can flow to both the Pacific and Atlantic oceans. Water can flow from a cell to another cell if the height of the second cell is greater than or equal to the first cell. The Pacific ocean is on the left and top edges of the matrix, while the Atlantic ocean is on the right and bottom edges of the matrix. You must return all coordinates where water can reach both oceans.

Approach:
1. **DFS (Depth-First Search)**: Use DFS to explore the matrix starting from the edges where water can flow to the oceans. For both oceans, we perform DFS from their respective borders.
2. **Mark Reachable Cells**: During DFS, we mark cells that can reach the Pacific and Atlantic oceans. This is done by maintaining two boolean matrices to track which cells can reach which ocean.
3. **Intersection of Reachable Cells**: Once we have marked cells that can reach both oceans, the intersection of the two matrices gives us the solution.
*/

class Solution {
    pacificAtlantic(matrix) {
        if (!matrix || matrix.length === 0) return [];
        
        const rows = matrix.length, cols = matrix[0].length;
        const pacificReach = Array.from({ length: rows }, () => Array(cols).fill(false));
        const atlanticReach = Array.from({ length: rows }, () => Array(cols).fill(false));
        
        const dfs = (r, c, oceanReach, prevHeight) => {
            if (
                r < 0 || r >= rows || c < 0 || c >= cols || 
                oceanReach[r][c] || matrix[r][c] < prevHeight
            ) {
                return;
            }
            
            oceanReach[r][c] = true;
            
            dfs(r + 1, c, oceanReach, matrix[r][c]); // Down
            dfs(r - 1, c, oceanReach, matrix[r][c]); // Up
            dfs(r, c + 1, oceanReach, matrix[r][c]); // Right
            dfs(r, c - 1, oceanReach, matrix[r][c]); // Left
        };
        
        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacificReach, matrix[r][0]); // Left border
            dfs(r, cols - 1, atlanticReach, matrix[r][cols - 1]); // Right border
        }
        
        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacificReach, matrix[0][c]); // Top border
            dfs(rows - 1, c, atlanticReach, matrix[rows - 1][c]); // Bottom border
        }
        
        const result = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacificReach[r][c] && atlanticReach[r][c]) {
                    result.push([r, c]);
                }
            }
        }
        
        return result;
    }
}
