"use strict";
// A function expression (or anonymous function) is a function that isn't pre-loaded 
// into the execution context, and only runs when the code encounters it. 
// Function expressions are created at runtime and must be declared before they can be called. 
// (This means that they aren't hoisted, unlike named function declarations that are hoisted 
// as soon as program execution begins and can be called before its declaration.)
// Function expressions represent values so they're usually assigned to a variable or 
// passed to other functions, and can be anonymous, meaning the function has no name.
let addTheseNumbers = function (x, y) {
    return x + y;
};
addTheseNumbers(1, 2);
//  Notice in that the variable total isn't typed, but TypeScript is able to determine
//  its type through something called "contextual typing", a form of type inference. 
//  This can reduce the amount of effort required to keep your program typed.
let total = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total([1, 2, 3]));
