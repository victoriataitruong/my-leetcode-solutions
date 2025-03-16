/*
Leetcode 271: Encode and Decode Strings

Problem Description:
Design an algorithm to encode a list of strings to a single string. The encoded string should be decodable back to the original list of strings.

Approach:
1. **Encoding**:
   - Iterate through the list of strings.
   - For each string, append its length followed by a special delimiter (e.g., `#`) and the string itself.
   - This ensures that even strings with `#` inside them can be safely encoded.
2. **Decoding**:
   - Iterate through the encoded string.
   - Extract the length of each string, then use slicing to extract the string based on that length.
3. **Efficiency**: Both encoding and decoding operations run in **O(n)** time complexity, where `n` is the total length of all strings.
*/

class Codec {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let encodedStr = "";
        for (const s of strs) {
            // Append string length, followed by '#' and the string itself
            encodedStr += s.length + '#' + s;
        }
        return encodedStr;
    }

    /**
     * Decodes a single string back to a list of strings.
     * @param {string} s
     * @return {string[]}
     */
    decode(s) {
        const decodedStrs = [];
        let i = 0;
        while (i < s.length) {
            // Find the position of '#' to extract the string length
            const j = s.indexOf('#', i);
            const length = parseInt(s.slice(i, j), 10); // Extract string length
            i = j + 1; // Move pointer to the start of the actual string
            decodedStrs.push(s.slice(i, i + length)); // Extract string
            i += length; // Move pointer to the next encoded block
        }
        return decodedStrs;
    }
}

// Example usage
const codec = new Codec();
const encoded = codec.encode(["hello", "world"]);
console.log("Encoded:", encoded);

const decoded = codec.decode(encoded);
console.log("Decoded:", decoded);

