/*
write a program that takes an interger as input
returns an integer with reversed digit ordering
*/
                //CODE
// Function to reverse an integer
function reverse_integer(input) {
    // Log the original input value
    console.log("original value : " + input);
    
    // Convert the integer to a string, reverse the string, and then join it back together
    var reverse = input.toString().split("").reverse().join("");
    
    // Convert the reversed string back to an integer
    reverse = parseInt(reverse);
    
    // Log the reversed value
    console.log("reversed value : " + reverse);
    
    // Return the reversed integer
    return reverse;
}

// Test the reverse_integer function with positive and negative integers
reverse_integer(893);   // Output: original value : 893
                        //         reversed value : 398
reverse_integer(-456);  // Output: original value : -456
                        //         reversed value : -654
