"use strict";
// A named function is a function declaration written with the function keyword 
// and provided with a distinct name within the current scope.
// Named function declarations load into the execution context before any code runs. 
// This is known as hoisting, meaning you can use the function before you declare it.
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 60));
