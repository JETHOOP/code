let prompt = require("prompt-sync")();
let userInput;
do{
console.log("Hello World")
  userInput = prompt("Do you want to continue yes/no" ).toLowerCase()
}
while(userInput === 'yes')