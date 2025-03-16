/*
Leetcode 268: Missing Number

Problem Description:
Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the one number that is missing from the array.

Example:
Input: nums = [3, 0, 1]
Output: 2

Constraints:
- `n == nums.length`
- `1 <= n <= 10^4`
- `0 <= nums[i] <= n`
- All numbers in `nums` are unique.

Approach:
1. **Sum Formula**: The sum of the first `n` natural numbers is given by the formula:
   \[
   \text{expected_sum} = \frac{n(n+1)}{2}
   \]
2. **Compute Actual Sum**: Calculate the sum of all elements in `nums`.
3. **Find the Missing Number**: The missing number is the difference between the expected sum and the actual sum.
4. **Efficiency**: This approach runs in **O(n)** time complexity and uses **O(1)** extra space.
*/

class Solution {
    missingNumber(nums) {
        // Get the length of the array, which represents n
        const n = nums.length;

        // Compute the expected sum of numbers from 0 to n
        const expectedSum = (n * (n + 1)) / 2;

        // Compute the actual sum of elements in nums
        const actualSum = nums.reduce((sum, num) => sum + num, 0);

        // The missing number is the difference between the expected and actual sum
        return expectedSum - actualSum;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.missingNumber([3, 0, 1])); // Output: 2

