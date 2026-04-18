let prompt = require("prompt-sync")();
let com = Math.floor(Math.random() * 100 + 1);
let userInput;
do{
    userInput = Number(prompt("Guess a number between 1 and 100: "));
    if( userInput<0  || userInput>100){
    console.log("Please enter a valid number between 1 and 100")
    continue;
    } 
    if(userInput > com) console.log("Your guess is too high");
    else if(userInput < com) console.log("Your guess is too low")
        else console.log("Congratulations! You guessed the number!")
}
while(userInput != com) 