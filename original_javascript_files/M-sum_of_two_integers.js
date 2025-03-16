/*
Problem: LeetCode 371 - Sum of Two Integers

Given two integers `a` and `b`, return the sum of the two integers 
without using the `+` or `-` operators.

Approach:
We use bitwise operations to simulate addition:
1. XOR (`^`) is used to calculate the sum without carrying.
2. AND (`&`) followed by a left shift (`<<`) is used to determine the carry.
3. We repeat this process until there is no carry.
4. Since Python handles integers differently than languages with fixed-width integers,
   we manually constrain the values to 32-bit signed integers using masks.
*/

class Solution {
    getSum(a, b) {
        const MASK = 0xFFFFFFFF;  // Mask to get last 32 bits
        const MAX_INT = 0x7FFFFFFF;  // Max positive 32-bit integer
        
        while (b !== 0) {
            let temp = (a & b) << 1;  // Compute the carry
            a = (a ^ b) & MASK;  // Compute the sum without carry and apply mask
            b = temp & MASK;  // Apply mask to carry
        }
        
        // If a is negative, we need to return its two's complement equivalent
        return a <= MAX_INT ? a : ~(a ^ MASK);
    }
}

