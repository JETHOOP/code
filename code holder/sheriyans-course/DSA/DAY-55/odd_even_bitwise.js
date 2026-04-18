let prompt = require("prompt-sync")();
let n = prompt("Enter a number")
console.log((n&1)===0 ? "even" : "odd")