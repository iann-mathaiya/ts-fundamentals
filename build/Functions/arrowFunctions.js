"use strict";
// Arrow functions (also called Lambda or fat arrow functions because of the => operator 
// used to define them) provide shorthand syntax for defining an anonymous function. 
// Due to their concise nature, arrow functions are often used with simple functions and in 
// some event handling scenarios.
// Single-line arrow functions do not need curly braces or a return statement
let addTwoNumbers = (x, y) => x + y;
let totaled = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(totaled([1, 2, 3]));
