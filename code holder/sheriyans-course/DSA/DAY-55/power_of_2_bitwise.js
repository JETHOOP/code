let prompt = require("prompt-sync")();
let n = prompt("Enter a number ")
console.log((n&(n-1))===0 ? "power of 2" : "not a power of 2")