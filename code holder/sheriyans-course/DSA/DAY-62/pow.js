function pow(x, n) {
    if (n == 0) return 1
    return n < 0 ? 1 / temp(x, n) : temp(x, n)
}

var temp = function (x, n) {
    if (n == 0) return 1
    let ans = temp(x, parseInt(n / 2))
    if (n % 2 == 0) return ans * ans
    return ans * ans * x
}
console.log(pow(2, 3))