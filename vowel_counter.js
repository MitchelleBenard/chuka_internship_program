/*
write a program that counts the number of vowel in a sentense
    eg.
hello word = 2 vowels.
*/
                // CODE
function countVowels(sentence) {
    // Convert the sentence to lowercase to remove case sensetivity.
    sentence = sentence.toLowerCase();
    
    // Define an array containing the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialize a variable to count the number of vowels
    let vowelCount = 0;
    
    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(sentence[i])) {
            vowelCount++; 
        }
    }
    
    // Return the total number of vowels found in the sentence
    return vowelCount;
}

// Example usage:
const sentence = "hello world";
const numVowels = countVowels(sentence);
console.log(numVowels);
