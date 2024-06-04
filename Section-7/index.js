// Recursive solution
//function that calls itself

// function countDown(num){
//     if(num <= 0){
//         console.log("All done");
//         return;
//     }
//     console.log(num);
//     num--
//     countDown(num)
// }
// countDown(5)

// function sumRange(num){
//     if(num === 1){
//         return 1
//     }
//     return num + sumRange(num-1)
// }
// console.log(sumRange(5));
//5 4 3 2 1

// function facrorial(num){
//     if(num <= 1){
//         return 1
//     }
//     return num * facrorial(num-1)
// }
// console.log(facrorial(5));

function collectOddValues(arr){

    let result = [];

    function helper(arr){
        if(arr.length === 0){
            return;
        }
        if(arr[0] % 2 !== 0){
            result.push(arr[0])
        }
        helper(arr.slice(1))
    }
    helper(arr)
    return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6]));