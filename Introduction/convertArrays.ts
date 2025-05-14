function convertArray(arr: string[]) {
    let concatenated = arr.join("");
    let sum = concatenated.length;
    let output = [concatenated, sum];
    console.log(output);
}

convertArray(["a", "b", "c?"]);
