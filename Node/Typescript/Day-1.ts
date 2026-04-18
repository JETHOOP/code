let name: string = "Jethoop"
console.log(name)

let age:number = 10
let city = "Ahmedabad";
let number:Array<number> = [1,2,3]

let user:{name : string , age : number}={
name:"Nothing",
age :10 
}

function greet(naem:string):string{
return "Hello " + naem
}

function add(num1:number , num2:number):number{
    return num1+num2;
}

// Task
let user2:{name:string , age:number}={
    name:"mohit",
    age : 22
}

function ageCheck(age:number):string{
if(age>18) return "Adult"
else return "Minor"
}

console.log(ageCheck(20))
console.log(add(5,6))
console.log(greet("mohit"))
console.log(user)