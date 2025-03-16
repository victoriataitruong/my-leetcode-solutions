/*
Leetcode 338: Counting Bits

Problem Description:
Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (0 <= i <= n), `ans[i]` is the number of 1's in the binary representation of `i`. The problem requires an efficient solution, and the optimal approach should solve this in **O(n)** time complexity.

Approach:
1. **Dynamic Programming**: Use dynamic programming to build the solution. We know that the number of 1's in `i` can be derived from the number of 1's in `i // 2` (i.e., the result for the number `i` shifted right by 1).
2. **Relation**: The number of 1's in `i` is `dp[i // 2] + (i % 2)`. This works because when you divide by 2, you remove the least significant bit, and then you just need to check if `i` is odd or even (which is determined by `i % 2`).
3. **Build the Result**: Create an array `dp` where `dp[i]` stores the number of 1's in the binary representation of `i`. Populate it using the relation mentioned above for all `i` from 1 to `n`.
*/
class Solution {
    countBits(n) {
        // Initialize the result array with 0 for all numbers from 0 to n
        const dp = new Array(n + 1).fill(0);

        // Iterate through numbers from 1 to n
        for (let i = 1; i <= n; i++) {
            // Use the relation dp[i] = dp[Math.floor(i / 2)] + (i % 2)
            dp[i] = dp[Math.floor(i / 2)] + (i % 2);
        }

        // Return the result array
        return dp;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.countBits(5)); // Output: [0, 1, 1, 2, 1, 2]

