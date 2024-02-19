/*
write a program that accepts a string as input,
capitalizes the first letter of each word in the string 
returns the result string
*/

                // CODE 
// Function to capitalize the first letter of each word in a sentence
function capitalize(sentence) {
    // Splitting the sentence into an array of words using space as the delimiter
    const split_sentence = sentence.split(" ");
    console.log(split_sentence);

    // Mapping through each word in the array and capitalizing the first letter of each word
    let words_capitalized = split_sentence.map(word => {
        // Capitalizing the first letter of the word and concatenating it with the rest of the word
        let capitalized = word[0].toUpperCase() + word.slice(1);
        console.log(capitalized);
        return capitalized; // Returning the capitalized word
    });

    // Joining the capitalized words back into a sentence using space as the delimiter
    return words_capitalized.join(" ");
}

// Testing the capitalize function with a sample sentence
console.log(capitalize("mitchelle is very quite today"));
