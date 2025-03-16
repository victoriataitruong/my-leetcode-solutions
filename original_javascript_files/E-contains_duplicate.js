/*
Problem: LeetCode 217 - Contains Duplicate

Given an integer array `nums`, return `True` if any value appears at least twice in the array, and `False` if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: True

Example 2:
Input: nums = [1,2,3,4]
Output: False

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: True

Efficient Approach:
- We use a `set` to keep track of the numbers we have seen.
- As we iterate through the array, if we encounter a number already in the set, we return `True` immediately.
- If we finish iterating without finding duplicates, we return `False`.
- This approach runs in O(n) time complexity and uses O(n) extra space.
*/

class Solution {
    /**
     * Determines if the input array contains any duplicates.
     * @param {number[]} nums - Array of integers
     * @return {boolean} - True if duplicates exist, otherwise False
     */
    containsDuplicate(nums) {
        const seen = new Set(); // Initialize an empty set to store unique numbers

        for (const num of nums) { // Iterate through each number in the array
            if (seen.has(num)) { // If the number is already in the set, duplicate found
                return true; // Return true immediately
            }
            seen.add(num); // Otherwise, add the number to the set
        }

        return false; // If no duplicates were found, return false
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(solution.containsDuplicate([1, 2, 3, 4])); // Output: false
