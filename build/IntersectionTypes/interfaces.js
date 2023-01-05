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
let user = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
// user.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
console.log(user.fullName());
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    cone: false,
    spoon: true
};
let breakfastIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    cone: true,
    spoon: false
};
console.log(myIceCream.flavor);
breakfastIceCream.flavor = 'chocolate'; // OK
// breakfastIceCream.spoon = false           // Not modifiable
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, spoon: false }));
let yourIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true,
    spoon: true
};
function tooFewScoops(appetizer) {
    if (appetizer.scoops <= 2) {
        return appetizer.scoops + ' is not enough. Add more scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooFewScoops({ flavor: 'vanilla', scoops: 1, sauce: 'caramel', spoon: true }));
