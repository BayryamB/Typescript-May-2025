"use strict";
function createdOn(constructor) {
    return class extends constructor {
        createdOn = new Date();
    };
}
@createdOn
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayUserInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const user1 = new User("John Doe", 30);
user1.displayUserInfo();
console.log(user1);
console.log(user1.createdOn);
//# sourceMappingURL=03.js.map