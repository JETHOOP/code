"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Jethoop";
console.log(name);
let age = 10;
let city = "Ahmedabad";
let number = [1, 2, 3];
let user = {
    name: "Nothing",
    age: 10
};
function greet(naem) {
    return "Hello " + naem;
}
function add(num1, num2) {
    return num1 + num2;
}
// Task
let user2 = {
    name: "mohit",
    age: 22
};
function ageCheck(age) {
    if (age > 18)
        return "Adult";
    else
        return "Minor";
}
console.log(ageCheck(20));
console.log(add(5, 6));
console.log(greet("mohit"));
console.log(user);
//# sourceMappingURL=Day-1.js.map