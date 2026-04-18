// let arr = [3, 5, 4, 8, 7, 6];
// let n = arr.length;
// for (let i = 0; i <= n - 1; i++) {
//     for (let j = 0; j <= n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j+1]
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr)


let arr = [233, 340, 35, 36, 37, 38, 39, 67, 78, 89]
let n = arr.length
for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}console.log(arr)