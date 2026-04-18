let prompt = require('prompt-sync')()
let str = prompt("Enter a string")
let i = 0; j = str.length-1;
let isPalindrome = true
while(i<j){
    if(str.charAt(i) != str.charAt(j)){
        isPalindrome = false
        break
    }
        i++
        j--
}
console.log(isPalindrome ? "palindrome" : "not palindrome")


// Brute force approach
// let str = "anna";
// let nstr = "";
// for(let i = str.length - 1;i>=0;i--){
//     nstr += str.charAt(i)
// }
// console.log(nstr);
// if(str == nstr){
//     console.log("palindrome")
// }
// else console.log('not palindrome')