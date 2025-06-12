"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
__decorate([
    logger,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Car.prototype, "accelerate", null);
//# sourceMappingURL=training.js.map