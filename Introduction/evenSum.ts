function evenSum(a: number, b: number, c: number): boolean {
    let sum = a + b + c;
    console.log(sum % 2 === 0);

    return sum % 2 === 0;
}

evenSum(1, 2, 3);
