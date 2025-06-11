function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Property key:", propertyKey);
    console.log("Descriptor value:", descriptor.value);
}

class Car {
    private _model: string;
    private _speed: number = 0;

    constructor(model: string) {
        this._model = model;
    }

    // A method that can be decorated (e.g., with @log or @delay)
    @log
    accelerate(speedIncrease: number): void {
        this._speed += speedIncrease;
        console.log(`${this._model} accelerated to ${this._speed} km/h`);
    }

    // A method that can be decorated (e.g., with @validate)
    brake(speedDecrease: number): void {
        if (speedDecrease > this._speed) {
            console.log("Can't brake below 0 km/h!");
            return;
        }
        this._speed -= speedDecrease;
        console.log(`${this._model} slowed down to ${this._speed} km/h`);
    }

    // A property that can be decorated (e.g., with @readonly)
    get model(): string {
        return this._model;
    }

    // A property that can be decorated (e.g., with @enumerable(false))
    get speed(): number {
        return this._speed;
    }
}
