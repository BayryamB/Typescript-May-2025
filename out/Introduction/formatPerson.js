"use strict";
function formatPerson(a) {
    if (a.length !== 2)
        return "TS Error";
    let name = a[0];
    let age = a[1];
    if (!name || !age)
        return "TS Error";
    if (typeof name !== "string" || typeof age !== "number")
        return "TS Error";
    return `Hello, my name is ${name} and my age is ${age}`;
}
console.log(formatPerson(["John", 30]));
//# sourceMappingURL=formatPerson.js.map