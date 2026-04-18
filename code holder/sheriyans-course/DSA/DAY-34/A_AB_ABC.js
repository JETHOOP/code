let prompt = require("prompt-sync")();
let n = prompt("Enter a Character: ");
for (let i = 1; i < n; i++) {
    let temp = 65;
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(temp) + " ")
        temp++;
    }console.log();
}