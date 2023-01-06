// You can define function types and then use them in your functions. 
// This is useful if you want to apply the same function type signature 
// to more than one function.

// You can define a function type using a type alias or an interface. 
// Both approaches work essentially the same so it's up to you to decide which is best. 
// An interface is a better if you want to have the option of extending the function type. 
// A type alias is better if you want to use unions or tuples.

type calculation = (x: number, y: number) => number;

let sumNumbers: calculation = (x: number, y: number): number => x + y;
let subtractNumbers: calculation = (x: number, y: number): number => x - y;

console.log(sumNumbers(1, 2));
console.log(subtractNumbers(3, 4));

// You can also use the calculator function type to pass values from another function. 

let doCalculation = (operation: 'add' | 'subtract'): calculation => {
    if (operation === 'add') {
        return sumNumbers;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('add')(5,6));


interface Calculator {
    (x: number, y: number): number;
}

// When defining a function, the names of the function parameters do not need to 
// match those in the function type. While you are required to name the parameters 
// in the type signature in both places, the names are ignored when checking if 
// two function types are compatible.

// You can also leave off the parameter types and return type because TypeScript 
// will infer these from the function type.

// As far as TypeScript is concerned, these three statements are identical.

let sumTheseNumbers: Calculator = (x: number, y: number): number => x + y;
// let sumTheseNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
// let sumTheseNumbers: Calculator = (num1, num2) => num1 + num2;

console.log(sumTheseNumbers(7, 8) );
