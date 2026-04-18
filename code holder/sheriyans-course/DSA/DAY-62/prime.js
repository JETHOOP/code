let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"))

function checkRangeInPrime(n) {
    let isPrime = new Array(n + 1).fill(true)
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (isPrime[i] == true) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false
            }
        }
    }
    for (let i = 2; i < isPrime.length; i++) {
        if (isPrime[i]) process.stdout.write(i + " ")

    }
}
checkRangeInPrime(n)