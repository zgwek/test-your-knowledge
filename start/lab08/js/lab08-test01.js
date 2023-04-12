/* add code below this */
// #1. Provide a prompt to the user to enter a bill total.
let total = prompt("What is the bill total");
//2. Convert this user input to a number (don’t worry about error handling for nonnumbers).

let numTotal = Number(total);
//if ()
//3. Calculate the tip amount assuming 10% (simply multiply the user input by 0.1). 
//Use a const to define the 10% tip percentage.
const tip = 0.1
let totalTip = total * tip;
//4. Display the bill total and tip amount on the same console output line, for 
//example
console.log("Bill "  + total + " Tip " + totalTip);



