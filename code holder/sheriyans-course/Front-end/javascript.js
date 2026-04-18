// Q.1
//  typeof(null) =  'object'

// Q.2
//  Boolean(false) = false
// output of this is false cause this counts as 0

// Boolean(“false”) = true
// “false” count as a string

// Boolean([]) = Boolean({}) = Boolean(“ ”) = true
// Boolean(“”) = false|

// Q.3
//  function test(){
// Let a = 10}
// console.log(a)

// Q.4
//  falsy values in JavaScript are:
// 1. false
// 2. 0
// 3. -0
// 4. 0n
// 5. "", '', `` (empty string)
// 6. null
// 7. undefined
// 8. NaN

// truthy values in JavaScript are:
// 1. true
// 2. Any non-zero number (e.g., 1, -1, 0.5)
// 3. Any non-empty string (e.g., "hello", "0", "false")
// 4. Any object (e.g., {}, [])
// 5. Any array (e.g., [1, 2, 3])
// 6. Any function (e.g., function() {})

// Q.5
// What is event bubbling in JavaScript?
// Event bubbling is a mechanism in JavaScript where an event starts from the deepest target element and then propagates upwards through its ancestors in the DOM tree. When an event occurs on an element, it first triggers any event handlers attached to that element, and then it continues to trigger handlers on its parent elements, all the way up to the root of the document. This allows for event delegation, where a single event handler can manage events for multiple child elements by taking advantage of this bubbling behavior.

// Q.6
// which loop is best for iterating over an array in JavaScript?
// The best loop for iterating over an array in JavaScript is the "for...of" loop. It provides a clean and concise syntax for iterating over iterable objects, including arrays. It allows you to directly access the values of the array without needing to manage an index variable, making it more readable and less error-prone compared to traditional "for" loops or "while" loops. Additionally, "for...of" works well with other iterable structures like strings, maps, and sets.

// Q.7
// Which statement  about arrow functions is true
// Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope. This means that the value of 'this' inside an arrow function is determined by where the function is defined, rather than how it is called. This behavior can lead to more predictable and consistent handling of 'this', especially in situations like event handlers or callbacks, where traditional functions might have a different 'this' context based on how they are invoked.

// Q.8
// null == undefined   // true
// null === undefined  // false
// typeof null         // "object" (weird JS bug)
// typeof undefined    // "undefined"

// Q.9
// 1. var: function-scoped, can be redeclared and updated, hoisted with undefined.
// 2. let: block-scoped, cannot be redeclared but can be updated, hoisted but not initialized.
// 3. const: block-scoped, cannot be redeclared or updated, hoisted but not initialized.

// Q.10
console.log([] == false)
// true
// Explanation: In JavaScript, when comparing an empty array ([]) to false using the loose equality operator (==), the empty array is coerced to a primitive value. The empty array is converted to an empty string ("") during the comparison, and an empty string is considered falsy. Therefore, the comparison evaluates to true. However, if you use the strict equality operator (===), it would evaluate to false because they are of different types (object vs boolean).

// Q.11
// console.log([] === false)
// false
// Explanation: The strict equality operator (===) checks for both value and type. In this case, an empty array ([]) is of type "object", while false is of type "boolean". Since they are of different types, the comparison evaluates to false.

// Q.12
// console.log([] == ![])
// true
// Explanation: In this expression, ![] evaluates to false because an empty array is truthy. So the expression becomes [] == false. As explained in Q.10, when comparing an empty array to false using the loose equality operator (==), the empty array is coerced to a primitive value (an empty string), which is considered falsy. Therefore, the comparison evaluates to true.

// Q.13
console.log(typeof NaN)
// "number"
// Explanation: In JavaScript, NaN stands for "Not-a-Number". It is a special value that represents an undefined or unrepresentable value in numerical calculations. Despite its name, NaN is actually of the type "number". This is a quirk in JavaScript's type system, and it can lead to some unexpected behavior when working with NaN values.

// Q.14
// console.log(NaN === NaN)
// false
// Explanation: In JavaScript, NaN is not equal to anything, including itself. This means that when you compare NaN to NaN using the strict equality operator (===), it evaluates to false. This behavior is defined in the IEEE 754 floating-point standard, which JavaScript follows for its number representation. To check if a value is NaN, you can use the built-in function isNaN() or the Number.isNaN() method.

// Q.15
// console.log(0.1 + 0.2 === 0.3)
// false
// Explanation: In JavaScript, due to the way floating-point numbers are represented in binary, the sum of 0.1 and 0.2 does not exactly equal 0.3. This is a common issue in many programming languages that use IEEE 754 for floating-point arithmetic. The result of 0.1 + 0.2 is actually a number very close to 0.3, but not exactly equal to it, which is why the comparison evaluates to false. To handle such cases, you can use a small tolerance value (epsilon) to check if the numbers are close enough rather than checking for exact equality.

// Q.16
// console.log(0.1 + 0.2)
// 0.30000000000000004
// Explanation: The result of adding 0.1 and 0.2 in JavaScript is not exactly 0.3 due to the limitations of floating-point precision in binary representation. The number is actually stored as a value very close to 0.3, but it cannot represent it exactly, resulting in the output of 0.30000000000000004. This is a common issue in many programming languages that use IEEE 754 for floating-point arithmetic, and it can lead to unexpected results when performing calculations with decimal numbers.

// Q.17
// console.log(0.1 + 0.2 - 0.3)
// 5.551115123125783e-17
// Explanation: The expression 0.1 + 0.2 - 0.3 results in a very small number close to zero, specifically 5.551115123125783e-17. This is due to the limitations of floating-point precision in JavaScript (and many other programming languages) when representing decimal numbers in binary. The calculations involve rounding errors that accumulate, leading to a result that is not exactly zero but a very small number instead.

// Q.18
// console.log(0.1 + 0.2 - 0.3 === 0)
// false
// Explanation: The expression 0.1 + 0.2 - 0.3 does not equal exactly zero due to the limitations of floating-point precision in JavaScript. The result is a very small number close to zero (5.551115123125783e-17), but it is not exactly zero. Therefore, when you compare it to zero using the strict equality operator (===), it evaluates to false. To check if the result is effectively zero, you can use a small tolerance value (epsilon) to determine if the number is close enough to zero rather than checking for exact equality.

// Q.19
// console.log(0.1 + 0.2 - 0.3 < Number.EPSILON)
// true
// Explanation: The expression 0.1 + 0.2 - 0.3 results in a very small number (5.551115123125783e-17) that is close to zero. Number.EPSILON is the smallest difference between two representable numbers in JavaScript, which is approximately 2.220446049250313e-16. Since the result of the expression is less than Number.EPSILON, the comparison evaluates to true, indicating that the result is effectively zero within the limits of floating-point precision.

// Q.20
// console.log(Number.EPSILON)
// 2.220446049250313e-16
// Explanation: Number.EPSILON is a constant in JavaScript that represents the smallest difference between two representable numbers. It is approximately 2.220446049250313e-16. This value is used to determine the precision of floating-point arithmetic and can be helpful when comparing floating-point numbers for equality, as it allows you to check if two numbers are close enough to be considered equal within the limits of precision.

// Q.21
let a = 10

function test() {
  console.log(a)
  let a = 20
}

test()
// Explanation: The code will throw a ReferenceError because of the temporal dead zone (TDZ) associated with the 'let' declaration. When the function 'test' is called, it tries to access the variable 'a' before it has been initialized. The 'let' declaration creates a block-scoped variable that is not hoisted in the same way as 'var', and it cannot be accessed before its declaration. Therefore, when the console.log(a) line is executed, it results in a ReferenceError since 'a' is not yet defined at that point in the code.

// Q.22
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// Explanation: The code will log the number 3 three times. This is because the variable 'i' is declared with 'var', which is function-scoped. By the time the setTimeout callbacks are executed after 100 milliseconds, the loop has already completed and 'i' has been incremented to 3. Since all three callbacks reference the same variable 'i', they will all log the current value of 'i', which is 3. To fix this issue and log 0, 1, and 2, you can use 'let' instead of 'var' for the loop variable, as 'let' is block-scoped and will create a new binding for each iteration of the loop.

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// Explanation: With 'let', each iteration of the loop creates a new block scope, and the variable 'i' is scoped to that block. Therefore, when the setTimeout callbacks are executed, they will log the correct value of 'i' for each iteration (0, 1, and 2) instead of all logging 3.

// Q.23
console.log(null + 1)
// Explanation: The expression null + 1 will evaluate to 1. In JavaScript, when you perform an arithmetic operation with null, it is treated as 0. Therefore, null + 1 is equivalent to 0 + 1, which results in 1.

// Q.24
console.log(undefined + 1)
// Explanation: The expression undefined + 1 will evaluate to NaN (Not-a-Number). In JavaScript, when you perform an arithmetic operation with undefined, it cannot be converted to a number, resulting in NaN. Therefore, undefined + 1 is not a valid numerical operation and yields NaN.

// Q.25
console.log([] + [])
// Explanation: The expression [] + [] will evaluate to an empty string (""). In JavaScript, when you use the + operator with arrays, they are coerced to strings. An empty array is converted to an empty string, so when you concatenate two empty arrays, you get an empty string as the result.

// Q.26
// const obj = {
//   name: "Mohit",
//   greet: function() {
//     console.log(this.name)
//   }
// }

// obj.greet() //Mohit
// Explanation: The code will log "Mohit" to the console. In this example, the 'greet' method is defined as a function within the 'obj' object. When 'obj.greet()' is called, the 'this' keyword inside the 'greet' function refers to the 'obj' object. Therefore, 'this.name' accesses the 'name' property of 'obj', which has the value "Mohit". As a result, "Mohit" is printed to the console when the greet method is invoked.

// Q.27
// const obj = {
//   name: "Mohit",
//   greet: () => {
//     console.log(this.name)
//   }
// }

// obj.greet() //undefined
// Explanation: The code will log "undefined" to the console. In this example, the 'greet' method is defined as an arrow function. Arrow functions do not have their own 'this' context; instead, they inherit 'this' from the surrounding lexical scope. In this case, the surrounding scope is the global scope (or module scope), where 'this' does not refer to the 'obj' object. Therefore, 'this.name' does not access the 'name' property of 'obj', and since there is no 'name' property in the global scope, it evaluates to undefined. As a result, "undefined" is printed to the console when the greet method is invoked.

// Q.28
// const obj = {
//   name: "Mohit",
//   greet: function() {
//     function inner() {
//       console.log(this.name)
//     }
//     inner()
//   }
// }

// obj.greet() //undefined

fix

// const obj = {
//   name: "Mohit",
//   greet: function() {
    // const inner = () => {
    //   console.log(this.name)
    // }
    // inner()
//   }
// }
// obj.greet() //Mohit
// Explanation: The original code will log "undefined" to the console because the 'inner' function is a regular function, and its 'this' context is not bound to the 'obj' object. To fix this issue, we can change the 'inner' function to an arrow function. Arrow functions do not have their own 'this' context and instead inherit it from the surrounding scope, which in this case is the 'greet' method. By using an arrow function for 'inner', it will correctly access 'this.name' from the 'obj' object, resulting in "Mohit" being printed to the console when the greet method is invoked.    
// 
// Q.29
// const obj = {
//   name: "Mohit",
//   greet: function() {
//     setTimeout(function() {
//       console.log(this.name)
//     }, 100)
//   }
// }
// obj.greet() //undefined
// Explanation: The original code will log "undefined" to the console because the function passed to setTimeout is a regular function, and its 'this' context is not bound to the 'obj' object. To fix this issue, we can use an arrow function for the callback passed to setTimeout. Arrow functions inherit 'this' from the surrounding scope, which in this case is the 'greet' method. By using an arrow function, it will correctly access 'this.name' from the 'obj' object, resulting in "Mohit" being printed to the console after 100 milliseconds when the greet method is invoked.