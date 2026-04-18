let prompt = require("prompt-sync")();
let str = prompt("Enter your string here")
let arr = new Array(123).fill(0);
for(let i = 0 ; i<str.length;i++){
  let asci = str.charCodeAt(i)
  arr[asci] += 1
}
for(let i = 0;i<arr.length;i++){
 if(arr[i]>0){
    console.log(String.fromCharCode(i) + " --> " + arr[i])
 }
}








/*Brute force aur kaam chalao*/ 
// let prompt = require("prompt-sync")()
// let str = prompt("Enter a String")
// let count = 0
// let s = prompt("Enter a char yo know repeatation")
// for(let i = 0;i<str.length;i++){
// if(str[i] == s) count++ 
// }
// console.log(count)