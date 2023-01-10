"use strict";
let persona1 = {
    value: 25,
    message: 'Hello!'
};
let persona2 = {
    value: 'Hello!',
    message: 25
};
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber1 = processor(100, 'Hello!'); // OK  
// Tupls always have to follow the order of types they were declared in
// let returnString1 = processor('Hello!', 100);   // Type check error
let returnString1 = processor(500, 'Olaaa!'); // OK
class processedIdentity {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let newProcessor = new processedIdentity(100, 'Habari');
newProcessor.process(); // Displays 'Hello'
// newProcessor.value = '100';       // Type check error
newProcessor.value = 100;
// Generic classes
class checkIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let bestProcessor = new checkIdentity(100, 'Niatia');
bestProcessor.getIdentity(); // Displays 'Hello'
