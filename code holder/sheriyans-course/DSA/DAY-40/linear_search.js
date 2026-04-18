
let prompt = require("prompt-sync")();
let k = Number(prompt("Enter a number"));
let arr = [20,30,40,55,65,74,83];
let index = -1;
for(let i = 0;i<=arr.length;i++){
    if(arr[i] == k){
        index = i;
        break;
    }
}
if(index == -1){
    console.log("your number not found")
}
else console.log("ELement found at " +  index)