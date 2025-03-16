/*
Leetcode 1: Two Sum

Problem Description:
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. The solution must be solved in **O(n)** time complexity, where `n` is the number of elements in the array.

Approach:
1. **Hash Map**: Use a hash map to store the indices of the elements we have already seen.
2. **Iterate Through the Array**: For each element, calculate the complement (the number needed to reach the target) and check if it exists in the hash map.
3. **Return Indices**: If the complement exists, return the current index and the index of the complement from the hash map.
*/
class Solution {
    twoSum(nums, target) {
        // Create a map to store the numbers and their indices
        const numMap = {};

        // Iterate through the array of numbers
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const complement = target - num;

            // If the complement is found in the map, return the indices
            if (complement in numMap) {
                return [numMap[complement], i];
            }

            // Otherwise, store the number with its index in the map
            numMap[num] = i;
        }

        // Return an empty array if no solution is found
        return [];
    }
}

// Example usage
const solution = new Solution();
console.log(solution.twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

            