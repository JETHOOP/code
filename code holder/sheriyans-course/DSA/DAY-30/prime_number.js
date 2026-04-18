let prompt =  require ('prompt-sync')();
let n = prompt('Entera Number');
let isPrime = true;
for(let i=2;i<=n/2;i++){
if(n%i == 0)isPrime = false;
}
if(isPrime)console.log("Prime Number")
else console.log("Not a Prime Number")