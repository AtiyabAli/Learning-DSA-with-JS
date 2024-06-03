// function strCount(str, char){
//     let arr = str.split("")
//     let count = 0;
//     let elm = ""
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===char)
//             count += 1
//         elm = char[i]
//     }
//     console.log(elm);
//     return count
// }
// console.log(strCount("syyed", "y"));

//write a function which takes a str and return count of each character



 function charCount(str){
    let result = {};
    for(let i=0; i<= str.length; i++){
        let char = str[i];
        if(result[char] > 0){
            result[char]++
        } else{
            result[char] = 1;
        }
    }  
    return result;
 }
console.log(charCount("sSsyesd"));















