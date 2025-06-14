"use strict";
function ageValidator(target, key, descriptor) {
    const originalSet = descriptor.set;
    descriptor.set = function (num) {
        if (num < 1 || num > 200) {
            throw new Error("Age must be between 1 and 200");
        }
        return originalSet?.call(this, num);
    };
}
class Age {
    _age;
    constructor(age) {
        this.age = age;
    }
    @ageValidator
    set age(val) {
        this._age = val;
    }
    get age() {
        return this._age;
    }
}
let ageVal = new Age(10);
ageVal.age = -10;
//# sourceMappingURL=02.js.map