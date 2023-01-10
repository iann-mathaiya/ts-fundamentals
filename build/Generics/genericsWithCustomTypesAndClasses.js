"use strict";
// Using generics with primitive types, like number, string, or boolean, illustrate 
// the concepts of generics well, but the most powerful uses come from using them 
// with custom types and classes.
class Automobile {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class CyberCar extends Automobile {
    constructor() {
        super(...arguments);
        this.make = 'Cyber Car';
        this.doors = 4;
    }
}
class Truck extends Automobile {
    constructor() {
        super(...arguments);
        this.make = 'Truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myCyberCar = new CyberCar;
accelerate(myCyberCar);
let myTruck = new Truck;
accelerate(myTruck);
