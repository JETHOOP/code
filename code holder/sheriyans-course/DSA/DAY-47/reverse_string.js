let str = "anna";
let nstr = "";
for(let i = str.length - 1;i>=0;i--){
    nstr += str.charAt(i)
}
console.log(nstr);
if(str == nstr){
    console.log("palindrome")
}
else console.log('not palindrome')

/* two pointer method can't apply on strings because strings are immutable */
// let str = "DUGGO";
// let i = 0; j = str.length - 1;
// while (i < j) {
//     let temp = str.charAt(i)
//     str.charAt(i) = str.charAt(j)
//     str.charAt(j) = temp
//     i++;
//     j--
// }