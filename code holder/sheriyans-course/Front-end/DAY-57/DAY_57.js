// constructor function always start with capital letter
// constructor function is a special type of function that is used to create objects
// constructor function is used to create multiple objects with same properties and methods
// constructor function is used to create objects with same properties and methods
// do not require return statement
function Car(){
    this.model = "Toyota";
    this.year = 2020;
    this.start = function(){
        console.log("Car started");
    };
}

let Car1 = new Car();
let Car2 = new Car();
console.log(Car2.year); // Output: Toyota