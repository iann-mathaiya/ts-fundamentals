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
// When defining a function, the names of the function parameters do not need to 
// match those in the function type. While you are required to name the parameters 
// in the type signature in both places, the names are ignored when checking if 
// two function types are compatible.
// You can also leave off the parameter types and return type because TypeScript 
// will infer these from the function type.
// As far as TypeScript is concerned, these three statements are identical.
let sumTheseNumbers = (x, y) => x + y;
// let sumTheseNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
// let sumTheseNumbers: Calculator = (num1, num2) => num1 + num2;
console.log(sumTheseNumbers(7, 8));
