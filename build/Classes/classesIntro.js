"use strict";
// Classes enable you to express common object-oriented patterns in a standard way, 
// making features like inheritance more readable and interoperable. 
class Car {
    // The underscore (_) before the property name isn't required in the property declaration 
    // but it provides a way to distinguish the property declaration from the parameters that 
    // are accessible through the constructor, while still tying the two together visually.
    // This function performs work for the other method functions
    // Unlike private functions, protected functions allow subclasses of the base class to use the function.
    worker() {
        return this._make;
    }
    // Constructor
    // The constructor is a special function used to create and initialize objects based 
    // on the class. When you create a new instance of the class, the constructor creates 
    // a new object with the class shape and initializes it with the values passed to it.
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
    }
    // Accessors
    // Accessors are a type of function that you use to get or set the value of properties. 
    // Properties can be read-only by simply omitting the set accessor in the class, or 
    // inaccessible by omitting the get accessor (the property will return undefined if 
    // you attempt to access it, even if it's assigned a value during initialization.)
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    // Methods are functions that define the behaviors or actions that the object can do. 
    // You can call these methods to invoke the behavior of the object. You can also define 
    // methods that are only accessible from within the class itself and are typically 
    // called by other methods in the class to perform a task.
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
}
// Properties
// Also referred to as fields, are the data (or attributes) for the object. 
// These are the defining characteristics of the object that you can set 
// or return from your code.
Car.numberOfCars = 0; //Static properties and methods are shared by all instances of a class.
let myCar1 = new Car('Cool Car Company', 'blue', 2); // Instantiates the Car object with all parameters
console.log(myCar1.color);
let myCar2 = new Car('Galaxy Motors', 'red', 3);
// myCar2.doors = 5 
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors); // returns 4, the default value
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
// Instantiate the Car object with all parameters
let myCar4 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar5 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car.getNumberOfCars());
// Inheritance
class ElectricCar extends Car {
    // Constructor
    constructor(make, color, range, doors = 2) {
        super(make, color, doors); // Add the super() keyword to include the parameters from the base class. 
        this._range = range;
        ElectricCar.numberOfElectricCars++;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.");
    }
    // Overrides the brake method of the Car class
    brake() {
        return `${this.worker()}  is braking with the regenerative braking system.`;
    }
    static getNumberOfElectricCars() {
        return ElectricCar.numberOfElectricCars;
    }
}
ElectricCar.numberOfElectricCars = 0;
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let roadster = new ElectricCar('Tesla Motors', 'black', 263);
console.log(roadster.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(roadster.brake()); // returns "Tesla Motors is braking with the regenerative braking system"
console.log(ElectricCar.getNumberOfElectricCars()); // returns 2
// The key difference between interfaces and classes in any programming language is that 
// classes allow you to define implementation details. Interfaces solely define how data 
// is structured. Classes allow you to define methods, fields, and properties. Classes also 
// provide a way to template objects, defining default values.
// A common technique for managing data in a database is to use what's known as 
// the "active record pattern", meaning the object itself has save, load and similar methods. 
// We can use the Dog interface defined above to ensure we have the same properties and structure, 
// while adding the necessary code to perform the operations.
class DogRecord {
    constructor({ name, age, breed, id = 0 }) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    // static load(id: number): DogRecord {
    //     // code to load dog from database
    //     return dog;
    // }
    save() {
    }
}
