// Modules provide a way to organize and categorize your code, enabling you to group 
// related code together. Also, when code is inside a module, it is pulled from the 
// global scope and into the scope of the module. This can help you avoid naming conflicts 
// between components in the global namespace.

// You can export any declaration (such as a variable, function, class, type alias, or interface) 
// by adding the export keyword or import it by using the import keyword. Any file containing 
// a top-level import or export statement is considered a module.

export function returnGreeting (greeting: string) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}

// To import a single export from a module:
    // -> import { <component name> } from '<module name>'

// To rename an import, use the as keyword:
    // -> import { <component name> as <new name> } from '<module name>'

// To import the entire module into a single variable, and use it to access the module exports:
    // -> import * as <variable name> from '<module name>'

// Compiling Modules
// Modules import one another using a module loader. At runtime, the module loader 
// locates and executes all dependencies of a module before executing it. Depending on 
// the module target that you specify during compilation, the compiler will generate 
// appropriate code for Node.js (CommonJS), require.js (AMD), UMD, SystemJS, or 
// ECMAScript 2015 native modules (ES6) module-loading systems. 

// To compile modules, specify a --module target on the command line or in the 
// tsconfig.json file for the project.

// Open the terminal and complie a ts module by typing the following command:
    // -> tsc --module <target> <filepath>
    // For example:
    // -> tsc --module commonjs main.ts (targets nodejs)

// Running modules from a web page
// If you want to instead compile the TypeScript file for 
// ES6 for use in a web browser, type the following command:
    // -> tsc --module es6 main.ts
// To run a module from a web page, remember to set the type option to "module":
// -> <script type="module" src=".\main.js"></script>
