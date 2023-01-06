"use strict";
// A union type describes a value that can be one of several types. 
// This can be helpful when a value is not under your control 
// (for example, values from a library, an API, or user input.)
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
// multiType = "twenty";   //* Invalid -> Assignment can only be number or boolean
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
