let prompt = require('prompt-sync')();
let n = prompt('enter a number for factorial');
let sum = 1;
let fact = 1;
for (let i = 1; i <= n; i++) {
    sum *= fact;
    fact++
}console.log(sum)