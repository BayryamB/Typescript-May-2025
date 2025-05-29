"use strict";
class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        return `Driving a ${this.brand}`;
    }
}
class Car extends Vehicle {
    model;
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    drive() {
        return `Driving a ${this.brand} ${this.model}`;
    }
}
const car = new Car("Nissan", "Skyline R34");
console.log(car.drive());
//# sourceMappingURL=03.js.map