"use strict";
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
    DayOfWeek[DayOfWeek["Sunday"] = 7] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
function dayOfWeek(day) {
    if (day >= 1 && day <= 7) {
        console.log(DayOfWeek[day]);
    }
    else {
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
//# sourceMappingURL=dayOfWeek.js.map