/*
Leetcode 11: Container With Most Water

Problem Description:
You are given an array of integers `height` where each integer represents the height of a vertical line at that position. The width of each line is 1. You need to find the maximum area of water that can be contained between two lines. The area of water is determined by the shorter of the two lines and the distance between them. You must solve the problem with **O(n)** time complexity, where `n` is the length of the array.

Approach:
1. **Two Pointer Technique**: Use two pointers, one at the beginning and the other at the end of the array. The idea is to calculate the area formed between these two lines and then move the pointer pointing to the shorter line inwards, trying to find a larger area.
2. **Calculate the Area**: For each pair of lines, the area is determined by the shorter line multiplied by the distance between the two pointers.
3. **Maximize the Area**: Keep track of the maximum area encountered while moving the pointers inward.

*/
class Solution {
    maxArea(height) {
        // Initialize two pointers, one at the beginning and one at the end
        let left = 0, right = height.length - 1;
        // Initialize a variable to store the maximum area found
        let maxArea = 0;

        // Loop until the two pointers meet
        while (left < right) {
            // Calculate the current area
            const currentArea = Math.min(height[left], height[right]) * (right - left);
            // Update the maximum area if the current area is larger
            maxArea = Math.max(maxArea, currentArea);

            // Move the pointer pointing to the shorter line
            if (height[left] < height[right]) {
                left++;  // Move the left pointer to the right
            } else {
                right--; // Move the right pointer to the left
            }
        }

        // Return the maximum area found
        return maxArea;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49

