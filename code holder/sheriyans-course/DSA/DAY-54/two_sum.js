let arr = [2, 4, 6, 8, 10, 13, 15, 17]
let target = 18
let map = new Map()
let ans = [-1,-1]
for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
        ans[0] = i;
        ans[1] = map.get(target - arr[i])
    }else{
        map.set(arr[i],i)
    }
}console.log(ans)