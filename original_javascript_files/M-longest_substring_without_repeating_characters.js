/*
Leetcode 3: Longest Substring Without Repeating Characters

Problem Description:
Given a string `s`, find the length of the **longest substring** without repeating characters. The solution must be solved in **O(n)** time complexity, where `n` is the length of the string.

Approach:
1. **Sliding Window Technique**: Use two pointers (`left` and `right`) to represent a window that moves through the string.
2. **Hash Map for Tracking Characters**: Store characters and their most recent index in a dictionary to quickly identify duplicates.
3. **Dynamic Window Adjustment**: As the `right` pointer iterates through the string, move the `left` pointer when a duplicate character is found to maintain a valid substring.
4. **Max Length Calculation**: Track the maximum length during iteration.
*/

class Solution {
    lengthOfLongestSubstring(s) {
        // Object to store characters and their latest index
        const charIndex = {};
        // Initialize left pointer and max length
        let left = 0;
        let maxLength = 0;

        // Iterate through each character in the string using the right pointer
        for (let right = 0; right < s.length; right++) {
            // If the character is already in the object and its index is within the window
            if (charIndex[s[right]] !== undefined && charIndex[s[right]] >= left) {
                // Move the left pointer to exclude the repeating character
                left = charIndex[s[right]] + 1;
            }

            // Store/update the latest index of the current character
            charIndex[s[right]] = right;

            // Calculate the maximum length of the substring
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.lengthOfLongestSubstring("abcabcbb")); // Output: 3
