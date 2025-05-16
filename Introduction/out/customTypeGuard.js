"use strict";
function isNotEmptyArray(arg) {
    return (Array.isArray(arg) &&
        arg.length > 0 &&
        arg.every((el) => typeof el === "string"));
}
let arr = ["a", "b", 1];
if (isNotEmptyArray(arr)) {
    console.log(true);
}
else {
    console.log(false);
}
//# sourceMappingURL=customTypeGuard.js.map