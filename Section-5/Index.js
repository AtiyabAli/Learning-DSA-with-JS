//Frequency counter

// function same(arr1, arr2){
//    if(arr1.length !== arr2.length){
//     return false
//    }
//    for(let i=0; i<arr1.length; i++){
//     let correctIndex = arr2.indexOf(arr1[i]**2)
//     if(correctIndex === -1){
//         return false
//     }
//     arr2.splice(correctIndex, 1)
//    }
//    return true
// }

// console.log(same([2, 10, 5], [4, 100, 26]));

// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }
//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
//   }
//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// }  
// console.log(validAnagram("syed", "deys"));

// function sumZero(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[i]+arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5]));

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if(sum> 0){
            right--
        } else{
            left++
        }
    }
}
sumZero[-4, -3, -2, 0, 2, 3, 4];

