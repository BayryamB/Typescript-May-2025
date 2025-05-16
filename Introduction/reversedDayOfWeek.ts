enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function reversedDayOfWeek(day: string): void {
    console.log(Days[day as keyof typeof Days] || "error");
}

reversedDayOfWeek("Monday");
reversedDayOfWeek("Tuesday");
reversedDayOfWeek("Wednesday");
reversedDayOfWeek("Thursday");
reversedDayOfWeek("Friday");
reversedDayOfWeek("Saturday");
reversedDayOfWeek("Sunday");
reversedDayOfWeek("error");
