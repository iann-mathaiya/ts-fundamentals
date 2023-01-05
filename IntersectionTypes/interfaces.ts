// Intersection types are closely related to union types, 
// but they are used very differently. 
// An intersection type combines two or more types to create a new type 
// that has all properties of the existing types. This allows you to add 
// together existing types to get a single type that has all the features you need.

interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;   // Intersection type

let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true
};

console.log(newManager);
console.log(newManager.employeeID + newManager.age); // Adds the employeeID and age as a SUM



// Use interfaces to describe an object, naming and parameterizing the object's types, 
// and to compose existing named object types into new ones.

interface User {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let user: User = {
  firstName : "Emil",
  lastName: "Andersson",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  }
}

// user.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
console.log(user.fullName());


// How is an interface different from a type alias?

type Admin = {
  firstName: string;
  lastName: string;
  fullName(): string;
}

// A type alias is a definition of a type of data, for example, a union, primitive, 
// intersection, tuple, or any other type. Interfaces, on the other hand, are a way to 
// describe data shapes, for example, an object. Type aliases can act like interfaces; 
// however, there are some subtle differences. The key distinction is that a type alias 
// cannot be reopened to add new properties  whereas an interface is always extendable. 
// Also, you can only describe a union or tuple using a type alias.

interface IceCream {
  flavor: string;
  scoops: number;
  cone?: boolean;             // ? means its optional
  readonly spoon: boolean     // readonly means the property is only modified when the obj is first created.
  instructions?: string
}

let myIceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2,
  cone: false,
  spoon: true
}

let breakfastIceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2,
  cone: true,
  spoon: false
}

console.log(myIceCream.flavor);

breakfastIceCream.flavor = 'chocolate'    // OK
// breakfastIceCream.spoon = false           // Not modifiable


function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
     return dessert.scoops + ' is too many scoops!';
  } else {
     return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, spoon: false }));



// Extending interfaces enables you to copy the members of one interface into another, 
// giving you more flexibility in how you separate your interfaces into reusable components.
// When extending an interface with one or more interfaces, these rules apply:

//     You must implement all the required properties from all interfaces.
//     Two interfaces can have the same property if the property has the exact same name and type.
//     If two interfaces have a property with the same name but different types, you must declare 
//     a new property such that the resulting property is a subtype of both interfaces.
interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let yourIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true, 
  spoon: true
}

function tooFewScoops(appetizer: Sundae) {
  if (appetizer.scoops <= 2) {
      return appetizer.scoops + ' is not enough. Add more scoops!';
  } else {
      return 'Your order will be ready soon!';
  }
}
console.log(tooFewScoops({flavor: 'vanilla', scoops: 1, sauce: 'caramel', spoon: true}));