let prompt = require('prompt-sync')();
let n = prompt('Enter the numbers')
let even = 0;
let odd = 0;
for(let i = 0; i<=n; i++){
    if(i%2==0){
        even += i;
    }else{
        odd += i;
    }
}
console.log('sum of even is  '+ even);
console.log('sum of odd is  '+ odd);