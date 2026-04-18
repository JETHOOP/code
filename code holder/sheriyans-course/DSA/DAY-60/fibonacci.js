/*n terms fibonacci sums */
function fibo(n){
    if(n == 0) return 0
    if(n == 1) return 1
    return fibo(n-1) + fibo (n-2)
}
let n = 7
console.log(fibo(n))



/*recursive way*/ 
// function fiboNTerms(n,first,second){
// if(n==0) return
// let third = first + second;
// process.stdout.write(third + " ")
// fiboNTerms(n-1,second,third)
// }
// let n = 10;
// let first = 0,second = 1;
// process.stdout.write(first +" "+ second + " ")
// fiboNTerms(n-2,first,second)

/*iterative way*/
// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number")
// let first  = 0;
// let second = 1;
// process.stdout.write(first + " " + second + " ")
// for(let i = 0 ;i<n;i++){
//  let third = first + second;
// process.stdout.write( third + " ")
//  first = second;
//  second = third;
// }
