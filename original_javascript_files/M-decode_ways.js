/*
Leetcode 91: Decode Ways

Problem Description:
Given a string `s` consisting of digits, return the total number of ways to decode it. A mapping of 'A' = 1, 'B' = 2, ..., 'Z' = 26 is used to decode the string. For example, "12" can be decoded as "AB" (1 2) or "L" (12). The decoding may involve multiple digits and must be done in such a way that the digits form valid letters (1-26). The input string may have leading zeros and is guaranteed to be a non-empty string.

Approach:
1. **Dynamic Programming (DP)**: Use dynamic programming to keep track of the number of ways to decode the string at each position.
2. **State Representation**: Let `dp[i]` represent the number of ways to decode the substring `s[0:i]`.
3. **Base Case**: The empty string has one way to decode, so `dp[0] = 1`.
4. **Transition**: 
   - If `s[i-1]` is a valid digit (1-9), then `dp[i] += dp[i-1]`.
   - If `s[i-2:i]` is a valid two-digit number (10-26), then `dp[i] += dp[i-2]`.
5. **Return**: The result will be `dp[len(s)]`, which will give the total number of ways to decode the entire string.
*/

class Solution {
    numDecodings(s) {
        // Edge case: if the string starts with '0', there's no way to decode
        if (!s || s[0] === '0') return 0;

        // Initialize dp array: dp[i] will store the number of ways to decode s.slice(0, i)
        const dp = new Array(s.length + 1).fill(0);

        // Base case: There is 1 way to decode the empty string
        dp[0] = 1;
        // Base case: If the first character is not '0', it can be decoded as one letter
        dp[1] = s[0] !== '0' ? 1 : 0;

        // Iterate over the string starting from the second character
        for (let i = 2; i <= s.length; i++) {
            // Check if the current character forms a valid single digit
            if (s[i - 1] >= '1' && s[i - 1] <= '9') {
                dp[i] += dp[i - 1];
            }

            // Check if the current and previous characters form a valid two-digit number
            const twoDigit = s.slice(i - 2, i); // Extract two-digit substring
            if (twoDigit >= '10' && twoDigit <= '26') {
                dp[i] += dp[i - 2];
            }
        }

        // The final element in dp array holds the total number of ways to decode the string
        return dp[s.length];
    }
}

// Example usage
const solution = new Solution();
console.log(solution.numDecodings("226")); // Output: 3

