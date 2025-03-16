/*
Problem: Minimum Window Substring (Leetcode 76)

You are given two strings s and t. Return the minimum window in s which will contain all the characters in t.
If no such window exists, return an empty string.

Efficient Approach:
- We use the **sliding window technique** to find the smallest substring.
- Maintain two pointers (left and right) to represent the window, and a counter to track how many characters from t are in the current window.
- The right pointer expands the window, and once all characters are found, the left pointer shrinks it to find the smallest window.
- This approach ensures an optimal time complexity of **O(N)**, where N is the length of s.
*/

function minWindow(s, t) {
    if (!s || !t) return "";

    // Frequency counter for characters in t
    const tCount = {};
    for (const char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }

    const required = Object.keys(tCount).length;
    let left = 0, right = 0;

    // Dictionary to keep track of the characters in the current window
    const windowCount = {};
    let formed = 0;

    // Store result (window length, left, right)
    let result = [Infinity, null, null];

    while (right < s.length) {
        const char = s[right];
        windowCount[char] = (windowCount[char] || 0) + 1;

        if (tCount[char] && windowCount[char] === tCount[char]) {
            formed++;
        }

        // Try to contract the window from the left
        while (left <= right && formed === required) {
            const windowLength = right - left + 1;
            if (windowLength < result[0]) {
                result = [windowLength, left, right];
            }

            const leftChar = s[left];
            windowCount[leftChar]--;
            if (tCount[leftChar] && windowCount[leftChar] < tCount[leftChar]) {
                formed--;
            }
            left++;
        }

        // Expand the window by moving the right pointer
        right++;
    }

    return result[0] === Infinity ? "" : s.slice(result[1], result[2] + 1);
}

// Example usage
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"