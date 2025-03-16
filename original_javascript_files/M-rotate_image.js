/*
Leetcode 48: Rotate Image

Problem Description:
Given an `n x n` 2D matrix representing an image, rotate the image 90 degrees clockwise. You must solve this problem in-place, meaning you cannot use extra space except for the given matrix. The matrix is square (n x n), and the rotation should be done in-place by modifying the matrix directly.

Approach:
1. **Transpose the Matrix**: First, swap the rows with columns of the matrix.
2. **Reverse Each Row**: After transposing, reverse each row to complete the 90-degree rotation.
3. **In-place Modifications**: The solution must be done without using extra space, so we modify the matrix directly during the transposition and reversal steps.
*/

class Solution {
    rotate(matrix) {
        const n = matrix.length;  // Get the size of the matrix (n x n)

        // Step 1: Transpose the matrix by swapping elements at (i, j) with (j, i)
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {  // Only swap above the diagonal
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        // Step 2: Reverse each row to complete the 90-degree rotation
        for (let i = 0; i < n; i++) {
            matrix[i].reverse();  // Reverse each row in place
        }
    }
}

