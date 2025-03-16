/*
Leetcode 238: Product of Array Except Self

Problem Description:
Given an integer array `nums`, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`. You must solve it without using division and in **O(n)** time complexity, where `n` is the number of elements in the array.

Approach:
1. **Prefix and Suffix Products**: We will compute two arrays: one for the prefix product (product of all elements before the current index) and another for the suffix product (product of all elements after the current index).
2. **Iterate Through the Array**: Calculate the result for each index using the prefix and suffix products.
3. **Final Result**: Multiply the prefix and suffix products to get the desired product for each index.
*/

class Solution {
    productExceptSelf(nums) {
        // Step 1: Initialize the output array
        const n = nums.length;
        const output = new Array(n).fill(1);

        // Step 2: Calculate the prefix products and store them in the output array
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            output[i] = prefix;
            prefix *= nums[i];
        }

        // Step 3: Calculate the suffix products and update the output array
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }

        // Step 4: Return the result array containing the product of all elements except the current one
        return output;
    }
}

