let prompt = require("prompt-sync")();
let str = prompt("Enter a string")
let set = new Set();
for (let i = 0; i < str.length; i++) {
let ch = str.charAt(i)
set.add(ch)
}
if(set.size == 26) console.log("anagram")
    else console.log("not an anagram")