// let str = "hell Yeah boi"
// let ans = "";
// let arrstr = str.split(" ")
// for (let i = 0; i <arrstr.length ; i++) {
//     let word = arrstr[i]
//     if (word.length <= 2) {
//         ans += word.toUpperCase() + " "
//     } else {
//         ans += word.charAt(0).toUpperCase()
//             + word.substring(1, word.length - 1)
//             + word.charAt(word.length - 1).toUpperCase()+ " "
//     }
// } console.log(ans)

let str = "hell yeah boiii"
let ans = ""
let arrstr = str.split(" ");
for (let i = 0; i < arrstr.length; i++) {
    word = arrstr[i];
    if (word.length <= 2) ans += word.toUpperCase()
    else {
        ans += word.charAt(0).toUpperCase() + word.substring(1, word.length - 1) + word.charAt(word.length - 1).toUpperCase() + " "
    }
}console.log(ans)