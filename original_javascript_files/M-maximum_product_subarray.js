/*
Leetcode 152: Maximum Product Subarray

Problem Description:
Given an integer array `nums`, find the contiguous subarray within an array (containing at least one number) that has the largest product. The solution must be solved in **O(n)** time complexity, where `n` is the number of elements in the array.

Approach:
1. **Two Tracking Variables**: Maintain two variables, `max_prod` and `min_prod`, to track the maximum and minimum product up to the current index. This helps in cases where negative numbers are involved, which can flip the sign of the product.
2. **Iterate Through the Array**: For each element, compute the possible new products by including the current element. The new maximum product will either be the element itself, the element multiplied by the previous maximum product, or the element multiplied by the previous minimum product (in case of negative numbers).
3. **Update Maximum Product**: Continuously update the global maximum product as you iterate through the array.
*/

class Solution {
    maxProduct(nums) {
        // Edge case: if the array is empty, return 0
        if (nums.length === 0) {
            return 0;
        }

        // Initialize the max and min products to the first element of the array
        let maxProd = nums[0], minProd = nums[0], result = nums[0];

        // Iterate through the array starting from the second element
        for (let i = 1; i < nums.length; i++) {
            let num = nums[i];

            // If the number is negative, swap maxProd and minProd
            if (num < 0) {
                [maxProd, minProd] = [minProd, maxProd];
            }

            // Update maxProd and minProd
            maxProd = Math.max(num, maxProd * num); // Max product can either be the number itself or previous maxProd multiplied by the number
            minProd = Math.min(num, minProd * num); // Min product can either be the number itself or previous minProd multiplied by the number

            // Update the result with the maximum product encountered so far
            result = Math.max(result, maxProd);
        }

        // Return the maximum product found
        return result;
    }
}
