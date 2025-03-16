/*
Leetcode 322: Coin Change

Problem Description:
Given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money, write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You have to use dynamic programming to solve this problem.

Approach:
1. **Dynamic Programming (DP) Array**: We will use an array `dp` where `dp[i]` represents the minimum number of coins needed to make amount `i`. Initialize `dp[0]` to 0 since no coins are needed to make amount 0.
2. **Initialization**: Initialize the `dp` array with a large number (greater than the maximum number of coins possible) to represent an impossible state.
3. **Bottom-up Calculation**: For each coin denomination, iterate over the possible amounts from that coin’s value up to the target amount and update the `dp` array.
4. **Return Result**: The final answer will be in `dp[amount]`. If it is still the initialized large value, return -1, indicating it's impossible to make up that amount with the given coins.

*/
class Solution {
    coinChange(coins, amount) {
        // Initialize the dp array where dp[i] represents the minimum coins to make amount i
        const dp = new Array(amount + 1).fill(Infinity);

        // Base case: 0 coins are needed to make amount 0
        dp[0] = 0;

        // Iterate through all amounts from 1 to the target amount
        for (let i = 1; i <= amount; i++) {
            // Check each coin denomination
            for (const coin of coins) {
                if (i - coin >= 0) {  // Only consider the coin if it does not exceed the current amount
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        // If dp[amount] is still Infinity, it means the amount cannot be formed, so return -1
        return dp[amount] !== Infinity ? dp[amount] : -1;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.coinChange([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)
console.log(solution.coinChange([2], 3));        // Output: -1

