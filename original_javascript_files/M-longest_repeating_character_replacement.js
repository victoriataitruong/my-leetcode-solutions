/*
Leetcode 424: Longest Repeating Character Replacement

Problem Description:
You are given a string `s` and an integer `k`. You can replace any character in the string with another character at most `k` times.

Return the length of the longest substring that contains the same letter you can achieve after performing these replacements.

Approach:
1. **Sliding Window Technique**: Use two pointers (`left` and `right`) to maintain a window in the string.
2. **Character Frequency Tracking**: Track the frequency of characters in the current window using a dictionary.
3. **Max Character Count**: Maintain the maximum count of any single character in the window to determine the number of replacements required.
4. **Window Shrinking Condition**: If the window size minus the maximum character count exceeds `k`, move the `left` pointer to shrink the window.
5. **Result Calculation**: Continuously update the maximum window size during the process.
*/
class Solution {
    characterReplacement(s, k) {
        // Object to count character frequency in the current window
        const charCount = {};
        let left = 0;
        let maxCount = 0; // Maximum frequency of any character in the window
        let maxLength = 0; // Maximum length of valid substring

        // Iterate through the string using the 'right' pointer
        for (let right = 0; right < s.length; right++) {
            // Add the current character to the frequency object
            charCount[s[right]] = (charCount[s[right]] || 0) + 1;

            // Track the maximum frequency of any character in the current window
            maxCount = Math.max(maxCount, charCount[s[right]]);

            // Check if the window is invalid (needs more than k replacements)
            if ((right - left + 1) - maxCount > k) {
                // Shrink the window from the left
                charCount[s[left]] -= 1;
                left++;
            }

            // Update the maximum valid window length
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.characterReplacement("AABABBA", 1)); // Output: 4
