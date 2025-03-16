/*
Leetcode 139: Word Break

Problem Description:
Given a string `s` and a dictionary of words `wordDict`, determine if `s` can be segmented into a space-separated sequence of one or more dictionary words. The dictionary `wordDict` may contain additional words that are not part of the string `s`. The solution must return `True` if the string `s` can be segmented, otherwise return `False`.

Approach:
1. **Dynamic Programming (DP)**: We will use a DP array where `dp[i]` will be `True` if the substring `s[0:i]` can be segmented into words from `wordDict`.
2. **Iterate Through the String**: For each position `i`, check if any substring `s[j:i]` (for `j < i`) is a valid word in the dictionary, and if `dp[j]` is `True`.
3. **Return Result**: If `dp[len(s)]` is `True`, return `True` (indicating that the entire string can be segmented). Otherwise, return `False`.
*/

class Solution {
    wordBreak(s, wordDict) {
        // Convert wordDict to a set for O(1) lookup
        const wordSet = new Set(wordDict);

        // DP array to store results for substrings of s
        // dp[i] is True if s[0:i] can be segmented into words from wordDict
        const dp = Array(s.length + 1).fill(false);

        // Base case: An empty string can always be segmented
        dp[0] = true;

        // Iterate over each index i in the string s
        for (let i = 1; i <= s.length; i++) {
            // Check all substrings s[j:i] where j < i
            for (let j = 0; j < i; j++) {
                // If dp[j] is True (i.e., s[0:j] can be segmented) and s[j:i] is in the wordDict
                if (dp[j] && wordSet.has(s.slice(j, i))) {
                    // Mark dp[i] as True and break as we found a valid segmentation
                    dp[i] = true;
                    break;
                }
            }
        }

        // Return the result for the entire string s
        return dp[s.length];
    }
}

