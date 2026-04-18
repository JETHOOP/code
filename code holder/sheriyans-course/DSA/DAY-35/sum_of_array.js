let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number to make array "));
let arr = new Array(n);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt("Enter a number: "));
} console.log(arr)

let sum = 0;
for(let i =0; i<arr.length;i++){
sum = arr[i] + sum;
}console.log(`${sum}`)