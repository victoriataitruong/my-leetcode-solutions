/*
Leetcode 242: Valid Anagram

Problem Description:
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s` and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once. You must solve the problem in **O(n)** time complexity, where `n` is the length of the strings.

Approach:
1. **Check Lengths**: First, if the lengths of `s` and `t` are not the same, they cannot be anagrams.
2. **Use Counter**: Utilize a `Counter` from Python's `collections` module to count the frequency of characters in both strings.
3. **Compare Counters**: If the `Counter` objects of both strings are equal, then the strings are anagrams; otherwise, they are not.
*/
class Solution {
    isAnagram(s, t) {
        // If the lengths of the strings differ, they cannot be anagrams
        if (s.length !== t.length) return false;

        // Create frequency maps for both strings
        const countChars = (str) => {
            const map = new Map();
            for (const char of str) {
                map.set(char, (map.get(char) || 0) + 1);
            }
            return map;
        };

        const sCount = countChars(s);
        const tCount = countChars(t);

        // Compare the two maps
        if (sCount.size !== tCount.size) return false;

        for (const [key, value] of sCount) {
            if (tCount.get(key) !== value) return false;
        }

        return true;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.isAnagram("anagram", "nagaram")); // true
console.log(solution.isAnagram("rat", "car")); // false
