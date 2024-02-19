/*
write a program that prints the numbers from 1 to 100. 
For multiples 3 print "fizz"
For mutliples of 5 print "buzz" 
For number that are multoples of both 3 and 5, print "fizzbuzz"
*/

                //CODE
// Loop from 1 to 100
function fizzbuzz(range){
    for (let i = 0; i <= range; i++) {
        // Check if the value i is divisible by both 3 and 5
        if ((i % 3) == 0 && (i % 5) == 0) {
            console.log("fizzbuzz"); // Print "fizzbuzz" if divisible by both 3 and 5
        } else {
            // Check if the value i is divisible by only 3
            if ((i % 3) == 0) {
                console.log("fizz"); // Print "fizz" if divisible by 3
            } else if ((i % 5) == 0) {
                console.log("buzz"); // Print "buzz" if divisible by 5
            } else {
                console.log(i); // Print the number if not divisible by 3 or 5
            }
        }
    }
}
