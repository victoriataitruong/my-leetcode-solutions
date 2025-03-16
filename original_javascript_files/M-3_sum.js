/*
Leetcode 15: 3Sum

Problem Description:
Given an array of integers `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` such that:
- i != j, i != k, j != k
- nums[i] + nums[j] + nums[k] == 0
The solution must be solved in **O(n^2)** time complexity, where `n` is the number of elements in the array.

Approach:
1. **Sort the Array**: Sorting the array helps to efficiently handle duplicates and helps in applying the two-pointer technique.
2. **Iterate with a Fixed Element**: Iterate through the array, fixing one element and trying to find the other two using the two-pointer approach.
3. **Two-pointer Technique**: For each fixed element, use two pointers to find pairs that sum up to the negative of the fixed element.
4. **Avoid Duplicates**: Skip over any duplicate elements to ensure that each triplet is unique.

*/
class Solution {
    threeSum(nums) {
        // Sort the array to simplify finding unique triplets
        nums.sort((a, b) => a - b);

        // Initialize an array to store the result triplets
        const result = [];

        // Iterate over the array with index `i`
        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicates: If the current number is the same as the previous one, continue
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Use two pointers to find pairs that sum up to the negative of the current number
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const tripletSum = nums[i] + nums[left] + nums[right];

                // If the sum is zero, we've found a valid triplet
                if (tripletSum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);

                    // Move both pointers to the next unique values
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    // Move pointers towards the center after finding a valid triplet
                    left++;
                    right--;
                } else if (tripletSum < 0) {
                    // If the sum is less than zero, move the left pointer to the right to increase the sum
                    left++;
                } else {
                    // If the sum is greater than zero, move the right pointer to the left to decrease the sum
                    right--;
                }
            }
        }

        // Return the list of all unique triplets
        return result;
    }
}