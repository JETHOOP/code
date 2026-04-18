let prompt = require("prompt-sync")();
let s1 = prompt("enter a first string")
let s2 = prompt("enter a second string")
let freqarr = new Array(123).fill(0)
if (s1.length != s2.length) {
    console.log("not an anagram")
}
else {
    let isAnagram = true;
    for (let i = 0; i < s1.length; i++) {
        let ascii = s1.charCodeAt(i)
        freqarr[ascii] = freqarr[ascii] + 1
    }
    for (let i = 0; i < s2.length; i++) {
        let ascii = s2.charCodeAt(i)
        freqarr[ascii] = freqarr[ascii] - 1
    }
    for (let i = 0; i < freqarr.length; i++) {
        if (freqarr[i] != 0){
            isAnagram = false;
        break};
    }
    if(isAnagram) console.log("anagram")
        else console.log("not an anagram")
}