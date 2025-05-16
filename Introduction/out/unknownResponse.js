"use strict";
function unknownResponse(obj) {
    if ("value" in obj && typeof obj.value === "string") {
        return obj.value;
    }
    return "-";
}
console.log(unknownResponse({ code: 200, text: "Ok", value: [1, 2, 3] }));
console.log(unknownResponse({ code: 301, text: "Moved Permanently", value: "New Url" }));
//# sourceMappingURL=unknownResponse.js.map