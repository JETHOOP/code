let word = ["attire", "attribute", "duggo", "jethoop", "atom"];
let s = "at";
let count = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i].startsWith(s)) {
        count++
    }
} console.log(count);