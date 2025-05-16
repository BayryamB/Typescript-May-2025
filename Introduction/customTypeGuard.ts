function isNotEmptyArray(arg: unknown): arg is string[] {
    return (
        Array.isArray(arg) &&
        arg.length > 0 &&
        arg.every((el) => typeof el === "string")
    );
}

let arr: unknown = ["a", "b", 1];

if (isNotEmptyArray(arr)) {
    console.log(true);
} else {
    console.log(false);
}
