arr = [10,20,30,40,50,60,70,80,90,100];
let max = arr[0];
for(i=0;i<=arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}console.log("max element is " + max)