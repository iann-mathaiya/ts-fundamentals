"use strict";
// Namespaces are a TypeScript-specific way to organize and categorize your code, 
// enabling you to group related code together. Namespaces allow you to group 
// variables, functions, interfaces, or classes related to business rules in 
// one namespace and security in another.
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
