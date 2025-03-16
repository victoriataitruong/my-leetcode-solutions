/*
Problem Description:
Leetcode 191 - Number of 1 Bits

You are given an unsigned integer and need to return the number of '1' bits it has (also known as the Hamming weight).

Example 1:
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string has three '1' bits.

Example 2:
Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string has one '1' bit.

Constraints:
- The input integer is a 32-bit unsigned integer.
*/

class Solution {
    /**
     * Efficient approach using bitwise AND operation.
     * Time Complexity: O(k), where k is the number of 1s in n.
     * @param {number} n - The input integer
     * @return {number} - Count of 1 bits
     */
    hammingWeight(n) {
        let count = 0; // Initialize count of 1 bits
        while (n !== 0) { // Loop until n becomes 0
            n &= (n - 1); // Flip the least significant '1' bit to '0'
            count++; // Increase count for each '1' bit removed
        }
        return count; // Return total count of 1 bits
    }
}

// Example usage
const solution = new Solution();
console.log(solution.hammingWeight(11)); // Output: 3 (binary 1011)

