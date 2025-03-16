/*
Leetcode 125: Valid Palindrome

Problem Description:
Given a string `s`, return `True` if it is a palindrome, or `False` otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

Approach:
1. **Two Pointer Technique**: Use two pointers, one at the start and one at the end of the string.
2. **Character Comparison**: Skip non-alphanumeric characters and compare the characters at the two pointers.
3. **Check Equality**: If the characters at the pointers do not match, return `False`.
4. **Update Pointers**: Move the pointers inward and continue the process until they meet or cross.
*/

class Solution {
    isPalindrome(s) {
        // Initialize two pointers: one at the beginning and one at the end of the string
        let left = 0, right = s.length - 1;

        // Iterate until the two pointers meet
        while (left < right) {
            // Skip non-alphanumeric characters by moving the left pointer forward
            if (!/[a-zA-Z0-9]/.test(s[left])) {
                left++;
                continue;
            }
            // Skip non-alphanumeric characters by moving the right pointer backward
            if (!/[a-zA-Z0-9]/.test(s[right])) {
                right--;
                continue;
            }

            // Compare characters at both pointers (case insensitive)
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            // Move both pointers inward to continue checking
            left++;
            right--;
        }

        // If no mismatches were found, return true indicating the string is a palindrome
        return true;
    }
}
