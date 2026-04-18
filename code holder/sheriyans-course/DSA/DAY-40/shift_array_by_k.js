// brute force approach
// let arr = [1, 2, 3, 4, 5];
// let k = 2
// k = k % arr.length
// for (let i = 1; i <= k; i++) {
//     let temp = arr[0]
//     for (let j = 0; j <= arr.length - 1; j++) {
//         arr[j] = arr[j+1]
//     } arr[arr.length - 1] = temp

// }
// console.log(arr)


// // optimal approach
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length)
// let k = 2
// for (let i = 0; i <= arr.length-1; i++) {
//     temp[i] = arr[(i + k) % arr.length]
// } console.log(temp);

// more optimal approach
let prompt = require("prompt-sync")();
let arr = [1,2,3,4,5]
let k = Number(prompt("Enter a number"))
k = k% arr.length
reverse(arr , 0 , k-1)
reverse(arr,k , arr.length-1)
reverse(arr, 0 , arr.length-1)
function reverse(arr , i , j){
    while(i<j)
    {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}console.log(arr)