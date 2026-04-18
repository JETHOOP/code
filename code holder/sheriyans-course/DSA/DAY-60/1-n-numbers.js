function dec(n) {
    if (n == 0) return
    dec(n - 1)
    console.log(n)
}
dec(5)