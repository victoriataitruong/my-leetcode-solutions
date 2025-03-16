/*
Leetcode 55: Jump Game

Problem Description:
Given an array of non-negative integers `nums`, where each element represents your maximum jump length from that position, return `true` if you can reach the last index, or `false` otherwise. The goal is to determine if we can jump from the start (index 0) to the end of the array. We can jump from any index `i` to index `i + nums[i]`.

Approach:
1. **Greedy Algorithm**: Maintain a variable `farthest` to keep track of the furthest index that can be reached. 
2. **Iterate through the Array**: For each index `i`, check if it's reachable (i.e., `i <= farthest`). If reachable, update `farthest` to the maximum of its current value or `i + nums[i]`.
3. **Check if End is Reachable**: If at any point, `farthest` reaches or exceeds the last index, return `true`. If after processing all indices, `farthest` is still less than the last index, return `false`.
*/

class Solution {
    canJump(nums) {
        // Initialize the variable to track the farthest index we can reach
        let farthest = 0;

        // Loop through the array
        for (let i = 0; i < nums.length; i++) {
            // If the current index is beyond the farthest we can reach, return false
            if (i > farthest) {
                return false;
            }

            // Update the farthest index we can reach
            farthest = Math.max(farthest, i + nums[i]);

            // If we've already reached or passed the last index, return true
            if (farthest >= nums.length - 1) {
                return true;
            }
        }

        // If we finish the loop and haven't returned, we cannot reach the last index
        return false;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.canJump([2, 3, 1, 1, 4])); // true
console.log(solution.canJump([3, 2, 1, 0, 4])); // false
