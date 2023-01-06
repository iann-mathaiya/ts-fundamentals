"use strict";
// Understanding function parameters
// All function parameters are required, unless otherwise specified.
// Define optional parameters by appending a question mark (?) to the end of the parameter name
function addNum(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
addNum(1, 2); // Returns 3
addNum(1); // Returns 1
// You can also assign default values to optional parameters. If a value is passed as an 
// argument to the optional parameter, that value will be assigned to it. Otherwise, 
// the default value will be assigned to it. As with optional parameters, default 
// parameters must come after required parameters in the parameter list.
function addNums(x, y = 25) {
    return x + y;
}
addNums(1, 2); // Returns 3
addNums(1); // Returns 26
// Rest Parameters
// To work with multiple parameters as a group (in an array) or don't know how many 
// parameters a function will ultimately take, you can use rest parameters. 
// Rest parameters are treated as a boundless number of optional parameters. 
// You may leave them off or have as many as you want.
// This example has one required parameter and an optional parameter called restOfNumbers 
// that can accept any number of additional numbers. 
// The ellipsis (...) before restOfNumbers tells the compiler to build an array of 
// the arguments passed to the function and assigns the name that follows to it so you 
// can use it in your function.
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7)); // returns 28
addAllNumbers(2); // returns 2
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
