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