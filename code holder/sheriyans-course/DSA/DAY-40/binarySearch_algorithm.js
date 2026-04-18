// let arr = [10,23,34,45,56,67,98];
// if(binarySearch(arr,4) === -1) console.log("Element not found")
// else console.log("element found");

// function binarySearch(arr,target){
// let s = 0; e = arr.length-1;
// while(s<=e){
//     let mid = Math.floor((s+e)/2);
//     if(arr[mid] == target) return mid
//     else if(arr[mid]>target) e = mid-1
//     else s= mid+1
// }
// return -1
// }

let arr = [11, 23, 34, 45, 56, 67, 78, 89, 90]

if (binarySearch(arr, 11) === -1) console.log('element not found')
else console.log("element found ")

function binarySearch(arr, target) {
    let s = 0, e = arr.length - 1;
    while (s <= e) {
        mid = Math.floor((s + e) / 2);
        if (arr[mid] == target) return mid
        else if (arr[mid] > target) e = mid - 1
        else s = mid + 1
    }
    return -1
}   
