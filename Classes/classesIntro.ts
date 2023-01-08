// Classes enable you to express common object-oriented patterns in a standard way, 
// making features like inheritance more readable and interoperable. 

class Car {
    // Properties
    // Also referred to as fields, are the data (or attributes) for the object. 
    // These are the defining characteristics of the object that you can set 
    // or return from your code.
    private _make: string;
    private _color: string;
    private _doors: number;

    // The underscore (_) before the property name isn't required in the property declaration 
    // but it provides a way to distinguish the property declaration from the parameters that 
    // are accessible through the constructor, while still tying the two together visually.

    // This function performs work for the other method functions
    private worker(): string {
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