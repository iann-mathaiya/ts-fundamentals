"use strict";
// Intersection types are closely related to union types, 
// but they are used very differently. 
// An intersection type combines two or more types to create a new type 
// that has all properties of the existing types. This allows you to add 
// together existing types to get a single type that has all the features you need.
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
console.log(newManager);
console.log(newManager.employeeID + newManager.age); // Adds the employeeID and age as a SUM
