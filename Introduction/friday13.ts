function friday13th(arg: unknown[]): void {
    enum Months {
        January = 1,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December,
    }
    for (const date of arg) {
        if (date instanceof Date) {
            const monthDay = date.getDate();
            const weekDay = date.getDay();
            if (monthDay === 13 && weekDay === 5) {
                console.log(
                    `${monthDay}-${
                        Months[date.getMonth() + 1]
                    }-${date.getFullYear()}`
                );
            }
        }
    }
}

friday13th([
    new Date(2024, 0, 13),

    new Date(2024, 1, 13),

    new Date(2024, 2, 13),

    new Date(2024, 3, 13),

    new Date(2024, 4, 13),

    new Date(2024, 5, 13),

    new Date(2024, 6, 13),

    new Date(2024, 7, 13),

    new Date(2024, 8, 13),

    new Date(2024, 9, 13),

    new Date(2024, 10, 13),

    new Date(2024, 11, 13),
]);
