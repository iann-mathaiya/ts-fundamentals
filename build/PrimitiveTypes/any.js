"use strict";
// The any type is the one type that can represent any JavaScript value with no constraints. 
// This can be useful when you're expecting a value from a third-party library or user inputs 
// where the value is dynamic because the any type will allow you to 
// reassign different types of values.
let randomValue = 10;
randomValue = 'Mateo'; // OK
randomValue = true; // OK
console.log(randomValue); // OK
console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error
