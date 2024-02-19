/*
write a program that takes an integer as input and returns true if the input is a power of two.

Example:
8 => returns true
6 => return false
*/

            //CODE
// Function to check if a number is a power of two
function isPowerOfTwo(n) {
    let count = 0; // Initialize a count variable to track the number of set bits
    while (n > 0) {
        if (n & 1) { // Check if the least significant bit is set
            count++; // Increment the count if the bit is set
        }
        n >>= 1; // Right shift the number to check the next bit
    }
    return count === 1; // Return true if there is only one set bit (power of two), false otherwise
}

// Example usage
console.log(isPowerOfTwo(16)); // Output: true (16 is a power of two)
console.log(isPowerOfTwo(12)); // Output: false (12 is not a power of two)
            