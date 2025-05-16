function unknownResponse(obj: unknown): string {
    if ("value" in (obj as any) && typeof (obj as any).value === "string") {
        return (obj as any).value;
    }

    return "-";
}

console.log(unknownResponse({ code: 200, text: "Ok", value: [1, 2, 3] }));
console.log(
    unknownResponse({ code: 301, text: "Moved Permanently", value: "New Url" })
);
