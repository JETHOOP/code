// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));
// let sum = 0;
// let copy = n;
// while (n > 0) {
//     let digit = n % 10;
//     let fact = 1;
//     for (let i = 1; i <= digit; i++) {
//         fact = fact * i;
//     }
//     sum = sum + fact;
//     n = Math.floor(n/10)
// }
// if( copy == sum) console.log("strong number");
// else console.log("not a strong number");

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
let copy = n;
let sum = 0;
while(n>0){
    let digit = n%10;
    let fact = 1;
    for(let i = 1;i<=digit;i++){
        fact=fact*i;
    }sum += fact
    n = Math.floor(n/10);
}
if(copy == sum) console.log('strong number')
else console.log('not a strong number')