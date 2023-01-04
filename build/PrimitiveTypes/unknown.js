"use strict";
// While flexible, the any type can cause unexpected errors. 
// To address this, TypeScript introduced the unknown type.
let anotherValue = 10;
anotherValue = true;
anotherValue = 'Mateo';
// However, you can't access any properties of an unknown type, nor can you call or construct them.
// The next 3 lines of code will have compile-time error
// console.log(anotherValue.name);  // Error: Object is of type unknown
// anotherValue();                  // Error: Object is of type unknown
// anotherValue.toUpperCase();      // Error: Object is of type unknown
// The unknown type is similar to the any type in that any value is assignable to type unknown. 
// If you need to treat a variable as a different data type you can use a TYPE ASSERTION. 
// A type assertion tells TypeScript you have performed any special checks that 
// you need before calling the statement.
if (typeof anotherValue === "string") {
    console.log(anotherValue.toUpperCase()); //* Returns MATEO to the console when string data type is asserted.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
