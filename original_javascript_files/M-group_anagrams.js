/*
Leetcode 49: Group Anagrams

Problem Description:
Given an array of strings `strs`, group the anagrams together. An anagram is a word formed by rearranging the letters of another word using all the original letters exactly once.

Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Approach:
1. **Hash Map with Sorted Strings**: 
   - Use a dictionary to group strings by their sorted character representation.
2. **Iterate Through the List**:
   - For each string, sort its characters and use the sorted string as a key in the dictionary.
   - Append the original string to the corresponding key's list.
3. **Return Values**: 
   - Finally, return all the grouped lists as the result.

Time Complexity: **O(n * k log k)** where `n` is the number of strings and `k` is the maximum length of a string.
Space Complexity: **O(nk)** for the grouped anagrams storage.
*/
class Solution {
    groupAnagrams(strs) {
        // Object to hold sorted string as key and list of anagrams as value
        const anagrams = {};

        // Iterate through each word in the array
        for (const word of strs) {
            // Sort the characters of the word and use it as the key
            const sortedWord = word.split('').sort().join('');

            // Add the word to the corresponding anagram group
            if (!anagrams[sortedWord]) {
                anagrams[sortedWord] = []; // Initialize array if key doesn't exist
            }
            anagrams[sortedWord].push(word);
        }

        // Return the grouped anagrams as an array of arrays
        return Object.values(anagrams);
    }
}

// Example usage
const solution = new Solution();
console.log(solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
