// let arr = [2, 31, 24, 43, 23, 56, 75, 8]
// for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1
//     while (j>=0 && arr[j] > key ){
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1] = key
// }
// console.log(arr)

let arr = [23, 31, 233, 34, 54, 24, 52]
for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j = 1] = arr[j]
        j--
    }
    arr[j + 1] = key
} console.log(arr)