function reverse(n,rev){
if (n == 0) return rev;
return reverse(Math.floor(n/10),rev = (rev*10) + (n%10));
}
let n = 12345678;
console.log(reverse(n,0))