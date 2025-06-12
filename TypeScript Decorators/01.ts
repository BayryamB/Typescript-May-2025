function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(
            `Function ${propertyKey} called with arguments: ${args.join(", ")}`
        );
        return originalMethod.apply(this, args);
    };
}

class Person {
    public fName: string;
    public lName: string;

    constructor(name: string, lName: string) {
        this.fName = name;
        this.lName = lName;
    }
    @log
    static getFullName(firstName: string, lastName: string) {
        return `${firstName} ${lastName}`;
    }
}
let person = new Person("John", "Does");
Person.getFullName(person.fName, person.lName);
Person.getFullName("Benny", "Tres");
