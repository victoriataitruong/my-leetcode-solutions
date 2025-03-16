/*
Leetcode 20: Valid Parentheses

Problem Description:
Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
- The brackets must close in the correct order.
- Every opening bracket has a corresponding closing bracket.
You need to return `true` if the string is valid, and `false` otherwise.

Approach:
1. **Stack**: Use a stack to store the opening parentheses encountered in the string.
2. **Mapping Closing to Opening Parentheses**: Use a dictionary to map each closing parenthesis to its corresponding opening parenthesis.
3. **Iterate Through the String**: For each character in the string:
   - If it's a closing parenthesis, check if it matches the most recent opening parenthesis (pop the stack).
   - If it's an opening parenthesis, push it onto the stack.
4. **Final Check**: After processing all characters, if the stack is empty, the string is valid. Otherwise, it's invalid.

*/
class Solution {
    isValid(s) {
        // Initialize an empty stack to store opening parentheses
        const stack = [];

        // Create a map to match closing parentheses to opening ones
        const parenthesesMap = { ')': '(', '}': '{', ']': '[' };

        // Loop through each character in the string
        for (const char of s) {
            // If the character is a closing parenthesis
            if (parenthesesMap[char]) {
                // Pop the last element from the stack if it's not empty; otherwise, set it to a dummy value
                const topElement = stack.length ? stack.pop() : '#';

                // If the top element doesn't match the expected opening parenthesis, return false
                if (parenthesesMap[char] !== topElement) {
                    return false;
                }
            } else {
                // If it's an opening parenthesis, push it onto the stack
                stack.push(char);
            }
        }

        // If the stack is empty, all parentheses are matched correctly; return true
        return stack.length === 0;
    }
}

