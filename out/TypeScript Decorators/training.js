"use strict";
function logger(target, propertyKey, descriptor) {
    console.log("Property key:", propertyKey);
    console.log("Descriptor value:", descriptor.value);
}
class Car {
    _model;
    _speed = 0;
    constructor(model) {
        this._model = model;
    }
    // A method that can be decorated (e.g., with @log or @delay)
    @logger
    accelerate(speedIncrease) {
        this._speed += speedIncrease;
        console.log(`${this._model} accelerated to ${this._speed} km/h`);
    }
    // A method that can be decorated (e.g., with @validate)
    brake(speedDecrease) {
        if (speedDecrease > this._speed) {
            console.log("Can't brake below 0 km/h!");
            return;
        }
        this._speed -= speedDecrease;
        console.log(`${this._model} slowed down to ${this._speed} km/h`);
    }
    // A property that can be decorated (e.g., with @readonly)
    get model() {
        return this._model;
    }
    // A property that can be decorated (e.g., with @enumerable(false))
    get speed() {
        return this._speed;
    }
}
//# sourceMappingURL=training.js.map