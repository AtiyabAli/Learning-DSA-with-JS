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

//Linear Search

//Binary Search

//Linear search pseudocode

// function linearSearch(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
// console.log(linearSearch([-5, 2, 10, 4, 6], 10));
// console.log(linearSearch([-5, 2, 10, 4, 6], 4));
// console.log(linearSearch([-5, 2, 10, 4, 6], 1));

// function sortedarrIndex(arr, target){
//     arr.sort((a, b)=>{
//         return a - b
//     })
// }
// console.log(sortedarrIndex([-5, 2, 10, 4, 6]));

// let arr = [-5, 2, 10, 4, 6];

// arr.sort((a, b)=>{
//     return a - b
// })
// console.log(arr);

// function fIndex(arr, target){
//     arr.sort((a, b)=>{
//         return a - b
//     })
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1
// }
// console.log(fIndex([-5, 2, 10, 4, 6], 10));

// function binarySearch(arr, target){
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1
//     while (leftIndex<=rightIndex) {
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
// }
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 4));
// console.log(binarySearch([-5, 8, 4, 6, 10], 6));

//Time complexity is O(logn)
//As input search is reduced by half on each iteration

// function recursiveBinaryDearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   let middleIndex = (leftIndex + rightIndex) / 2;

//   if (target === arr[middleIndex]) {
//     return middleIndex;
//   }
//   if (target < middleIndex) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex);
//   }
// }
// console.log(recursiveBinaryDearch([-5, 2, 4, 6, 10], 2));

//Sort Algorithm

//Bubble sort

//compare the Json element in the array

function sortArr(arr){
  let swapped
  do{
    swapped = false
    for(let i=0; i<arr.length-1; i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  }
  while(swapped)
  return arr
}
console.log(sortArr([-5, 2, 1, 6, 10]));
