/*
Leetcode 153: Find Minimum in Rotated Sorted Array

Problem Description:
Given an integer array `nums` sorted in ascending order, and then rotated at an unknown pivot, the task is to find the minimum element in the array. The solution must be solved in **O(log n)** time complexity, where `n` is the length of the array. It is guaranteed that there is exactly one minimum element in the rotated array, and the array does not contain duplicates.

Approach:
1. **Binary Search**: Use binary search to efficiently find the minimum element.
2. **Identify Pivot**: The array is rotated at an unknown pivot. The minimum element corresponds to the point where the array's sorted order is disrupted.
3. **Binary Search Logic**: Compare the middle element with the rightmost element:
   - If the middle element is greater than the rightmost element, the minimum is in the right half.
   - If the middle element is less than or equal to the rightmost element, the minimum is in the left half.
4. **Edge Case**: If the array is not rotated (i.e., it's already sorted), the leftmost element is the minimum.

*/

class Solution {
    findMin(nums) {
        // Initialize left and right pointers for binary search
        let left = 0;
        let right = nums.length - 1;

        // Perform binary search
        while (left < right) {
            // Find the middle index
            const mid = Math.floor((left + right) / 2);

            // If middle element is greater than rightmost element,
            // the minimum must be in the right half
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // If middle element is less than or equal to rightmost element,
                // the minimum is in the left half
                right = mid;
            }
        }

        // After the loop, left will be pointing to the minimum element
        return nums[left];
    }
}

// Example usage
const solution = new Solution();
console.log(solution.findMin([3, 4, 5, 1, 2])); // Output: 1
