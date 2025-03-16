/*
Leetcode 1143: Longest Common Subsequence

Problem Description:
Given two strings `text1` and `text2`, return the length of their longest common subsequence. A subsequence of a string is a sequence that can be derived from the string by deleting some or no characters without changing the relative order of the remaining characters. A common subsequence is a subsequence that appears in both strings. You need to find the longest subsequence that appears in both strings. The solution should be optimized to work in **O(m * n)** time complexity, where `m` and `n` are the lengths of the two strings.

Approach:
1. **Dynamic Programming**: Use dynamic programming to store the lengths of the longest common subsequence for each pair of prefixes of `text1` and `text2`.
2. **DP Table**: Create a 2D table where `dp[i][j]` represents the length of the longest common subsequence of `text1[0..i-1]` and `text2[0..j-1]`.
3. **Transition**: If characters `text1[i-1]` and `text2[j-1]` match, then `dp[i][j] = dp[i-1][j-1] + 1`. Otherwise, take the maximum value between `dp[i-1][j]` and `dp[i][j-1]`.
4. **Final Answer**: The value at `dp[m][n]` will give the length of the longest common subsequence of `text1` and `text2`.
*/

class Solution {
    longestCommonSubsequence(text1, text2) {
        // Step 1: Get the lengths of the two input strings
        const m = text1.length;
        const n = text2.length;

        // Step 2: Create a 2D DP table with dimensions (m+1) x (n+1)
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        // Step 3: Iterate through both strings
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                // Step 4: If characters match, take the value from the diagonal (previous subsequences) + 1
                if (text1[i - 1] === text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    // Step 5: Otherwise, take the maximum value from the left or top cell
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // Step 6: Return the bottom-right cell, which contains the length of the longest common subsequence
        return dp[m][n];
    }
}

// Example usage
const solution = new Solution();
console.log(solution.longestCommonSubsequence("abcde", "ace")); // Output: 3
