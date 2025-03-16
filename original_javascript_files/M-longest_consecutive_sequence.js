/*
Problem: Longest Consecutive Sequence (Leetcode 128)

Given an unsorted array of integers nums, return the length of the longest 
consecutive elements sequence.

Example:
Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive sequence is [1, 2, 3, 4].

Constraints:
- Time complexity must be O(n).
*/

class Solution {
    longestConsecutive(nums) {
        if (!nums || nums.length === 0) {
            return 0; // If nums is empty, return 0
        }

        const numSet = new Set(nums); // Convert array to a set for O(1) lookups
        let longestStreak = 0; // Initialize longest streak counter

        for (const num of numSet) {
            // Only start counting from the beginning of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num; // Start of a new sequence
                let currentStreak = 1; // Initialize streak length

                // Expand the sequence
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                // Update the maximum streak found so far
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak; // Return the longest consecutive sequence length
    }
}

// Example usage
const solution = new Solution();
console.log(solution.longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4

