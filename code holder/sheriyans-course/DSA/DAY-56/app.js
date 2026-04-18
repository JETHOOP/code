let  n = 5
printHello(n)
function printHello(a){
    if(a===0) return
    console.log("Hello")
    printHello(a-1)
}