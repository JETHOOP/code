// function Toffee(name){
//     this.name =  name;
// }
// Toffee.prototype.price = 2
// let t1 = new Toffee("alpenliebe")
// let t2 = new Toffee("kachha aam")

function Human(name, age, isHandsome) {
    this.name = name;
    this.age = age;
    this.isHandsome = isHandsome;
}

Human.prototype.sayHello = function(){
    console.log("Hello ")
}

let h1 = new Human("Duggo",2,true)