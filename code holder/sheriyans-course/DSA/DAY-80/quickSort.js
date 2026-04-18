// let arr = [18,10,5,3,24,10]
// quickSort(arr,0,arr.length-1)
// console.log(arr)

// function quickSort(arr,first,last){
//     if(first >= last) return
//     let pIdx = findPivotIndex(arr,first,last)
//     quickSort(arr,first,pIdx-1) 
//     quickSort(arr,pIdx+1,last) 

// }



// function findPivotIndex(arr, first, last) {
//     let pivot = arr[last]
//     let i = first - 1
//     for (let j = first; j < last; j++) {
//         if (arr[j] < pivot) {
//             i++
//             swap(arr, i, j)
//         }

//     }
//     i++
//     swap(arr, i, last)
//     return i
// }

// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }


function quicksort(arr, first, last) {
    if (first >= last) return
    let pIDX = findPivotIndex(arr, first, last)
    quicksort(arr, first, pIDX - 1)
    quicksort(arr, pIDX + 1, last)
}



function findPivotIndex(arr, first, last) {
    let pivot = arr[last]
    let i = first - 1
    for (let j = first; j < last; j++) {
        if (arr[j] < pivot) {
            i++
            swap(arr, i, j)
        }
    }
    i++
    swap(arr, i, last)
    return i
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [10,2,120,221,45,65,7654,89]
quicksort(arr,0,arr.length-1)
console.log(arr)




























