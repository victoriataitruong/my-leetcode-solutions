/*
Leetcode 73: Set Matrix Zeroes

Problem Description:
Given an `m x n` matrix, if an element in the matrix is 0, its entire row and column should be set to 0. You must solve it in **O(1)** space complexity. 

Approach:
1. **Use the first row and first column to mark the rows and columns to be zeroed**: We can use the first row and column to store the state of other rows and columns. If matrix[i][j] is 0, mark matrix[i][0] and matrix[0][j] as 0.
2. **Process the matrix from the bottom-right corner**: After marking the rows and columns, traverse the matrix starting from the bottom-right corner to avoid overwriting the first row and column prematurely.
3. **Handle the first row and first column separately**: Since we used the first row and column to store marks, we need to handle these rows and columns after processing the rest of the matrix.

*/
class Solution {
    setZeroes(matrix) {
        // Check if the first row or first column needs to be zeroed
        let firstRowZero = matrix[0].includes(0);  // Flag for first row
        let firstColZero = matrix.some(row => row[0] === 0);  // Flag for first column

        // Mark the rest of the matrix: use first row and column as markers
        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;  // Mark the row
                    matrix[0][j] = 0;  // Mark the column
                }
            }
        }

        // Set matrix elements to zero based on the markers in the first row and column
        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[0].length; j++) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        // Handle the first row and first column separately
        if (firstRowZero) {
            for (let j = 0; j < matrix[0].length; j++) {
                matrix[0][j] = 0;
            }
        }

        if (firstColZero) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}

