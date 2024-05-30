// function add(num1, num2){
//     return num1 + num2
// }

// console.log(add(2, 3));

//Sum of N natural number

// function summation(n){
//     let sum = 0;
//     for(let i=0; i<=n; i++){
//         sum = sum + i
//     }
//     return sum;
// }

// console.log(summation(10));

// const person = {
//     fname: "syed",
//     lname: "ali"
// }

//Math Algorithms

//Fibonacci Sequence

// function fibonacci(n){
//     let fib = [0, 1];
//     for(let i=2; i<n; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(7));
// console.log(fibonacci(100));

//Factorial of a Number

// function factorial(n){
//     let result = 1
//     if(n<0){
//         console.log("Plesae enter positive number");
//         result = 0
//     }
//     for(let i=1; i<=n; i++){
//         result = result*i
//     }
//     return result
// }
// console.log(factorial(5));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(-2));

//Prime Number

// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(let i=2; i<= Math.sqrt(n); i++){
//         if(n%i === 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(100));

//Power of two - Pseudocode

//Recursion

//It is a problem solving technique

//Every recursive solution has the base case

//

// function recursiveFibonacci(n){
//    if(n<2){
//     return n
//    }
//    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }
// console.log(recursiveFibonacci(6));

//Recursive factorial

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n-1)
// }
// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(1));

//Search Algorithm


