function conquer(arr, f, m, l) {
    let temp = new Array(l - f + 1).fill(0)
    let i = f, j = m + 1, k = 0
    while (i <= m && j <= l) {
        if (arr[i] < arr[j]) temp[k++] = arr[i++]
        else temp[k++] = arr[j++]
    }
    while (i <= m) {
        temp[k++] = arr[i++]
    }
    while (j <= l) {
        temp[k++] = arr[j++]
    }
    i=f,k=0
    while(k<temp.length){
        arr[i++] = temp[k++]
    }
}

function divide(arr,f,l){
    if (f>=l) return
    let mid = Math.floor((f+l)/2)
    divide(arr,f,mid)
    divide(arr,mid+1,l)
    conquer(arr,f,mid,l)
}

let arr = [23,23,34,45,21,12,2,1]
divide(arr,0,arr.length-1)
console.log(arr)