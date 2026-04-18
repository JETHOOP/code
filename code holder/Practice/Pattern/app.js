// let n = 5

// for (let i = 1; i <= n-1; i++) {
//     for(let k = 1 ; k <= n-i ; k++){
//         process.stdout.write(' ')
//     }
//     for(let j = 1; j <= (2 * i) -1;j++){
//         process.stdout.write('*')
//     }
//     console.log()
// }

// for (let i = 1; i <= n; i++) {
//     for (let k = 1; k < i; k++) {
//         process.stdout.write(' ')
//     }
//     for (let j = 1; j <= (2 * (n - i) + 1); j++) {
//         process.stdout.write('*')
//     }
//     console.log()
// }

// let n = 5
// for (let i = n; i >= 1; i--) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(' ')
//     }
//     for (let k = 1; k <= i; k++) {
//         process.stdout.write(k + "")
//     }
//     for (let l = i - 1; l >= 1; l--) {
//         process.stdout.write(l + "")
//     }
//     console.log()
// }

// let n = 5
// for (let i = 0; i < n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(" ")
//     }
//     let num = 1
//     for (let k = 0; k <= i; k++) {
//         process.stdout.write(num + " ")
//         num = num * (i - k) / (k + 1)
//     }
//     console.log()
// }

let n = 5
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ")
    }

    for (let k = 1; k <= i; k++) {
        process.stdout.write(String.fromCharCode(64 + k) + "")
    }
    for (let l = i - 1; l >= 1; l--) {
        process.stdout.write(String.fromCharCode(64 + l) + "")
    }
    console.log()
}