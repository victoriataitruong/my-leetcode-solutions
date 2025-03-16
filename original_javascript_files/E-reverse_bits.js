/*
Problem: Reverse Bits (LeetCode 190)

Given a 32-bit unsigned integer, reverse its bits and return the result.

Example:
Input:  00000010100101000001111010011100 (43261596 in decimal)
Output: 00111001011110000010100101000000 (964176192 in decimal)

Constraints:
- The input is a 32-bit unsigned integer.
- The function should run in O(1) time complexity.

Approach:
- We iterate through all 32 bits of the number.
- Shift the result left by 1 to make space for the new bit.
- Extract the least significant bit (LSB) from `n` and add it to `result`.
- Right shift `n` by 1 to process the next bit.
- Repeat this process for all 32 bits.

This ensures that the bits are reversed efficiently in constant time.
*/

class Solution {
    reverseBits(n) {
        let result = 0; // Stores the reversed bits
        for (let i = 0; i < 32; i++) {
            result = (result << 1) | (n & 1); // Shift left and add the LSB of n
            n >>>= 1; // Unsigned right shift to ensure no sign extension
        }
        return result >>> 0; // Convert result to an unsigned 32-bit integer
    }
}

// Example usage
const solution = new Solution();
console.log(solution.reverseBits(43261596)); // Output: 964176192

