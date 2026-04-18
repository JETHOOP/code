// let arr = [10,20,30,40,50,60];
// let temp = new Array(arr.length);
// let j =0
// for(let i =arr.length-1; i>=0; i--){
// temp[j] = arr[i];
// j++
// }console.log(temp)


// let arr = [10,20,30,40,50,60,70,80,90,100]
// let temp = new Array(arr.length)
// let j = 0
// for(let i = arr.length-1;i>=0;i--){
// temp[j] = arr[i]
// j++
// }console.log(temp)



/*Method 2*/
let arr = [20,30,40,50,60,70,80]
let i = 0;
let j = arr.length-1;
while(i<j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
}console.log(arr)