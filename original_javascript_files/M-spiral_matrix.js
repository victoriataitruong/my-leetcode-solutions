/*
Leetcode 54: Spiral Matrix

Problem Description:
Given an `m x n` matrix, return all elements of the matrix in spiral order. Starting from the top-left corner, traverse the matrix in a spiral pattern (right, down, left, up) and continue until all elements have been visited. The solution should be efficient, working within **O(m * n)** time complexity, where `m` and `n` are the number of rows and columns in the matrix, respectively.

Approach:
1. **Define Boundaries**: Keep track of the boundaries of the matrix (top, bottom, left, right).
2. **Spiral Traversal**: Use a while loop to iterate until all elements are visited. In each iteration, traverse the matrix in one direction (right, down, left, or up), and adjust the boundaries accordingly.
3. **Return Result**: After traversing the entire matrix, return the collected elements in spiral order.
*/
class Solution {
    spiralOrder(matrix) {
        // Initialize an empty array to store the result
        let result = [];

        // Define the boundaries for the matrix traversal
        let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

        // Continue traversing as long as there are still elements to process
        while (top <= bottom && left <= right) {
            // Traverse from left to right across the top row
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            // Move the top boundary down
            top++;

            // Traverse from top to bottom down the right column
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            // Move the right boundary left
            right--;

            // Traverse from right to left across the bottom row (if still valid)
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                }
                // Move the bottom boundary up
                bottom--;
            }

            // Traverse from bottom to top up the left column (if still valid)
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                }
                // Move the left boundary right
                left++;
            }
        }

        // Return the result containing all elements in spiral order
        return result;
    }
}

