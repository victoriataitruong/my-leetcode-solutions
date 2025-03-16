/*
Leetcode 213: House Robber II

Problem Description:
In this problem, you are given an integer array `nums` representing the amount of money of each house along a street. You are a robber who is trying to maximize the amount of money you can rob tonight. However, adjacent houses have security systems connected, so if you rob one house, you cannot rob the next. Additionally, because the street is a circle, the first and last houses are adjacent to each other. Return the maximum amount of money you can rob tonight without alerting the police. The solution should be achieved in **O(n)** time complexity, where `n` is the number of houses.

Approach:
1. **Two Cases**: Since the houses are arranged in a circle, we can break the problem into two cases:
   - **Case 1**: Rob houses from index 0 to n-2 (excluding the last house).
   - **Case 2**: Rob houses from index 1 to n-1 (excluding the first house).
2. **Dynamic Programming**: We can solve the problem in each case using dynamic programming, similar to the "House Robber" problem. The idea is to maintain two variables to store the maximum amount we can rob up to the current house.
3. **Return the Maximum**: The final answer will be the maximum of the two cases.

*/

class Solution {
    rob(nums) {
        // Helper function to solve the House Robber problem on a linear street
        const robLinear = (nums) => {
            if (!nums.length) return 0;
            if (nums.length === 1) return nums[0];

            let prev2 = 0, prev1 = 0; // Initialize variables for max amounts robbed up to two previous houses

            for (const num of nums) {
                // Calculate the maximum amount between robbing this house or skipping it
                const curr = Math.max(prev1, prev2 + num);
                prev2 = prev1; // Update prev2 to previous value of prev1
                prev1 = curr; // Update prev1 to current calculated value
            }
            return prev1;
        };

        // Handle the two cases: rob houses from 0 to n-2, or from 1 to n-1
        if (nums.length === 1) return nums[0];

        return Math.max(robLinear(nums.slice(1)), robLinear(nums.slice(0, -1))); // Compare both cases and return the maximum
    }
}

