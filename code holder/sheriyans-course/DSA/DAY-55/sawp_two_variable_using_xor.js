let prompt = require("prompt-sync")()
let a = prompt("Enter a num")
let b = prompt("Enter a num")
a = a ^ b
b = a ^ b
a = a ^ b
console.log("your first num is" + a)
console.log("your second num is" + b)