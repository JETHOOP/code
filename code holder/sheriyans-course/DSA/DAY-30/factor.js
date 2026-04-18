let prompt = require('prompt-sync')();
let n = prompt('Enter a number');

for (let i = 0; i <= n/2; i++) {
    if (n % i == 0)console.log(i)
}
console.log(n)