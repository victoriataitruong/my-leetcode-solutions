/*
Problem: Leetcode 53 - Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum = 6.

The optimal approach is Kadane’s Algorithm, which uses a greedy strategy and dynamic programming.
The idea is to iterate through the array, keeping track of the current subarray sum. If the sum becomes
negative, we reset it to 0 since a negative sum would not contribute to a maximum sum subarray.
This solution runs in O(n) time complexity.
*/

class Solution {
    maxSubArray(nums) {
        let maxSum = -Infinity; // Stores the maximum subarray sum found
        let currentSum = 0; // Stores the current subarray sum

        for (let num of nums) { // Iterate through each element in the array
            currentSum += num; // Add the current number to the running sum
            maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is greater
            
            // If current sum becomes negative, reset it to 0 (start new subarray)
            if (currentSum < 0) {
                currentSum = 0;
            }
        }

        return maxSum; // Return the maximum subarray sum found
    }
}
