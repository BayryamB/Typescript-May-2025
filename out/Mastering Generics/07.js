"use strict";
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
class PlannedHoliday {
    start = new Date();
    end = new Date();
    getInfo() {
        const startDay = this.start.getDate();
        const startMonth = this.start.getMonth() + 1;
        const startYear = this.start.getFullYear();
        const endDay = this.end.getDate();
        const endMonth = this.end.getMonth() + 1;
        const endYear = this.end.getFullYear();
        return `${startDay}/${startMonth}/${startYear} - ${endDay}/${endMonth}/${endYear}`;
    }
    constructor(start, end) {
        if (start > end)
            throw new Error("Start date must be before end date");
        this.start = start;
        this.end = end;
    }
}
// Write a generic class HolidayManager that implements VacationManager and has 2 generic types:
// · The first type has to be compatible with the Holiday interface
// · The second type has to be of type either TravelVacation, MountainVacation or BeachVacation
class HolidayManager {
    holidays = new Map();
    reserveVacation(holiday, vacationType) {
        this.holidays.set(holiday, vacationType);
    }
    listReservations() {
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
let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
let holidayManager = new HolidayManager();
holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
holidayManager.reserveVacation(holiday2, BeachVacation.Sea);
console.log(holidayManager.listReservations());
//# sourceMappingURL=07.js.map