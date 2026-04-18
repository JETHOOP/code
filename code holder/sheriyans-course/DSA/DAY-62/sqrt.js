function sqrt(n){
    let i = 1;
    for(;i<=n;i++){
        if(i*i == n) return i
    }
    return i-1
}
let n = 16
console.log(sqrt(n))