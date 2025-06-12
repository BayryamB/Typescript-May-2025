function ageValidator(
    target: any,
    key: string,
    descriptor: PropertyDescriptor
) {
    const originalSet = descriptor.set;
    descriptor.set = function (num) {
        if (num < 1 || num > 200) {
            throw new Error("Age must be between 1 and 200");
        }
        return originalSet?.call(this, num);
    };
}

class Age {
    private _age!: number;

    constructor(age: number) {
        this.age = age;
    }
    @ageValidator
    set age(val: number) {
        this._age = val;
    }
    get age() {
        return this._age;
    }
}

let ageVal = new Age(10);
ageVal.age = -10;
