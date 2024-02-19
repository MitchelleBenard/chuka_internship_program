/*
write a program to generate the fibonacci sequence up to 100.
*/

// Function to print Fibonacci series up to the given number
function printFibonacci(n){
    let a=0, b=1, c;
    console.log(a); // Print the first Fibonacci number
    console.log(b); // Print the second Fibonacci number
    for (let i = 2; i < n; i++) {
        c = a + b; // Calculate the next Fibonacci number
        console.log(c); // Print the next Fibonacci number
        a = b; // Update the first Fibonacci number
        b = c; // Update the second Fibonacci number
    }
}
printFibonacci(100); // Call the function to print Fibonacci series up to 100