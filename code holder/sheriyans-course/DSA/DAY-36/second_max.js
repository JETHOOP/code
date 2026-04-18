// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number: ");
// let arr = new Array(n);
let arr =[10,10,10,10,10,10,10]
let max = [0];
let smax = [1];
for (let i = 0 ; i<= arr.length; i++){
if(arr[i] > max){
    smax = max;
    max = arr[i]
}
else if(arr[i] >smax && arr[i] < max){
    smax = arr[i]
}
}console.log("The second max element is " + smax)
console.log(max)