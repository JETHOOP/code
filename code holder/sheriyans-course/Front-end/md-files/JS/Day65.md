
# 📘 Notes on Asynchronous JavaScript

JavaScript is **single-threaded** and **synchronous** by default, meaning it executes code line-by-line and waits for one operation to finish before starting the next.

However, many operations like **network requests**, **file I/O**, **timers**, etc., are time-consuming and need to be handled **asynchronously** to avoid blocking the main thread.

---

## 🔁 1. Callback Functions

### ✅ Definition:
A **callback** is a function passed as an argument to another function and is executed after the completion of that function.

### 🧠 Why Use Callbacks?
They allow us to run code **after** a long-running operation is completed (e.g., fetching data from an API).

### 📌 Syntax Example:
```js
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Alice", sayBye);
// Output:
// Hi Alice
// Bye!
```

### 🔄 Example with `setTimeout`:
```js
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);
```

---

## 😖 2. Callback Hell (Pyramid of Doom)

### ❗ Problem:
When callbacks are **nested within other callbacks**, it leads to code that is hard to read and maintain. This is known as **callback hell**.

### 🔻 Example:
```js
loginUser("user", function(user) {
  getUserPosts(user.id, function(posts) {
    getComments(posts[0], function(comments) {
      console.log(comments);
    });
  });
});
```

This leads to:

- Hard-to-read code
- Difficult error handling
- No proper flow control

### 🔧 Solution:
Use **Promises** and **async/await** for better structure.

---

## 🔮 3. Promises

### ✅ Definition:
A **Promise** is an object representing the eventual **completion or failure** of an asynchronous operation.

### 🌐 States of a Promise:

| State     | Description                             |
|-----------|-----------------------------------------|
| Pending   | Initial state, neither fulfilled nor rejected |
| Fulfilled | Operation completed successfully         |
| Rejected  | Operation failed                         |

### 📌 Syntax:
```js
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Error occurred.");
  }
});
```

### 📥 Consuming a Promise:
```js
promise
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### 🧪 Example:
```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

fetchData()
  .then(result => console.log(result))  // Output after 2 seconds: Data fetched
  .catch(error => console.error(error));
```

---

## 🔄 Callback vs Promise

| Feature           | Callback                             | Promise                                  |
|------------------|--------------------------------------|------------------------------------------|
| Syntax            | Nested, less readable                | Chained, more readable                   |
| Error Handling    | Difficult (manual checks)            | Built-in using `.catch()`                |
| Composition       | Hard to manage multiple callbacks    | Easy to chain `.then()` calls            |
| Debugging         | Harder due to nesting                | Easier due to flatter structure          |

---

## ✅ Summary

- **Callback**: A function passed as an argument, executed after a task is done.
- **Callback Hell**: Nested callbacks that make code unreadable and error-prone.
- **Promises**: A better way to handle async code with clean syntax and built-in error handling.
