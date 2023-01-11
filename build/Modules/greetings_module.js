"use strict";
// Modules provide a way to organize and categorize your code, enabling you to group 
// related code together. Also, when code is inside a module, it is pulled from the 
// global scope and into the scope of the module. This can help you avoid naming conflicts 
// between components in the global namespace.
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = void 0;
// You can export any declaration (such as a variable, function, class, type alias, or interface) 
// by adding the export keyword or import it by using the import keyword. Any file containing 
// a top-level import or export statement is considered a module.
function returnGreeting(greeting) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}
exports.returnGreeting = returnGreeting;
// To import a single export from a module:
// -> import { <component name> } from '<module name>'
// To rename an import, use the as keyword:
// -> import { <component name> as <new name> } from '<module name>'
// To import the entire module into a single variable, and use it to access the module exports:
// -> import * as <variable name> from '<module name>'
