function operator(
    param1: string | number | string[],
    operation: "Index" | "Length" | "Add",
    operand: number
) {
    if (
        operation === "Index" &&
        (typeof param1 === "string" || Array.isArray(param1))
    ) {
        return param1[operand];
    } else if (
        operation === "Length" &&
        (typeof param1 === "string" || Array.isArray(param1))
    ) {
        return param1.length % operand;
    } else if (operation === "Add") {
        let num = Number(param1);
        return num + operand;
    }
}

console.log(operator(["First", "Second", "Third"], "Index", 1));
console.log(operator("string", "Index", 1));
console.log(operator(["Just", "Two"], "Length", 5));
console.log(operator("short string1", "Length", 5));
console.log(operator("7", "Add", 3));
