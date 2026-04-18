function closure(){
    let count = 0
    return function(){
      count++
      console.log(count)  
    }
}
let cnt = closure()
cnt()