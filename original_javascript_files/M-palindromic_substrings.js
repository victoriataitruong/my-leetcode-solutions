/*
Leetcode 647: Palindromic Substrings

Problem Description:
Given a string `s`, return the number of palindromic substrings in it. A string is a palindrome if it reads the same forward and backward. 

A substring is a contiguous sequence of characters within the string. The input string's length will not exceed 1000.

Approach:
1. **Expand Around Center**: 
   - For each character in the string, consider it as the center of a potential palindrome.
   - Since palindromes can be of odd or even length, expand from both single characters and pairs of adjacent characters.
2. **Count Palindromes**: Expand outward from each center while the substring remains a palindrome, and count each valid expansion.
3. **Complexity**: This method runs in **O(n²)** time complexity with **O(1)** space complexity.
*/

class Solution {
    countSubstrings(s) {
        // Helper function to count palindromes centered at left and right
        const expandAroundCenter = (s, left, right) => {
            let count = 0;
            // Expand while the substring is a palindrome
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;  // Found a valid palindrome
                left--;    // Expand left
                right++;   // Expand right
            }
            return count;
        };

        let totalPalindromes = 0;
        // Iterate through each character in the string
        for (let i = 0; i < s.length; i++) {
            // Count odd-length palindromes centered at index i
            totalPalindromes += expandAroundCenter(s, i, i);
            // Count even-length palindromes centered between i and i+1
            totalPalindromes += expandAroundCenter(s, i, i + 1);
        }

        return totalPalindromes;
    }
}

