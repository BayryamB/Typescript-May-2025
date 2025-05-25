type HttpCode = {
    code: number;
    text: string;
    printChars?: number;
};

function httpCode(input: HttpCode) {
    if (input.printChars) {
        let text = input.text;
        let printChars = input.printChars;
        console.log(text.slice(0, printChars));
    } else {
        console.log(input.text);
    }
}

httpCode({ code: 200, text: "OK" });
httpCode({ code: 201, text: "Created" });
httpCode({ code: 400, text: "Bad Request", printChars: 4 });
httpCode({ code: 404, text: "Not Found" });
httpCode({ code: 404, text: "Not Found", printChars: 3 });
httpCode({ code: 500, text: "Internal Server Error", printChars: 1 });
