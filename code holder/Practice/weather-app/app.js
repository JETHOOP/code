var plusOne = function(digits) {
    let sum = "" 
    let fAns
    let ans = []
    for(let i = 0 ; i < digits.length ; i++){
        sum+=digits[i]
        console.log(sum)
    }
    fAns = Number(sum) + 1
    console.log(fAns)
let i = 0
while(i<fAns){
let digit = fAns % 10
ans.push(digit)
fAns = Math.floor(fAns / 10)
i++
}
    console.log(ans)

    // return ans
};

plusOne([1,2,3])

