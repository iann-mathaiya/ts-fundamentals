"use strict";
// Namespaces are a TypeScript-specific way to organize and categorize your code, 
// enabling you to group related code together. Namespaces allow you to group 
// variables, functions, interfaces, or classes related to business rules in 
// one namespace and security in another.
Object.defineProperty(exports, "__esModule", { value: true });
// Code inside a namespace is pulled from the global scope and into 
// the scope of the namespace. This placement can help you avoid 
// naming conflicts between components in the global namespace and 
// can be beneficial when working with distributed development teams 
// that may use similar component names.
// Use namespaces to:
// Reduce the amount of code in the global scope, limiting "global scope pollution."
// Provide a context for names, which helps reduce naming collisions.
// Enhance reusability.
// If you want to make a function or class available to code outside of the namespace, 
// add the export keyword before its name. If you omit the export keyword, the component 
// is only available inside the namespace.    
// Organizing code by using single file namespaces
var Greetings;
(function (Greetings) {
    function returnGreeting(greeting) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
    Greetings.returnGreeting = returnGreeting;
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    function returnGreeting(greeting) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    GreetingsWithLength.returnGreeting = returnGreeting;
    function getLength(message) {
        return message.length;
    }
})(GreetingsWithLength || (GreetingsWithLength = {}));
// returnGreeting('Hello');                     // Returns error
Greetings.returnGreeting('Bonjour'); // OK
GreetingsWithLength.returnGreeting('Hola'); // OK
// Organizing code using nested namespaces
// Add the export keyword before both namespace names. This allows the namespace 
// to be accessible outside of the parent namespace.
var AllGreetings;
(function (AllGreetings) {
    let Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings = AllGreetings.Greetings || (AllGreetings.Greetings = {}));
    let GreetingsWithLength;
    (function (GreetingsWithLength) {
        function returnGreeting(greeting) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        GreetingsWithLength.returnGreeting = returnGreeting;
        function getLength(message) {
            return message.length;
        }
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
})(AllGreetings || (AllGreetings = {}));
AllGreetings.Greetings.returnGreeting('Bonjour Madamoiselle'); // OK
AllGreetings.GreetingsWithLength.returnGreeting('Holaaa'); // OK
// TypeScript creates an easy-to-navigate hierarchy of nested namespaces. 
// But, as your nested namespaces become more complex, you may want to 
// create an alias to shorten and simplify your code. To do this, 
// use the import keyword.
var greet = AllGreetings.Greetings;
greet.returnGreeting('Hellooo');
// functions.ts
/// <reference path="interfaces.ts" />
var Functions;
(function (Functions) {
    function functionName() {
    }
    Functions.functionName = functionName;
})(Functions || (Functions = {}));
// main.ts
/// <reference path="interfaces.ts" />
/// <reference path="functions.ts" />
let x = Functions.functionName();
// While namespaces are easy to use for simple implementations and do not depend on a module 
// loader, modules offer some additional benefits that namespaces do not. Modules:
// -> Declare their dependencies.
// -> Provide better code reuse.
// -> Offer strong isolation.
// -> Hide the internal statements of the module definitions and show only 
//      the methods and parameters associated to the declared component.
// -> Provide better tooling support for bundling.
// -> Are recommended over namespaces for Node.js applications because
//      modules are the default.
// -> Can resolve top-down JavaScript flow issues because a reference 
//      to an external method or class is instantiated only on method invocation.
