// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number: ");
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write("  ");
//     }
//     for (let j= 1 ;j<=i; j++){
//         process.stdout.write("* ");

//     }
//     console.log();
// }

let prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i;  j++) {
        process.stdout.write(" ")
    }
    for (let j = 0; j < i; j++) {
        process.stdout.write("* ")
    }console.log();
}