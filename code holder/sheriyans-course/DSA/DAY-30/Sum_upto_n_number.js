let prompt = require('prompt-sync')();
let n = prompt('Enter the number you want to add');
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);