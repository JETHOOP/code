// let a = 16, b = 24;
// while (a != b) {
//     if (a > b) a = a - b;
//     else b = b - a;
// }
// console.log(a)

// recursion

// function gcd(a, b) {
//     if (a == b) return a
//     if (a > b) return gcd(a - b, b)
//     return gcd(a, b - a)
// }
// let a = 16, b = 24
// console.log(gcd(a,b))

function gcd(a, b) {
    if (b == 0) return a
    return gcd(b, a % b)
}
console.log(gcd(16,24))