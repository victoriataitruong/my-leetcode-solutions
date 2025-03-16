/*
Leetcode 300: Longest Increasing Subsequence

Problem Description:
Given an integer array `nums`, return the length of the longest strictly increasing subsequence. A subsequence is defined as a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. The solution must be solved in **O(n log n)** time complexity, where `n` is the number of elements in the array.

Approach:
1. **Dynamic Programming with Binary Search**: We use dynamic programming along with binary search to efficiently find the longest increasing subsequence.
2. **Maintain a List**: Use a list to store the smallest possible last element for increasing subsequences of each length.
3. **Binary Search**: For each element in the array, use binary search to find the position where it can replace an element in the list to form a longer increasing subsequence.
4. **Return Length**: The length of the list at the end will be the length of the longest increasing subsequence.
*/

class Solution {
    lengthOfLIS(nums) {
        // Edge case: if the list is empty, return 0
        if (!nums || nums.length === 0) {
            return 0;
        }

        // Initialize an array to store the smallest tail of all increasing subsequences
        const subsequence = [];

        // Iterate over each number in the input array
        for (const num of nums) {
            // Use binary search to find the position to replace or append the number
            let left = 0, right = subsequence.length;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (subsequence[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            // If the position is equal to the length of the subsequence array, append the number
            if (left === subsequence.length) {
                subsequence.push(num);
            } else { // Otherwise, replace the existing value with the new number
                subsequence[left] = num;
            }
        }

        // The length of the subsequence array is the length of the longest increasing subsequence
        return subsequence.length;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4

