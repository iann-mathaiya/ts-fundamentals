// Generics are code templates that you can define and reuse throughout your codebase. 
// They provide a way to tell functions, classes, or interfaces what type you want to use 
// when you call it. You can think about this in the same way that arguments are passed to 
// a function, except a generic enables you to tell the component what type it should expect 
// at the time it's called.

// Create generic functions when your code is a function or class that:
    // -> Works with a variety of data types.
    // -> Uses that data type in several places.
// Generics can:
    // -> Provide more flexibility when working with types.
    // -> Enable code reuse.
    // -> Reduce the need to use the any type.

// The getArray function generates an array of items of any type.
function getArray(items: any[]): any[] {
    return new Array().concat(items);
}

// Because the any type is used, there's nothing preventing the code from pushing a 
// string to the numberArray or a number to the stringArray.
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]


// Generics define one or more type variables to identify the type or types 
// that you will pass to the component, enclosed in angle brackets (< >).

function builtArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

// After you specify the type variable, you can use it in place of the type in parameters, 
// the return type, or anywhere else in the function that you would add a type annotation.

// The type variable T can be used wherever the type annotation is needed. 
// In the getArray function, it is used to specify the type for the items parameter, 
// the function return type, and to return a new Array of items.

let numbersArray = builtArray<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
numberArray.push('This is not a number');  // Generates a compile time type check error

let stringsArray = builtArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
stringArray.push(30);                      // Generates a compile time type check error

// You are not limited to using a single type variable in your generic components.
// You can use two generics, T and U, to assign different types 
// to each parameter and to the return type.

function identity<T, U> (value: T, message: U) : T {
    console.log(value, message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

// Generic Constraints
// The identity function can accept any type that you choose to pass to the type variables. 
// But, in this case, you should constrain the types that the value parameter can accept 
// to a range of types that you can perform an add operation on, rather than accepting 
// any possible type. This is called a generic constraint.

// Using tuples to constrain
type ValidTypes = string | number;

function anotherIdentity<T extends ValidTypes, U> (value: T, message: U) : T {
    // let result: T = value + value;    // Error
    let result: T = value
    console.log(message);
    return result
}

returnNumber = anotherIdentity<number, string>(100, 'Hello!');      // OK
returnString = anotherIdentity<string, string>('100', 'Hola!');     // OK
// returnBoolean = anotherIdentity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

// Using object properties to constrain
function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
  }
  
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}
  
console.log(getPets(pets1, "fish"));  // Returns 6
// console.log(getPets(pets2, "3"));     // Error
console.log(getPets(pets2, 3));     // Returns parrots

// Type Guards
type ViableTypes = string | number;

// Use the typeof type guard in an if block to check the type of the value parameter
// before performing an operation, as shown in the following example. TypeScript can 
// determine from the if statement if the operation will work with the values provided 
// within the block.

// You can only use a typeof type guard to check the primitive types string, number, bigint, 
// function, boolean, symbol, object, and undefined. To check the type of a class, 
// use an instanceof type guard.

function identification<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ViableTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}.`);

    return result
}

let numberValue = identification<number, string>(100, 'Bonjour');
let stringValue = identification<string, string>('100', 'Hey');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100