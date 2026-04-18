
// let prompt = require('prompt-sync')();

// let n = Number(prompt("Enter the size of an array: "));
// let arr = new Array(n);

// // Fix: Use `arr` instead of `aar`
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(4); // Creating a 2D array
// }

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] = Number(prompt("Enter element: "));
//     }
// }

// console.log(arr);

let prompt = require("prompt-sync")();
let size = Number(prompt("Enter the size of array"))
let arr = new Array(size);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(Number(prompt("Enter size of inner array: ")));
}
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt("Enter element: "));
    }
}
console.log(arr);