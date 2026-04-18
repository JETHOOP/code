let prompt = require('prompt-sync')();
let n = prompt("Enter the number of times to print 'Hello World': ");
let i = 1

while(i<n){
    console.log("Hllo World");
    i++;
}
console.log("fail at " + i + " times")