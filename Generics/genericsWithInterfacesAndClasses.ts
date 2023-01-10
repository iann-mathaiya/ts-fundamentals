interface Identity<T, U> {
    value: T;
    message: U;
}

let persona1: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let persona2: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}


// Generic interface as a function type
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK  

// Tupls always have to follow the order of types they were declared in
// let returnString1 = processor('Hello!', 100);   // Type check error
let returnString1 = processor(500, 'Olaaa!');   // OK


// Generic interface as a class type
interface ProcessedIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processedIdentity<X, Y> implements ProcessedIdentity<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let newProcessor = new processedIdentity<number, string>(100, 'Habari');
newProcessor.process();           // Displays 'Hello'
// newProcessor.value = '100';       // Type check error
newProcessor.value = 100; 

// Generic classes
class checkIdentity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let bestProcessor = new checkIdentity<number, string>(100, 'Niatia');
bestProcessor.getIdentity();      // Displays 'Hello'