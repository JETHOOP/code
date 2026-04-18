let prompt = require("prompt-sync")();
let jewels = prompt("Enter a jewels  ");
let stone = prompt("Enter a stone   ");
let set = new Set();
for (let i = 0; i < jewels.length; i++) {
    set.add(jewels.charAt(i));
}
let count = 0
for(let i = 0;i<stone.length;i++){
let ch = stone.charAt(i)
if(set.has(ch)) count++
}
console.log(count)