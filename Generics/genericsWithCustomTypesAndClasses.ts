// Using generics with primitive types, like number, string, or boolean, illustrate 
// the concepts of generics well, but the most powerful uses come from using them 
// with custom types and classes.

class Automobile {
    make: string = 'Generic Car';
    doors: number = 4;
}
class CyberCar extends Automobile {
    make = 'Cyber Car';
    doors = 4
}
class Truck extends Automobile {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Automobile> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myCyberCar = new CyberCar;
accelerate<CyberCar>(myCyberCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);