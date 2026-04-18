let prompt = require('prompt-sync')();
let n = prompt("Enter the number you want to table of ");
table = 0;
for (let i = 1; i <= 10; i++) {
    table = n * i;
    console.log(table);
}