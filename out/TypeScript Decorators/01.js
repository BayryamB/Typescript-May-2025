"use strict";
function log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Function ${propertyKey} called with arguments: ${args.join(", ")}`);
        return originalMethod.apply(this, args);
    };
}
class Person {
    fName;
    lName;
    constructor(name, lName) {
        this.fName = name;
        this.lName = lName;
    }
    @log
    static getFullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }
}
let person = new Person("John", "Does");
Person.getFullName(person.fName, person.lName);
Person.getFullName("Benny", "Tres");
//# sourceMappingURL=01.js.map