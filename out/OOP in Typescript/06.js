"use strict";
// Create a class Employee with:
// · public property name
// · protected property position
// · private property salary
// Implement methods:
// · getDetails – to return information about name and position (see format output)
// · showSalary – to return information about salary (see format in output)
class Employee {
    name;
    position;
    salary;
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getDetails() {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
    showSalary() {
        return `Salary: ${this.salary}`;
    }
}
const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name);
// console.log(emp.salary);
// console.log(emp.position);
//# sourceMappingURL=06.js.map