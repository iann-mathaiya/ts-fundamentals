// You can define function types and then use them in your functions. 
// This is useful if you want to apply the same function type signature 
// to more than one function.

// You can define a function type using a type alias or an interface. 
// Both approaches work essentially the same so it's up to you to decide which is best. 
// An interface is a better if you want to have the option of extending the function type. 
// A type alias is better if you want to use unions or tuples.

type calculator = (x: number, y: number) => number;

let sumNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(sumNumbers(1, 2));
console.log(subtractNumbers(3, 4));

// You can also use the calculator function type to pass values from another function. 

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return sumNumbers;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('add')(5,6));