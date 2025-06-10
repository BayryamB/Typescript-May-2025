enum TravelVacation {
    Abroad = "Abroad",
    InCountry = "InCountry",
}
enum MountainVacation {
    Ski = "Ski",
    Hiking = "Hiking",
}
enum BeachVacation {
    Pool = "Pool",
    Sea = "Sea",
    ScubaDiving = "ScubaDiving",
}

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}
interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    start: Date = new Date();
    end: Date = new Date();
    getInfo(): string {
        const startDay = this.start.getDate();
        const startMonth = this.start.getMonth() + 1;
        const startYear = this.start.getFullYear();
        const endDay = this.end.getDate();
        const endMonth = this.end.getMonth() + 1;
        const endYear = this.end.getFullYear();
        return `${startDay}/${startMonth}/${startYear} - ${endDay}/${endMonth}/${endYear}`;
    }
    constructor(start: Date, end: Date) {
        if (start > end) throw new Error("Start date must be before end date");
        this.start = start;
        this.end = end;
    }
}

// Write a generic class HolidayManager that implements VacationManager and has 2 generic types:
// · The first type has to be compatible with the Holiday interface
// · The second type has to be of type either TravelVacation, MountainVacation or BeachVacation

class HolidayManager<
    T extends Holiday,
    V extends TravelVacation | MountainVacation | BeachVacation
> implements VacationManager<T, V>
{
    private holidays = new Map<T, V>();
    reserveVacation(holiday: T, vacationType: V): void {
        this.holidays.set(holiday, vacationType);
    }
    listReservations(): string {
        let result = "";
        for (const [holiday, vacationType] of this.holidays.entries()) {
            result += `Holiday: ${holiday.getInfo()} - ${vacationType}\n`;
        }
        return result;
    }
}

// let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
// let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
// let holidayManager = new HolidayManager<Holiday, TravelVacation>();
// holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
// holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
// console.log(holidayManager.listReservations());
let holiday = new PlannedHoliday(
    new Date(2022, 10, 11),
    new Date(2022, 10, 18)
);

let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));

let holidayManager = new HolidayManager<Holiday, BeachVacation>();

holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);

holidayManager.reserveVacation(holiday2, BeachVacation.Sea);

console.log(holidayManager.listReservations());
