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
namespace Greetings {
    export function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
}

namespace GreetingsWithLength {
    export function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
}

// returnGreeting('Hello');                     // Returns error
Greetings.returnGreeting('Bonjour');         // OK
GreetingsWithLength.returnGreeting('Hola');  // OK