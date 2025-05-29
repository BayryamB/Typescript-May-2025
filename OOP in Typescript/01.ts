
class Person {

  public firstName: string;
  public lastName: string;
  public age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public introduce(): string {
    return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }
}

const person = new Person("Barry", "Bbn", 28);
console.log(person.introduce());