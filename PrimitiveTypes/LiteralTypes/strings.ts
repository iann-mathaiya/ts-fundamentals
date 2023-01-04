let sur_name: string = "Mateo";
let sentence: string = `My name is ${sur_name}.
    I am new to TypeScript.`;
console.log(sentence);

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid -> Assignment unavailable in testResult assignments