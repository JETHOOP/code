// let prompt = require("prompt-sync")();
// let str = prompt("enter a String");
// let ans = ""
// for (let i = 0; i <= str.length; i++) {
//     let asci = str.charCodeAt(i);
//     if (asci >= 65 && asci <= 90) {
//         ans += String.fromCharCode(asci + 32)
//     } else if (acsi >= 97 && asci <= 122)  { ans += String.fromCharCode(asci - 32) }
// } conseole.log(ans);

let prompt = require("prompt-sync")();
let str = prompt("enter a String");
let ans = ""
for (let i = 0; i < str.length; i++) {
    let asci = str.charCodeAt(i);
    if (asci >= 65 && asci <= 90) {
        ans = ans + String.fromCharCode(asci + 32)
    } else if (asci >= 97 && asci <= 122) {
        ans = ans + String.fromCharCode(asci - 32);
    }
}console.log(ans)