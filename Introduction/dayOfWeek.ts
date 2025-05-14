enum DayOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function dayOfWeek(day: number): void {
    if (day >= 1 && day <= 7) {
        console.log(DayOfWeek[day]);
    } else {
        console.log("error");
    }
}

dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(8);
