/*
Leetcode 1: Two Sum

Problem Description:
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. The solution must be solved in **O(n)** time complexity, where `n` is the number of elements in the array.

Approach:
1. **Hash Map**: Use a hash map to store the indices of the elements we have already seen.
2. **Iterate Through the Array**: For each element, calculate the complement (the number needed to reach the target) and check if it exists in the hash map.
3. **Return Indices**: If the complement exists, return the current index and the index of the complement from the hash map.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Step 1: Create an empty object to store number and its index
    const numMap = {};
    
    // Step 2: Loop through the array with both the number and its index
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        // Step 3: Calculate the complement (the number needed to add up to target)
        const complement = target - num;
        
        // Step 4: Check if the complement already exists in the map
        if (complement in numMap) {
            // If it exists, return the index of the complement and the current index
            return [numMap[complement], i];
        }
        
        // Step 5: Store the current number and its index in the map
        numMap[num] = i;
    }
};


