"use strict";
// You can define function types and then use them in your functions. 
// This is useful if you want to apply the same function type signature 
// to more than one function.
let sumNumbers = (x, y) => x + y;
let subtractNumbers = (x, y) => x - y;
console.log(sumNumbers(1, 2));
console.log(subtractNumbers(3, 4));
// You can also use the calculator function type to pass values from another function. 
let doCalculation = (operation) => {
    if (operation === 'add') {
        return sumNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(5, 6));
