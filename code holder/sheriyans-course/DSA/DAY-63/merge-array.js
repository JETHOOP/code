let arr1 = [1, 2, 3, 4,11];
let arr2 = [5, 6, 7, 8,9,10];
let ans = new Array(arr1.length + arr2.length);
let i = 0,
  j = 0,
  k = 0;
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    ans[k++] = arr1[i++];
  } else {
    ans[k++] = arr2[j++];
  }
}
while (i < arr1.length) {
    ans[k++] = arr1[i++]
}

while (j < arr1.length) {
    ans[k++] = arr2[j++]
}console.log(ans)