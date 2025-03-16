/*
Leetcode 5: Longest Palindromic Substring

Problem Description:
Given a string `s`, return the longest palindromic substring in `s`. A palindrome is a string that reads the same forward and backward. The solution should run in **O(n^2)** time complexity, where `n` is the length of the string.

Approach:
1. **Expand Around Centers**: Iterate through each character in the string and treat each character (and the gap between characters) as a potential center of a palindrome.
2. **Expand Both Ways**: From each center, expand outward while the substring remains a palindrome.
3. **Track Longest Palindrome**: Keep track of the longest palindrome found during the process.
*/
class Solution {
    longestPalindrome(s) {
        // Base case: if string is empty or has one character, it's itself a palindrome
        if (s.length < 2) return s;

        // Variables to track the start and end indices of the longest palindrome
        let start = 0, end = 0;

        // Function to expand around a given center
        const expandAroundCenter = (left, right) => {
            // Expand as long as the characters match and stay within bounds
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;   // Move left pointer outward
                right++;  // Move right pointer outward
            }
            // Return the length of the palindrome found
            return right - left - 1;
        };

        // Iterate through each character in the string
        for (let i = 0; i < s.length; i++) {
            // Check both odd-length and even-length palindromes
            const len1 = expandAroundCenter(i, i);     // Odd-length palindrome
            const len2 = expandAroundCenter(i, i + 1); // Even-length palindrome
            const maxLen = Math.max(len1, len2);

            // Update start and end indices if a longer palindrome is found
            if (maxLen > end - start) {
                start = i - Math.floor((maxLen - 1) / 2);
                end = i + Math.floor(maxLen / 2);
            }
        }

        // Return the longest palindrome substring found
        return s.substring(start, end + 1);
    }
}

// Example usage
const solution = new Solution();
console.log(solution.longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(solution.longestPalindrome("cbbd"));  // Output: "bb"
