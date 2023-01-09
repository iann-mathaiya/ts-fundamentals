// Classes enable you to express common object-oriented patterns in a standard way, 
// making features like inheritance more readable and interoperable. 

// Working with interfaces
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    count?: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Car implements Vehicle {
    // Properties
    // Also referred to as fields, are the data (or attributes) for the object. 
    // These are the defining characteristics of the object that you can set 
    // or return from your code.
    protected static numberOfCars: number = 0;    //Static properties and methods are shared by all instances of a class.
    private _make: string;
    private _color: string;
    private _doors: number;

    // The underscore (_) before the property name isn't required in the property declaration 
    // but it provides a way to distinguish the property declaration from the parameters that 
    // are accessible through the constructor, while still tying the two together visually.

    // This function performs work for the other method functions
    // Unlike private functions, protected functions allow subclasses of the base class to use the function.
    protected worker(): string {
        return this._make;
    }

    // Constructor
    // The constructor is a special function used to create and initialize objects based 
    // on the class. When you create a new instance of the class, the constructor creates 
    // a new object with the class shape and initializes it with the values passed to it.
    constructor(make: string, color: string, doors = 4) {
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
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    // Methods
    // Methods are functions that define the behaviors or actions that the object can do. 
    // You can call these methods to invoke the behavior of the object. You can also define 
    // methods that are only accessible from within the class itself and are typically 
    // called by other methods in the class to perform a task.
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }

}

let myCar1 = new Car('Cool Car Company', 'blue', 2);  // Instantiates the Car object with all parameters

console.log(myCar1.color);

let myCar2 = new Car('Galaxy Motors', 'red', 3);
// myCar2.doors = 5 

let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);  // returns 4, the default value

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
    // Properties unique to ElectricCar
    private _range: number;
    private static numberOfElectricCars: number = 0

    // Constructor
    constructor(make: string, color: string, range: number, doors = 2 ) {
        super(make, color, doors);      // Add the super() keyword to include the parameters from the base class. 
        this._range = range;
        ElectricCar.numberOfElectricCars++ 
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
        console.log(this.worker() + " is charging.")
    }
    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()}  is braking with the regenerative braking system.`
    }
    public static getNumberOfElectricCars(): number {
        return ElectricCar.numberOfElectricCars;
    }

}

let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let roadster = new ElectricCar('Tesla Motors', 'black', 263);
console.log(roadster.doors);        // returns the default, 2
spark.charge();                     // returns "Spark Motors is charging"
console.log(roadster.brake());      // returns "Tesla Motors is braking with the regenerative braking system"
console.log(ElectricCar.getNumberOfElectricCars());     // returns 2

interface Dog {
    id?: number;
    name: string;
    age: number;
    breed: string;
}

// The key difference between interfaces and classes in any programming language is that 
// classes allow you to define implementation details. Interfaces solely define how data 
// is structured. Classes allow you to define methods, fields, and properties. Classes also 
// provide a way to template objects, defining default values.

// A common technique for managing data in a database is to use what's known as 
// the "active record pattern", meaning the object itself has save, load and similar methods. 
// We can use the Dog interface defined above to ensure we have the same properties and structure, 
// while adding the necessary code to perform the operations.
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    breed: string;

    constructor({name, age, breed, id = 0}: Dog) {
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
